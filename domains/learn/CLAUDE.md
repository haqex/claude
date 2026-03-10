# learn — Claude Code Project Instructions

## Overview

Knowledge ingestion pipelines. Takes external content (YouTube videos, articles, docs) and produces two artifacts:
1. A concise vault note summarizing what was learned
2. A reusable SKILL.md capturing any how-to procedure from the content

Generated skills land in `domains/learn/.claude/skills/` by default, or in a specified domain if provided.

## Vault Info
- **Path**: `/Users/aymanhaque/Documents/Obsidian Vault`
- **YouTube notes folder**: `GitHub/University/YouTube/`

## Skills Available

- `/project:youtube-to-skill <url> [output-domain]` — ingest a YouTube video, write a vault note, generate a skill

## Conventions

- Vault notes: `GitHub/University/YouTube/<Slugified Title>.md`
- Generated skills: `domains/<output-domain>/.claude/skills/<skill-name>/SKILL.md`
- Skill names: kebab-case of the core procedure (e.g. `playwright-claude-code-setup`)
- Notes are dense — no filler, no padding. Every sentence earns its place.
- If a video is purely conceptual (no procedure), write the note but skip the skill generation

## Do NOT
- Write vault notes outside the vault path
- Write generated skills outside the `domains/` directory of this repo
- Hallucinate transcript content — if transcript is unavailable, say so and use description only
- Delete or overwrite existing skills without asking
