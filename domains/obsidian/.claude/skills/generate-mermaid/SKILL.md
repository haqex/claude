---
name: generate-mermaid
description: Generate Mermaid diagrams inline in a markdown note. Use when auto-layout diagrams are needed (flowcharts, ERD, sequences, state diagrams, class diagrams, mind maps, gantt).
argument-hint: <description of what to diagram>
allowed-tools: Read, Write, Edit
---

# Generate Mermaid Diagrams

Generate inline Mermaid diagrams for: **$ARGUMENTS**

## References
Read this before generating:
- [Mermaid format](../generate-diagrams/mermaid-ref.md)

## Steps

1. **Analyze the topic** — what diagram types apply?
2. **Generate ALL applicable types** from this list:
   - `graph TD/LR` — flowchart / DFD
   - `sequenceDiagram` — service interactions
   - `erDiagram` — entity relationships
   - `stateDiagram-v2` — state machines / lifecycle
   - `classDiagram` — OOP / domain model
   - `mindmap` — topic breakdown
   - `gantt` — timeline / project plan
   - `pie` — data distribution
3. **Write to markdown** — create a `.md` file with all diagrams, each in its own section with explanatory text

## Output Format
```markdown
---
tags: [diagram, {topic}]
---

# {Topic} — Diagram Suite

## 1. Data Flow Diagram

> Description of what this shows.

\`\`\`mermaid
graph TD
    ...
\`\`\`

---

## 2. Entity Relationship Diagram

> Description of what this shows.

\`\`\`mermaid
erDiagram
    ...
\`\`\`
```

## Quality Checklist
- [ ] Every diagram has a descriptive section header
- [ ] Brief explanation before each diagram
- [ ] Horizontal rules between sections
- [ ] Tags in frontmatter
- [ ] At least 3 different diagram types per file
- [ ] Diagrams are under 30 nodes each (split if larger)

## Output
Save to relevant project folder or `Excalidraw/{Topic} - Diagrams.md`
