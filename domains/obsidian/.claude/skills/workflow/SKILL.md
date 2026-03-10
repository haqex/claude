---
name: workflow
description: Plan and execute a multi-skill workflow from a high-level goal — analyzes what needs to happen, maps it to available skills, writes the plan, then drives execution step by step
argument-hint: <high-level goal>
allowed-tools: [Read, Write, Edit, Bash, Glob, Grep]
---

# Workflow: $ARGUMENTS

## References
- [skills-registry.md](./skills-registry.md) — all available skills with capabilities and argument syntax

## Steps

1. **Understand the goal**
   - Parse `$ARGUMENTS` to identify the core objective
   - Identify the scope: is this a one-time operation, a setup task, a recurring workflow, or a content transformation?
   - Identify any named entities: course names, project names, folder targets, note topics

2. **Read the skills registry**
   - Read `./skills-registry.md` to load all available skills and their capabilities
   - For each skill, assess whether it is relevant to achieving the goal

3. **Write the execution plan**
   - Output a numbered plan before doing any work:
     ```
     ## Workflow Plan: <goal summary>

     Steps:
     1. [skill-name] — <what this step accomplishes> — args: `<argument string>`
     2. [skill-name] — <what this step accomplishes> — args: `<argument string>`
     ...

     Estimated outputs:
     - <file or artifact> at <path>
     - ...
     ```
   - Include a step for every skill that contributes to the goal
   - Order steps by dependency (e.g. create notes before generating MOC for them)
   - If a step requires user input or a decision, mark it as `[DECISION NEEDED]` and pause

4. **Confirm before executing**
   - Present the plan and ask: "Proceed with this plan? (yes / adjust step N / skip step N)"
   - Wait for confirmation before continuing
   - If the user adjusts, update the plan and re-present before executing

5. **Execute each step**
   - Work through each step in order, performing the full behavior of the referenced skill
   - Do not just name the skill — actually perform its actions (read vault, write files, etc.)
   - After each step, output a brief status: `✓ Step N complete — <what was done>`
   - If a step fails or produces unexpected output, pause and report before continuing

6. **Summarize the workflow**
   - After all steps complete, output a summary:
     ```
     ## Workflow Complete

     Goal: <original goal>

     What was done:
     - Step 1: <outcome>
     - Step 2: <outcome>
     ...

     Files created or modified:
     - <path>
     ...

     Suggested next steps (optional):
     - ...
     ```

## Quality Checklist
- [ ] Plan was written and confirmed before any execution
- [ ] Each step was executed fully, not just referenced by name
- [ ] All files follow vault conventions (naming, frontmatter, folder placement)
- [ ] Summary lists every file created or modified
- [ ] No files were deleted without explicit user confirmation
