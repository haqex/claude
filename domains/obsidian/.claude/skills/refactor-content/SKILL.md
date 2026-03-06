---
name: refactor-content
description: Transform, summarize, split, merge, or enhance note content. Use for content operations like generating study guides, extracting TODOs, splitting large notes, or enriching existing notes with frontmatter and links.
argument-hint: <operation> <target> — e.g., "summarize GitHub/University/CS 6310" or "study-guide CS 6310" or "enhance GitHub/Enterprise/Raspberry Pi/Intro To Raspi A.I M.L .md"
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Refactor Content

Operation: **$ARGUMENTS**

## References
- [Frontmatter schema](../manage-vault/frontmatter-schema.md)
- [Tag taxonomy](../manage-vault/tag-taxonomy.md)
- [Note templates](../manage-vault/note-templates.md)

## Operations

### `summarize <folder or file>`
Generate a concise summary:
1. Read the target note(s) — if a folder, read all .md files in it
2. Extract key points, decisions, code snippets, outcomes
3. Generate a summary note with:
   - H2 sections for each major topic
   - Bullet-point key takeaways
   - `[[wikilinks]]` back to source notes
4. Save as `{Topic} — Summary.md` in the same folder

### `study-guide <course>`
Generate review material from course notes:
1. Glob all notes in `GitHub/University/{course}/`
2. Read each note's content
3. Generate a study guide with:
   - **Key Concepts** — definitions and explanations
   - **Q&A** — questions with answers (flashcard style)
   - **Practice Problems** — if any tasks/problems exist in the notes
   - **Diagrams** — reference existing Excalidraw/Mermaid diagrams
   - `[[wikilinks]]` to each source note
4. Apply frontmatter: `type: reference`, `tags: [type/reference, course/{id}, topic/study-guide]`
5. Save as `GitHub/University/{course}/{Course} — Study Guide.md`

### `extract-todos <scope>`
Aggregate all incomplete tasks:
1. Scope: folder path or `all` for entire vault
2. Grep for `- [ ]` patterns across all .md files in scope
3. Group by source file
4. Generate a TODO dashboard note with:
   - Tasks grouped by file with `[[wikilinks]]` to source
   - Dataview query for dynamic updates
   - Count of open vs completed tasks
5. Save as `GitHub/TODO Dashboard.md`

### `split <file>`
Break a large note into linked sub-notes:
1. Read the target file
2. Identify natural split points (H2 sections, `---` dividers, topic changes)
3. **Propose the split plan** — show what each new note would contain
4. After confirmation:
   - Create sub-notes with proper frontmatter and content
   - Update the original to become a MOC linking to sub-notes
   - Add `[[wikilinks]]` between related sub-notes

### `merge <file1> <file2> [file3...]`
Combine related notes:
1. Read all target files
2. Identify overlapping content, unique content, and conflicts
3. Generate a merged note with:
   - Combined frontmatter (union of tags)
   - Deduplicated content
   - Sections from each source, properly organized
4. **Propose the merge** — show the result before writing
5. After confirmation, write the merged note and optionally archive originals

### `enhance <file>`
Enrich an existing note without changing its content:
1. Read the target file
2. Add/fix:
   - **Frontmatter** — add missing `tags`, `created`, `type` per schema
   - **Tags** — analyze content, apply relevant tags from taxonomy
   - **Wikilinks** — find references to other vault notes, convert to `[[wikilinks]]`
   - **Structure** — add missing H1 heading, section dividers
   - **Code blocks** — add language identifiers to untyped code blocks
3. Preserve ALL existing content — only add, never remove
4. Report what was added/changed

## Quality Checklist
- [ ] Output notes have proper frontmatter
- [ ] Tags match the taxonomy
- [ ] Wikilinks resolve to existing notes
- [ ] Source notes are credited/linked
- [ ] Never delete content during enhance — only add
- [ ] Split/merge operations require confirmation before writing
