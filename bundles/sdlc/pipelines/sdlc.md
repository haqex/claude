---
name: sdlc
description: Full software development lifecycle — from goal to shipped product. Spec, plan, scaffold, build, test, audit, ship — each phase verified by checklist.
inputs:
  - name: goal
    description: High-level project goal (e.g. "build a SaaS dashboard with auth, billing, and analytics")
    required: true
  - name: stack
    description: Technology preferences (optional, e.g. "Next.js, PostgreSQL, Stripe")
    required: false
  - name: resume
    description: Set to "true" to resume from existing checklists instead of starting fresh
    required: false
steps:
  - id: spec
    skill: spec
    args: "{{input.goal}} {{input.stack}}"
    outputs:
      - checklists/00-master.md
      - checklists/01-spec.md

  - id: check-spec
    skill: check
    args: "checklists/01-spec.md"
    after: [spec]

  - id: plan
    skill: plan
    args: "{{input.goal}}"
    after: [check-spec]
    outputs:
      - checklists/02-plan.md

  - id: check-plan
    skill: check
    args: "checklists/02-plan.md"
    after: [plan]

  - id: scaffold
    skill: scaffold
    args: "{{input.goal}}"
    after: [check-plan]
    outputs:
      - checklists/03-scaffold.md

  - id: check-scaffold
    skill: check
    args: "checklists/03-scaffold.md"
    after: [scaffold]

  - id: build
    skill: build
    args: "{{input.goal}}"
    after: [check-scaffold]
    on_error: ask
    outputs:
      - checklists/04-build.md

  - id: check-build
    skill: check
    args: "checklists/04-build.md"
    after: [build]
    on_error: ask

  - id: test
    skill: test
    args: "{{input.goal}}"
    after: [check-build]
    outputs:
      - checklists/05-test.md

  - id: check-test
    skill: check
    args: "checklists/05-test.md"
    after: [test]
    on_error: ask

  - id: audit
    skill: audit
    args: "{{input.goal}}"
    after: [check-test]
    on_error: skip
    outputs:
      - checklists/06-audit.md

  - id: check-audit
    skill: check
    args: "checklists/06-audit.md"
    after: [audit]
    on_error: skip

  - id: ship
    skill: ship
    args: "{{input.goal}}"
    after: [check-audit]
    outputs:
      - checklists/07-ship.md
---

# SDLC Pipeline

Full lifecycle from goal to shipped product in 7 phases, each with a verification gate.

## Flow

```
spec → ✓ → plan → ✓ → scaffold → ✓ → build → ✓ → test → ✓ → audit → ✓ → ship
```

Each `✓` is a `check` step that verifies the phase's checklist before proceeding.

## Usage

```
run-pipeline sdlc goal="build a SaaS dashboard with auth, billing, and analytics"
run-pipeline sdlc goal="create a CLI tool for managing Docker containers" stack="Rust, clap"
run-pipeline sdlc goal="build a real-time chat app" stack="Next.js, Supabase, WebSockets"
```

## Resume

If a previous run was interrupted, the pipeline reads existing checklists and continues:
```
run-pipeline sdlc goal="..." resume=true
```

## Checklists Produced

| File | Phase | Content |
|------|-------|---------|
| `checklists/00-master.md` | — | Master index of all phases |
| `checklists/01-spec.md` | Spec | Requirements + architecture decisions |
| `checklists/02-plan.md` | Plan | Ordered tasks with acceptance criteria |
| `checklists/03-scaffold.md` | Scaffold | Project setup verification |
| `checklists/04-build.md` | Build | Implementation progress (resumable) |
| `checklists/05-test.md` | Test | Test coverage and results |
| `checklists/06-audit.md` | Audit | Security, performance, code quality |
| `checklists/07-ship.md` | Ship | Deployment readiness |
