# Project Structure

File/folder conventions, naming patterns, colocation rules, and import aliases.

---

## Directory Tree

```
.
├── app/                              # Next.js App Router
│   ├── (marketing)/                  # Public marketing pages (no auth required)
│   │   ├── page.tsx                  # Homepage
│   │   ├── pricing/page.tsx
│   │   └── layout.tsx                # Marketing layout (nav + footer)
│   ├── (auth)/                       # Authenticated application
│   │   ├── dashboard/
│   │   │   ├── page.tsx              # Dashboard home
│   │   │   └── loading.tsx           # Suspense fallback
│   │   ├── [teamSlug]/
│   │   │   ├── page.tsx              # Team overview
│   │   │   ├── settings/page.tsx     # Team settings
│   │   │   └── [projectSlug]/
│   │   │       ├── page.tsx          # Project overview
│   │   │       ├── pages/
│   │   │       │   ├── page.tsx      # Page list
│   │   │       │   ├── new/page.tsx  # Create page
│   │   │       │   └── [pageSlug]/
│   │   │       │       ├── page.tsx  # Page editor
│   │   │       │       └── edit/page.tsx
│   │   │       └── settings/page.tsx
│   │   ├── layout.tsx                # App layout (sidebar + topbar)
│   │   └── error.tsx                 # Error boundary for auth section
│   ├── auth/                         # Auth pages (login, signup, callback)
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   ├── callback/route.ts         # OAuth callback handler
│   │   ├── error/page.tsx
│   │   └── reset-password/page.tsx
│   ├── api/                          # API routes (webhooks, cron)
│   │   ├── webhooks/
│   │   │   └── stripe/route.ts
│   │   └── cron/
│   │       └── cleanup/route.ts
│   ├── layout.tsx                    # Root layout (providers, fonts, metadata)
│   ├── global-error.tsx              # Global error boundary
│   ├── not-found.tsx                 # 404 page
│   ├── globals.css                   # Tailwind v4 theme + base styles
│   └── providers.tsx                 # Client providers (PostHog, theme)
│
├── components/                       # Shared React components
│   ├── ui/                           # shadcn/ui primitives (copied in, owned)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── layout/                       # Layout components (nav, sidebar, footer)
│   │   ├── sidebar.tsx
│   │   ├── topbar.tsx
│   │   └── footer.tsx
│   ├── forms/                        # Reusable form components
│   │   ├── auth-form.tsx
│   │   └── page-form.tsx
│   └── shared/                       # Cross-cutting components
│       ├── avatar.tsx
│       ├── loading-spinner.tsx
│       └── error-fallback.tsx
│
├── lib/                              # Shared utilities and business logic
│   ├── supabase/
│   │   ├── server.ts                 # Server-side Supabase client
│   │   ├── client.ts                 # Client-side Supabase client
│   │   ├── middleware.ts             # Middleware Supabase client
│   │   └── database.types.ts         # Generated types (supabase gen types)
│   ├── posthog/
│   │   ├── server.ts                 # Server-side PostHog client
│   │   └── client.ts                 # Client-side helpers
│   ├── auth/
│   │   ├── authorize.ts              # requireAuth, requireTeamRole
│   │   └── audit.ts                  # Audit logging
│   ├── utils/
│   │   ├── cn.ts                     # clsx + tailwind-merge
│   │   ├── slugify.ts
│   │   ├── format-date.ts
│   │   └── ...
│   └── validators/
│       ├── auth.ts                   # Zod schemas for auth forms
│       ├── team.ts                   # Zod schemas for team operations
│       ├── project.ts                # Zod schemas for project operations
│       └── page.ts                   # Zod schemas for page operations
│
├── actions/                          # Server actions (Next.js "use server")
│   ├── auth.ts                       # signIn, signUp, signOut, resetPassword
│   ├── teams.ts                      # createTeam, updateTeam, deleteTeam
│   ├── projects.ts                   # createProject, updateProject
│   ├── pages.ts                      # createPage, updatePage, publishPage
│   ├── media.ts                      # uploadFile, deleteFile
│   └── invitations.ts                # inviteMember, acceptInvitation
│
├── hooks/                            # Custom React hooks (client-side)
│   ├── use-realtime.ts               # Supabase realtime subscription
│   ├── use-feature-flag.ts           # PostHog feature flag wrapper
│   └── use-media-query.ts            # Responsive breakpoint detection
│
├── types/                            # Shared TypeScript types
│   ├── index.ts                      # Re-exports
│   └── api.ts                        # API response types, server action returns
│
├── tests/
│   ├── e2e/                          # Playwright E2E tests
│   │   ├── fixtures.ts               # Test fixtures (auth, data setup)
│   │   ├── auth.spec.ts
│   │   ├── dashboard.spec.ts
│   │   └── pages.spec.ts
│   ├── integration/                  # Vitest integration tests
│   │   ├── actions/
│   │   │   ├── auth.test.ts
│   │   │   └── pages.test.ts
│   │   └── lib/
│   │       └── authorize.test.ts
│   └── setup.ts                      # Vitest global setup
│
├── supabase/                         # Supabase project config
│   ├── config.toml                   # Local Supabase config
│   ├── migrations/                   # SQL migrations (ordered)
│   │   ├── 20260101000000_create_profiles.sql
│   │   └── ...
│   ├── seed.sql                      # Test data for local dev
│   └── functions/                    # Supabase Edge Functions (Deno)
│       └── send-email/
│           └── index.ts
│
├── public/                           # Static assets (served as-is)
│   ├── fonts/                        # Self-hosted fonts
│   ├── images/                       # Static images (logos, og-images)
│   └── favicon.ico
│
├── .github/
│   └── workflows/
│       ├── ci.yml                    # PR checks (lint, type, test)
│       ├── migrate.yml               # Post-deploy migration
│       └── audit.yml                 # Weekly security audit
│
├── .planning/                        # GSD working directory
│   ├── PROJECT.md                    # Project definition
│   ├── ROADMAP.md                    # Phase roadmap
│   └── phases/                       # Per-phase plans and artifacts
│
├── next.config.ts
├── tailwind.config.ts                # Minimal — most config in globals.css
├── tsconfig.json
├── playwright.config.ts
├── vitest.config.ts
├── package.json
├── .env.example                      # Template for .env.local
├── .env.local                        # Local secrets (gitignored)
├── .gitignore
├── .eslintrc.json
├── .prettierrc
└── CLAUDE.md                         # Claude Code project instructions
```

