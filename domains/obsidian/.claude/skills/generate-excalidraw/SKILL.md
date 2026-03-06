---
name: generate-excalidraw
description: Generate a single interactive Excalidraw diagram for Obsidian. Use when only an Excalidraw visual is needed, not the full diagram suite.
argument-hint: <description of what to diagram>
allowed-tools: Read, Write, Bash
---

# Generate Excalidraw Diagram

Generate an interactive Excalidraw diagram for: **$ARGUMENTS**

## References
Read these before generating:
- [Excalidraw format](../generate-diagrams/excalidraw-ref.md)
- [Color palette](../generate-diagrams/color-palette.md)

## Steps

1. **Design the layout** — identify components, relationships, layers
2. **Build elements** — create rectangles, text, arrows, labels using the format spec
3. **Apply colors** — use the semantic color palette (auth=purple, data=blue, etc.)
4. **Compress** — use LZ-String:
   ```python
   from lzstring import LZString
   import json
   lz = LZString()
   compressed = lz.compressToBase64(json.dumps(diagram_data))
   ```
5. **Write file** — wrap in the `.excalidraw.md` template and save to `Excalidraw/` folder

## Element Construction Pattern
```python
# Rectangle with bound text label
rect = {
    'id': 'my_rect', 'type': 'rectangle',
    'x': 100, 'y': 100, 'width': 170, 'height': 70,
    'strokeColor': '#228be6', 'backgroundColor': '#1c3a5e',
    'fillStyle': 'solid', 'strokeWidth': 2, 'roughness': 0,
    'roundness': {'type': 3},
    'boundElements': [{'type': 'text', 'id': 'my_rect_t'}],
    # ... other required fields (see excalidraw-ref.md)
}
text = {
    'id': 'my_rect_t', 'type': 'text',
    'text': 'My Service', 'fontSize': 14, 'fontFamily': 2,
    'textAlign': 'center', 'verticalAlign': 'middle',
    'containerId': 'my_rect',
    # ... other required fields
}
```

## Output
Save to: `Excalidraw/{Topic} - {DiagramType}.excalidraw.md`
