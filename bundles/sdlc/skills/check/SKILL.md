---
name: check
description: Read a checklist, verify each item against the actual project state, update marks and progress. The verification engine for the SDLC pipeline.
argument-hint: <checklist-path> | master
allowed-tools: [Read, Write, Edit, Glob, Grep, Bash]
---

# Check: $ARGUMENTS

## Purpose
Read a checklist file, verify each unchecked item against the actual project state, and update marks. This skill is **non-destructive** — it verifies and reports, it does not build or fix.

## Bundle Root
Determine the bundle root from the directory containing `BUNDLE.md`.

## Steps

### 1. Resolve the checklist
- If `$ARGUMENTS` is `master` or empty, read `checklists/00-master.md` and find the current in-progress phase, then read that phase's checklist
- Otherwise, read the checklist at the given path (e.g., `checklists/04-build.md`)
- If not found, list all checklists in `checklists/` and stop

### 2. Parse the checklist
- Read the YAML frontmatter: `phase`, `status`, `progress`, `depends_on`
- Parse all checklist items: `- [x]` (checked) and `- [ ]` (unchecked)
- Count: total items, checked, unchecked, blocked

### 3. Verify each unchecked item
For each `- [ ]` item, determine the verification strategy from the item text:

**File existence**: If the item mentions files or paths, use Glob to verify they exist
**Code correctness**: If the item has `**acceptance**:` criteria, read the relevant files and verify the criteria are met
**Test passage**: If the item involves tests, run the test command (`npm test`, `cargo test`, etc.)
**Configuration**: If the item mentions config, verify the config files contain expected values
**Build/compile**: If relevant, run `npm run build` or equivalent to verify compilation

For each item:
- **Passes**: Update to `- [x]` and add `**verified**: <evidence>`
- **Fails**: Leave as `- [ ]` and add `**failed**: <reason>`
- **Blocked**: Leave as `- [ ]` and note `**blocked_by**: <dependency>`

### 4. Update the checklist file
- Update each item's mark and annotations
- Recalculate `progress: X/Y` in frontmatter
- Update `updated: YYYY-MM-DD`
- If all items pass, set `status: complete`

### 5. Update the master checklist
If all items in this phase pass:
- Read `checklists/00-master.md`
- Update the corresponding phase line from `- [ ]` to `- [x]` with the progress count
- Update the master's `progress` field

### 6. Report
```
## Check Results: <filename>

Passed: X/Y
Failed: N (<list failed items>)
Blocked: N (<list blocked items>)

Status: <old-status> → <new-status> (was X/Y, now X'/Y)
```

## Rules
- NEVER delete checklist items — only change marks and add annotations
- NEVER modify the substance of an item — only its checkbox and annotations
- NEVER build, fix, or implement anything — only verify and report
- Always preserve existing `**files**:`, `**verified**:`, `**failed**:` annotations
- If a previously checked item now fails, uncheck it and update the annotation
