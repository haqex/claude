---
name: organize-vault
description: Audit vault health, clean up files, fix naming, find orphans, and restructure the vault. Use when the vault needs maintenance or reorganization.
argument-hint: <operation> audit | fix-naming | find-orphans | clean-images | restructure
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

# Organize Vault

Operation: **$ARGUMENTS**

## References
- [Frontmatter schema](../manage-vault/frontmatter-schema.md)
- [Tag taxonomy](../manage-vault/tag-taxonomy.md)
- [Vault conventions rule](../../rules/vault-conventions.md)

## Vault Path
`/Users/aymanhaque/Documents/Obsidian Vault`

## Operations

### `audit`
Comprehensive vault health report. **Read-only — no modifications.**

Scan and report on:
1. **Empty files** — 0 bytes or whitespace only
2. **Missing frontmatter** — .md files without YAML block (exclude `.excalidraw.md`)
3. **Inconsistent frontmatter** — `tags` as string not array, missing `type`, missing `created`
4. **Broken wikilinks** — `[[links]]` to non-existent files
5. **Orphaned notes** — files with zero incoming links AND zero outgoing links
6. **Unused images** — files in `Images/` not referenced by `![[...]]` in any note
7. **Naming issues** — trailing spaces, inconsistent casing, special characters
8. **Empty MOCs** — index files with only sticker/color but no content
9. **Untagged notes** — notes without any tags
10. **Files in wrong folder** — notes whose `type` doesn't match their folder location

Output format:
```
## Vault Health Report

### Critical Issues (X)
- [file path]: issue description

### Warnings (X)
- [file path]: issue description

### Stats
- Total notes: X
- With frontmatter: X
- With tags: X
- With wikilinks: X
- Orphaned: X
- Empty: X
```

### `fix-naming`
Standardize file names:
1. Glob all .md files
2. Identify issues:
   - Trailing spaces in filename
   - Inconsistent casing (should be Title Case)
   - Double spaces
   - Special characters that shouldn't be there
3. **List proposed renames** and ask for confirmation before executing
4. Update any `[[wikilinks]]` that reference the old name

### `find-orphans`
Find notes with zero connections:
1. Build a link graph: for each note, track outgoing `[[links]]` and incoming references
2. Identify notes with:
   - Zero outgoing links AND zero incoming links (fully orphaned)
   - Zero incoming links only (unreferenced)
3. Exclude: MOC files, daily notes, Excalidraw files, images
4. Report with suggestions: "Consider linking from [[Parent Note]]"

### `clean-images`
Find unused images:
1. Glob all files in `Images/` (and any other image folders)
2. Grep all .md files for `![[image-name]]` references
3. Compare: images not referenced by any note
4. **List unused images** — do NOT delete them, only report
5. Report size savings if cleaned

### `restructure`
Move files to correct folders based on their type:
1. Read each note's `type` frontmatter field
2. Compare current folder to expected folder (per vault conventions)
3. **List proposed moves** and ask for confirmation
4. Execute moves and update any `[[wikilinks]]` that reference moved files

## Important Safety Rules
- **Never delete files** — only report and suggest
- **Ask confirmation** before renaming or moving more than 3 files
- **Never modify `.obsidian/`** configs
- **Never modify Excalidraw files** (`.excalidraw.md`)
- **Skip `.trash/` and `Backups/`** folders entirely
