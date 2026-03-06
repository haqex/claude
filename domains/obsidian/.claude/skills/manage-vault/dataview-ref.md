# Dataview Query Language (DQL) Reference

Dataview is installed and enabled in this vault. Queries go inside fenced code blocks with `dataview` as the language. They render dynamically in Reading View.

## Query Types

### TABLE
```dataview
TABLE created, type, status
FROM "GitHub"
WHERE type = "project"
SORT created DESC
```

### LIST
```dataview
LIST
FROM #type/course
SORT file.name ASC
```

### TASK
```dataview
TASK
FROM "GitHub/Daily Notes"
WHERE !completed
SORT file.name DESC
LIMIT 20
```

## Clauses

| Clause | Purpose | Example |
|--------|---------|---------|
| `FROM` | Source — folder, tag, or link | `FROM "GitHub/University"` or `FROM #type/course` |
| `WHERE` | Filter rows | `WHERE type = "project" AND status = "active"` |
| `SORT` | Order results | `SORT created DESC` |
| `GROUP BY` | Group rows | `GROUP BY type` |
| `FLATTEN` | Expand arrays | `FLATTEN tags` |
| `LIMIT` | Cap results | `LIMIT 10` |

## FROM Sources

```
FROM "GitHub/University"              # folder path (relative to vault root)
FROM #type/course                     # tag
FROM [[Note Name]]                    # outgoing links from a note
FROM "GitHub" AND #status/active      # combined
FROM -"Excalidraw"                    # exclude folder
```

## WHERE Operators

```
WHERE type = "course"                 # exact match
WHERE contains(tags, "topic/ml")      # array contains
WHERE file.name = "2026-03-05"        # file metadata
WHERE created >= date("2026-01-01")   # date comparison
WHERE status != "archived"            # not equal
WHERE course AND semester             # field exists
```

## Implicit Fields (available on all files)

| Field | Type | Description |
|-------|------|-------------|
| `file.name` | string | File name without extension |
| `file.path` | string | Full path from vault root |
| `file.folder` | string | Parent folder path |
| `file.link` | link | Clickable wikilink to the file |
| `file.size` | number | File size in bytes |
| `file.ctime` | date | File creation time |
| `file.mtime` | date | Last modified time |
| `file.day` | date | Date from daily note filename |
| `file.tags` | array | All tags (frontmatter + inline) |
| `file.outlinks` | array | Outgoing wikilinks |
| `file.inlinks` | array | Incoming wikilinks |
| `file.tasks` | array | All tasks in the file |

## Inline Fields

Add metadata directly in note body:
```markdown
Status:: Active
Priority:: High
Due:: 2026-04-01
```

Query them like frontmatter:
```dataview
TABLE Status, Priority, Due
FROM "GitHub/Enterprise"
WHERE Status = "Active"
```

## Date Functions

```
date(today)                           # today's date
date("2026-03-05")                    # specific date
dur(7 days)                           # duration
file.ctime + dur(30 days)             # date arithmetic
dateformat(created, "MMM dd, yyyy")   # format output
```

---

## Ready-Made Query Patterns

### Course Tracker
```dataview
TABLE course AS "Course", lecture AS "Lecture", created AS "Date"
FROM #type/course
SORT course ASC, created DESC
```

### Project Status Dashboard
```dataview
TABLE project AS "Project", status AS "Status", file.mtime AS "Last Updated"
FROM #type/project
WHERE status = "active"
SORT file.mtime DESC
```

### Recent Notes (last 7 days)
```dataview
TABLE type AS "Type", tags AS "Tags"
FROM "GitHub"
WHERE file.mtime >= date(today) - dur(7 days)
SORT file.mtime DESC
LIMIT 15
```

### Daily Notes This Week
```dataview
LIST
FROM "GitHub/Daily Notes"
WHERE file.day >= date(today) - dur(7 days)
SORT file.day DESC
```

### Tag Index
```dataview
TABLE length(rows) AS "Count"
FROM "GitHub"
FLATTEN tags AS tag
WHERE tag != null
GROUP BY tag
SORT rows.length DESC
```

### TODO Aggregator
```dataview
TASK
FROM "GitHub"
WHERE !completed
GROUP BY file.link
SORT file.mtime DESC
```

### Orphaned Notes (no incoming links)
```dataview
LIST
FROM "GitHub"
WHERE length(file.inlinks) = 0
SORT file.name ASC
```

### Notes Missing Frontmatter
```dataview
LIST
FROM "GitHub"
WHERE !type
SORT file.name ASC
```

## Tips

- Queries only render in **Reading View** (not Live Preview for complex queries)
- Use `LIMIT` to prevent huge result sets
- Dataview reads frontmatter YAML and inline fields
- Tags in frontmatter are accessible as `tags` or `file.tags`
- For performance, prefer `FROM` folder/tag filters over broad `WHERE` scans
