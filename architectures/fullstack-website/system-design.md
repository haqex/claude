# System Design

High-level architecture for the full-stack website. All diagrams are Mermaid — renderable in GitHub, Obsidian, and any markdown viewer.

---

## Component Architecture

```mermaid
graph TB
    subgraph Client["Client (Browser)"]
        RSC["React Server Components\n(streamed HTML)"]
        CC["Client Components\n(interactive islands)"]
        SW["Service Worker\n(offline, caching)"]
    end

    subgraph Edge["Vercel Edge Network"]
        MW["Next.js Middleware\n(auth, redirects, geo)"]
        CDN["CDN / Static Assets\n(images, fonts, CSS)"]
        EF["Edge Functions\n(API routes, ISR)"]
    end

    subgraph Server["Vercel Serverless"]
        SA["Server Actions\n(mutations)"]
        RSR["RSC Renderer\n(server components)"]
        API["API Routes\n(webhooks, cron)"]
    end

    subgraph Supabase["Supabase Platform"]
        PG["PostgreSQL\n(+ RLS policies)"]
        AUTH["Auth Service\n(JWT, OAuth, MFA)"]
        STOR["Storage\n(S3-compatible)"]
        RT["Realtime\n(WebSocket)"]
        EDGE["Edge Functions\n(Deno runtime)"]
    end

    subgraph External["External Services"]
        PH["PostHog\n(analytics, flags)"]
        GH["GitHub\n(VCS, CI/CD)"]
        EMAIL["Email Service\n(transactional)"]
    end

    Client --> Edge
    MW -->|"check auth cookie"| AUTH
    MW -->|"evaluate feature flag"| PH
    Edge --> Server
    SA -->|"query/mutate"| PG
    SA -->|"upload"| STOR
    RSR -->|"read"| PG
    API -->|"webhook"| EDGE
    CC -->|"subscribe"| RT
    CC -->|"track event"| PH
    RSR -->|"identify user"| PH
    GH -->|"deploy trigger"| Edge
    EDGE -->|"send email"| EMAIL

    style Client fill:#1a1a2e,stroke:#228be6,color:#e0e0e0
    style Edge fill:#1a2a1a,stroke:#40c057,color:#e0e0e0
    style Server fill:#2a1a2a,stroke:#7950f2,color:#e0e0e0
    style Supabase fill:#1a2a2a,stroke:#15aabf,color:#e0e0e0
    style External fill:#2a2a1a,stroke:#fab005,color:#e0e0e0
```

---

## Request Flow — Page Load (Authenticated)

```mermaid
sequenceDiagram
    participant B as Browser
    participant E as Vercel Edge
    participant MW as Middleware
    participant S as Serverless (RSC)
    participant DB as Supabase PG
    participant A as Supabase Auth
    participant PH as PostHog

    B->>E: GET /dashboard
    E->>MW: Route request through middleware
    MW->>A: Validate session cookie (JWT)
    A-->>MW: Valid session + user claims
    MW->>PH: Evaluate feature flags (server-side)
    PH-->>MW: Flags: { newDashboard: true }
    MW->>S: Forward request + user context + flags

    S->>DB: SELECT with RLS (user_id from JWT)
    DB-->>S: Filtered rows (only user's data)
    S-->>E: Streamed RSC payload (HTML + RSC wire format)
    E-->>B: Response with streaming

    Note over B: Hydration begins
    B->>PH: $pageview event (client-side)
    B->>DB: Realtime subscription (WebSocket)
```

---

## Request Flow — Mutation (Server Action)

```mermaid
sequenceDiagram
    participant B as Browser
    participant SA as Server Action
    participant Z as Zod Validation
    participant DB as Supabase PG
    participant RT as Supabase Realtime
    participant PH as PostHog

    B->>SA: Form submission (POST)
    SA->>Z: Validate input
    Z-->>SA: Validated data (or throw)
    SA->>DB: INSERT/UPDATE with RLS
    DB-->>SA: Result
    DB->>RT: Broadcast change
    SA->>PH: Capture event (server-side)
    SA-->>B: revalidatePath() + redirect/return

    Note over B: UI updates via RSC re-render
    RT-->>B: Real-time update (other tabs/users)
```

---

## Deployment Topology

