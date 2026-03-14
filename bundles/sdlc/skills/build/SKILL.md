---
name: build
description: Implement each task from the plan checklist, checking items off as they're completed. Resumable — skips already-checked items.
argument-hint: <project-goal>
allowed-tools: [Read, Write, Edit, Glob, Grep, Bash]
---

# Build: $ARGUMENTS

## Purpose
Read the plan checklist and implement each task. This is the longest phase — it must be **idempotent and resumable**. If the conversation ends mid-build, the next session reads the checklist and picks up from the first unchecked item.

## Steps

### 1. Read inputs
- Read `checklists/02-plan.md` for the ordered task list with acceptance criteria
- Read `checklists/01-spec.md` for architecture and tech stack context
- Read `checklists/04-build.md` if it exists (resume case)

### 2. Initialize or resume the build checklist
**If `checklists/04-build.md` does not exist** (fresh start):
- Create it from the plan's task list, all items unchecked
- Set `status: in-progress`, `progress: 0/N`

**If `checklists/04-build.md` exists** (resume):
- Read it and identify the first unchecked item
- Report: "Resuming build at task X/N"
- Skip all checked items

### 3. Implement each unchecked task
For each `- [ ]` item in order:

**a. Read the acceptance criteria** from the `**acceptance**:` annotation

**b. Check dependencies** — if `**depends_on**:` lists a task that isn't checked, mark this task as blocked and skip

**c. Implement the feature/module**:
- Write the code
- Follow the architecture decisions from the spec
- If a frontend bundle is also installed, apply its design standards for UI tasks

**d. Verify basic correctness**:
- Does the code compile/transpile without errors?
- Does it not break existing code? (run linter, type-check)
- Does it satisfy the acceptance criteria?

**e. Update the checklist item**:
```markdown
- [x] <task description>
  - **acceptance**: <criteria>
  - **complexity**: <S/M/L>
  - **files**: <files created or modified>
  - **verified**: <brief evidence of correctness>
```

**f. Update progress** in frontmatter after each task

### 4. Handle blockers
If a task is blocked:
```markdown
- [ ] <task description>
  - **blocked_by**: <task N — reason>
```
Continue to the next unblocked task. Return to blocked tasks after their dependencies are resolved.

### 5. Context management
If you are running low on context or the task list is long:
- Save all progress to `checklists/04-build.md`
- Update the master checklist with current progress
- Output:
  ```
  ## Build Progress Saved

  Completed: X/N tasks
  Remaining: Y tasks
  Blocked: Z tasks

  To resume: "Resume the build" or run the SDLC pipeline with resume=true
  ```

### 6. When all tasks are complete
- Set `status: complete` in `checklists/04-build.md`
- Update master checklist: Build → `[x]`, progress → `4/7`

### 7. Report
```
## Build Complete

Tasks: N/N implemented
Files created/modified: K

Key modules built:
  - <module 1>: <summary>
  - <module 2>: <summary>

Next: Test phase will write and run tests.
```

## Quality Checklist
- [ ] Every implemented task has `**files**:` and `**verified**:` annotations
- [ ] Code compiles without errors after each task
- [ ] Existing code is not broken by new additions
- [ ] Progress is saved after each task (not batched)
- [ ] Blocked tasks are clearly annotated with the dependency
- [ ] Master checklist reflects current progress
