---
name: ship
description: Final pre-deployment verification — docs, changelog, clean git state, environment config, and deployment readiness
argument-hint: <project-goal>
allowed-tools: [Read, Write, Edit, Glob, Grep, Bash]
---

# Ship: $ARGUMENTS

## Purpose
Verify the project is ready to deploy. Check documentation, environment config, git state, and produce the final ship checklist.

## Steps

### 1. Verify all previous phases
- Read `checklists/00-master.md`
- Confirm phases 1-6 are all `status: complete`
- If any phase is incomplete, report which phases need attention and stop

### 2. Documentation check
- **README.md**: Has project description, setup instructions, environment variables, usage, and architecture overview
- **API docs**: If the project has an API, endpoints are documented
- **Environment**: `.env.example` matches all env vars actually used in code (grep for `process.env.` / `env::var` / equivalent)

### 3. Clean code check
- No `console.log` / debug statements in production code
- No `TODO` / `FIXME` comments remaining
- No commented-out code blocks
- No unused imports or variables (run linter)

### 4. Git state check
- Working directory is clean (no uncommitted changes) — or document what's uncommitted
- `.gitignore` includes: `node_modules/`, `.env`, build artifacts, OS files

### 5. Build verification
- Run the production build command (`npm run build`, `cargo build --release`, etc.)
- Verify it completes without errors or warnings

### 6. Generate changelog
- Read git log or the decisions log from `checklists/00-master.md`
- Write or update `CHANGELOG.md` with the features built, organized by category

### 7. Write the ship checklist
Create `checklists/07-ship.md`:

```markdown
---
sdlc: true
project: <project-slug>
phase: ship
status: complete
started: YYYY-MM-DD
updated: YYYY-MM-DD
progress: N/N
---

# Ship Checklist

> Project: <project name>
> Phase: 7 of 7 — Ship
> Status: complete (N/N)

## Pre-Deploy

- [x] All SDLC phases complete (6/6 prior phases)
  - **verified**: Master checklist shows 6/6

- [x] README complete
  - **files**: README.md
  - **verified**: Setup, usage, env vars, architecture documented

- [x] Environment config documented
  - **files**: .env.example
  - **verified**: All vars match actual usage

- [x] No debug artifacts in production code
  - **verified**: grep for console.log/TODO/FIXME returned 0

- [x] Production build passes
  - **verified**: `npm run build` exits 0, no warnings

- [x] Git state clean
  - **verified**: No uncommitted changes

- [x] .gitignore correct
  - **verified**: node_modules, .env, build artifacts excluded

- [x] CHANGELOG written
  - **files**: CHANGELOG.md
  - **verified**: All features documented
```

### 8. Update master checklist
Update `checklists/00-master.md`: Ship → `[x]`, progress → `7/7`, status → `complete`

### 9. Final report
```
## SDLC Complete 🚀

Project: <name>
Phases: 7/7 complete

Summary:
  - Spec: N requirements defined
  - Plan: M tasks planned
  - Scaffold: Project initialized with <framework>
  - Build: M tasks implemented
  - Test: K tests passing
  - Audit: J findings (all resolved)
  - Ship: Ready to deploy

Checklists: checklists/00-master.md (index to all phases)

The project is ready for deployment.
```

## Quality Checklist
- [ ] All 6 prior phases verified as complete
- [ ] README is comprehensive
- [ ] Production build passes without errors
- [ ] No debug code in production
- [ ] CHANGELOG reflects all work done
- [ ] Master checklist marked as complete
