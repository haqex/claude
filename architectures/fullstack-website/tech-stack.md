# Tech Stack

Every technology in the stack, why it was chosen, and how it integrates with the rest of the system.

---

## Framework: Next.js 15 (App Router)

**What it does:** Server-first React framework with file-based routing, React Server Components, server actions, middleware, and streaming.

**Why this:**
- App Router enables RSC by default — most components never ship JS to the client
- Server actions replace API routes for mutations — type-safe, colocated, no REST boilerplate
- Middleware runs at the edge — auth checks, redirects, geolocation before the request hits the server
- Streaming and Suspense for progressive page loads
- First-class Vercel integration — zero-config deployment, ISR, edge functions

**Version:** `>=15.0.0` with `react@19`, `react-dom@19`

**Key config:**
```ts
// next.config.ts
const config: NextConfig = {
  experimental: {
    typedRoutes: true,          // type-safe Link hrefs
    serverActions: { bodySizeLimit: '2mb' },
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
    ],
  },
}
```

**Integration points:**
- Vercel: deployment target, preview environments, edge runtime
- Supabase: server-side client in RSC/server actions, client-side for realtime
- PostHog: `PostHogProvider` wrapper, server-side event capture in middleware
- Playwright: tests run against `next dev` or preview deploy URLs

---

## Hosting: Vercel

**What it does:** Edge-native deployment platform — builds from GitHub, deploys globally, manages preview environments, domains, and analytics.

**Why this:**
- Native Next.js support — zero-config builds, automatic RSC optimization
- Preview deployments on every PR — each branch gets a unique URL
- Edge Functions for middleware — auth, redirects, A/B tests at the edge
- Built-in Web Vitals monitoring via Vercel Analytics
- Automatic HTTPS, CDN, and image optimization

**Integration points:**
- GitHub: auto-deploys on push to `main`, preview deploys on PR branches
- Supabase: environment variables injected per-environment (preview vs production)
- PostHog: Vercel integration for automatic deployment tracking

**Environment strategy:**

| Environment | Branch | Supabase Project | Domain |
|-------------|--------|-----------------|--------|
| Production | `main` | `prod` | `app.example.com` |
| Preview | PR branches | `staging` | `*.vercel.app` |
| Local | `*` | `local` (Docker) | `localhost:3000` |

---

## Network & DNS: Cloudflare

**What it does:** DNS management, DDoS protection, WAF (Web Application Firewall), CDN edge caching, SSL/TLS termination, and Bot Management. Sits in front of Vercel and Supabase as the DNS and security layer.

**Why this:**
- Authoritative DNS with sub-10ms global resolution — fastest public DNS infrastructure
- DDoS mitigation at layers 3, 4, and 7 — absorbs volumetric attacks before they reach Vercel
- WAF with managed rulesets — OWASP Core, bot detection, rate limiting at the edge
- Proxy mode (orange cloud) — hides origin server IPs, adds security headers, caches static assets
- Page Rules and Transform Rules — URL rewrites, redirects, and cache behavior without touching application code
- Free tier covers DNS, basic DDoS, and SSL for most projects

**Key config:**
- Domain registered or transferred to Cloudflare (recommended) or nameservers pointed to Cloudflare
- Proxy mode (orange cloud) enabled for all `A`/`CNAME` records pointing to Vercel
- SSL mode: **Full (Strict)** — Cloudflare validates Vercel's origin certificate
- Minimum TLS: 1.2, Automatic HTTPS Rewrites enabled
- Bot Fight Mode: enabled for production domains

**DNS records:**

| Record | Type | Name | Target | Proxy |
|--------|------|------|--------|-------|
| Root | `CNAME` | `@` | `cname.vercel-dns.com` | Proxied |
| App | `CNAME` | `app` | `cname.vercel-dns.com` | Proxied |
| Staging | `CNAME` | `staging` | `cname.vercel-dns.com` | Proxied |
| API | `CNAME` | `api` | `<project-ref>.supabase.co` | DNS only |
| Auth | `CNAME` | `auth` | `<project-ref>.supabase.co` | DNS only |
| Mail | `MX` | `@` | email provider | DNS only |

**Cloudflare WAF rules:**
```
# Block known bad bots
Rule: Managed Challenge if cf.bot_management.score < 30

# Rate limit auth endpoints
Rule: Block if URI path contains "/auth/" AND rate > 20 req/10s per IP

# Block non-GET to marketing pages
Rule: Block if URI path starts with "/" AND http.request.method != "GET"
     AND NOT URI path starts with "/api" AND NOT URI path starts with "/auth"
```

**Integration points:**
- Vercel: Cloudflare proxies traffic to Vercel origin; Vercel sees Cloudflare IPs (use `CF-Connecting-IP` header for real client IP)
- Supabase: DNS-only (gray cloud) for API and Auth subdomains — Supabase handles its own SSL and DDoS
- Next.js: `CF-Connecting-IP` header available in middleware for geo-aware logic and rate limiting
- PostHog: Cloudflare Workers can proxy PostHog requests through your domain to avoid ad blockers

**Cloudflare vs Vercel CDN:**
Cloudflare handles DNS, security, and edge caching. Vercel handles application serving, ISR, and image optimization. They complement each other — Cloudflare is the shield, Vercel is the runtime.

---

## Database: Supabase

**What it does:** Managed PostgreSQL with built-in Auth, Storage (S3-compatible), Realtime subscriptions, Edge Functions, and auto-generated REST/GraphQL APIs.

**Why this:**
- Full Postgres — no ORM abstractions hiding capabilities. Use views, functions, triggers, CTEs
- Row Level Security (RLS) — authorization at the database level, not the API
- Built-in Auth — email/password, OAuth, magic links, MFA — no third-party auth service
- Realtime — Postgres changes broadcast via WebSocket
- Storage — file uploads with RLS policies, CDN-backed
- Edge Functions — Deno runtime for serverless logic close to the database
- Generated TypeScript types from the schema via `supabase gen types`

