---
pipeline: youtube-research
date: 2026-03-09
status: success
inputs:
  url: https://youtu.be/I9kO6-yPkfM
steps_run: 3
steps_succeeded: 3
steps_failed: 0
---

# Pipeline Outcome: youtube-research — Claude Code + Playwright CLI

## Status: ✓ Success (3/3 steps)

| Step | Skill | Status | Notes |
|------|-------|--------|-------|
| ingest | learn/youtube-to-skill | ✓ success | Vault note written, skill proposal generated |
| diagrams | obsidian/generate-diagrams | ✓ success | Mermaid (5 diagrams) + Canvas written |
| moc | obsidian/generate-moc | ✓ success | YouTube MOC created |

## Vault Artifacts Created

- `GitHub/University/YouTube/Claude Code + Playwright = INSANE Browser Automations.md` — dense reference note with setup steps, comparison table, and usage patterns
- `Excalidraw/Claude Code Playwright - Diagrams.md` — Mermaid: architecture, method comparison, parallel test sequence, meta-skill workflow, use case mindmap
- `Excalidraw/Claude Code Playwright - Component Map.canvas` — Canvas node map of the full automation stack

## Learning Outcomes

- **Playwright CLI vs MCP token cost:** The CLI sends only an accessibility tree *summary* to Claude, while the MCP dumps the full tree every call — resulting in ~26K vs ~114K tokens per task for the same work. The difference compounds in parallel runs.
- **Headless by default:** Playwright CLI runs invisibly in the background unless you explicitly say "headed." This is intentional — headless is faster and lighter. Always specify `headed` when you need to watch the browser.
- **Parallel agents are the real unlock:** Spinning up 3 sub-agents to hit the same form from different angles (edge cases / validation / happy path) simultaneously is the correct usage pattern — not sequential single-agent runs.
- **Meta-skill pattern:** The highest-leverage move is to take a Playwright workflow that works and codify it as a "Super Skill" using Skill Creator — so future invocations are a single sentence instead of a paragraph of instructions. This applies to any repeatable workflow, not just Playwright.
- **Accessibility tree is the foundation:** Playwright reads the page as a structured tree (the same one used by screen readers), not as a visual screenshot. This is why it's token-efficient and why having the source code available to Claude further reduces errors.
- **Use cases are broader than testing:** Persistent sessions, cookies, and login support mean Playwright CLI can automate anything a browser can do — not just test forms.

## Proposed Repo Changes

- `proposals/2026-03-09-claude-code-playwright-setup.md` — new skill `claude-code-playwright-setup` in `domains/learn`

To apply: `/project:approve-proposal 2026-03-09-claude-code-playwright-setup`
