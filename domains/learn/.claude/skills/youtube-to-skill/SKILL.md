---
name: youtube-to-skill
description: Ingest a YouTube video — fetches the transcript, writes a concise vault note, then generates a reusable SKILL.md capturing the how-to knowledge from the video
argument-hint: <youtube-url> [output-domain]
allowed-tools: [Read, Write, Edit, Glob, Grep, WebFetch]
---

# YouTube → Skill: $ARGUMENTS

## References
- [transcript-guide.md](./transcript-guide.md) — how to extract YouTube transcripts via WebFetch

## Steps

### 1. Parse arguments
- Extract the YouTube URL from `$ARGUMENTS`
- Extract optional `output-domain` (second argument) — defaults to `learn`
- Derive the video ID from the URL (the `v=` param, or the last path segment for youtu.be URLs)

### 2. Fetch video metadata
- WebFetch the YouTube watch page: `https://www.youtube.com/watch?v=<VIDEO_ID>`
- Extract from the page:
  - Video title (from `<title>` or `"title":{"runs":[{"text":"..."}]}` in `ytInitialPlayerResponse`)
  - Channel name
  - Upload date
  - Description (first 500 chars is enough)
- See [transcript-guide.md](./transcript-guide.md) for parsing strategy

### 3. Fetch the transcript
- Follow the transcript extraction steps in [transcript-guide.md](./transcript-guide.md)
- If auto-captions are unavailable, fall back to the description + any chapter markers
- Clean the raw transcript: strip timestamps, merge run-on lines, fix common caption artifacts

### 4. Analyze the content
Before writing anything, reason through:
- **Topic**: what is this video actually about?
- **Type**: tutorial / explanation / demo / comparison / review
- **How-to knowledge**: what concrete steps, commands, patterns, or techniques does the video teach?
- **Key concepts**: what terms or ideas does someone need to understand first?
- **Output artifacts**: what should someone have after following this? (a running app, a configured tool, a workflow, etc.)
- **Skill-worthy?**: is there a clear enough procedure to codify as a skill, or is this more of a reference/concept video?

### 5. Write the vault note
Write a note to `/Users/aymanhaque/Documents/Obsidian Vault/GitHub/University/YouTube/` (create folder if needed):

**Filename:** `<Slugified Title>.md`

**Frontmatter:**
```yaml
---
tags: [type/reference, topic/youtube, topic/<primary-topic>]
created: <YYYY-MM-DD>
type: reference
source: <youtube-url>
channel: <channel-name>
---
```

**Content structure:**
```markdown
# <Video Title>

> [!NOTE] Source
> [<Video Title>](<youtube-url>) by <Channel Name>

## Summary
<!-- 3–5 sentence summary. Dense. No filler. What does this video teach and why does it matter? -->

## Key Concepts
<!-- Bullet list of terms/ideas needed to understand the content -->

## How It Works
<!-- The core mechanism or approach explained concisely -->

## Step-by-Step
<!-- Only include if the video has clear procedural steps. Numbered list. -->

## Commands / Code
<!-- Any commands, config snippets, or code shown in the video -->

## Takeaways
<!-- 2–4 bullets: what to remember or apply -->

## Generated Skill
<!-- Link to the skill generated from this video, if applicable -->
[[<skill-name>]]
```

### 6. Generate the skill
Determine the skill name: kebab-case of the core procedure (e.g. `playwright-claude-code-setup`, `langchain-rag-pipeline`).

Determine output path:
- If `output-domain` was specified: `domains/<output-domain>/.claude/skills/<skill-name>/SKILL.md`
- Default: `domains/learn/.claude/skills/<skill-name>/SKILL.md`

Write the SKILL.md using the knowledge extracted from the video:

```markdown
---
name: <skill-name>
description: <one-line description of what this skill does — sourced from the video>
argument-hint: <argument syntax>
allowed-tools: [Read, Write, Edit, Bash, Glob, Grep]
---

# <Skill Title>: $ARGUMENTS

> [!NOTE] Source
> Learned from: [<Video Title>](<youtube-url>)

## Prerequisites
<!-- What must be true before running this skill -->

## Steps
<!-- Extracted from the video — concrete, numbered, actionable -->
1. ...
2. ...

## Reference
<!-- Commands, config, snippets from the video -->

## Notes
<!-- Edge cases, gotchas, or tips mentioned in the video -->
```

If the video is purely conceptual (no clear procedure), skip the SKILL.md and note that in the vault note under `## Generated Skill`: "No procedural skill generated — concept reference only."

### 7. Update the vault note
Go back to the vault note and fill in the `## Generated Skill` section with a wikilink to the generated skill name.

### 8. Report output
```
## Done

Video: <title>
Channel: <channel>

Vault note: GitHub/University/YouTube/<Slugified Title>.md
Generated skill: domains/<output-domain>/.claude/skills/<skill-name>/SKILL.md

To use the skill:
  claude --add-dir ~/developer/enterprise/claude/domains/<output-domain>
  /project:<skill-name>
```

## Quality Checklist
- [ ] Transcript was fetched (not just description)
- [ ] Vault note is dense — no padding, no filler phrases
- [ ] Skill steps are actionable and derived from actual video content
- [ ] Skill frontmatter is valid with correct `name`, `description`, `argument-hint`
- [ ] Output paths are correct and files were written
- [ ] Vault note links to the generated skill
