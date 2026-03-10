---
name: approve-proposal
description: Apply a pending proposal from proposals/ — reads the proposed changes, writes files to their target locations, and marks the proposal as approved
argument-hint: <proposal-filename-without-extension>
allowed-tools: [Read, Write, Edit, Glob, Grep]
---

# Approve Proposal: $ARGUMENTS

## Repo Root
All paths are relative to: `~/developer/enterprise/claude`

## Steps

### 1. Locate the proposal
- Read `proposals/$ARGUMENTS.md` (append `.md` if not already present)
- If not found, list all pending proposals from `proposals/*.md` and stop:
  ```
  No proposal found: $ARGUMENTS

  Pending proposals:
    - <filename> — <skill_name> — proposed <date>
  ```

### 2. Validate the proposal
- Parse the YAML frontmatter
- Check `status` — if already `approved` or `rejected`, report and stop:
  ```
  This proposal has already been <status>. No action taken.
  ```
- Confirm required fields exist: `type`, `target_path`, `skill_name`, `status`

### 3. Preview the changes
Output a summary before writing anything:
```
## Proposal: <skill_name>
Type: <type>
Target: <target_path>
Source: <source>

This will create:
  <target_path>

Proceed? (auto-approved — applying now)
```

### 4. Apply the proposal

**For `type: new-skill`:**
- Extract the full SKILL.md content from the `## Proposed SKILL.md` section of the proposal (the fenced code block)
- Create the target directory if needed: `domains/<target_domain>/.claude/skills/<skill_name>/`
- Write the SKILL.md content to `target_path`
- Verify the file was written successfully

**For other types** (future expansion):
- Follow the same pattern: extract content from the proposal, write to target_path

### 5. Update the proposal status
- Edit the proposal's frontmatter: change `status: pending` to `status: approved`
- Add `approved: <YYYY-MM-DD>` field below `status`

### 6. Report
```
## Applied

Proposal: proposals/<filename>.md
Written: <target_path>

To use the new skill:
  claude --add-dir ~/developer/enterprise/claude/domains/<target_domain>
  /project:<skill_name>
```

## Quality Checklist
- [ ] Proposal status was `pending` before applying
- [ ] SKILL.md content was extracted correctly from the proposal
- [ ] Target file was written to the correct path
- [ ] Proposal frontmatter updated to `status: approved`
