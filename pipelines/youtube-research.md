---
name: youtube-research
description: Full research workflow for a YouTube video — ingests the transcript, writes a vault note, generates diagrams for the main topic, and updates the YouTube MOC
inputs:
  - name: url
    description: YouTube video URL (e.g. https://youtube.com/watch?v=abc123)
    required: true
steps:
  - id: ingest
    skill: youtube-to-skill
    domain: learn
    args: "{{input.url}}"
    outputs:
      - path: "/Users/aymanhaque/Documents/Obsidian Vault/GitHub/University/YouTube/*.md"
        description: vault note for the video
      - path: "proposals/????-??-??-*.md"
        description: skill proposal (if video has procedural content)

  - id: diagrams
    skill: generate-diagrams
    domain: obsidian
    args: "{{ingest.topic}}"
    after: [ingest]
    on_error: skip
    outputs:
      - path: "/Users/aymanhaque/Documents/Obsidian Vault/Excalidraw/* - System Design.excalidraw.md"
        description: Excalidraw interactive diagram
      - path: "/Users/aymanhaque/Documents/Obsidian Vault/Excalidraw/* - Component Map.canvas"
        description: Canvas node-edge map
      - path: "/Users/aymanhaque/Documents/Obsidian Vault/Excalidraw/* - Diagrams.md"
        description: Mermaid diagrams file

  - id: moc
    skill: generate-moc
    domain: obsidian
    args: "YouTube"
    after: [ingest]
    on_error: skip
    outputs:
      - path: "/Users/aymanhaque/Documents/Obsidian Vault/GitHub/University/YouTube/YouTube.md"
        description: YouTube MOC index
---

# youtube-research Pipeline

Runs the full knowledge capture workflow for a YouTube video:

1. **ingest** (`youtube-to-skill`) — fetches transcript, writes a dense vault note, writes a skill proposal to `proposals/`
2. **diagrams** (`generate-diagrams`) — generates Excalidraw + Canvas + Mermaid diagrams for the video's primary topic
3. **moc** (`generate-moc`) — updates the `YouTube` MOC to include the new note

## Usage

```
/project:run-pipeline youtube-research url=https://youtube.com/watch?v=<video-id>
```

## Outputs

| Artifact | Location |
|----------|----------|
| Vault note | `GitHub/University/YouTube/<Title>.md` |
| Skill proposal | `proposals/YYYY-MM-DD-<skill-name>.md` |
| Excalidraw diagram | `Excalidraw/<Topic> - System Design.excalidraw.md` |
| Canvas diagram | `Excalidraw/<Topic> - Component Map.canvas` |
| Mermaid diagrams | `Excalidraw/<Topic> - Diagrams.md` |
| YouTube MOC | `GitHub/University/YouTube/YouTube.md` |
