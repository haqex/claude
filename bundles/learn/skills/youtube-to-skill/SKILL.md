---
---

---
name: youtube-to-skill
description: Ingest a YouTube video — fetches the transcript, writes a concise vault note, then writes a proposal for a reusable SKILL.md capturing the how-to knowledge from the video
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
Each video gets its own subfolder. Write to `/Users/aymanhaque/developer/obsidian/obsvault/GitHub/University/YouTube/<Video Title>/`:

**Filename:** `<Video Title>.md` (same name as the folder — makes it a Make.md folder note)

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
<!-- 3-5 sentence summary. Dense. No filler. What does this video teach and why does it matter? -->

## Key Concepts
<!-- Bullet list of terms/ideas needed to understand the content -->

## How It Works
<!-- The core mechanism or approach explained concisely -->

## Step-by-Step
<!-- Only include if the video has clear procedural steps. Numbered list. -->

## Commands / Code
<!-- Any commands, config snippets, or code shown in the video -->

## Takeaways
<!-- 2-4 bullets: what to remember or apply -->

## Generated Skill
<!-- Filled in at step 7 -->
```

### 6. Write the skill proposal
If the video is purely conceptual (no clear procedure), skip this step and note in the vault note under `## Generated Skill`: "No procedural skill generated — concept reference only."

Otherwise:
- Determine the skill name: kebab-case of the core procedure (e.g. `playwright-claude-code-setup`)
- Determine the target domain: `output-domain` argument if provided, otherwise `learn`
- Create a folder: `proposals/YYYY-MM-DD-<skill-name>/`
- Write `proposals/YYYY-MM-DD-<skill-name>/PROPOSAL.md` — do NOT write directly to `domains/`

**Proposal format:**

```
---
type: new-skill
proposed: <YYYY-MM-DD>
source: <youtube-url>
target_domain: <domain>
skill_name: <skill-name>
target_path: domains/<domain>/.claude/skills/<skill-name>/SKILL.md
status: pending
description: "<one-line summary of what this skill does>"
---

# Proposal: New Skill — <skill-name>

> Source: [<Video Title>](<youtube-url>) by <Channel Name>

## Related Files
- [[<Video Title>]] — source YouTube note
- [[Component Map]] — architecture canvas (in this folder)
- [[Diagrams]] — Mermaid diagrams (in this folder)

## What this adds
A new skill at `domains/<domain>/.claude/skills/<skill-name>/SKILL.md`

## Proposed SKILL.md

(full SKILL.md content here, fenced as a code block)

## To apply
/project:approve-proposal <YYYY-MM-DD-skill-name>
```

### 7. Update the vault note
Go back to the vault note and fill in the `## Generated Skill` section:
- If a proposal was written: `Pending approval — see [[PROPOSAL|<YYYY-MM-DD-skill-name>/PROPOSAL]]`
- If concept-only: "No procedural skill generated — concept reference only."

### 8. Report output
```
## Done

Video: <title>
Channel: <channel>

Vault note: GitHub/University/YouTube/<Video Title>/<Video Title>.md
Skill proposal: proposals/<YYYY-MM-DD-skill-name>/PROPOSAL.md (pending approval)

To apply the proposal:
  /project:approve-proposal <YYYY-MM-DD-skill-name>
```

## Quality Checklist
- [ ] Transcript was fetched (not just description)
- [ ] Vault note is dense — no padding, no filler phrases
- [ ] Vault note saved to `GitHub/University/YouTube/<Title>/<Title>.md` (subfolder + folder note)
- [ ] Proposal written to `proposals/<YYYY-MM-DD-name>/PROPOSAL.md` — NOT directly to domains/ or as a flat file
- [ ] Proposal has `## Related Files` section with wikilinks to note and diagrams
- [ ] Proposal frontmatter is a single `---` block (sticker, type, proposed, source, target_domain, skill_name, target_path, status, description all in one block)
- [ ] Proposal frontmatter has correct target_path and status: pending
- [ ] Proposed skill steps are actionable and derived from actual video content
- [ ] Vault note `## Generated Skill` links to proposal via wikilink
