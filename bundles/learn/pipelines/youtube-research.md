---
---

---
name: youtube-research
description: Full research workflow for a YouTube video — ingests the transcript, writes a vault note, generates diagrams into the proposal folder, and updates the YouTube MOC
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
      - path: /Users/aymanhaque/developer/obsidian/obsvault/GitHub/University/YouTube/*/*.md
        description: vault note inside its video subfolder
      - path: proposals/????-??-??-*/PROPOSAL.md
        description: skill proposal folder (if video has procedural content)
  - id: diagrams
    skill: generate-diagrams
    domain: obsidian
    args: "{{ingest.topic}} — output to proposals/{{ingest.proposal_folder}}/"
    after:
      - ingest
    on_error: skip
    outputs:
      - path: proposals/????-??-??-*/Component Map.canvas
        description: Canvas node-edge map (inside proposal folder)
      - path: proposals/????-??-??-*/Diagrams.md
        description: Mermaid diagrams file (inside proposal folder)
  - id: moc
    skill: generate-moc
    domain: obsidian
    args: YouTube
    after:
      - ingest
    on_error: skip
    outputs:
      - path: /Users/aymanhaque/developer/obsidian/obsvault/GitHub/University/YouTube/YouTube.md
        description: YouTube MOC index
color: var(--mk-color-base-70)
---

# youtube-research Pipeline

Runs the full knowledge capture workflow for a YouTube video:

1. **ingest** (`youtube-to-skill`) — fetches transcript, writes a vault note to `GitHub/University/YouTube/<Title>/<Title>.md`, writes skill proposal to `proposals/<YYYY-MM-DD-name>/PROPOSAL.md`
2. **diagrams** (`generate-diagrams`) — generates Canvas + Mermaid diagrams directly into the proposal folder alongside `PROPOSAL.md`
3. **moc** (`generate-moc`) — updates the `YouTube` MOC to include the new note

## Usage

```
/project:run-pipeline youtube-research url=https://youtube.com/watch?v=<video-id>
```

## Outputs

| Artifact | Location |
|----------|----------|
| Vault note | `GitHub/University/YouTube/<Title>/<Title>.md` |
| Skill proposal | `claude/proposals/YYYY-MM-DD-<skill-name>/PROPOSAL.md` |
| Canvas diagram | `claude/proposals/YYYY-MM-DD-<skill-name>/Component Map.canvas` |
| Mermaid diagrams | `claude/proposals/YYYY-MM-DD-<skill-name>/Diagrams.md` |
| YouTube MOC | `GitHub/University/YouTube/YouTube.md` |

## Notes
- Diagrams live in the proposal folder, not a separate Excalidraw folder
- When the proposal is approved, diagrams move into the skill folder alongside SKILL.md
- Each video note is a Make.md folder note (filename = folder name)
