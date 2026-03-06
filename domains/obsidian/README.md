# Obsidian Domain

Complete Obsidian vault management — diagram generation, structured notes, frontmatter, tags, dataview dashboards, MOCs, daily notes, and vault organization.

## Skills

### Diagrams
| Skill | Command | Description |
|-------|---------|-------------|
| generate-diagrams | `/project:generate-diagrams <topic>` | Full suite — Excalidraw + Canvas + Mermaid |
| generate-excalidraw | `/project:generate-excalidraw <topic>` | Single interactive Excalidraw diagram |
| generate-canvas | `/project:generate-canvas <topic>` | Single Obsidian Canvas node-edge map |
| generate-mermaid | `/project:generate-mermaid <topic>` | Inline Mermaid diagrams in markdown |

### Notes & Content
| Skill | Command | Description |
|-------|---------|-------------|
| create-note | `/project:create-note <type> <topic>` | Structured note with frontmatter, template, tags |
| manage-daily-notes | `/project:manage-daily-notes <op>` | Daily notes, weekly/monthly summaries, backfill |
| generate-moc | `/project:generate-moc <folder>` | Map of Content with wikilinks + dataview |
| generate-dataview | `/project:generate-dataview <type>` | Dataview dashboards and query pages |
| refactor-content | `/project:refactor-content <op> <target>` | Summarize, study guide, split, merge, enhance |

### Vault Management
| Skill | Command | Description |
|-------|---------|-------------|
| manage-vault | `/project:manage-vault <op>` | Audit, standardize frontmatter, build tags, fix links |
| organize-vault | `/project:organize-vault <op>` | Fix naming, find orphans, clean images, restructure |

## Rules

| Rule | Triggers on |
|------|-------------|
| diagram-standards.md | System design, architecture, database, API, workflow tasks |
| note-standards.md | Creating or editing any markdown note |
| vault-conventions.md | Any vault file operation |

## Reference Docs

### Diagram References (in `generate-diagrams/`)
| File | Purpose |
|------|---------|
| excalidraw-ref.md | Excalidraw JSON schema and element types |
| canvas-ref.md | Canvas JSON format, node types, edges |
| mermaid-ref.md | All 8 Mermaid diagram types with syntax |
| color-palette.md | Semantic color system for all formats |

### Vault References (in `manage-vault/`)
| File | Purpose |
|------|---------|
| frontmatter-schema.md | Canonical YAML property definitions per note type |
| tag-taxonomy.md | Hierarchical tag system with categories |
| dataview-ref.md | DQL syntax, query patterns, ready-made dashboards |
| note-templates.md | Complete templates for 7 note types |

## Scripts

| Script | Purpose |
|--------|---------|
| `generate-diagrams/scripts/compress_excalidraw.py` | LZ-String compression for Excalidraw |

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
