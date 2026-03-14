---
name: plan
description: Break the spec into ordered implementation tasks with acceptance criteria, dependencies, and complexity estimates
argument-hint: <project-goal>
allowed-tools: [Read, Write, Edit, Glob, Grep]
---

# Plan: $ARGUMENTS

## Purpose
Read the spec checklist and decompose it into an ordered list of atomic implementation tasks. Each task has acceptance criteria that define "done."

## Steps

### 1. Read the spec
- Read `checklists/01-spec.md` for requirements, architecture, and tech stack
- Read `checklists/00-master.md` for the project goal

### 2. Decompose into tasks
Break every functional requirement into implementation tasks:
- Each task should be **one logical unit of work** (a module, route, component, migration)
- Order by dependency: foundational tasks first (DB schema, auth), then features, then polish
- Each task gets:
  - A clear one-line description
  - `**acceptance**:` what "done" means (specific, verifiable)
  - `**complexity**:` S / M / L
  - `**depends_on**:` which other tasks must be complete first (or "none")

### 3. Write the plan checklist
Create `checklists/02-plan.md`:

```markdown
---
sdlc: true
project: <project-slug>
phase: plan
status: complete
started: YYYY-MM-DD
updated: YYYY-MM-DD
progress: N/N
---

# Plan Checklist

> Project: <project name>
> Phase: 2 of 7 — Plan
> Status: complete (N/N)

## Implementation Tasks

- [x] 1. Create database schema and migrations
  - **acceptance**: Schema matches spec, migrations run without errors
  - **complexity**: M
  - **depends_on**: none

- [x] 2. Implement auth module (JWT + refresh tokens)
  - **acceptance**: Login/signup/logout work, tokens refresh, middleware protects routes
  - **complexity**: L
  - **depends_on**: 1

...
```

All items are `[x]` because this is the plan itself, not the implementation.

### 4. Update master checklist
- Read `checklists/00-master.md`
- Update Plan phase to `[x]` with progress count
- Update `progress` to `2/7`

### 5. Report
```
## Plan Complete

Tasks: N total
  S: X | M: Y | L: Z
Estimated phases with dependencies mapped.

Next: Scaffold phase will create the project structure.
```

## Quality Checklist
- [ ] Every functional requirement from the spec maps to at least one task
- [ ] Tasks are ordered by dependency (no task depends on a later task)
- [ ] Every task has concrete acceptance criteria
- [ ] Complexity estimates are assigned
- [ ] Master checklist updated to show Plan complete
