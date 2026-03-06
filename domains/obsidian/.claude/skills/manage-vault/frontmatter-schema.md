# Frontmatter Schema Reference

Canonical YAML frontmatter schema for all notes in this vault. Every note MUST have frontmatter. Use this as the single source of truth when creating or updating notes.

## Required Properties (all notes)

```yaml
---
tags: [type/..., topic/...]   # ALWAYS array format, never string
created: 2026-03-05           # ISO date (YYYY-MM-DD)
type: daily                   # note type (see Note Types below)
---
```

## Recommended Properties

```yaml
aliases: [shorthand]          # alternative names for wikilink resolution
sticker: lucide//icon-name    # Make.md folder/file icon (lucide icon set)
color: var(--mk-color-purple) # Make.md accent color
status: active                # active | archived | draft
```

## Note Types & Type-Specific Properties

### `type: daily`
```yaml
tags: [type/daily]
created: 2026-03-05
type: daily
```
No extra properties — the filename IS the date (`YYYY-MM-DD.md`).

### `type: course`
```yaml
tags: [type/course, course/cs6310, topic/system-design]
created: 2026-03-05
type: course
course: CS 6310
semester: Spring 2026
lecture: 5                    # optional — lecture/module number
```

### `type: project`
```yaml
tags: [type/project, project/raspi, topic/ml]
created: 2026-03-05
type: project
project: Raspberry Pi
status: active
```

### `type: interview`
```yaml
tags: [type/interview, topic/interview]
created: 2026-03-05
type: interview
company: Slalom               # optional
role: Software Engineer        # optional
```

### `type: meeting`
```yaml
tags: [type/meeting]
created: 2026-03-05
type: meeting
attendees: [person1, person2]  # optional
```

### `type: reference`
```yaml
tags: [type/reference, topic/devops]
created: 2026-03-05
type: reference
```

### `type: moc`
```yaml
tags: [type/moc]
created: 2026-03-05
type: moc
sticker: lucide//map           # MOC files should have a sticker
color: var(--mk-color-purple)  # and a color for Make.md
```

## Make.md Color Variables

| Color | Variable |
|-------|----------|
| Red | `var(--mk-color-red)` |
| Orange | `var(--mk-color-orange)` |
| Yellow | `var(--mk-color-yellow)` |
| Green | `var(--mk-color-green)` |
| Turquoise | `var(--mk-color-turquoise)` |
| Blue | `var(--mk-color-blue)` |
| Purple | `var(--mk-color-purple)` |
| Pink | `var(--mk-color-pink)` |

## Make.md Sticker Icons (common)

| Context | Sticker |
|---------|---------|
| GitHub / code | `lucide//github` |
| University | `lucide//school` |
| Enterprise | `lucide//network` |
| Interview | `lucide//mic-2` |
| Daily Notes | `lucide//sticky-note` |
| Mac Setup | `lucide//laptop` |
| Raspberry Pi | `lucide//code-2` |
| Resumes | `lucide//file-text` |
| SSH | `lucide//terminal` |

## Rules

1. **Always use array format** for tags: `tags: [a, b]` — never `tags: a`
2. **Always include `created` date** — use today's date in ISO format
3. **Always include `type`** — determines template, folder, and applicable tags
4. **Preserve existing sticker/color** — if a file already has Make.md properties, keep them
5. **Do NOT add frontmatter to Excalidraw files** — they have their own `excalidraw-plugin: parsed` frontmatter
