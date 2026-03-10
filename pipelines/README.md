# Pipelines

Preset multi-step workflows that chain skills together. Each pipeline takes inputs, runs skills in sequence, and passes outputs from one step to the next.

## Running a Pipeline

Load the core domain, then invoke `run-pipeline` with the pipeline name and any required inputs:

```bash
claude --add-dir ~/developer/enterprise/claude/domains/core
```

```
/project:run-pipeline <pipeline-name> [key=value ...]
```

**Example:**
```
/project:run-pipeline youtube-research url=https://youtube.com/watch?v=abc123
```

To see what a pipeline does before running it, just read its `.md` file here — the frontmatter lists every step.

---

## Available Pipelines

| Pipeline | Inputs | What it does |
|----------|--------|--------------|
| [youtube-research](./youtube-research.md) | `url` | Ingest a YouTube video → vault note + generated skill + diagrams + MOC update |

---

## Creating a Pipeline

1. Create a new `.md` file in this directory
2. Add YAML frontmatter with `name`, `description`, `inputs`, and `steps`
3. Each step references a `skill` + `domain`, with `args` that can interpolate inputs and previous step outputs
4. Run it with `/project:run-pipeline <your-pipeline-name>`

**Minimal example:**
```yaml
---
name: my-pipeline
description: What this pipeline does
inputs:
  - name: topic
    description: The topic to work with
    required: true
steps:
  - id: notes
    skill: create-note
    domain: obsidian
    args: "reference {{input.topic}}"

  - id: moc
    skill: generate-moc
    domain: obsidian
    args: "{{input.topic}}"
    after: [notes]
    on_error: skip
---
```

See [PIPELINE-FORMAT.md](./PIPELINE-FORMAT.md) for the full schema, interpolation reference, and error handling options.