**Client setup:**

```ts
// lib/supabase/server.ts — Server component / server action client
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  )
}

// lib/supabase/client.ts — Client component client (realtime, auth UI)
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

**Integration points:**
- Next.js: server client in RSC/server actions, browser client for realtime
- Vercel: env vars per environment, connection pooling via Supavisor
- PostHog: user identification synced with Supabase Auth user ID
- Playwright: test fixtures reset database state between runs

---

## UI: shadcn/ui + Tailwind CSS v4

**What it does:** shadcn/ui provides accessible, unstyled-by-default React components built on Radix UI primitives. Tailwind CSS v4 provides utility-first styling with CSS-native configuration.

**Why this:**
- Components are copied into the project — full ownership, no version lock-in
- Built on Radix UI — keyboard navigation, screen readers, focus management out of the box
- Tailwind v4 — CSS-native config (`@theme`), no `tailwind.config.js`, faster builds
- Design tokens via CSS variables — theme switching, dark mode, brand customization
- No component library vendor lock-in — modify anything, delete what you don't use

**Setup:**
```bash
npx shadcn@latest init
npx shadcn@latest add button card dialog form input
```

**Tailwind v4 config (CSS-native):**
```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-brand-50: oklch(0.97 0.01 250);
  --color-brand-500: oklch(0.55 0.15 250);
  --color-brand-900: oklch(0.25 0.08 250);
  --radius-default: 0.5rem;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```

**Integration points:**
- Next.js: components are `.tsx` files in `components/ui/`, imported normally
- Playwright: accessible components have proper ARIA attributes — reliable test selectors
- PostHog: track component interactions via data attributes

---

## Analytics: PostHog

**What it does:** Open-source product analytics — event tracking, funnels, session replay, feature flags, A/B testing, surveys.

**Why this:**
- Self-hostable (or cloud) — data ownership, GDPR compliance
- Autocapture — clicks, pageviews, inputs captured without manual instrumentation
- Feature flags — server-side and client-side evaluation, gradual rollouts
- Session replay — watch user sessions to debug UX issues
- Funnels and retention — product metrics without a data team
- A/B testing — experiment framework built into the analytics platform

**Setup:**
```ts
// app/providers.tsx
'use client'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
      person_profiles: 'identified_only',
      capture_pageview: false, // manually capture in usePathname
      capture_pageleave: true,
    })
  }, [])
  return <PHProvider client={posthog}>{children}</PHProvider>
}
```

**Integration points:**
- Supabase: identify users with Supabase Auth user ID on login
- Vercel: deployment tracking via Vercel integration
- Next.js: server-side feature flag evaluation in middleware/RSC
- Playwright: disable autocapture in test environments

---

## Testing: Playwright

**What it does:** Browser automation framework for E2E testing, visual regression, accessibility audits, and API testing.

**Why this:**
- Multi-browser — Chromium, Firefox, WebKit in a single test suite
- Parallel execution — tests run across workers, sharded in CI
- Auto-wait — no manual `sleep()` or `waitFor()` — Playwright waits for elements automatically
- Trace viewer — step-by-step recording of test execution with screenshots, DOM snapshots, network logs
- Claude Code integration — Playwright CLI skill enables natural-language test authoring via parallel sub-agents

**Key config:**
```ts
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [['html'], ['github']],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 7'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 14'] } },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
```

**Integration points:**
- GitHub Actions: runs in CI on every PR, sharded across 4 workers
- Vercel: tests can run against preview deploy URLs
- Supabase: test fixtures reset database state via migration scripts
- Claude Code: Playwright CLI skill for natural-language test authoring

---

## CI/CD: GitHub Actions

**What it does:** Automated workflows triggered by GitHub events — PR checks, deployment pipelines, scheduled tasks, release automation.

**Why this:**
- Native GitHub integration — PR status checks, deployment environments, release assets
- Matrix builds — test across Node versions, OS, browser engines in parallel
- Reusable workflows — shared CI configs across repos
- Secrets management — environment-scoped secrets, OIDC for cloud providers
- Free for public repos, generous limits for private

**Integration points:**
- Vercel: triggered via Vercel GitHub integration (not Actions) for deploys
- Playwright: runs E2E suite on every PR, uploads trace artifacts on failure
- Supabase: runs migrations on deploy, seeds staging from production snapshots
- PostHog: deployment events captured for release tracking
- GSD: phase validation hooks in PR workflow

---

## Workflow: GSD (Claude Code Skill)

**What it does:** Phase-driven development lifecycle managed by Claude Code — project planning, requirement gathering, phase execution, and verification in a structured, repeatable process.

**Why this:**
- Structured phases prevent scope creep — each phase has clear requirements and exit criteria
- Claude Code executes phases with full codebase context — not just generating snippets
- Built-in verification — UAT criteria checked before phase completion
- Parallel execution — independent phases run simultaneously
- Context preservation — handoff documents enable resuming work across sessions

**Integration points:**
- GitHub: PR per phase, branch naming convention `phase/<N>-<slug>`
- Playwright: GSD `add-tests` skill generates E2E tests per phase
- CI/CD: GSD `execute-phase` triggers builds and tests automatically
- PostHog: feature flags tied to GSD phases for gradual rollout

**Phase lifecycle:**
```
discuss → plan → execute → verify → complete
```

Each phase produces:
- `PLAN.md` — requirements, approach, file changes
- Implementation commits — atomic, well-messaged
- Test coverage — unit + E2E for critical paths
- Verification — UAT against original requirements
