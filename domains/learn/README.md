# learn Domain

Knowledge ingestion pipelines — takes external content and produces vault notes + reusable skills.

## Skills

| Skill | Command | Description |
|-------|---------|-------------|
| youtube-to-skill | `/project:youtube-to-skill <url> [domain]` | Ingest a YouTube video → vault note + generated SKILL.md |

## How It Works

Each pipeline in this domain takes external content as input and produces two artifacts:
1. **Vault note** — concise, dense summary written to the Obsidian vault
2. **Generated skill** — a reusable SKILL.md capturing the how-to procedure, placed in `domains/<output-domain>/.claude/skills/`

The `output-domain` argument controls where the generated skill lands. Defaults to `learn`.

## Usage

```bash
# Load into a Claude Code session
claude --add-dir ~/developer/enterprise/claude/domains/learn

# Ingest a video, generate skill in the learn domain (default)
/project:youtube-to-skill https://youtube.com/watch?v=abc123

# Ingest a video, place generated skill in a specific domain
/project:youtube-to-skill https://youtube.com/watch?v=abc123 obsidian
```

## Reference Docs

| File | Purpose |
|------|---------|
| `youtube-to-skill/transcript-guide.md` | How to fetch and clean YouTube transcripts via WebFetch |
