---
type: new-skill
proposed: 2026-03-09
source: https://youtu.be/I9kO6-yPkfM
target_domain: learn
skill_name: claude-code-playwright-setup
target_path: domains/learn/.claude/skills/claude-code-playwright-setup/SKILL.md
status: pending
---

# Proposal: New Skill — claude-code-playwright-setup

> Source: [Claude Code + Playwright = INSANE Browser Automations](https://youtu.be/I9kO6-yPkfM) by Chase AI

## What this adds
A new skill at `domains/learn/.claude/skills/claude-code-playwright-setup/SKILL.md` that guides setup and usage of Playwright CLI with Claude Code, including parallel agent testing and meta-skill creation.

## Proposed SKILL.md

```markdown
---
name: claude-code-playwright-setup
description: Set up and use Playwright CLI with Claude Code for browser automation — install, configure, run parallel UI tests, and package workflows as meta-skills
argument-hint: <setup | test | meta-skill | audit>
allowed-tools: [Read, Write, Edit, Bash, Glob, Grep]
---

# Claude Code + Playwright CLI: $ARGUMENTS

> [!NOTE] Source
> Learned from: [Claude Code + Playwright = INSANE Browser Automations](https://youtu.be/I9kO6-yPkfM) by Chase AI

## Prerequisites
- Node.js installed (`node --version`)
- Claude Code installed and working
- A project with a web UI to test (or a target URL)

## Modes

- `setup` — install Playwright CLI, browser engine, and Claude Code skill
- `test` — run a UI test against the current project (single or parallel agents)
- `meta-skill` — package an existing Playwright workflow into a reusable skill
- `audit` — check what's already installed and verify the skill is working

---

## setup

```bash
# Install Playwright CLI globally
npm install -g playwright-cli

# Install Chromium browser engine
npx playwright install chromium

# Install the Claude Code skill (Microsoft-provided)
playwright-cli install --skills
```

After install, verify with:
```bash
playwright-cli --version
```

> [!TIP] The installed skill is editable
> The skill Microsoft provides is a starting point. You can modify it or use Skill Creator to audit and improve it for your specific use cases.

---

## test

Tell Claude Code what to test in plain language. Key options to specify:

| Option | Default | How to specify |
|--------|---------|----------------|
| Headed/headless | Headless (invisible) | Say "headed" to see the browser |
| Agents | 1 | Say "three parallel agents" |
| Scope | You define | Describe what to test |

**Single agent, headed (visible browser):**
> "Use the Playwright CLI tool to test the form submission, single agent, headed so I can see it"

**Parallel agents (comprehensive coverage):**
> "Spin up three parallel sub-agents using the Playwright CLI skill. Test the form submission — one agent covers edge cases, one covers validation, one covers the happy path."

**Ask Claude for best practices first:**
> "What are the best ways to stress test this form using the Playwright CLI skill?"

---

## meta-skill

Turn a repeatable Playwright workflow into a permanent skill so you never describe it again.

1. **Articulate the workflow** — describe the full process in plain language to Claude Code
2. **Generate with Skill Creator:**
   > "I want to turn this workflow into its own meta-skill: [paste workflow description]"
3. **Test it** — Skill Creator lets you run the skill and compare with/without it
4. **Use it forever:**
   > "Run the form tester skill"

The meta-skill references the Playwright CLI skill internally — it's a "Super Skill" that abstracts the entire testing setup.

---

## Token Cost Reference

| Method | Tokens/task | Notes |
|--------|-------------|-------|
| Playwright CLI | ~26K | Sends only accessibility tree summary |
| Playwright MCP | ~114K | Dumps full accessibility tree |
| Claude in Chrome | Very high | Uses screenshots |

Always prefer the CLI inside Claude Code.

---

## Common Use Cases
- UI/form testing after code changes
- Parallel regression testing before deploys
- Automated login and session management
- Web scraping (with persistent cookies)
- E2E workflow automation (shopping, form fills, data entry)
- Visual validation with screenshots (auto-generated at test end)

## Notes
- Playwright CLI is headless by default — specify `headed` explicitly to watch execution
- Claude has full visibility into your project's page structure, reducing accessibility tree errors
- The `playwright-cli show` command opens a visual dashboard of all running browser agents
- Always ask: "Can we standardize this into a skill?" — that's where the real productivity gain is
```

## To apply
/project:approve-proposal 2026-03-09-claude-code-playwright-setup
