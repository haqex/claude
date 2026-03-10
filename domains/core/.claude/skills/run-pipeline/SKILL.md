---
name: run-pipeline
description: Execute a named pipeline — loads its definition, runs each skill step in sequence, carries outputs forward between steps
argument-hint: <pipeline-name> [key=value ...]
allowed-tools: [Read, Write, Edit, Glob, Grep, WebFetch]
---

# Run Pipeline: $ARGUMENTS

## Repo Root
All skill and pipeline paths are relative to: `~/developer/enterprise/claude`

## Steps

### 1. Parse arguments
- First argument is the pipeline name (e.g. `youtube-research`)
- Remaining arguments are `key=value` input pairs (e.g. `url=https://youtube.com/watch?v=abc123`)
- Build an inputs map: `{ key: value, ... }`

### 2. Load the pipeline definition
- Read `pipelines/<pipeline-name>.md`
- Parse the YAML frontmatter to extract:
  - `name` — pipeline identifier
  - `description` — what this pipeline does
  - `inputs` — list of expected input parameters (name, description, required)
  - `steps` — ordered list of step definitions
- If the file doesn't exist, list available pipelines from `pipelines/*.md` and stop

### 3. Validate inputs
- For each input marked `required: true`, verify it was provided in the arguments
- If any required input is missing, output what's needed and stop:
  ```
  Missing required inputs:
    - url: YouTube video URL

  Usage: /project:run-pipeline youtube-research url=<youtube-url>
  ```

### 4. Print the execution plan
Before running anything, output the plan:
```
## Pipeline: <name>
<description>

Inputs:
  - <key>: <value>

Steps:
  1. [<domain>/<skill>] — <why>
  2. [<domain>/<skill>] — <why>
  ...
```

### 5. Execute each step in order

For each step in the pipeline `steps` array:

**a. Resolve the step**
- Step has: `id`, `skill`, `domain`, `args`, and optionally `after` (step IDs this depends on)
- Resolve `args`: replace `{{input.<key>}}` with the matching input value; replace `{{<step-id>.<field>}}` with the named output from a previous step's context
- If `after` lists step IDs, confirm those steps completed before running this one

**b. Load the skill**
- Read `domains/<domain>/.claude/skills/<skill>/SKILL.md`
- If not found, report the missing skill and skip or stop (based on step's `on_error` setting)

**c. Execute the skill**
- Perform the full instructions from the skill's SKILL.md
- Use the resolved `args` as the skill's `$ARGUMENTS`
- You are the runtime — do not just describe what the skill would do, actually do it
- Track what was produced: files written, paths created, key values extracted (topic, title, skill name, etc.)

**d. Record step outputs**
- After each step completes, note its outputs in a step context object:
  ```
  Step <id> complete:
    - produced: <what was created>
    - key outputs: <any named values subsequent steps may need>
  ```
- These outputs are available to subsequent steps as `{{<id>.<field>}}`

**e. Status line**
- Output after each step: `✓ Step <N> (<id>) — <one-line summary of what was done>`
- If a step fails: `✗ Step <N> (<id>) — <error>` then decide based on `on_error`:
  - `stop` (default): halt the pipeline and report
  - `skip`: log and continue to next step
  - `ask`: pause and prompt the user

### 6. Pipeline summary
After all steps complete:
```
## Pipeline Complete: <name>

Steps run: <N>/<total>

Outputs:
  - <step-id>: <what was produced>
  ...

Files created or modified:
  - <path>
  ...

To use a generated skill:
  claude --add-dir ~/developer/enterprise/claude/domains/<domain>
  /project:<skill-name>
```

## Quality Checklist
- [ ] All required inputs were validated before execution
- [ ] Plan was printed before any execution began
- [ ] Each step was fully executed, not summarized
- [ ] Step outputs were tracked and passed to dependent steps
- [ ] Final summary lists every file created or modified
