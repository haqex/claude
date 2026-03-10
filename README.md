# claude

Centralized, version-controlled Claude Code skills, rules, and reference docs. Organized by domain for easy deployment to any project.

## Domains

| Domain | Description | Skills |
|--------|-------------|--------|
| [obsidian](domains/obsidian/) | Obsidian vault management | `generate-diagrams`, `create-note`, `manage-vault`, `workflow`, +8 more |
| [learn](domains/learn/) | Knowledge ingestion pipelines | `youtube-to-skill` |
| [core](domains/core/) | Meta-skills and pipeline runner | `run-pipeline`, `approve-proposal` |

## Quick Start

### Use with `--add-dir`

Load a domain's skills into any Claude Code session:

```bash
claude --add-dir ~/developer/enterprise/claude/domains/obsidian
```

All skills and rules from the domain are immediately available.

### Use with symlinks

Deploy a domain permanently into a project:

```bash
./scripts/deploy.sh obsidian ~/Documents/Obsidian\ Vault
```

This symlinks `.claude/skills/` and `.claude/rules/` from the repo into the target project.

### Create a new domain

```bash
./scripts/new-domain.sh code-review
```

Scaffolds the standard directory structure under `domains/code-review/`.

## Repository Structure

```
├── CLAUDE.md                    # Repo instructions (loaded by Claude Code)
├── README.md                    # This file
├── domains/
│   ├── obsidian/                # Obsidian vault management
│   │   ├── CLAUDE.md            # Deployable project instructions
│   │   ├── README.md            # Domain documentation
│   │   └── .claude/
│   │       ├── rules/           # Auto-trigger rules
│   │       └── skills/          # Invokable skills
│   ├── learn/                   # Knowledge ingestion pipelines
│   │   ├── CLAUDE.md
│   │   ├── README.md
│   │   └── .claude/
│   │       └── skills/          # youtube-to-skill, ...
│   └── core/                    # Meta-skills (pipeline runner)
│       ├── CLAUDE.md
│       ├── README.md
│       └── .claude/
│           └── skills/          # run-pipeline, approve-proposal
├── pipelines/                   # Pipeline definitions
│   ├── PIPELINE-FORMAT.md       # Schema reference
│   └── youtube-research.md      # Example pipeline
├── outcomes/                    # Post-run pipeline reports (auto-generated)
├── proposals/                   # Pending repo changes awaiting approval
├── shared/
│   └── templates/               # Starter templates for new domains
└── scripts/
    ├── deploy.sh                # Deploy a domain to a target project
    └── new-domain.sh            # Scaffold a new domain
```

## Skill Convention

Each skill directory contains:
- `SKILL.md` — Main instructions with frontmatter (required)
- Reference docs — Format specs, color palettes, etc.
- `scripts/` — Utility scripts Claude can execute during the skill

Skills are invoked via `/project:<skill-name> <arguments>`.
