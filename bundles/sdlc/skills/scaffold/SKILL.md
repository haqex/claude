---
name: scaffold
description: Create project structure, install dependencies, configure tooling — the foundation before building features
argument-hint: <project-goal>
allowed-tools: [Read, Write, Edit, Glob, Grep, Bash]
---

# Scaffold: $ARGUMENTS

## Purpose
Read the spec and plan, then create the project structure, install dependencies, and configure development tooling. Verifies its own work as it goes.

## Steps

### 1. Read inputs
- Read `checklists/01-spec.md` for tech stack and architecture decisions
- Read `checklists/02-plan.md` for the task list (to understand what directories/modules are needed)
- Check if a `.haqex.json` config exists for framework preferences

### 2. Initialize the project
Based on the tech stack from the spec:
- Run the appropriate initializer (`npx create-next-app`, `npm init`, `cargo init`, etc.)
- Or create the project structure manually if no CLI initializer fits

### 3. Install dependencies
- Install production dependencies from the spec's tech stack
- Install dev dependencies (linter, formatter, test runner, type checker)
- Verify `package.json` / `Cargo.toml` / equivalent has all expected deps

### 4. Configure tooling
- ESLint / Biome (linting)
- Prettier / equivalent (formatting)
- TypeScript config (if applicable)
- Test runner config (Vitest, Jest, etc.)
- `.env.example` with all expected environment variables documented

### 5. Create directory structure
- Set up the directories for each module/feature from the plan
- Create placeholder/index files where appropriate
- Create a skeleton `README.md` with project name and setup instructions

### 6. Write the scaffold checklist
Create `checklists/03-scaffold.md`, checking items as they're verified:

```markdown
---
sdlc: true
project: <project-slug>
phase: scaffold
status: complete
started: YYYY-MM-DD
updated: YYYY-MM-DD
progress: N/N
---

# Scaffold Checklist

> Project: <project name>
> Phase: 3 of 7 — Scaffold
> Status: complete (N/N)

## Project Setup
- [x] Project initialized with <framework>
  - **verified**: `package.json` exists, framework version correct

- [x] Dependencies installed
  - **files**: package.json, package-lock.json
  - **verified**: `npm ls` shows no missing deps

- [x] TypeScript configured
  - **files**: tsconfig.json
  - **verified**: `npx tsc --noEmit` passes

- [x] Linter configured
  - **files**: eslint.config.js / biome.json
  - **verified**: `npm run lint` passes

- [x] Test runner configured
  - **files**: vitest.config.ts / jest.config.js
  - **verified**: `npm test` runs (0 tests, no errors)

- [x] Environment template created
  - **files**: .env.example
  - **verified**: All expected vars documented

- [x] Directory structure created
  - **verified**: Key directories exist per plan

- [x] README skeleton written
  - **files**: README.md
  - **verified**: Contains project name, setup instructions
```

### 7. Update master checklist
Update `checklists/00-master.md`: Scaffold phase → `[x]`, progress → `3/7`

### 8. Report
```
## Scaffold Complete

Project: <framework> project initialized
Dependencies: N production, M dev
Tooling: linter, formatter, test runner, TypeScript configured
Structure: K directories created

Next: Build phase will implement the planned tasks.
```

## Quality Checklist
- [ ] Project initializes and compiles without errors
- [ ] All dependencies from spec are installed
- [ ] Linter runs without errors
- [ ] Test runner executes (even with 0 tests)
- [ ] .env.example documents all needed variables
- [ ] Master checklist updated
