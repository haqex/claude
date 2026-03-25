# Full-Stack Website Architecture

Enterprise-grade reference architecture for production full-stack web applications. This blueprint is designed to be consumed by Claude — every document is structured for AI interpretation and direct application to projects.

## How to Use This Architecture

Feed this directory to Claude at project inception:

```
Read every file in architectures/fullstack-website/ and use it as the reference architecture for this project.
Apply these patterns, conventions, and standards to all code you write.
```

Claude will internalize the system design, data model, conventions, and workflows — then apply them consistently across the entire project lifecycle.

## Architecture Principles

| Principle | Meaning | How It Manifests |
|-----------|---------|------------------|
| **Server-first** | Default to server components and server actions; client components only when interaction requires it | RSC by default, `"use client"` is opt-in |
| **Edge-native** | Compute at the edge wherever possible — reduce latency, improve global performance | Vercel Edge Functions, Supabase Edge Functions, middleware at the edge |
| **Type-safe end-to-end** | TypeScript from database schema to UI props — no `any`, no untyped boundaries | Generated Supabase types, Zod validation, strict tsconfig |
| **Zero-trust data** | Every data access is authenticated and authorized at the database level, not just the API | Supabase RLS policies on every table, no service-role key in client code |
| **Observable by default** | Every user action, error, and performance metric is captured without manual instrumentation | PostHog autocapture + custom events, error boundaries, Web Vitals |
| **Convention over configuration** | Predictable file locations, naming patterns, and code organization reduce cognitive load | Enforced project structure, naming conventions, colocation rules |
| **Progressive complexity** | Start simple, scale when needed — don't over-engineer day one | Feature flags, modular architecture, clear extension points |

## Stack Summary

| Layer | Technology | Role |
|-------|-----------|------|
| Framework | Next.js 15 (App Router) | Server-first React with RSC, server actions, middleware |
| Hosting | Vercel | Edge deployment, preview environments, analytics |
| Database | Supabase (PostgreSQL) | Managed Postgres, Auth, Storage, Realtime, Edge Functions |
| UI | shadcn/ui + Tailwind CSS v4 | Accessible component library + utility-first styling |
| Analytics | PostHog | Product analytics, feature flags, session replay |
| Testing | Playwright | E2E testing, visual regression, parallel browser agents |
| CI/CD | GitHub Actions | Automated testing, deployment, GSD integration |
| Workflow | GSD (Claude Code skill) | Phase-driven development lifecycle |

## Document Index

| Document | What It Defines |
|----------|----------------|
| [tech-stack.md](tech-stack.md) | Every tool in the stack — what it does, why it was chosen, how it integrates |
| [system-design.md](system-design.md) | High-level architecture — component diagram, request flow, deployment topology |
| [data-flow.md](data-flow.md) | Data flow diagrams — Level 0 (context), Level 1 (system), Level 2 (process) |
| [data-model.md](data-model.md) | Entity-relationship diagram, schema definitions, RLS policies, migration strategy |
| [infrastructure.md](infrastructure.md) | Vercel project config, Supabase setup, GitHub repo settings, DNS, domains |
| [ci-cd.md](ci-cd.md) | GitHub Actions workflows, preview deploys, release pipeline, GSD hooks |
| [testing.md](testing.md) | Playwright strategy, test layers, fixture patterns, parallel agent testing |
| [observability.md](observability.md) | PostHog event taxonomy, dashboards, alerts, feature flags, session replay |
| [security.md](security.md) | Authentication flows, RLS policies, OWASP compliance, CSP, secrets management |
| [project-structure.md](project-structure.md) | File/folder conventions, naming patterns, colocation rules, import aliases |
| [workflows.md](workflows.md) | GSD phase structure, PR conventions, branch strategy, code review, deploy process |

## Constraints

- **No SSG for authenticated pages** — server-render all gated content
- **No client-side data fetching for initial loads** — use RSC + server actions
- **No raw SQL in application code** — use Supabase client or typed queries
- **No environment variables in client bundles** — only `NEXT_PUBLIC_` prefixed vars
- **No `any` in TypeScript** — enforce `strict: true` and `noUncheckedIndexedAccess`
- **No untested critical paths** — Playwright E2E coverage for auth, payments, core flows
