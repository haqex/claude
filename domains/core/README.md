# core Domain

Meta-skills for orchestrating other skills and pipelines across all domains.

## Skills

| Skill | Command | Description |
|-------|---------|-------------|
| run-pipeline | `/project:run-pipeline <name> [key=value ...]` | Execute a named pipeline from `pipelines/` |

## Usage

```bash
# Load into a Claude Code session
claude --add-dir ~/developer/enterprise/claude/domains/core

# List available pipelines
/project:run-pipeline

# Run a pipeline with inputs
/project:run-pipeline youtube-research url=https://youtube.com/watch?v=abc123
```

## Pipelines

Pipeline definitions live in `pipelines/` at the repo root. See [PIPELINE-FORMAT.md](../../pipelines/PIPELINE-FORMAT.md) for the definition schema.

| Pipeline | Description |
|----------|-------------|
| [youtube-research](../../pipelines/youtube-research.md) | Ingest YouTube video → vault note + skill + diagrams + MOC |

## Creating a Pipeline

1. Copy an existing pipeline from `pipelines/` as a starting point
2. Define your `inputs` and `steps` in the frontmatter
3. Reference skills by `domain` + `skill` name
4. Use `{{input.<key>}}` and `{{<step-id>.<field>}}` for interpolation
5. Run it: `/project:run-pipeline <your-pipeline-name> <inputs>`

See [PIPELINE-FORMAT.md](../../pipelines/PIPELINE-FORMAT.md) for full schema and interpolation reference.
