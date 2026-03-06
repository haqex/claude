# Tag Taxonomy Reference

Hierarchical tag system for the vault. All tags use nested format (`parent/child`). Use this as the canonical reference when tagging notes.

## Type Tags (required — every note gets exactly one)

| Tag | When to use |
|-----|-------------|
| `type/daily` | Daily notes (`YYYY-MM-DD.md`) |
| `type/course` | University course notes, lectures, assignments |
| `type/project` | Enterprise projects, personal projects |
| `type/interview` | Interview prep, STAR stories, questions |
| `type/reference` | How-to guides, setup instructions, cheat sheets |
| `type/meeting` | Meeting notes, agendas, action items |
| `type/moc` | Map of Content / index pages |
| `type/diagram` | Excalidraw, Canvas, Mermaid diagram files |

## Course Tags (for `type/course` notes)

| Tag | Course |
|-----|--------|
| `course/cs6310` | CS 6310 — Software Architecture & Design |
| `course/cs6603` | CS 6603 — AI, Ethics, and Society |
| `course/cs6750` | CS 6750 — Human-Computer Interaction |

Add new courses as `course/{course-id}` (lowercase, no spaces).

## Project Tags (for `type/project` notes)

| Tag | Project |
|-----|---------|
| `project/raspi` | Raspberry Pi ML/AI dashboard |
| `project/n8n` | n8n automation workflows |
| `project/flower` | 18F Customer Identification (flower/) |
| `project/obsidian` | Obsidian vault tooling |

Add new projects as `project/{short-name}` (lowercase, hyphenated).

## Topic Tags (add as many as relevant)

| Tag | Topics |
|-----|--------|
| `topic/ml` | Machine learning, AI, model training |
| `topic/devops` | Deployment, CI/CD, infrastructure, GCP, Vertex AI |
| `topic/frontend` | React, Next.js, UI, shadcn |
| `topic/backend` | APIs, databases, Node.js, Python |
| `topic/system-design` | Architecture, microservices, scalability |
| `topic/interview` | Interview prep, behavioral, technical |
| `topic/automation` | KFP, pipelines, n8n, scheduled jobs |
| `topic/data` | Data science, analytics, datasets |
| `topic/networking` | SSH, networking, Raspberry Pi connectivity |
| `topic/setup` | Environment setup, installation, configuration |

## Status Tags (optional — for tracking)

| Tag | Meaning |
|-----|---------|
| `status/active` | Currently being worked on |
| `status/archived` | Complete, no longer active |
| `status/draft` | Work in progress, incomplete |

## Tagging Rules

1. **Every note gets exactly one `type/` tag**
2. **Course notes get one `course/` tag** matching the course
3. **Project notes get one `project/` tag** matching the project
4. **Add as many `topic/` tags as relevant** — notes can span multiple topics
5. **`status/` is optional** — use when tracking progress matters
6. **Tags go in frontmatter `tags` array**, not inline `#tag` format
7. **All tags are lowercase** with `/` as separator
8. **New tags** follow the pattern `{category}/{name}` — keep names short, hyphenated

## Example Frontmatter with Tags

```yaml
---
tags: [type/project, project/raspi, topic/ml, topic/frontend, status/active]
created: 2026-03-05
type: project
project: Raspberry Pi
---
```
