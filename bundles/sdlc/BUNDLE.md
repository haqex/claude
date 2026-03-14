---
bundle: sdlc
version: 1.0.0
skills: [run-pipeline, spec, plan, scaffold, build, test, audit, ship, check]
pipeline: sdlc
---

# SDLC Bundle

Full software development lifecycle in one pipeline. Give Claude a goal, and it works through spec → plan → scaffold → build → test → audit → ship — each phase driven by a persistent checklist that tracks progress and enables cross-conversation resumption.

---

## Activation Prompt

Drop this bundle folder anywhere in your project, then tell Claude:

```
I've added the SDLC bundle to this project at `<path-to-bundle-folder>`.
Read `<path-to-bundle-folder>/BUNDLE.md` to load all skills and rules.
Use `<path-to-bundle-folder>` as the bundle root for all skill and pipeline lookups.
```

---

## Quick Start

```
run-pipeline sdlc goal="build a SaaS dashboard with auth, billing, and analytics"
```

Claude will work through all 7 phases autonomously, producing a checklist at each stage. If it runs out of context or you need to pause:

```
Resume my project from the checklists
```

Claude reads `checklists/00-master.md`, finds the current phase, and picks up where it left off.

---

## Pipeline: `sdlc`

```
spec → ✓ → plan → ✓ → scaffold → ✓ → build → ✓ → test → ✓ → audit → ✓ → ship
```

Each `✓` is a `check` gate that verifies the phase's checklist before proceeding.

```
run-pipeline sdlc goal="build a SaaS dashboard" stack="Next.js, PostgreSQL, Stripe"
run-pipeline sdlc goal="create a CLI tool for Docker management" stack="Rust, clap"
run-pipeline sdlc goal="build a real-time chat app" stack="Next.js, Supabase"
```

---

## Skills

### `spec` — Requirements & Architecture

**Trigger**: First phase of the SDLC pipeline, or "spec out this project", "define requirements"

Decomposes the goal into functional requirements, non-functional requirements, architecture decisions, and technology stack. Produces `checklists/01-spec.md` and bootstraps the master checklist.

### `plan` — Task Decomposition

**Trigger**: Second phase, or "plan the implementation", "break this into tasks"

Reads the spec and creates an ordered list of implementation tasks, each with acceptance criteria, complexity estimates, and dependencies. Produces `checklists/02-plan.md`.

### `scaffold` — Project Setup

**Trigger**: Third phase, or "scaffold the project", "set up the project structure"

Initializes the project, installs dependencies, configures tooling (linter, formatter, test runner, TypeScript). Verifies its own work. Produces `checklists/03-scaffold.md`.

### `build` — Implementation

**Trigger**: Fourth phase, or "build the features", "implement the plan"

Works through each task from the plan, implementing features one by one. **Resumable** — reads the build checklist, skips completed tasks, continues from where it left off. Produces `checklists/04-build.md`.

### `test` — Test Suite

**Trigger**: Fifth phase, or "write tests", "test everything"

Writes unit, integration, and E2E tests for every built feature. Runs the suite, fixes failures, reports coverage. Produces `checklists/05-test.md`.

### `audit` — Quality Review

**Trigger**: Sixth phase, or "audit the project", "security review"

Cross-cutting review across 4 dimensions: security, performance, code quality, accessibility. Fixes quick wins, documents findings with severity. Loads reference checklists from `skills/audit/reference/`. Produces `checklists/06-audit.md`.

### `ship` — Deploy Readiness

**Trigger**: Seventh phase, or "ready to ship?", "pre-deploy check"

Verifies all prior phases are complete, documentation is thorough, no debug code remains, production build passes, git state is clean. Generates CHANGELOG. Produces `checklists/07-ship.md`.

### `check` — Verify a Checklist

**Trigger**: "check the build progress", "verify the spec", or run automatically between pipeline phases

Reads a checklist file, verifies each unchecked item against the actual project state, updates marks and annotations. **Non-destructive** — it only verifies, never builds or fixes.

```
check checklists/04-build.md
check master
```

### `run-pipeline` — Execute a Pipeline

**Trigger**: "run the sdlc pipeline" or `run-pipeline sdlc goal="..."`

Loads the pipeline definition, executes each skill step in sequence with check gates between phases, and writes an outcome report.

---

## Checklist Format

Every phase produces a checklist file in `checklists/`:

```markdown
---
sdlc: true
project: my-project
phase: build
status: in-progress
progress: 7/12
---

# Build Checklist

- [x] Create database schema
  - **files**: src/db/schema.ts
  - **verified**: migrations run clean

- [ ] Implement auth module
  - **acceptance**: Login, signup, logout, token refresh
  - **complexity**: L
```

The master checklist (`checklists/00-master.md`) tracks all phases and serves as the entry point for resuming work.

---

## Stacking with Frontend Bundle

The SDLC bundle works standalone but is enhanced when stacked with the frontend bundle:

- **Build phase**: Applies Impeccable design standards for UI tasks
- **Audit phase**: Defers to the frontend audit skill for accessibility and design quality
- **Ship phase**: Can invoke the frontend polish skill as a final pass

```
npx @haqex/claude sdlc frontend
```

---

## Auto-Applied Rules

### Checklist Standards
- Never delete checklist items — only change marks and add annotations
- Always update `progress` and `updated` when modifying a checklist
- When a phase completes, update the master checklist
- The `checklists/` directory is the single source of truth for project progress
- When resuming, always read the master checklist first

---

## Reference Files

Loaded by the `audit` skill for detailed review criteria:

| File | Topic |
|------|-------|
| `skills/audit/reference/security-checklist.md` | OWASP patterns, auth, input validation, secrets |
| `skills/audit/reference/performance-checklist.md` | Bundle size, DB queries, caching, lazy loading |
| `skills/audit/reference/code-quality-checklist.md` | Type safety, error handling, naming, DRY, dead code |
