---
name: test
description: Write tests for every built feature, run the suite, fix failures, and report coverage
argument-hint: <project-goal>
allowed-tools: [Read, Write, Edit, Glob, Grep, Bash]
---

# Test: $ARGUMENTS

## Purpose
Read the build checklist to understand what was implemented, write tests for each feature, run the test suite, fix failures, and produce a test checklist.

## Steps

### 1. Read inputs
- Read `checklists/04-build.md` for the list of implemented features and their files
- Read `checklists/01-spec.md` for non-functional requirements (performance targets, etc.)
- Detect the test runner from the project config (Vitest, Jest, pytest, cargo test, etc.)

### 2. Write tests for each feature
For each checked item in the build checklist:

**Unit tests**:
- Test the core logic of each module
- Cover happy path and at least 2 edge cases per function
- Test error handling paths

**Integration tests** (where applicable):
- Test cross-module interactions (e.g., auth middleware + API routes)
- Test database operations with actual queries (if a test DB is configured)

**E2E tests** (for critical user flows):
- Test the most important user journeys end-to-end
- Only write these for flows marked as critical in the spec

### 3. Run the test suite
```bash
npm test    # or equivalent
```

### 4. Fix failures
For each failing test:
- Determine if the test is wrong or the code is wrong
- Fix whichever is incorrect
- Re-run until green

### 5. Check coverage
```bash
npm run test -- --coverage    # or equivalent
```
- Report uncovered areas
- Write additional tests for critical uncovered paths

### 6. Write the test checklist
Create `checklists/05-test.md`:

```markdown
---
sdlc: true
project: <project-slug>
phase: test
status: complete
started: YYYY-MM-DD
updated: YYYY-MM-DD
progress: N/N
---

# Test Checklist

> Project: <project name>
> Phase: 5 of 7 — Test
> Status: complete (N/N)

## Test Coverage

- [x] Unit tests for <module 1>
  - **files**: tests/<module>.test.ts
  - **verified**: X tests, all passing

- [x] Unit tests for <module 2>
  - **files**: tests/<module>.test.ts
  - **verified**: X tests, all passing

- [x] Integration tests for <feature>
  - **files**: tests/integration/<feature>.test.ts
  - **verified**: X tests, all passing

- [x] E2E tests for <critical flow>
  - **files**: tests/e2e/<flow>.test.ts
  - **verified**: X tests, all passing

- [x] Full suite passes
  - **verified**: `npm test` exits 0, N tests total

- [x] Coverage targets met
  - **verified**: X% coverage (target: Y%)
```

### 7. Update master checklist
Update `checklists/00-master.md`: Test → `[x]`, progress → `5/7`

### 8. Report
```
## Test Complete

Tests written: N
  Unit: X | Integration: Y | E2E: Z
Suite: all passing
Coverage: X%

Next: Audit phase will review security, performance, and code quality.
```

## Quality Checklist
- [ ] Every built feature has at least unit tests
- [ ] Edge cases and error paths are tested
- [ ] Full test suite passes (`npm test` exits 0)
- [ ] Coverage is reported and critical paths are covered
- [ ] Master checklist updated
