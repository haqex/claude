---
name: create-note
description: Create a properly structured Obsidian note with full frontmatter, template, tags, and wikilinks. Use whenever the user wants to create a new note of any type.
argument-hint: <type> <topic> — e.g., "course CS 6310 Lecture 5" or "project Raspberry Pi GPIO Setup"
allowed-tools: Read, Write, Glob, Grep
---

# Create Structured Note

Create a new note for: **$ARGUMENTS**

## References
Read these before creating:
- [Note templates](../manage-vault/note-templates.md) — complete templates per type
- [Frontmatter schema](../manage-vault/frontmatter-schema.md) — YAML property definitions
- [Tag taxonomy](../manage-vault/tag-taxonomy.md) — canonical tags

## Steps

### Step 1: Parse Arguments
Extract from `$ARGUMENTS`:
- **Type**: `daily` | `course` | `project` | `interview` | `meeting` | `reference`
- **Topic**: the subject of the note
- **Extra context**: course ID, project name, etc.

### Step 2: Determine Folder
| Type | Folder |
|------|--------|
| daily | `GitHub/Daily Notes/` |
| course | `GitHub/University/{Course ID}/` |
| project | `GitHub/Enterprise/{Project}/` |
| interview | `GitHub/Interview Prep/` |
| meeting | `GitHub/Daily Notes/` or relevant project folder |
| reference | Relevant project folder or `GitHub/` |

### Step 3: Build Frontmatter
Apply the schema from `frontmatter-schema.md`:
- Set `tags` array with appropriate `type/`, `course/`/`project/`, and `topic/` tags
- Set `created` to today's date
- Set `type` to the note type
- Add type-specific fields (course, semester, project, status, etc.)

### Step 4: Apply Template
Load the matching template from `note-templates.md` and fill placeholders:
- Replace `{{date}}` with today's date
- Replace `{{course_name}}`, `{{project_name}}`, etc. with actual values
- Replace `{{topic}}` tags based on content

### Step 5: Auto-Link
1. Glob the target folder for existing notes
2. Add `[[wikilinks]]` in the "Related" section for relevant existing notes
3. If this is a course note, link to other notes in the same course folder
4. If this is a project note, link to the project index file

### Step 6: Write File
- Use the correct filename convention: `{Topic}.md` or `YYYY-MM-DD.md`
- Write to the determined folder
- Confirm creation to the user

## Quality Checklist
- [ ] Frontmatter has `tags`, `created`, `type`
- [ ] Tags use array format and match taxonomy
- [ ] Template sections are present
- [ ] At least one `[[wikilink]]` to a related note if any exist
- [ ] File is in the correct folder
- [ ] H1 heading matches the topic
