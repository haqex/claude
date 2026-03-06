# Note Standards

## When to Apply
ALWAYS apply these standards when:
- Creating any new markdown note in the vault
- Editing an existing note (add missing properties)
- Moving or renaming notes

## Frontmatter Requirements
1. **Every note MUST have YAML frontmatter** with at least:
   - `tags: [type/..., ...]` — array format, never string
   - `created: YYYY-MM-DD` — ISO date
   - `type:` — one of: `daily`, `course`, `project`, `interview`, `reference`, `meeting`, `moc`
2. See `.claude/skills/manage-vault/frontmatter-schema.md` for complete schema
3. **Do NOT modify Excalidraw frontmatter** — those files use `excalidraw-plugin: parsed`

## Linking Rules
1. **Always use `[[wikilinks]]`** when referencing other vault notes
2. **Use display text** when the note name is long: `[[Long Note Name|Short Label]]`
3. **Embed images** with `![[image.png]]` format
4. **External links** use standard markdown: `[text](url)`

## Tagging Rules
1. Tags go in frontmatter `tags` array — not inline `#tag` in body text
2. Every note gets exactly **one `type/` tag**
3. Course notes get a `course/` tag, project notes get a `project/` tag
4. Add relevant `topic/` tags (can have multiple)
5. See `.claude/skills/manage-vault/tag-taxonomy.md` for full taxonomy

## Content Structure
1. **H1 heading** as the first line after frontmatter — matches the note's topic
2. **Sections with H2 headings** — use `##` for major sections
3. **Horizontal rules `---`** between major sections
4. **Code blocks** — always specify the language: ```python, ```bash, ```ts, etc.
5. **Callouts** for highlighted content:
   - `> [!NOTE]` for informational
   - `> [!TIP]` for advice
   - `> [!WARNING]` for cautions
   - `> [!IMPORTANT]` for critical info
6. **Tasks** use `- [ ]` checkbox format
