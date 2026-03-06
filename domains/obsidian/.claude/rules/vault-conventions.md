# Vault Conventions

## When to Apply
Apply these conventions on ALL vault file operations — creating, moving, renaming, or organizing files.

## Folder Placement

| Note Type | Folder |
|-----------|--------|
| Daily notes | `GitHub/Daily Notes/` |
| Course notes | `GitHub/University/{Course ID}/` (e.g., `CS 6310/`) |
| Enterprise projects | `GitHub/Enterprise/{Project}/` |
| Interview prep | `GitHub/Interview Prep/` |
| Resumes | `GitHub/Resumes/` |
| Mac/environment setup | `GitHub/Mac Set Up/` |
| Excalidraw diagrams | `Excalidraw/` |
| Canvas files | `Excalidraw/` |
| Images | `Images/` |
| Flower project | `flower/18F Customer Identification/` |

## File Naming
- **Regular notes**: `Title Case.md` — capitalize each word, no trailing spaces
- **Daily notes**: `YYYY-MM-DD.md` — ISO date format
- **Excalidraw**: `{Topic} - {DiagramType}.excalidraw.md`
- **Canvas**: `{Topic} - {DiagramType}.canvas`
- **Course assignments**: `Assignment {N}/Assignment {N}.md` (folder + file)
- **No special characters** in filenames except hyphens and spaces

## MOC / Index Files
- Every major folder should have an index file named `{Folder Name}.md`
- Index files use `type: moc` frontmatter
- Include a Make.md `sticker` and `color` for visual identity
- Include dataview queries for dynamic content listing

## Image Handling
- All images go in `Images/` folder
- Reference with `![[image-name.png]]` embed syntax
- Image converter plugin auto-converts to WEBP at 75% quality
- Use descriptive filenames, not `CleanShot...` defaults when possible

## Git Conventions
- obsidian-git basePath: `GitHub/` — only this folder syncs
- Auto-save every 5 minutes
- Don't commit `.obsidian/` config changes without asking

## Do NOT
- Create files outside the vault path
- Modify `.obsidian/` plugin configs without asking
- Delete files without confirmation
- Use inline `#tag` format — tags belong in frontmatter
- Create notes without frontmatter
- Leave MOC/index files empty
