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

  - id: diagrams
    skill: generate-diagrams
    domain: obsidian
    args: "{{ingest.topic}}"
    after: [ingest]
    on_error: skip

  - id: moc
    skill: generate-moc
    domain: obsidian
    args: "YouTube"
    after: [ingest]
    on_error: skip
---

# youtube-research Pipeline

Runs the full knowledge capture workflow for a YouTube video:

1. **ingest** (`youtube-to-skill`) — fetches transcript, writes a dense vault note, generates a SKILL.md capturing the how-to procedure from the video
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
| Generated skill | `domains/learn/.claude/skills/<skill-name>/SKILL.md` |
| Excalidraw diagram | `Excalidraw/<Topic> - System Design.excalidraw.md` |
| Canvas diagram | `Excalidraw/<Topic> - Component Map.canvas` |
| Mermaid diagrams | `Excalidraw/<Topic> - Diagrams.md` |
| YouTube MOC | `GitHub/University/YouTube/YouTube.md` |
