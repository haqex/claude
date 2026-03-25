# Infrastructure

Configuration and setup for Vercel, Cloudflare, Supabase, and GitHub — the four pillars of the infrastructure layer.

---

## Vercel

### Project Configuration

```json
// vercel.json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-DNS-Prefetch-Control", "value": "on" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ],
  "redirects": [
    { "source": "/home", "destination": "/", "permanent": true }
  ]
}
```

### Environment Variables

| Variable | Production | Preview | Local |
|----------|-----------|---------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://<prod>.supabase.co` | `https://<staging>.supabase.co` | `http://localhost:54321` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | prod anon key | staging anon key | local anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | prod service key | staging service key | local service key |
| `NEXT_PUBLIC_POSTHOG_KEY` | prod key | prod key | dev key |
| `NEXT_PUBLIC_POSTHOG_HOST` | `https://us.i.posthog.com` | `https://us.i.posthog.com` | `https://us.i.posthog.com` |
| `NEXT_PUBLIC_APP_URL` | `https://app.example.com` | `https://*.vercel.app` | `http://localhost:3000` |

**Rules:**
- `NEXT_PUBLIC_` prefixed vars are exposed to the client — never put secrets here
- `SUPABASE_SERVICE_ROLE_KEY` is server-only — bypasses RLS, used only in server actions/API routes for admin operations
- Set environment-specific values in Vercel dashboard, not in `.env` files committed to git

### Domain Configuration

```
app.example.com      → Vercel Production (main branch)
staging.example.com  → Vercel Preview (staging branch)
*.vercel.app         → Vercel Preview (PR branches)
```

- HTTPS is automatic via Vercel
- DNS: CNAME to `cname.vercel-dns.com`
- Wildcard certificate for preview deployments

### Build Configuration

| Setting | Value |
|---------|-------|
| Framework preset | Next.js |
| Build command | `next build` |
| Output directory | `.next` |
| Install command | `npm ci` |
| Node.js version | 20.x |
| Root directory | `./` |

---

## Supabase

### Project Structure

| Environment | Project | Purpose |
|-------------|---------|---------|
| Local | Docker (`supabase start`) | Development, runs on `localhost:54321` |
| Staging | `<project>-staging` | Preview environments, shared test data |
| Production | `<project>-prod` | Live users, strict access controls |

### Local Development Setup

```bash
# Install Supabase CLI
brew install supabase/tap/supabase

# Initialize in project root
supabase init

# Start local instance (Postgres, Auth, Storage, Realtime, Studio)
supabase start

# Apply migrations
supabase db reset

# Generate TypeScript types
supabase gen types typescript --local > lib/supabase/database.types.ts
```

**Local ports:**

| Service | Port | URL |
|---------|------|-----|
| API | 54321 | `http://localhost:54321` |
| Studio | 54323 | `http://localhost:54323` |
| Inbucket (email) | 54324 | `http://localhost:54324` |
| Database | 54322 | `postgresql://postgres:postgres@localhost:54322/postgres` |

### Auth Configuration

```sql
-- supabase/config.toml (relevant sections)
[auth]
enabled = true
site_url = "http://localhost:3000"
additional_redirect_urls = [
  "https://app.example.com",
  "https://*.vercel.app"
]

[auth.email]
enable_signup = true
double_confirm_changes = true
enable_confirmations = true

[auth.external.google]
enabled = true
client_id = "env(GOOGLE_CLIENT_ID)"
secret = "env(GOOGLE_CLIENT_SECRET)"
redirect_uri = "env(SUPABASE_AUTH_EXTERNAL_GOOGLE_REDIRECT_URI)"

[auth.external.github]
enabled = true
client_id = "env(GITHUB_CLIENT_ID)"
secret = "env(GITHUB_CLIENT_SECRET)"
redirect_uri = "env(SUPABASE_AUTH_EXTERNAL_GITHUB_REDIRECT_URI)"
```

### Storage Buckets

| Bucket | Public | Max Size | Allowed Types | RLS |
|--------|--------|----------|--------------|-----|
| `avatars` | Yes | 2MB | `image/png, image/jpeg, image/webp` | Authenticated upload, public read |
| `media` | No | 50MB | `image/*, video/*, application/pdf` | Team member read/write |
| `exports` | No | 100MB | `*` | Owner-only read, system write |

