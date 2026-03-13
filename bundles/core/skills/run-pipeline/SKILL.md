---
name: run-pipeline
description: Execute a named pipeline from this bundle — loads the pipeline definition, runs each skill step in sequence, carries outputs forward between steps
argument-hint: <pipeline-name> [key=value ...]
allowed-tools: [Read, Write, Edit, Glob, Grep, Bash]
---

# Run Pipeline: $ARGUMENTS

## Bundle Root
All paths are relative to the directory containing `BUNDLE.md` for this bundle.
Determine the bundle root by finding which directory in the project contains both `BUNDLE.md` and a `skills/` folder.

## Steps

### 1. Locate the bundle root
- Find `BUNDLE.md` in the project — its directory is `<BUNDLE_ROOT>`
- Verify `<BUNDLE_ROOT>/skills/` and `<BUNDLE_ROOT>/pipelines/` exist

### 2. Parse arguments
- First argument is the pipeline name (e.g. `frontend-build`)
- Remaining arguments are `key=value` input pairs (e.g. `target="a pricing page"`)
- Build an inputs map: `{ key: value, ... }`

### 3. Load the pipeline definition
- Read `<BUNDLE_ROOT>/pipelines/<pipeline-name>.md`
- Parse the YAML frontmatter to extract:
  - `name` — pipeline identifier
  - `description` — what this pipeline does
  - `inputs` — list of expected input parameters (name, description, required)
  - `steps` — ordered list of step definitions
- If not found, list available pipelines from `<BUNDLE_ROOT>/pipelines/*.md` and stop

### 4. Validate inputs
- For each input marked `required: true`, verify it was provided
- If any required input is missing, output what's needed and stop:
  ```
  Missing required inputs:
    - target: What to build

  Usage: run-pipeline frontend-build target=<description>
  ```

### 5. Print the execution plan
```
## Pipeline: <name>
<description>

Inputs:
  - <key>: <value>

Steps:
  1. [<skill>] — <why>
  2. [<skill>] — <why>
  ...
```

### 6. Execute each step in order

For each step in the pipeline `steps` array:

**a. Resolve the step**
- Step has: `id`, `skill`, `args`, and optionally `after` (step IDs this depends on)
- Resolve `args`: replace `{{input.<key>}}` with the matching input value; replace `{{<step-id>.<field>}}` with the named output from a previous step's context
- If `after` lists step IDs, confirm those steps completed before running this one

**b. Load the skill**
- Read `<BUNDLE_ROOT>/skills/<skill>/SKILL.md`
- If not found, report the missing skill and skip or stop (based on step's `on_error` setting)

**c. Execute the skill**
- Perform the full instructions from the skill's SKILL.md
- Use the resolved `args` as the skill's `$ARGUMENTS`
- You are the runtime — do not just describe what the skill would do, actually do it
- Track what was produced: files written, paths created, key values extracted

**d. Record step outputs**
- After each step completes, note its outputs:
  ```
  Step <id> complete:
    - produced: <what was created>
    - key outputs: <any values subsequent steps may need>
  ```

**e. Status line**
- Output after each step: `✓ Step <N> (<id>) — <one-line summary>`
- If a step fails: `✗ Step <N> (<id>) — <error>` then decide based on `on_error`:
  - `stop` (default): halt the pipeline and report
  - `skip`: log and continue
  - `ask`: pause and prompt the user

### 7. Write the outcomes file
After all steps complete, write `<BUNDLE_ROOT>/outcomes/YYYY-MM-DD-<pipeline-name>-<slug>.md`:

```markdown
---
pipeline: <pipeline-name>
date: <YYYY-MM-DD>
status: success | partial | failed
inputs:
  <key>: <value>
steps_run: <N>
steps_succeeded: <N>
---

# Pipeline Outcome: <pipeline-name> — <primary input>

## Status: ✓ / ⚠ / ✗ (<N>/<total> steps)

| Step | Skill | Status | Summary |
|------|-------|--------|---------|
| <id> | <skill> | ✓ | <what was done> |

## Artifacts Created
- `<path>` — <what it is>
```

### 8. Print the final summary
```
## Pipeline Complete: <name>

Steps: <N>/<total> succeeded
Outcome report: <BUNDLE_ROOT>/outcomes/<filename>.md
```

## Quality Checklist
- [ ] Bundle root located by finding BUNDLE.md
- [ ] All required inputs validated before execution
- [ ] Plan printed before execution began
- [ ] Each step fully executed, not summarized
- [ ] Outcomes file written to `<BUNDLE_ROOT>/outcomes/`
