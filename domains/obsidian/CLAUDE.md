# Obsidian Vault — Claude Code Project Instructions

## Vault Info
- **Path**: `/Users/aymanhaque/Documents/Obsidian Vault`
- **Theme**: Minimal, accent `#00ffb3`, dark mode
- **Git**: obsidian-git plugin, basePath `GitHub/`, autosave 5min

## Core Rules

### Always Generate Diagrams
When given ANY design task, **always generate comprehensive visual diagrams** alongside the deliverable:
1. **Excalidraw** (`.excalidraw.md`) — interactive system design, architecture overviews
2. **Canvas** (`.canvas`) — component relationship maps, node-edge diagrams
3. **Mermaid** (inline in `.md`) — DFD, ERD, sequences, state, class, mindmap

### Always Use Proper Note Structure
When creating or editing ANY note:
1. **Frontmatter** — every note must have `tags`, `created`, `type`. See `.claude/skills/manage-vault/frontmatter-schema.md`
2. **Tags** — use the hierarchical taxonomy (`type/`, `course/`, `project/`, `topic/`). See `.claude/skills/manage-vault/tag-taxonomy.md`
3. **Wikilinks** — always use `[[wikilinks]]` when referencing other vault notes
4. **Templates** — apply the matching template from `.claude/skills/manage-vault/note-templates.md`

## Folder Conventions
| Folder | Purpose |
|--------|---------|
| `GitHub/` | Main content (University, Enterprise, Interview Prep, Daily Notes, Resumes) |
| `GitHub/Daily Notes/` | Daily notes (YYYY-MM-DD format) |
| `GitHub/University/{Course}/` | Course notes, assignments, practice tests |
| `GitHub/Enterprise/{Project}/` | Enterprise project documentation |
| `GitHub/Interview Prep/` | STAR method stories, questions, prep |
| `Excalidraw/` | All Excalidraw drawings and Canvas files |
| `Images/` | Media assets |
| `flower/` | 18F Customer Identification project |

## File Naming
- **Notes**: `Title Case.md`
- **Daily notes**: `YYYY-MM-DD.md`
- **Excalidraw**: `Excalidraw/{Topic} - {DiagramType}.excalidraw.md`
- **Canvas**: `Excalidraw/{Topic} - {DiagramType}.canvas`
- **Mermaid**: inline in the relevant project markdown file

## Skills Available
### Diagrams
- `/project:generate-diagrams <topic>` — full diagram suite
- `/project:generate-excalidraw <topic>` — single Excalidraw
- `/project:generate-canvas <topic>` — single Canvas
- `/project:generate-mermaid <topic>` — inline Mermaid diagrams

### Notes & Content
- `/project:create-note <type> <topic>` — create structured note
- `/project:manage-daily-notes <operation>` — daily/weekly/monthly notes
- `/project:generate-moc <folder>` — generate Map of Content
- `/project:generate-dataview <type>` — dataview dashboards
- `/project:refactor-content <operation> <target>` — summarize, study guide, split, merge, enhance

### Vault Management
- `/project:manage-vault <operation>` — audit, standardize, fix links
- `/project:organize-vault <operation>` — cleanup, naming, orphans, images

### Orchestration
- `/project:workflow <goal>` — plan and execute a multi-skill workflow from a high-level goal

## Plugins Available
obsidian-excalidraw-plugin, obsidian-git, calendar, dataview, make-md, obsidian-icon-folder, obsidian-annotator, image-converter, symbols-prettifier

## Excalidraw Critical Note
Compression MUST use **LZ-String** (`compressToBase64`), NOT zlib. See `.claude/skills/generate-diagrams/scripts/compress_excalidraw.py`.

## Do NOT
- Modify `.obsidian/` plugin configs without asking
- Delete files without confirmation
- Create files outside the vault path
- Use zlib for Excalidraw compression (it will break)
- Create notes without frontmatter
- Use inline `#tag` format — tags belong in frontmatter arrays
