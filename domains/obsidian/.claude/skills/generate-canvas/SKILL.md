---
name: generate-canvas
description: Generate an Obsidian Canvas diagram with nodes, edges, and groups. Use when a node-edge relationship map is needed.
argument-hint: <description of what to diagram>
allowed-tools: Read, Write
---

# Generate Canvas Diagram

Generate an Obsidian Canvas for: **$ARGUMENTS**

## References
Read these before generating:
- [Canvas format](../generate-diagrams/canvas-ref.md)
- [Color palette](../generate-diagrams/color-palette.md)

## Steps

1. **Identify entities** — what are the nodes? (services, components, files, concepts)
2. **Identify relationships** — what connects to what? direction?
3. **Group by layer** — create group nodes for logical categories
4. **Build JSON** — nodes array + edges array + metadata
5. **Write file** — save as `.canvas` (plain JSON, no compression needed)

## Quick Template
```json
{
  "nodes": [
    {"id": "title", "type": "text", "text": "## Title", "x": 200, "y": -100, "width": 400, "height": 80, "color": "#00ffb3"},
    {"id": "group1", "type": "group", "label": "Layer Name", "x": 0, "y": 0, "width": 800, "height": 120, "color": "#228be6"},
    {"id": "node1", "type": "text", "text": "### Component\nDescription", "x": 20, "y": 20, "width": 160, "height": 80, "color": "#228be6"}
  ],
  "edges": [
    {"id": "e001", "fromNode": "node1", "toNode": "node2", "fromSide": "bottom", "toSide": "top", "styleAttributes": {}}
  ],
  "metadata": {"version": "1.0-1.0"}
}
```

## Canvas-Specific Features
- Use `"type": "file"` nodes to link to existing vault notes
- Use `"type": "group"` to create visual containers
- Markdown in text nodes renders in Obsidian (headings, bold, lists)

## Output
Save to: `Excalidraw/{Topic} - {DiagramType}.canvas`
