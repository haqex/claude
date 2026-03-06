---
name: manage-daily-notes
description: Create structured daily notes, generate weekly/monthly summaries, or backfill empty daily notes with templates. Use for all daily note operations.
argument-hint: <operation> today | weekly-summary | monthly-summary | backfill
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Manage Daily Notes

Operation: **$ARGUMENTS**

## References
- [Note templates — Daily section](../manage-vault/note-templates.md)
- [Frontmatter schema](../manage-vault/frontmatter-schema.md)
- [Dataview reference](../manage-vault/dataview-ref.md)

## Daily Notes Config
- **Folder**: `GitHub/Daily Notes/`
- **Format**: `YYYY-MM-DD.md`
- **Vault path**: `/Users/aymanhaque/Documents/Obsidian Vault`

## Operations

### `today`
Create today's daily note with full structure:

1. Determine today's date in `YYYY-MM-DD` format
2. Check if file already exists — if it does and has content, do not overwrite
3. If empty or missing, create with this template:

```markdown
---
tags: [type/daily]
created: YYYY-MM-DD
type: daily
---

# YYYY-MM-DD

## Tasks
- [ ]

## Log
> What happened today — meetings, progress, blockers, ideas.



## Links
> Notes created or referenced today.

-

## Reflection
> End of day — what went well, what to improve, what's next.


```

4. Link to yesterday's note if it exists: `← [[YYYY-MM-DD|Yesterday]]`

### `weekly-summary`
Generate a summary of the past 7 days:

1. Glob `GitHub/Daily Notes/` for the last 7 `YYYY-MM-DD.md` files
2. Read each file's content
3. Aggregate:
   - All tasks (completed and incomplete)
   - Log entries
   - Links referenced
4. Generate a summary note:

```markdown
---
tags: [type/daily, topic/summary]
created: YYYY-MM-DD
type: daily
---

# Week of YYYY-MM-DD — Summary

## Task Summary
### Completed
- [x] task from daily notes

### Outstanding
- [ ] task still open

## Highlights
> Key events, progress, decisions from the week.

## Notes Created
- [[note1]]
- [[note2]]

## Daily Notes
```dataview
LIST
FROM "GitHub/Daily Notes"
WHERE file.day >= date(YYYY-MM-DD) - dur(7 days) AND file.day <= date(YYYY-MM-DD)
SORT file.day DESC
```
```

5. Save as `GitHub/Daily Notes/Week of YYYY-MM-DD.md`

### `monthly-summary`
Generate a summary for the current month:

1. Glob all daily notes matching the current month `YYYY-MM-*.md`
2. Aggregate tasks, highlights, notes created
3. Include dataview queries for the month's activity
4. Save as `GitHub/Daily Notes/YYYY-MM Summary.md`

### `backfill`
Populate empty daily notes with the template:

1. Glob all `YYYY-MM-DD.md` files in `GitHub/Daily Notes/`
2. Check each file's size — if 0 bytes or only whitespace
3. Write the daily note template (from `today` operation) with the file's date
4. Report: files populated, files skipped (already had content)

## Quality Checklist
- [ ] Frontmatter has `tags: [type/daily]`, `created`, `type: daily`
- [ ] Template sections present: Tasks, Log, Links, Reflection
- [ ] Yesterday link included when applicable
- [ ] Weekly/monthly summaries aggregate actual content from daily notes
- [ ] Backfill never overwrites files with existing content
