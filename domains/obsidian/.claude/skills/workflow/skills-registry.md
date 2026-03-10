# Skills Registry

Reference for the `workflow` skill. Lists all available skills, what they do, when to use them, and their argument syntax.

---

## Note Creation

### `create-note`
**What it does:** Creates a structured Obsidian note with correct frontmatter, tags, template, and folder placement.
**When to use:** Any time a new note needs to be created (course lecture, project, meeting, daily, reference, interview prep).
**Argument syntax:** `<type> <topic>`
- Types: `daily`, `course`, `project`, `interview`, `meeting`, `reference`
- Example: `course "CS 6310 Lecture 5"` → creates note in `GitHub/University/CS 6310/`
- Example: `project "Q2 API Redesign"` → creates note in `GitHub/Enterprise/Q2 API Redesign/`

---

## Navigation & Index

### `generate-moc`
**What it does:** Generates a Map of Content (MOC) — an index page with wikilinks and dataview queries for navigating a folder or topic.
**When to use:** After creating multiple notes in a new area; when setting up a new course, project, or subject; when a folder needs an index page.
**Argument syntax:** `<folder or topic>`
- Example: `"University"` → top-level university index
- Example: `"CS 6310"` → course-level MOC
**Depends on:** Notes already existing in the target folder

---

## Dashboards & Queries

### `generate-dataview`
**What it does:** Creates a dynamic dataview dashboard page with DQL queries for tracking and summarizing vault content.
**When to use:** When the user wants a queryable view: course tracker, project status board, todo list, tag browser, recent notes feed, daily summary.
**Argument syntax:** `<type>`
- Types: `course-tracker`, `project-status`, `daily-summary`, `tag-index`, `recent-notes`, `todo-board`
- Example: `course-tracker` → dashboard showing all courses, assignments, progress

---

## Diagrams

### `generate-diagrams`
**What it does:** Generates the full diagram suite for a topic — Excalidraw (interactive), Canvas (node map), and Mermaid (auto-layout). Best for system design or architecture topics.
**When to use:** When the user needs comprehensive visual coverage of a system, architecture, API, or workflow.
**Argument syntax:** `<topic or description>`
- Example: `"E-Commerce System Architecture"`
- Outputs to `Excalidraw/` folder

### `generate-excalidraw`
**What it does:** Generates a single interactive Excalidraw diagram.
**When to use:** When a hand-drawn-style interactive visual is the primary deliverable. Good for presentations or detailed system maps.
**Argument syntax:** `<description of what to diagram>`

### `generate-canvas`
**What it does:** Generates an Obsidian Canvas (node-edge map) linking to existing vault notes.
**When to use:** When the user wants to visualize relationships between vault notes or concepts. Best when the notes already exist.
**Argument syntax:** `<description of what to diagram>`

### `generate-mermaid`
**What it does:** Generates Mermaid diagrams embedded inline in a markdown note.
**When to use:** When auto-layout technical diagrams are needed: ER diagrams, sequence diagrams, state machines, class diagrams, flowcharts, Gantt charts, mind maps.
**Argument syntax:** `<description of what to diagram>`

---

## Daily Notes

### `manage-daily-notes`
**What it does:** Creates or manages daily notes and generates summaries.
**When to use:** To create today's note, backfill missing daily notes, or generate weekly/monthly summary notes.
**Argument syntax:** `<operation>`
- Operations: `today`, `weekly-summary`, `monthly-summary`, `backfill`

---

## Content Transformation

### `refactor-content`
**What it does:** Transforms existing note content — summarizes, creates study guides, extracts todos, splits large notes, merges related notes, or enhances structure.
**When to use:** When working with existing notes that need restructuring, condensing, or derivative artifacts.
**Argument syntax:** `<operation> <target>`
- Operations: `summarize`, `study-guide`, `extract-todos`, `split`, `merge`, `enhance`
- Example: `study-guide "CS 6310 Lecture 5"` → creates a study guide from that note

---

## Vault Health

### `manage-vault`
**What it does:** Performs vault-wide audits and standardization operations.
**When to use:** To audit vault health, fix broken links, standardize frontmatter, build/clean tags, or run a full health check.
**Argument syntax:** `<operation>`
- Operations: `audit`, `standardize-frontmatter`, `build-tags`, `fix-links`, `full-health-check`

### `organize-vault`
**What it does:** Finds structural issues and cleans up the vault — bad naming, orphaned notes, unused images, misplaced files.
**When to use:** When the vault feels disorganized or after bulk imports. Never deletes without confirmation.
**Argument syntax:** `<operation>`
- Operations: `audit`, `fix-naming`, `find-orphans`, `clean-images`, `restructure`

---

## Skill Dependency Map

Some skills produce outputs that other skills consume. Use this when ordering workflow steps:

```
create-note ──► generate-moc        (MOC links to notes)
create-note ──► generate-canvas     (Canvas nodes reference notes)
manage-vault ──► organize-vault     (audit first, then fix)
generate-diagrams                   (self-contained, no deps)
generate-dataview                   (self-contained, reads vault metadata)
refactor-content                    (requires target note to exist)
```
