---
name: approve-proposal
description: Apply a pending proposal — reads the proposed SKILL.md, writes it to the target path, and marks the proposal as approved
argument-hint: <proposal-folder-name>
allowed-tools: [Read, Write, Edit, Glob, Bash]
---

# Approve Proposal: $ARGUMENTS

## Bundle Root
Proposals are expected at `<bundle-root>/proposals/<folder>/PROPOSAL.md`.
Determine the bundle root from the directory containing `BUNDLE.md` in this project.

## Structure
Proposals are **folders**: `proposals/<YYYY-MM-DD-skill-name>/`
Each folder contains:
- `PROPOSAL.md` — the proposal definition with a `## Proposed SKILL.md` section
- `Component Map.canvas` — architecture canvas (if generated)
- `Diagrams.md` — Mermaid diagrams (if generated)

## Steps

### 1. Locate the proposal
- Read `<bundle-root>/proposals/$ARGUMENTS/PROPOSAL.md`
- If not found, list all pending proposals by globbing `<bundle-root>/proposals/*/PROPOSAL.md` and stop

### 2. Validate the proposal
- Parse the YAML frontmatter
- Check `status` — if already `approved` or `rejected`, report and stop
- Confirm required fields: `type`, `target_path`, `skill_name`, `status`

### 3. Preview the changes
```
Proposal: <skill_name>
Type: <type>
Target: <target_path>

This will create:
  <target_path>

Applying now...
```

### 4. Apply the proposal
- Extract the SKILL.md content from the `## Proposed SKILL.md` fenced code block
- Create the target directory if needed
- Write SKILL.md to `target_path`
- Move any diagram files from the proposal folder into the skill folder

### 5. Update the proposal status
- Edit the PROPOSAL.md frontmatter: change `status: pending` to `status: approved`
- Add `approved: <YYYY-MM-DD>` field

### 6. Report
```
Applied: <target_path>
Diagrams moved: <list or "none">
```

## Quality Checklist
- [ ] Proposal status was `pending` before applying
- [ ] SKILL.md extracted correctly from the proposal
- [ ] Target file written to the correct path
- [ ] Proposal frontmatter updated to `status: approved`