---

## Naming Conventions

| What | Convention | Example |
|------|-----------|---------|
| Files (components) | kebab-case | `auth-form.tsx` |
| Files (utils) | kebab-case | `format-date.ts` |
| Files (pages) | `page.tsx` (Next.js convention) | `app/dashboard/page.tsx` |
| Directories | kebab-case | `reset-password/` |
| React components | PascalCase | `AuthForm` |
| Functions / variables | camelCase | `formatDate()` |
| Constants | SCREAMING_SNAKE | `MAX_FILE_SIZE` |
| Types / interfaces | PascalCase | `TeamMember` |
| Zod schemas | camelCase + `Schema` suffix | `createTeamSchema` |
| Server actions | camelCase verb | `createTeam()` |
| Database tables | snake_case plural | `team_members` |
| Database columns | snake_case | `created_at` |
| CSS variables | kebab-case with prefix | `--color-brand-500` |
| Environment variables | SCREAMING_SNAKE | `NEXT_PUBLIC_SUPABASE_URL` |
| Feature flags | kebab-case | `dashboard-v2` |
| Git branches | `phase/<N>-<slug>` | `phase/3-auth-flow` |

---

## Colocation Rules

| Artifact | Location | Rule |
|----------|----------|------|
| Page component | `app/<route>/page.tsx` | Always colocated with route |
| Loading state | `app/<route>/loading.tsx` | Colocated with page |
| Error boundary | `app/<route>/error.tsx` | Colocated with route segment |
| Page-specific components | `app/<route>/_components/` | Prefixed with `_` (not routable) |
| Shared components | `components/` | Used by 2+ routes |
| Server actions | `actions/` | One file per domain entity |
| Validators | `lib/validators/` | One file per domain entity |
| Unit tests | Next to source file | `slugify.test.ts` beside `slugify.ts` |
| E2E tests | `tests/e2e/` | Separate from source |
| Migrations | `supabase/migrations/` | Ordered by timestamp |

**Private folders:** Prefix with `_` to exclude from routing:
```
app/(auth)/dashboard/_components/stats-card.tsx  ← not a route
app/(auth)/dashboard/_hooks/use-stats.ts         ← not a route
```

---

## Import Aliases

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Import order convention:**
```ts
// 1. React/Next.js imports
import { Suspense } from 'react'
import { notFound } from 'next/navigation'

// 2. Third-party imports
import { z } from 'zod'

// 3. Internal imports (by alias)
import { createClient } from '@/lib/supabase/server'
import { requireAuth } from '@/lib/auth/authorize'
import { Button } from '@/components/ui/button'

// 4. Relative imports (same feature)
import { StatsCard } from './_components/stats-card'

// 5. Types
import type { Database } from '@/lib/supabase/database.types'
```

---

## Key Files

| File | Purpose | When to modify |
|------|---------|---------------|
| `app/layout.tsx` | Root layout — html, body, providers, fonts, metadata | Changing global providers, fonts, or metadata |
| `app/providers.tsx` | Client-side providers (PostHog, theme) | Adding a new client-side provider |
| `app/globals.css` | Tailwind theme, CSS variables, base styles | Changing design tokens or global styles |
| `middleware.ts` | Auth guard, redirects, feature flags | Changing route protection or adding middleware logic |
| `lib/supabase/server.ts` | Server-side Supabase client factory | Changing cookie handling or auth config |
| `lib/supabase/database.types.ts` | Generated types | Never manually — regenerate with `supabase gen types` |
| `CLAUDE.md` | Claude Code project instructions | Changing how Claude interacts with the project |