```mermaid
graph LR
    subgraph Dev["Developer Machine"]
        LC["localhost:3000\nNext.js dev server"]
        LD["localhost:54321\nSupabase local (Docker)"]
        LC -->|"queries"| LD
    end

    subgraph GH["GitHub"]
        REPO["Repository"]
        PR["Pull Request"]
        CI["GitHub Actions\n(lint, test, type-check)"]
        PR --> CI
    end

    subgraph Preview["Preview Environment"]
        PV["*.vercel.app\nPreview deploy"]
        PS["Supabase Staging\n(shared staging project)"]
        PV -->|"queries"| PS
    end

    subgraph Prod["Production"]
        VE["app.example.com\nVercel Production"]
        PP["Supabase Production\n(dedicated project)"]
        VE -->|"queries"| PP
    end

    Dev -->|"git push"| REPO
    REPO -->|"PR opened"| PR
    CI -->|"checks pass"| PV
    REPO -->|"merge to main"| VE
    PV -.->|"promote"| VE

    style Dev fill:#1a1a2e,stroke:#228be6,color:#e0e0e0
    style GH fill:#1a2a1a,stroke:#40c057,color:#e0e0e0
    style Preview fill:#2a2a1a,stroke:#fab005,color:#e0e0e0
    style Prod fill:#2a1a1a,stroke:#e03131,color:#e0e0e0
```

---

## Authentication Architecture

```mermaid
graph TB
    subgraph Methods["Auth Methods"]
        EP["Email + Password"]
        ML["Magic Link"]
        OA["OAuth (Google, GitHub)"]
        MF["MFA (TOTP)"]
    end

    subgraph Flow["Auth Flow"]
        SU["Sign Up"]
        SI["Sign In"]
        SO["Sign Out"]
        RF["Refresh Token"]
        PW["Password Reset"]
    end

    subgraph Storage["Token Storage"]
        HC["HttpOnly Cookie\n(access_token)"]
        RT["Refresh Token\n(HttpOnly Cookie)"]
    end

    subgraph Verification["Every Request"]
        MW["Middleware\n(Edge)"]
        RLS["Supabase RLS\n(Database)"]
    end

    Methods --> Flow
    Flow --> Storage
    Storage --> Verification
    MW -->|"decode JWT"| RLS
    MW -->|"set auth context"| RLS

    style Methods fill:#1a2a2a,stroke:#15aabf,color:#e0e0e0
    style Flow fill:#2a1a2a,stroke:#7950f2,color:#e0e0e0
    style Storage fill:#1a1a2e,stroke:#228be6,color:#e0e0e0
    style Verification fill:#2a1a1a,stroke:#e03131,color:#e0e0e0
```

---

## Caching Strategy

| Layer | Mechanism | TTL | Invalidation |
|-------|-----------|-----|-------------|
| Browser | `Cache-Control` headers | Static: 1yr, Dynamic: 0 | Deploy (new hash) |
| CDN (Vercel) | Edge cache | ISR: configurable | `revalidatePath()` / `revalidateTag()` |
| Next.js | Data Cache (fetch) | Per-fetch `revalidate` | Time-based or on-demand |
| Next.js | Full Route Cache | Build time (static) | Redeploy or `revalidatePath()` |
| Supabase | Connection pooling (Supavisor) | Session-level | Automatic |

**Caching rules:**
- Static pages (marketing, docs): ISR with 1hr revalidation
- Authenticated pages: no cache, server-render every request
- API data: `revalidateTag()` on mutation, never stale
- Images: Vercel Image Optimization, 1yr cache with content hash
- Fonts: self-hosted, immutable cache

---

## Error Handling Strategy

| Layer | Mechanism | Behavior |
|-------|-----------|----------|
| Client | React Error Boundary | Catch render errors, show fallback UI, report to PostHog |
| Server Action | Zod validation + try/catch | Return typed error objects, never throw unhandled |
| Middleware | try/catch | Log error, return 500 response, report to PostHog |
| Database | RLS policy denial | Supabase returns empty result (not 403) — handle in server action |
| API Route | try/catch + status codes | Structured JSON error responses |
| Global | `global-error.tsx` | Catch-all for unhandled errors in the app |

**Error boundary hierarchy:**
```
app/global-error.tsx          ← catches everything
  app/layout.tsx
    app/(auth)/error.tsx      ← catches auth section errors
      app/(auth)/dashboard/error.tsx  ← catches dashboard errors
```
