# @haqex/claude

Drop-in Claude Code bundles. Install production-grade AI skills into any project in one command — no config, no setup, no `.claude/` copying required.

## Usage

```bash
npx @haqex/claude
```

Interactive menu — pick which bundle(s) to install.

```bash
npx @haqex/claude frontend
npx @haqex/claude learn
npx @haqex/claude frontend learn
```

Install specific bundles directly.

## What happens

1. Selected bundle(s) are copied into `./haqex/<bundle-name>/` in your project
2. The activation prompt is printed — paste it to Claude and you're done

## Bundles

| Bundle | Skills | What It Does |
|--------|--------|-------------|
| `frontend` | impeccable-design, audit, polish, normalize, critique | Production frontend design — distinctive UI, accessibility, anti-AI-slop |
| `learn` | youtube-to-skill, build-scroll-animation, generate-scroll-frames, generate-transition-video | YouTube knowledge capture + 3D scroll animation pipeline |
| `core` | run-pipeline, approve-proposal | Pipeline orchestration |

> Every bundle includes `run-pipeline` — no separate core install needed.

## Activation

After install, Claude prints a prompt like:

```
I've added the frontend bundle to this project at `./haqex/frontend`.
Read `./haqex/frontend/BUNDLE.md` to load all skills and rules.
Use `./haqex/frontend` as the bundle root for all skill and pipeline lookups.
```

Paste that to Claude. It reads the bundle and all skills are immediately available.

## Example session

```bash
$ npx @haqex/claude frontend

  ✓ Installed frontend → ./haqex/frontend

  Activate with Claude:
  ────────────────────────────────────────────────────────────
  I've added the frontend bundle to this project at `./haqex/frontend`.
  Read `./haqex/frontend/BUNDLE.md` to load all skills and rules.
  Use `./haqex/frontend` as the bundle root for all skill and pipeline lookups.
  ────────────────────────────────────────────────────────────
```

Then in Claude:
```
run-pipeline frontend-build target="a pricing page"
```
