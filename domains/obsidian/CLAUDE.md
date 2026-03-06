# Obsidian Vault — Claude Code Project Instructions

## Vault Info
- **Path**: `/Users/aymanhaque/Documents/Obsidian Vault`
- **Theme**: Minimal, accent `#00ffb3`, dark mode
- **Git**: obsidian-git plugin, basePath `GitHub/`, autosave 5min

## Core Rule: Always Generate Diagrams
When given ANY task (feature design, system planning, interview prep, course notes, project work), **always generate comprehensive visual diagrams** alongside the deliverable. Use the `/project:generate-diagrams` skill or generate manually using:

1. **Excalidraw** (`.excalidraw.md`) — interactive system design, architecture overviews
2. **Canvas** (`.canvas`) — component relationship maps, node-edge diagrams
3. **Mermaid** (inline in `.md`) — DFD, ERD, sequences, state, class, mindmap

Generate ALL applicable diagram types, not just one. See `.claude/skills/generate-diagrams/` for format specs.

## Folder Conventions
| Folder | Purpose |
|--------|---------|
| `GitHub/` | Main content (University, Enterprise, Interview Prep, Daily Notes, Resumes) |
| `GitHub/Daily Notes/` | Daily notes (YYYY-MM-DD format) |
| `Excalidraw/` | All Excalidraw drawings and Canvas files |
| `Images/` | Media assets |
| `flower/` | 18F Customer Identification project |

## File Naming
- Excalidraw: `Excalidraw/{Topic} - {DiagramType}.excalidraw.md`
- Canvas: `Excalidraw/{Topic} - {DiagramType}.canvas`
- Mermaid notes: placed inline in the relevant project markdown file

## Plugins Available
obsidian-excalidraw-plugin, obsidian-git, calendar, dataview, make-md, obsidian-icon-folder, obsidian-annotator, image-converter, symbols-prettifier

## Excalidraw Critical Note
Compression MUST use **LZ-String** (`compressToBase64`), NOT zlib. See `.claude/skills/generate-diagrams/scripts/compress_excalidraw.py`.

## Do NOT
- Modify `.obsidian/` plugin configs without asking
- Delete files without confirmation
- Create files outside the vault path
- Use zlib for Excalidraw compression (it will break)
