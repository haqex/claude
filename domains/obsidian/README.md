# Obsidian Domain

Diagram generation skills for Obsidian vaults. Produces interactive Excalidraw diagrams, Obsidian Canvas maps, and inline Mermaid diagrams.

## Skills

| Skill | Command | Description |
|-------|---------|-------------|
| generate-diagrams | `/project:generate-diagrams <topic>` | Full suite — generates Excalidraw + Canvas + Mermaid |
| generate-excalidraw | `/project:generate-excalidraw <topic>` | Single interactive Excalidraw diagram |
| generate-canvas | `/project:generate-canvas <topic>` | Single Obsidian Canvas node-edge map |
| generate-mermaid | `/project:generate-mermaid <topic>` | Inline Mermaid diagrams in markdown |

## Rules

- **diagram-standards.md** — Auto-triggers diagram generation for system design, architecture, database, API, and workflow tasks

## Reference Docs

Located in `.claude/skills/generate-diagrams/`:

| File | Purpose |
|------|---------|
| excalidraw-ref.md | Complete Excalidraw JSON schema and element types |
| canvas-ref.md | Canvas JSON format, node types, edge format |
| mermaid-ref.md | All 8 Mermaid diagram types with syntax |
| color-palette.md | Semantic color system for all formats |

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/compress_excalidraw.py` | LZ-String compression for Excalidraw files |

### Dependencies

```bash
pip3 install lzstring
```

## Usage

```bash
# Load into a Claude Code session
claude --add-dir ~/developer/enterprise/claude/domains/obsidian

# Or deploy to the vault permanently
../../scripts/deploy.sh obsidian ~/Documents/Obsidian\ Vault
```
