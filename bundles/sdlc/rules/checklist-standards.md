---
name: checklist-standards
description: Auto-applied rules for reading and writing SDLC checklists
trigger: Any file matching checklists/*.md or containing sdlc: true in frontmatter
---

# Checklist Standards

These rules apply automatically whenever you read or write a checklist file.

## Format Rules
1. Every checklist file has YAML frontmatter with: `sdlc: true`, `project`, `phase`, `status`, `started`, `updated`, `progress`
2. Status values: `not-started`, `in-progress`, `complete`, `blocked`
3. Progress format: `X/Y` where X = checked items, Y = total items
4. Checklist items use standard markdown: `- [x]` (done) or `- [ ]` (pending)

## Behavioral Rules
1. **Never delete items** — only change `[ ]` to `[x]` or add annotations
2. **Always update `progress`** when checking or unchecking items
3. **Always update `updated`** date in frontmatter
4. **When a phase completes**, update the master checklist (`checklists/00-master.md`)
5. **Preserve annotations** — `**files**:`, `**verified**:`, `**failed**:`, `**blocked_by**:`, `**acceptance**:`, `**complexity**:`
6. **When resuming work**, always read the master checklist first to find the current phase
7. The `checklists/` directory is the **single source of truth** for project progress

## Annotation Reference
- `**acceptance**:` — what "done" means for this item
- `**complexity**:` — S / M / L estimate
- `**depends_on**:` — other tasks that must complete first
- `**files**:` — files created or modified for this item
- `**verified**:` — evidence that the item passes verification
- `**failed**:` — reason the item did not pass verification
- `**blocked_by**:` — what is preventing this item from being completed
