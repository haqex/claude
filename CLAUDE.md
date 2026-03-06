# Claude Tools Repository

Centralized hub for all Claude Code customizations — skills, rules, reference docs, and scripts.

## Structure

```
domains/          # Self-contained skill domains (one per project/workflow type)
  obsidian/       # Obsidian vault diagramming skills
shared/           # Cross-domain resources and templates
scripts/          # Repo-level utilities (deploy, scaffold)
```

## How Domains Work

Each domain under `domains/` is a self-contained unit with its own `.claude/` directory:
- `.claude/skills/` — Claude Code skills (invokable via `/project:<name>`)
- `.claude/rules/` — Auto-loaded rules that trigger Claude behavior
- `CLAUDE.md` — Deployable project instructions for the target project

### Using a Domain

**Option A — `--add-dir` (recommended):**
```bash
claude --add-dir ~/developer/enterprise/claude/domains/obsidian
```

**Option B — Symlink deployment:**
```bash
./scripts/deploy.sh obsidian ~/path/to/target/project
```

## Adding a New Domain

```bash
./scripts/new-domain.sh my-domain-name
```

Then add skills under `domains/my-domain-name/.claude/skills/` and rules under `.claude/rules/`.

## Conventions

- Skills follow Claude Code conventions: `SKILL.md` with frontmatter (`name`, `description`, `argument-hint`, `allowed-tools`)
- Reference docs and scripts live alongside their skill in the same directory
- Sub-skills reference shared resources via relative paths (e.g., `../generate-diagrams/color-palette.md`)
- Each domain has its own `README.md` documenting what's included