```sql
-- Storage bucket policies
insert into storage.buckets (id, name, public) values ('avatars', 'avatars', true);
insert into storage.buckets (id, name, public) values ('media', 'media', false);
insert into storage.buckets (id, name, public) values ('exports', 'exports', false);

-- Avatar upload policy: authenticated users can upload to their own folder
create policy "avatar_upload" on storage.objects for insert
  with check (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);

-- Avatar read policy: anyone can read avatars
create policy "avatar_read" on storage.objects for select
  using (bucket_id = 'avatars');
```

### Connection Pooling

Use **Supavisor** (Supabase's built-in connection pooler):
- Transaction mode for serverless functions (short-lived connections)
- Session mode for long-lived connections (realtime, migrations)
- Port 6543 for pooled connections, 5432 for direct

```ts
// For server actions / API routes (transaction mode)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// For migrations / admin scripts (session mode)
const directUrl = process.env.SUPABASE_DB_URL
```

---

## GitHub

### Repository Settings

| Setting | Value |
|---------|-------|
| Default branch | `main` |
| Branch protection | Enabled on `main` |
| Required reviews | 1 (for team projects) |
| Required status checks | `lint`, `typecheck`, `test:unit`, `test:e2e` |
| Auto-merge | Enabled |
| Delete head branches | Enabled |
| Squash merging | Default |

### Branch Protection Rules (main)

```yaml
# Required status checks
required_status_checks:
  strict: true
  contexts:
    - "lint"
    - "typecheck"
    - "test:unit"
    - "test:e2e / chromium"

# Pull request rules
required_pull_request_reviews:
  required_approving_review_count: 1
  dismiss_stale_reviews: true
  require_code_owner_reviews: false

# Additional
allow_force_pushes: false
allow_deletions: false
require_linear_history: true  # squash merge enforced
```

### Labels

| Label | Color | Purpose |
|-------|-------|---------|
| `phase:N` | `#7950f2` | GSD phase number |
| `type:feature` | `#40c057` | New feature |
| `type:fix` | `#e03131` | Bug fix |
| `type:chore` | `#868e96` | Maintenance |
| `priority:high` | `#e03131` | Urgent |
| `priority:medium` | `#fab005` | Normal |
| `priority:low` | `#228be6` | Nice to have |

### Secrets

| Secret | Scope | Used by |
|--------|-------|---------|
| `VERCEL_TOKEN` | Actions | Deployment status checks |
| `SUPABASE_ACCESS_TOKEN` | Actions | Migration deployment |
| `SUPABASE_PROJECT_ID` | Actions | Staging project reference |
| `SUPABASE_DB_PASSWORD` | Actions | Direct database connection |
| `POSTHOG_API_KEY` | Actions | Deployment event tracking |

---

## Cloudflare

Cloudflare is the DNS and security layer sitting in front of all public-facing infrastructure.

### DNS Zone Configuration

All DNS is managed in Cloudflare. Vercel-facing records are proxied (orange cloud) for DDoS and WAF protection. Supabase-facing records are DNS-only (gray cloud) since Supabase manages its own edge.

```
example.com         CNAME  cname.vercel-dns.com       (Proxied)
app.example.com     CNAME  cname.vercel-dns.com       (Proxied)
staging.example.com CNAME  cname.vercel-dns.com       (Proxied)
api.example.com     CNAME  <ref>.supabase.co           (DNS only)
auth.example.com    CNAME  <ref>.supabase.co           (DNS only)
```

### SSL/TLS

- SSL mode: **Full (Strict)** — Cloudflare validates Vercel's origin certificate
- Minimum TLS version: 1.2
- Automatic HTTPS Rewrites: enabled
- Always Use HTTPS: enabled
- HSTS: enabled via Vercel response headers (not Cloudflare, to avoid double-setting)

### Security Rules

- **Bot Fight Mode:** enabled on production domains
- **WAF Managed Rules:** OWASP Core Ruleset enabled
- **Rate Limiting:** 20 req/10s on `/auth/*` paths per IP
- **Under Attack Mode:** available for emergency DDoS events (manual toggle)

### Vercel + Cloudflare Interop

When Cloudflare proxies to Vercel:
- Real client IP is in `CF-Connecting-IP` header (not `X-Forwarded-For`)
- Vercel must be configured to trust Cloudflare's proxy IPs
- Set `VERCEL_FORCE_NO_BUILD_CACHE` if stale deploys appear after DNS changes

### Page Rules

| URL Pattern | Action |
|-------------|--------|
| `example.com/blog/*` | Cache Level: Standard, Edge TTL: 4hr |
| `app.example.com/api/*` | Cache Level: Bypass |
| `*example.com/.well-known/*` | Cache Level: Bypass, SSL: Full |
