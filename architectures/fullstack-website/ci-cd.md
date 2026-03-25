# CI/CD

GitHub Actions workflows, preview deployments, release pipeline, and GSD integration.

---

## Pipeline Overview

```mermaid
graph TB
    subgraph Trigger["Trigger"]
        PR["Pull Request"]
        PUSH["Push to main"]
        SCHED["Scheduled"]
    end

    subgraph CI["CI (GitHub Actions)"]
        LINT["Lint\n(ESLint + Prettier)"]
        TYPE["Typecheck\n(tsc --noEmit)"]
        UNIT["Unit Tests\n(Vitest)"]
        E2E["E2E Tests\n(Playwright)"]
        AUDIT["Security Audit\n(npm audit)"]
    end

    subgraph CD["CD (Vercel)"]
        PREVIEW["Preview Deploy\n(PR branches)"]
        PROD["Production Deploy\n(main branch)"]
    end

    subgraph Post["Post-Deploy"]
        MIGRATE["Run Migrations\n(Supabase)"]
        SMOKE["Smoke Tests\n(Playwright)"]
        NOTIFY["Notify\n(PostHog event)"]
    end

    PR --> LINT & TYPE & UNIT & E2E
    PR --> PREVIEW
    PUSH --> PROD
    PROD --> MIGRATE --> SMOKE --> NOTIFY
    SCHED --> AUDIT

    style CI fill:#1a2a1a,stroke:#40c057,color:#e0e0e0
    style CD fill:#1a1a2e,stroke:#228be6,color:#e0e0e0
    style Post fill:#2a1a2a,stroke:#7950f2,color:#e0e0e0
```

---

## Workflow: PR Checks

Runs on every pull request. All checks must pass before merge.

```yaml
# .github/workflows/ci.yml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

env:
  NODE_VERSION: "20"
  NEXT_PUBLIC_SUPABASE_URL: "http://localhost:54321"
  NEXT_PUBLIC_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"

jobs:
  lint:
    name: Lint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: "npm"
      - run: npm ci
      - run: npm run lint

  typecheck:
    name: Typecheck
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: "npm"
      - run: npm ci
      - run: npx tsc --noEmit

  test-unit:
    name: Unit Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: "npm"
      - run: npm ci
      - run: npm run test:unit -- --reporter=github-actions

  test-e2e:
    name: E2E Tests
    runs-on: ubuntu-latest
    timeout-minutes: 30
    strategy:
      fail-fast: false
      matrix:
        shard: [1, 2, 3, 4]
    services:
      supabase:
        image: supabase/postgres:15.1.1.61
        env:
          POSTGRES_PASSWORD: postgres
        ports:
          - 54322:5432
        options: >-
          --health-cmd="pg_isready -U postgres"
          --health-interval=10s
          --health-timeout=5s
          --health-retries=5
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: "npm"
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - name: Start Supabase & apply migrations
        run: |
          npx supabase db reset --db-url postgresql://postgres:postgres@localhost:54322/postgres
      - name: Build application
        run: npm run build
      - name: Run Playwright tests (shard ${{ matrix.shard }}/4)
        run: npx playwright test --shard=${{ matrix.shard }}/4
      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report-${{ matrix.shard }}
          path: playwright-report/
          retention-days: 7
      - name: Upload trace on failure
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-traces-${{ matrix.shard }}
          path: test-results/
          retention-days: 7
```

---

## Workflow: Database Migrations

Runs after production deploy. Applies pending migrations to the production Supabase instance.

```yaml
# .github/workflows/migrate.yml
name: Migrate Database

on:
  workflow_run:
    workflows: ["Vercel Production Deployment"]
    types: [completed]
    branches: [main]

jobs:
  migrate:
    name: Apply Migrations
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    environment: production
    steps:
      - uses: actions/checkout@v4
      - uses: supabase/setup-cli@v1
        with:
          version: latest
      - name: Link to production project
        run: supabase link --project-ref ${{ secrets.SUPABASE_PROJECT_ID }}
        env:
          SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
      - name: Apply pending migrations
        run: supabase db push
        env:
          SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
          SUPABASE_DB_PASSWORD: ${{ secrets.SUPABASE_DB_PASSWORD }}
      - name: Generate updated types
        run: |
          supabase gen types typescript --project-id ${{ secrets.SUPABASE_PROJECT_ID }} > lib/supabase/database.types.ts
          git diff --exit-code lib/supabase/database.types.ts || echo "::warning::Types are out of date. Run supabase gen types locally."
```

---

## Workflow: Security Audit

Weekly scheduled scan for dependency vulnerabilities.

```yaml
# .github/workflows/audit.yml
name: Security Audit

on:
  schedule:
    - cron: "0 9 * * 1"  # Monday 9am UTC
  workflow_dispatch:

jobs:
  audit:
    name: Dependency Audit
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - name: Run audit
        run: npm audit --audit-level=high
      - name: Check for known vulnerabilities
        run: npx better-npm-audit audit --level high
```

---

## Vercel Deployment Configuration

Vercel handles deployments automatically via the GitHub integration — no Actions workflow needed for deploys.

| Event | Vercel Action | Environment |
|-------|--------------|-------------|
| PR opened/updated | Preview deploy | Preview |
| Push to `main` | Production deploy | Production |
| PR closed | Preview teardown | — |

**Preview environment settings:**
- Supabase points to staging project
- PostHog uses same project (filtered by environment property)
- Comment on PR with deploy URL (Vercel GitHub integration)

**Production environment settings:**
- Supabase points to production project
- Custom domain active
- Analytics and monitoring enabled

---

## GSD Integration

GSD phases map to the CI/CD pipeline:

```mermaid
graph TB
    D["discuss-phase"] --> P["plan-phase"]
    P --> E["execute-phase"]
    E --> B["Branch: phase/N-slug"]
    B --> PR["Pull Request"]
    PR --> CI["CI Checks\n(lint, type, test)"]
    CI --> PREVIEW["Preview Deploy"]
    PREVIEW --> V["verify-work\n(UAT on preview URL)"]
    V --> MERGE["Merge to main"]
    MERGE --> PROD["Production Deploy"]
    PROD --> COMPLETE["complete-milestone"]

    style D fill:#1a1a2e,stroke:#228be6,color:#e0e0e0
    style P fill:#1a1a2e,stroke:#228be6,color:#e0e0e0
    style E fill:#1a2a1a,stroke:#40c057,color:#e0e0e0
    style CI fill:#1a2a1a,stroke:#40c057,color:#e0e0e0
    style V fill:#2a1a2a,stroke:#7950f2,color:#e0e0e0
    style PROD fill:#2a1a1a,stroke:#e03131,color:#e0e0e0
```

**Branch convention:** `phase/<N>-<slug>` (e.g. `phase/3-auth-flow`)

**PR convention:**
- Title: `Phase <N>: <description>`
- Body: generated by GSD with requirements, changes, and test plan
- Label: `phase:<N>`

**Post-merge:**
- GSD `verify-work` runs UAT against production URL
- GSD `complete-milestone` archives phase artifacts
