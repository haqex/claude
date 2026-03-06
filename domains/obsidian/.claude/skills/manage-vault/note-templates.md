# Note Templates Reference

Complete templates for every note type. When creating a note, use the matching template and fill in the placeholders.

---

## Daily Note

**Filename:** `YYYY-MM-DD.md`
**Folder:** `GitHub/Daily Notes/`

```markdown
---
tags: [type/daily]
created: {{date}}
type: daily
---

# {{date}}

## Tasks
- [ ]

## Log
> What happened today — meetings, progress, blockers, ideas.



## Links
> Notes created or referenced today.

-

## Reflection
> End of day — what went well, what to improve, what's next.


```

---

## Course Note

**Filename:** `{Topic}.md` (e.g., `2.1 Notes.md`, `Assignment 1.md`)
**Folder:** `GitHub/University/{Course}/`

```markdown
---
tags: [type/course, course/{{course_id}}, topic/{{topic}}]
created: {{date}}
type: course
course: {{course_name}}
semester: {{semester}}
lecture: {{number}}
---

# {{course_name}} — {{topic}}

## Key Concepts
-

## Notes
> Lecture content, readings, key takeaways.



## Practice Problems
- [ ]

## Related
- [[{{related_note}}]]
```

---

## Project Doc

**Filename:** `{Project Name}.md` or `{Feature}.md`
**Folder:** `GitHub/Enterprise/{Project}/`

```markdown
---
tags: [type/project, project/{{project_id}}, topic/{{topic}}, status/active]
created: {{date}}
type: project
project: {{project_name}}
status: active
---

# {{project_name}}

## Overview
> What this project is, why it exists, what problem it solves.



## Architecture
> High-level design, tech stack, key decisions.



## Setup
> How to get the project running locally.

```bash
# setup commands
```

## Status
- [ ]

## Links
- [[{{related_note}}]]
- [External](https://...)
```

---

## Interview Prep

**Filename:** `{Topic}.md` (e.g., `STAR Method.md`, `Resume Deep Dive.md`)
**Folder:** `GitHub/Interview Prep/`

```markdown
---
tags: [type/interview, topic/interview]
created: {{date}}
type: interview
company: {{company}}
role: {{role}}
---

# {{topic}}

## S — Situation
> Context and background.



## T — Task
> What you were responsible for.



## A — Action
> What you specifically did (be detailed, use "I" not "we").



## R — Result
> Quantifiable outcomes, lessons learned.



---

## Questions to Prepare
-

## Notes
-
```

---

## Meeting Note

**Filename:** `{Meeting Topic} - {{date}}.md`
**Folder:** `GitHub/Daily Notes/` or relevant project folder

```markdown
---
tags: [type/meeting]
created: {{date}}
type: meeting
attendees: [{{person1}}, {{person2}}]
---

# {{meeting_topic}} — {{date}}

## Agenda
1.

## Discussion
> Key points, decisions, context.



## Decisions
-

## Action Items
- [ ] @{{person}} —

## Follow-up
- Next meeting:
```

---

## Map of Content (MOC)

**Filename:** `{Folder Name}.md` (e.g., `University.md`, `Enterprise.md`)
**Folder:** Inside the folder it indexes

```markdown
---
tags: [type/moc]
created: {{date}}
type: moc
sticker: lucide//{{icon}}
color: var(--mk-color-{{color}})
---

# {{folder_name}}

## Overview
> What this area contains.



## Contents

### By Type
```dataview
TABLE type AS "Type", created AS "Created"
FROM "{{folder_path}}"
WHERE file.name != this.file.name
SORT type ASC, created DESC
```

### Recent Activity
```dataview
LIST
FROM "{{folder_path}}"
WHERE file.mtime >= date(today) - dur(14 days) AND file.name != this.file.name
SORT file.mtime DESC
LIMIT 10
```

## Quick Links
- [[{{note_1}}]]
- [[{{note_2}}]]
```

---

## Reference Note

**Filename:** `{Topic}.md` (e.g., `SSH.md`, `GCP Credentials.md`)
**Folder:** Relevant project folder or `GitHub/`

```markdown
---
tags: [type/reference, topic/{{topic}}]
created: {{date}}
type: reference
---

# {{topic}}

## Summary
> What this is, when to use it.



## Instructions

### Step 1
```bash
# command
```

### Step 2


## Notes
-

## Related
- [[{{related_note}}]]
```

---

## Template Variables

| Variable | Meaning | Example |
|----------|---------|---------|
| `{{date}}` | Today's date ISO | `2026-03-05` |
| `{{course_id}}` | Lowercase course ID | `cs6310` |
| `{{course_name}}` | Full course name | `CS 6310` |
| `{{semester}}` | Current semester | `Spring 2026` |
| `{{project_id}}` | Lowercase project slug | `raspi` |
| `{{project_name}}` | Full project name | `Raspberry Pi` |
| `{{topic}}` | Topic tag | `ml`, `devops` |
| `{{folder_path}}` | Dataview folder path | `GitHub/University` |
| `{{icon}}` | Lucide icon name | `school`, `github` |
| `{{color}}` | Make.md color name | `purple`, `turquoise` |
