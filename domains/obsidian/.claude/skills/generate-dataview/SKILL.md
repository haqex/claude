---
name: generate-dataview
description: Generate Dataview queries and dashboard pages for the Obsidian vault. Use when the user wants dynamic views, trackers, or aggregated data from their notes.
argument-hint: <type> course-tracker | project-status | daily-summary | tag-index | recent-notes | todo-board | custom <description>
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Generate Dataview Dashboard

Generate a dataview dashboard for: **$ARGUMENTS**

## References
- [Dataview DQL reference](../manage-vault/dataview-ref.md) — syntax and query patterns
- [Frontmatter schema](../manage-vault/frontmatter-schema.md) — available fields to query
- [Tag taxonomy](../manage-vault/tag-taxonomy.md) — tags available for filtering

## Steps

### Step 1: Determine Dashboard Type
Parse `$ARGUMENTS` to identify the type:

| Type | What it shows |
|------|---------------|
| `course-tracker` | All course notes grouped by course, sorted by date |
| `project-status` | Active projects with status, last updated |
| `daily-summary` | This week's daily notes with task counts |
| `tag-index` | All tags with note counts |
| `recent-notes` | Notes modified in last 7/14/30 days |
| `todo-board` | All incomplete tasks grouped by source note |
| `custom` | User-described query |

### Step 2: Build Queries
Load query patterns from `dataview-ref.md` and customize:
- Use actual frontmatter field names from `frontmatter-schema.md`
- Use tag names from `tag-taxonomy.md`
- Add appropriate `FROM`, `WHERE`, `SORT` clauses

### Step 3: Generate Dashboard Note
Create a markdown file with:
1. **Frontmatter** — `type: reference`, tags include `type/reference`
2. **H1 Title** — descriptive dashboard name
3. **Sections** — each with an H2 header, brief description, and dataview query block
4. **Multiple views** — include at least 2-3 different query perspectives

### Step 4: Write File
- **Dashboard location**: `GitHub/` root or relevant subfolder
- **Filename**: `{Type} Dashboard.md` (e.g., `Course Tracker Dashboard.md`)

## Dashboard Templates

### Course Tracker
```markdown
## All Course Notes
```dataview
TABLE course AS "Course", lecture AS "Lecture", created AS "Date"
FROM #type/course
SORT course ASC, created DESC
```

## By Course
```dataview
TABLE length(rows) AS "Notes", min(rows.created) AS "Started"
FROM #type/course
GROUP BY course
SORT course ASC
```

## Recent Course Activity
```dataview
LIST
FROM #type/course
WHERE file.mtime >= date(today) - dur(7 days)
SORT file.mtime DESC
```
```

### Project Status
```markdown
## Active Projects
```dataview
TABLE project AS "Project", status AS "Status", file.mtime AS "Last Updated"
FROM #type/project
WHERE status = "active"
SORT file.mtime DESC
```

## All Projects
```dataview
TABLE project AS "Project", status AS "Status", length(file.outlinks) AS "Links"
FROM #type/project
GROUP BY project
SORT project ASC
```
```

### TODO Board
```markdown
## Incomplete Tasks
```dataview
TASK
FROM "GitHub"
WHERE !completed
GROUP BY file.link
SORT file.mtime DESC
```

## Task Count by File
```dataview
TABLE length(filter(file.tasks, (t) => !t.completed)) AS "Open", length(filter(file.tasks, (t) => t.completed)) AS "Done"
FROM "GitHub"
WHERE length(file.tasks) > 0
SORT file.mtime DESC
```
```

## Quality Checklist
- [ ] Each section has an H2 header and brief description
- [ ] Dataview queries use correct field names from frontmatter schema
- [ ] `FROM` clauses use tags or folder paths that exist
- [ ] Queries include `SORT` for meaningful ordering
- [ ] Dashboard has at least 2 different query views
