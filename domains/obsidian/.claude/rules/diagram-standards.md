# Diagram Standards

## When to Generate Diagrams
ALWAYS generate diagrams when the task involves:
- System design or architecture
- Feature planning or technical spec
- Database or data model design
- API or service interaction design
- Interview prep for system design topics
- Course notes for technical subjects
- Project planning or workflow design

## What to Generate
Generate ALL applicable formats — not just one:
1. **Excalidraw** for visual, interactive, presentation-quality diagrams
2. **Canvas** for component maps that link to vault notes
3. **Mermaid** for auto-layout technical diagrams (DFD, ERD, sequence, state, class, mindmap)

## File Placement
- Excalidraw files: `Excalidraw/{Topic} - {Type}.excalidraw.md`
- Canvas files: `Excalidraw/{Topic} - {Type}.canvas`
- Mermaid markdown: inline in the project's folder or `Excalidraw/{Topic} - Diagrams.md`

## Naming Convention
- Use descriptive topic names, not dates
- Suffix with diagram type: `System Design`, `Component Map`, `Diagrams`, `ERD`, `Architecture`
- Examples:
  - `Excalidraw/E-Commerce - System Design.excalidraw.md`
  - `Excalidraw/E-Commerce - Component Map.canvas`
  - `GitHub/University/CS 6310/P1 - Diagrams.md`

## Technical Requirements
- Excalidraw: LZ-String compression (NEVER zlib)
- Excalidraw: roughness=0, fontFamily=2, dark theme
- Canvas: plain JSON, 16-char hex IDs
- Mermaid: fenced code blocks, multiple diagram types per file
- All formats: use the semantic color palette from `.claude/skills/generate-diagrams/color-palette.md`
