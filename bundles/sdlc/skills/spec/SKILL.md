---
name: spec
description: Decompose a high-level goal into requirements, architecture decisions, technology stack, and a structured spec checklist
argument-hint: <project-goal> [stack preferences]
allowed-tools: [Read, Write, Edit, Glob, Grep, Bash]
---

# Spec: $ARGUMENTS

## Purpose
Transform a high-level project goal into structured requirements, architecture decisions, and a technology stack. Produces the spec checklist and bootstraps the master checklist.

## Steps

### 1. Analyze the goal
- Parse the project goal from `$ARGUMENTS`
- Identify any technology preferences mentioned (e.g., "Next.js", "PostgreSQL")
- If a `.haqex.json` config exists, read it for framework and preferences

### 2. Define requirements

**Functional requirements**: List every user-facing feature as a concrete requirement
- Be specific: "Users can sign up with email/password and OAuth2" not "auth system"
- Group by domain (auth, data, UI, integrations, etc.)

**Non-functional requirements**: Performance, security, scalability, accessibility targets
- Include measurable criteria where possible (e.g., "page load < 2s", "WCAG AA")

### 3. Make architecture decisions
For each major decision, document:
- The choice made (e.g., "Next.js 15 with App Router")
- Why (e.g., "SSR for SEO, React ecosystem, Vercel deployment")
- Alternatives considered

Key decisions to address:
- Frontend framework and rendering strategy
- Backend/API architecture
- Database and ORM
- Authentication strategy
- Deployment target
- Key libraries/services

### 4. Write the spec checklist
Create `checklists/01-spec.md`:

```markdown
---
sdlc: true
project: <project-slug>
phase: spec
status: complete
started: YYYY-MM-DD
updated: YYYY-MM-DD
progress: N/N
---

# Spec Checklist

> Project: <project name>
> Phase: 1 of 7 — Spec
> Status: complete (N/N)

## Functional Requirements
- [x] <requirement 1>
- [x] <requirement 2>
...

## Non-Functional Requirements
- [x] <requirement>
...

## Architecture Decisions
- [x] <decision>: <choice> — <rationale>
...

## Technology Stack
- [x] <technology>: <specific choice>
...
```

All items are `[x]` because the spec skill produced them — they are decisions, not implementations.

### 5. Create the master checklist
Create `checklists/00-master.md`:

```markdown
---
sdlc: true
project: <project-slug>
type: master
status: in-progress
started: YYYY-MM-DD
updated: YYYY-MM-DD
goal: "<original goal>"
progress: 1/7
---

# SDLC Master Checklist

> Goal: <original goal>
> Progress: 1/7 phases complete

## Phases

- [x] **Spec** — `checklists/01-spec.md` (N/N)
- [ ] **Plan** — `checklists/02-plan.md` (not started)
- [ ] **Scaffold** — `checklists/03-scaffold.md` (not started)
- [ ] **Build** — `checklists/04-build.md` (not started)
- [ ] **Test** — `checklists/05-test.md` (not started)
- [ ] **Audit** — `checklists/06-audit.md` (not started)
- [ ] **Ship** — `checklists/07-ship.md` (not started)

## Decisions Log

| Decision | Phase | Rationale |
|----------|-------|-----------|
| <tech choice> | spec | <why> |
...
```

### 6. Report
```
## Spec Complete

Requirements: N functional, M non-functional
Architecture decisions: K
Technology stack: L choices

Checklists created:
  checklists/00-master.md
  checklists/01-spec.md

Next: run-pipeline will proceed to Plan phase
```

## Quality Checklist
- [ ] All functional requirements are concrete and testable
- [ ] Architecture decisions include rationale
- [ ] Technology stack is internally consistent
- [ ] Master checklist created with all 7 phases listed
- [ ] Spec checklist has all items marked [x]
