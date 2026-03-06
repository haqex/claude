---
name: generate-moc
description: Generate or update a Map of Content (MOC) page that indexes and links all notes in a folder or topic. Use when a folder needs a navigational index.
argument-hint: <folder or topic> — e.g., "University" or "Enterprise" or "Interview Prep"
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Generate Map of Content

Generate an MOC for: **$ARGUMENTS**

## References
- [Note templates — MOC section](../manage-vault/note-templates.md)
- [Frontmatter schema](../manage-vault/frontmatter-schema.md)
- [Dataview reference](../manage-vault/dataview-ref.md)
- [Tag taxonomy](../manage-vault/tag-taxonomy.md)

## Steps

### Step 1: Identify Target
Determine the folder path from `$ARGUMENTS`:
| Argument | Folder Path | Index File |
|----------|-------------|------------|
| University | `GitHub/University/` | `GitHub/University/University.md` |
| Enterprise | `GitHub/Enterprise/` | `GitHub/Enterprise/Enterprise.md` |
| Interview Prep | `GitHub/Interview Prep/` | `GitHub/Interview Prep/Interview Prep.md` |
| CS 6310 | `GitHub/University/CS 6310/` | `GitHub/University/CS 6310/CS 6310.md` |
| Raspberry Pi | `GitHub/Enterprise/Raspberry Pi/` | `GitHub/Enterprise/Raspberry Pi/Raspberry Pi.md` |
| Daily Notes | `GitHub/Daily Notes/` | `GitHub/Daily Notes/Daily Notes.md` |

### Step 2: Scan Folder
1. Glob all `.md` files in the folder (including subfolders)
2. Read each file's frontmatter to extract: `type`, `tags`, `created`, `status`
3. Group notes by: subfolder, type, topic

### Step 3: Build MOC Content
Generate the MOC with these sections:

1. **Frontmatter** — `type: moc`, preserve existing `sticker`/`color` if present
2. **H1 Title** — folder name
3. **Overview** — brief description of what this area contains
4. **Manual Links** — curated `[[wikilinks]]` to key notes, grouped by category
5. **Dataview: All Contents** — dynamic table query listing all notes in the folder
6. **Dataview: Recent Activity** — list of recently modified notes (last 14 days)
7. **Dataview: By Type** — grouped view if the folder contains mixed types

### Step 4: Preserve Existing Content
If the MOC file already exists:
- **Keep** existing `sticker` and `color` frontmatter
- **Replace** empty body with generated content
- If body has manual content, **append** dataview sections below it

### Step 5: Write File
Write to the index file path determined in Step 1.

## Output Format
```markdown
---
tags: [type/moc]
created: {{date}}
type: moc
sticker: lucide//{{icon}}
color: var(--mk-color-{{color}})
---

# {{Folder Name}}

## Overview
> Description of this area.

## Contents

### Key Notes
- [[Note 1]]
- [[Note 2]]

### All Notes
```dataview
TABLE type AS "Type", created AS "Created", status AS "Status"
FROM "{{folder_path}}"
WHERE file.name != this.file.name
SORT created DESC
```

### Recent Activity
```dataview
LIST
FROM "{{folder_path}}"
WHERE file.mtime >= date(today) - dur(14 days) AND file.name != this.file.name
SORT file.mtime DESC
LIMIT 10
```
```

## Quality Checklist
- [ ] Frontmatter has `type: moc` and correct tags
- [ ] Existing sticker/color preserved
- [ ] Manual wikilinks to important notes
- [ ] At least one dataview query for dynamic content
- [ ] No self-references in dataview queries (`file.name != this.file.name`)
