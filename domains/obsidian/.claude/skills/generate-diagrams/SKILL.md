---
name: generate-diagrams
description: Generate comprehensive visual diagrams (Excalidraw, Canvas, Mermaid) for any task. Use this whenever the user gives a design task, system design, feature plan, interview prep, or any technical concept that benefits from visualization.
argument-hint: <topic or description of what to diagram>
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

# Generate Comprehensive Diagrams

You are generating a complete suite of visual diagrams for: **$ARGUMENTS**

## Reference Files
Before generating, read these references for format specs:
- [Excalidraw format](excalidraw-ref.md) — interactive visual diagrams
- [Canvas format](canvas-ref.md) — node-edge relationship maps
- [Mermaid format](mermaid-ref.md) — auto-layout inline diagrams
- [Color palette](color-palette.md) — consistent color system
- Compression script: `scripts/compress_excalidraw.py`

## Generation Protocol

### Step 1: Analyze the Topic
Determine which diagram types are applicable:
- **System Design / Architecture** → Excalidraw + Canvas + Mermaid flowchart + Mermaid mindmap
- **API / Service Design** → Mermaid sequence + Excalidraw architecture + ERD
- **Database Design** → Mermaid ERD + Class diagram + Canvas relationship map
- **Workflow / Process** → Mermaid state diagram + Mermaid flowchart + Excalidraw
- **Feature Planning** → Mermaid mindmap + Canvas component map + Excalidraw
- **Interview Prep** → All applicable types for the specific topic

### Step 2: Generate Excalidraw Diagram
1. Build the element JSON (rectangles, text, arrows) following `excalidraw-ref.md`
2. Use the color palette from `color-palette.md` for semantic coloring
3. Compress using LZ-String via Python:
   ```python
   from lzstring import LZString
   import json
   lz = LZString()
   compressed = lz.compressToBase64(json.dumps(diagram_data))
   ```
4. Write to `Excalidraw/{Topic} - System Design.excalidraw.md`

### Step 3: Generate Canvas Diagram
1. Build nodes and edges JSON following `canvas-ref.md`
2. Use groups for logical layers
3. Write to `Excalidraw/{Topic} - Component Map.canvas`

### Step 4: Generate Mermaid Diagrams
1. Create a markdown file with ALL applicable Mermaid diagrams
2. Include at minimum:
   - **DFD** (Level 0 data flow)
   - **ERD** (if data entities exist)
   - **Sequence diagram** (if service interactions exist)
   - **State diagram** (if lifecycle/workflow exists)
   - **Mind map** (system/topic breakdown)
3. Write to the relevant project folder as `{Topic} - Diagrams.md`

### Step 5: Summary
After generating, list all created files with descriptions.

## Quality Standards
- Every shape must have a label
- Every arrow must connect two shapes (use proper bindings in Excalidraw)
- Use the semantic color system — don't use random colors
- Excalidraw: roughness=0 (clean/architect style), fontFamily=2 (Helvetica)
- Canvas: include group nodes for logical layers
- Mermaid: add section headers and descriptions between diagrams
- Include a title element in every diagram
