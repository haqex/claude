# Excalidraw Format Reference

## File Format (.excalidraw.md)

The Obsidian Excalidraw plugin stores diagrams as markdown files with LZ-String compressed JSON.

### Template (must match EXACTLY)
```
---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW ...==

# Excalidraw Data

## Text Elements
%%
## Drawing
```compressed-json
{LZ-STRING COMPRESSED JSON}
```
%%
```

### Compression Method
**CRITICAL: Must use LZ-String, NOT zlib.**
```python
from lzstring import LZString
lz = LZString()
compressed = lz.compressToBase64(json.dumps(data))
```
Dependency: `pip3 install lzstring`

The helper script at `scripts/compress_excalidraw.py` provides `build_excalidraw_md(data_dict)` which returns the complete file content.

## JSON Schema

```json
{
  "type": "excalidraw",
  "version": 2,
  "source": "https://excalidraw.com",
  "elements": [],
  "appState": {
    "theme": "dark",
    "viewBackgroundColor": "#1e1e1e",
    "gridSize": 20,
    "gridModeEnabled": false,
    "objectsSnapModeEnabled": true
  },
  "files": {}
}
```

## Element Core Properties (ALL elements share these)

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique ID (use 16-char hex) |
| `type` | string | `rectangle`, `ellipse`, `diamond`, `text`, `arrow`, `line`, `frame`, `image` |
| `x`, `y` | number | Top-left position (origin = top-left of canvas) |
| `width`, `height` | number | Dimensions |
| `angle` | number | Rotation in radians (0 = normal) |
| `strokeColor` | string | Hex color `"#rrggbb"` |
| `backgroundColor` | string | Hex color or `"transparent"` |
| `fillStyle` | string | `"solid"`, `"hachure"`, `"cross-hatch"` |
| `strokeWidth` | number | 1, 2, or 4 |
| `strokeStyle` | string | `"solid"`, `"dashed"`, `"dotted"` |
| `roughness` | number | 0=architect (clean), 1=normal, 2=artist (sketchy) |
| `opacity` | number | 0–100 |
| `groupIds` | array | Group IDs this element belongs to |
| `frameId` | string/null | Parent frame ID |
| `roundness` | object/null | `{"type": 3}` for rounded corners on rectangles |
| `seed` | number | Random int for rendering consistency |
| `versionNonce` | number | Random int for versioning |
| `isDeleted` | boolean | Always `false` for visible elements |
| `boundElements` | array/null | Elements bound to this one |
| `updated` | number | Timestamp in ms |
| `locked` | boolean | Lock state |

## Element Types

### Rectangle
Standard box shape. Use `roundness: {"type": 3}` for rounded corners.
```json
{
  "type": "rectangle",
  "roundness": {"type": 3},
  "boundElements": [
    {"type": "text", "id": "text_id"},
    {"type": "arrow", "id": "arrow_id"}
  ]
}
```

### Ellipse
Circle or oval. Same properties as rectangle minus `roundness`.

### Diamond
Decision shape. Same properties as rectangle.

### Text
```json
{
  "type": "text",
  "text": "Label Text",
  "fontSize": 16,
  "fontFamily": 2,
  "textAlign": "center",
  "verticalAlign": "middle",
  "containerId": "parent_shape_id",
  "originalText": "Label Text",
  "autoResize": true,
  "lineHeight": 1.25
}
```
**fontFamily**: 1=Virgil (handwritten), 2=Helvetica (clean), 3=Cascadia (mono)
**containerId**: Set to parent shape ID for text inside shapes.

### Arrow
```json
{
  "type": "arrow",
  "points": [[0, 0], [dx, dy]],
  "startBinding": {"elementId": "from_id", "focus": 0, "gap": 5, "fixedPoint": null},
  "endBinding": {"elementId": "to_id", "focus": 0, "gap": 5, "fixedPoint": null},
  "startArrowhead": null,
  "endArrowhead": "arrow",
  "elbowed": false
}
```
**focus**: -1 to 1, controls which side of shape the arrow connects to (0 = center).
**endArrowhead**: `"arrow"`, `"dot"`, `"bar"`, or `null`.

### Frame
Container for grouping elements visually:
```json
{"type": "frame", "name": "Frame Title"}
```

## Binding System

### Shape → Text (label inside shape)
- Shape: `boundElements: [{"type": "text", "id": "text_id"}]`
- Text: `containerId: "shape_id"`

### Shape → Arrow (connection)
- Shape: `boundElements: [..., {"type": "arrow", "id": "arrow_id"}]`
- Arrow: `startBinding: {"elementId": "shape_id", ...}` or `endBinding`

### Grouping
Elements with matching values in `groupIds` array move together.

## Positioning Guidelines

### Layout Grid (for system design diagrams)
- **Row spacing**: 130–150px between layers
- **Column spacing**: 200–220px between sibling components
- **Shape sizes**: 170×70 for services, 170×65 for databases, 280×65 for wide components
- **Title**: y=-90, fontSize=28, color=#00ffb3
- **Layer labels**: fontSize=11, opacity=70, positioned at x=-30 left of shapes
