---
bundle: core
version: 1.0.0
skills: [run-pipeline, approve-proposal]
---

# Core Bundle

Orchestration skills for Claude Code. Required if you want to run multi-step pipelines or apply pending proposals. Install this alongside any other bundle that uses pipelines.

---

## Install

### Step 1 — Copy skills into your project

```bash
cp -r skills/* .claude/skills/
```

### Step 2 — Import this file into your CLAUDE.md

```markdown
@path/to/core/BUNDLE.md
```

---

## Skills

### `run-pipeline` — Execute a Named Pipeline

**Trigger**: User invokes `/project:run-pipeline <name>` or asks Claude to "run the X pipeline".

Loads a pipeline definition from `pipelines/<name>.md` (or the project's pipelines directory), resolves each step to its skill + domain, executes them in sequence, carries outputs forward between steps, and writes an outcome report.

```
/project:run-pipeline youtube-research url=https://youtube.com/watch?v=...
/project:run-pipeline frontend-build target="a pricing page"
/project:run-pipeline frontend-build target="settings form" style="minimal" framework="React+Tailwind"
```

**Pipeline format** (`pipelines/<name>.md`):
```yaml
---
name: my-pipeline
description: What this pipeline does
inputs:
  - name: target
    description: What to build
    required: true
steps:
  - id: step1
    skill: skill-name
    domain: domain-name
    args: "{{input.target}}"
  - id: step2
    skill: another-skill
    domain: domain-name
    after: [step1]
    on_error: skip
---
```

### `approve-proposal` — Apply a Pending Proposal

**Trigger**: User runs `/project:approve-proposal <name>` or asks to "apply" or "approve" a proposal.

Reads a proposal from `claude/proposals/<name>/PROPOSAL.md`, extracts the proposed SKILL.md content, writes it to the target path specified in the proposal's frontmatter, and marks the proposal `status: approved`.

```
/project:approve-proposal 2026-03-12-agency-agents
/project:approve-proposal 2026-03-12-cli-anything-playwright-integration
Approve the promptfoo-eval proposal
```

**Proposal frontmatter required:**
```yaml
---
type: new-skill
target_domain: learn
skill_name: my-skill
target_path: domains/learn/.claude/skills/my-skill/SKILL.md
status: pending
---
```

---

## How Pipelines Work

1. `run-pipeline` reads the pipeline definition from `pipelines/<name>.md`
2. For each step, it reads the skill from `.claude/skills/<skill>/SKILL.md`
3. It executes the skill with the provided args
4. Each step's output is available to subsequent steps as `{{step-id.output}}`
5. Steps with `on_error: skip` continue the pipeline even if they fail
6. After all steps complete, an outcome is written to `claude/outcomes/`

## Stacking with Other Bundles

Always install `core` alongside any bundle that defines pipelines:

```markdown
# CLAUDE.md
@./bundles/core/BUNDLE.md
@./bundles/frontend/BUNDLE.md
@./bundles/learn/BUNDLE.md
```

This gives Claude: pipeline orchestration + frontend design + knowledge capture — the full stack.
