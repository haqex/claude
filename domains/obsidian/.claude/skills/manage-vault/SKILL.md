---
name: manage-vault
description: Vault-wide management operations — audit health, standardize frontmatter, build tags, fix links. Use this for bulk operations across all notes in the vault.
argument-hint: <operation> audit | standardize-frontmatter | build-tags | fix-links | full-health-check
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

# Manage Vault

Perform vault-wide operations for: **$ARGUMENTS**

## Reference Files
Read these before operating:
- [Frontmatter schema](frontmatter-schema.md) — canonical YAML properties
- [Tag taxonomy](tag-taxonomy.md) — hierarchical tag system
- [Dataview reference](dataview-ref.md) — query patterns
- [Note templates](note-templates.md) — templates for every note type

## Vault Path
`/Users/aymanhaque/Documents/Obsidian Vault`

## Operations

### `audit`
Scan the entire vault and produce a health report:
1. **Missing frontmatter** — files with no YAML block or missing `tags`/`created`/`type`
2. **Empty files** — files with 0 bytes or only whitespace
3. **Broken wikilinks** — `[[links]]` pointing to non-existent notes
4. **Orphaned notes** — files with zero incoming and zero outgoing links
5. **Unused images** — files in `Images/` not referenced by any note
6. **Inconsistent tags** — tags not in the taxonomy, string format instead of array
7. **Naming issues** — trailing spaces, inconsistent casing

Output: a summary report in the console listing issues by category with file paths.

### `standardize-frontmatter`
1. Glob all `.md` files (exclude `.excalidraw.md`, `.obsidian/`, `.trash/`)
2. Read each file's current frontmatter
3. Apply the schema from `frontmatter-schema.md`:
   - Add missing `tags`, `created`, `type` fields
   - Convert `tags: string` to `tags: [string]`
   - Infer `type` from folder location if missing
   - Preserve existing sticker/color properties
4. Write back each modified file
5. Report: files updated, files skipped, issues found

### `build-tags`
1. Read `tag-taxonomy.md` for the canonical tag set
2. Scan each note's content and folder location
3. Suggest appropriate tags based on:
   - Folder: `GitHub/University/CS 6310/` → `course/cs6310`
   - Content keywords: "machine learning" → `topic/ml`
   - Existing tags: normalize to taxonomy format
4. Add suggested tags to frontmatter `tags` array
5. Report: tags added per file

### `fix-links`
1. Scan all notes for plain text references to other note names
2. Convert to `[[wikilinks]]` where a matching note exists
3. Check existing `[[wikilinks]]` — flag any pointing to non-existent files
4. Report: links created, broken links found

### `full-health-check`
Run all four operations above in sequence:
1. `audit` → identify issues
2. `standardize-frontmatter` → fix YAML
3. `build-tags` → apply taxonomy
4. `fix-links` → repair connections
5. Final summary report

## Important
- **Never modify Excalidraw files** (`.excalidraw.md`) — they have special frontmatter
- **Never modify `.obsidian/` configs**
- **Never delete files** — only report issues
- **Ask before making bulk changes** that affect more than 10 files
