# Canvas Format Reference

## File Format (.canvas)

Obsidian Canvas files are plain JSON — no compression needed. Simplest format to generate.

### Schema
```json
{
  "nodes": [...],
  "edges": [...],
  "metadata": {"version": "1.0-1.0"}
}
```

## Node Types

### Text Node
```json
{
  "id": "16charhexstring0",
  "type": "text",
  "text": "## Heading\nDescription here",
  "x": 100,
  "y": 100,
  "width": 200,
  "height": 80,
  "color": "#228be6"
}
```
The `text` field supports full Obsidian markdown (headings, bold, lists, links).

### File Node (link to vault note)
```json
{
  "id": "16charhexstring1",
  "type": "file",
  "file": "GitHub/University/CS 6310/Notes.md",
  "x": 100,
  "y": 100,
  "width": 250,
  "height": 150
}
```
Path is relative to vault root.

### Link Node (external URL)
```json
{
  "id": "16charhexstring2",
  "type": "link",
  "url": "https://example.com",
  "x": 100,
  "y": 100,
  "width": 250,
  "height": 150
}
```

### Group Node (visual container)
```json
{
  "id": "16charhexstring3",
  "type": "group",
  "label": "Group Name",
  "x": 0,
  "y": 0,
  "width": 800,
  "height": 200,
  "color": "#fab005"
}
```
Groups are visual-only. Child nodes must have coordinates inside the group bounds.

## Edge Format
```json
{
  "id": "e001",
  "fromNode": "source_node_id",
  "toNode": "target_node_id",
  "fromSide": "bottom",
  "toSide": "top",
  "styleAttributes": {}
}
```

### Side Values
`"top"`, `"right"`, `"bottom"`, `"left"`

Choose sides based on layout direction:
- Top-to-bottom flow: `fromSide: "bottom"`, `toSide: "top"`
- Left-to-right flow: `fromSide: "right"`, `toSide: "left"`

### Edge Labels (optional)
```json
{
  "id": "e001",
  "fromNode": "a",
  "toNode": "b",
  "fromSide": "right",
  "toSide": "left",
  "label": "calls",
  "styleAttributes": {}
}
```

## Color Values
Canvas uses Obsidian's named color variables or hex codes:
- `"#e03131"` (red)
- `"#fab005"` (yellow)
- `"#40c057"` (green)
- `"#228be6"` (blue)
- `"#7950f2"` (purple)
- `"#15aabf"` (cyan)
- `"#fd7e14"` (orange)
- `"#00ffb3"` (vault accent / title)

## ID Format
16-character hex strings: `"a1b2c3d4e5f60001"`

## Layout Guidelines

### System/Architecture Diagrams
- **Title node**: y=-120, width=400, height=80, color=accent
- **Group nodes**: full-width containers for each layer (800px wide)
- **Content nodes**: 160–200px wide, 60–80px tall
- **Vertical spacing**: 120px between layer groups, 60px padding inside groups
- **Horizontal spacing**: 20px between sibling nodes

### Relationship Maps
- Center the primary entity
- Radial layout for related entities
- Use groups to cluster by category
