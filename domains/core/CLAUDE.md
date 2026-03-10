# core — Claude Code Project Instructions

## Overview

Meta-skills for orchestrating other skills and pipelines. Domain-agnostic — works across all other domains.

## Skills Available

- `/project:run-pipeline <name> [key=value ...]` — execute a named pipeline from `pipelines/`

## Repo Path

Pipeline definitions and skill SKILL.md files are resolved relative to:
`~/developer/enterprise/claude`

## Conventions

- Pipeline definitions live in `pipelines/*.md` at the repo root
- Skills are referenced by `domain` + `skill` name, resolved to `domains/<domain>/.claude/skills/<skill>/SKILL.md`
- Step outputs are tracked by `id` and referenced in subsequent steps via `{{<id>.<field>}}`

## Do NOT
- Skip the execution plan print before running steps
- Summarize step execution — actually perform the skill's instructions
- Proceed past a failed `on_error: stop` step without reporting
