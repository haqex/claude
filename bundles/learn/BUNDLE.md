---
bundle: learn
version: 1.0.0
skills: [run-pipeline, youtube-to-skill, build-scroll-animation, generate-scroll-frames, generate-transition-video]
pipeline: youtube-research
---

# Learn Bundle

Knowledge ingestion and media generation skills. Captures structured knowledge from YouTube videos into vault notes and skill proposals. Also includes the 3D scroll animation pipeline for building cinematic product pages.

---

## Activation Prompt

Drop this bundle folder anywhere in your project, then tell Claude:

```
I've added the learn bundle to this project at `<path-to-bundle-folder>`.
Read `<path-to-bundle-folder>/BUNDLE.md` to load all skills and rules.
Use `<path-to-bundle-folder>` as the bundle root for all skill and pipeline lookups.
```

That's it. No config files, no server setup, no `.claude/` copying required.

---

## Optional: Install into `.claude/` (for persistent projects)

```bash
cp -r skills/* .claude/skills/
```

Then add to your `CLAUDE.md`:
```markdown
@path/to/learn/BUNDLE.md
```

---

## Skills

### `run-pipeline` — Execute a Pipeline

**Trigger**: User asks to "run the X pipeline" or invokes `run-pipeline <name>`.

Loads the pipeline definition from `<bundle-root>/pipelines/<name>.md`, executes each skill step in sequence using skills from `<bundle-root>/skills/`, and writes an outcome report to `<bundle-root>/outcomes/`.

```
run-pipeline youtube-research url=https://youtube.com/watch?v=...
```

---

### `youtube-to-skill` — Capture Knowledge from YouTube

**Trigger**: User pastes a YouTube URL and wants to learn from it, capture notes, or extract a reusable skill.

Fetches the video transcript, writes a structured vault note with summary, key concepts, how-to steps, and takeaways. If the video contains procedural how-to content, also generates a skill proposal that can be approved and deployed.

```
Learn from this video: https://youtube.com/watch?v=...
Ingest this YouTube video and write a note
Watch this and create a skill proposal: https://youtu.be/...
```

**Output:**
- Vault note: `GitHub/University/YouTube/<Title>/<Title>.md`
- Skill proposal (if applicable): `claude/proposals/YYYY-MM-DD-<skill>/PROPOSAL.md`

### `build-scroll-animation` — Build Flipbook Scroll Animation

**Trigger**: User has extracted video frames and wants to build a scroll-driven animation.

Builds a canvas-based, scroll-driven flipbook animation from a directory of WEBP frames. CSS scroll-driven animations with JS fallback. Preloads all frames, uses `requestAnimationFrame`, mobile-responsive.

```
Build a scroll animation from the frames in animation/frames/
I have 96 WEBP frames in ./frames/ — build the scroll flipbook
```

**Expects**: `animation/frames/frame_0001.webp` ... `frame_NNNN.webp`

### `generate-scroll-frames` — Extract Frames from Video

**Trigger**: User has a `transition.mp4` and needs frames extracted for a scroll animation.

Uses `ffmpeg` to extract frames at the right fps (targets 60-120 frames). Validates frame count, adjusts fps if needed, outputs WEBP files.

```
Extract frames from transition.mp4
I need frames from this video for a scroll animation
```

**Requires**: `ffmpeg` installed (`brew install ffmpeg`)

### `generate-transition-video` — Generate Higgsfield Transition

**Trigger**: User has start and end frame images and wants a smooth video transition.

Guides generation of a Higgsfield video transition between two frames. Provides prompt formulas, key rules (no camera movement, simple/gradual beats complex), and download instructions.

```
Generate a transition video between my start and end frames
Help me create the Higgsfield video for my scroll animation
```

**Requires**: [Higgsfield](https://higgsfield.ai) account

---

## Pipeline: `youtube-research`

Full knowledge capture workflow for a YouTube video:

```
ingest (youtube-to-skill) → diagrams (generate-diagrams) → moc (generate-moc)
```

```
run-pipeline youtube-research url=https://youtube.com/watch?v=<id>
```

**Steps:**
1. **ingest** — fetch transcript, write vault note, generate skill proposal
2. **diagrams** — generate Canvas + Mermaid diagrams into the proposal folder
3. **moc** — update the YouTube Map of Content

---

## 3D Scroll Animation Workflow

Full pipeline for Apple-style scroll animations:

| Step | Tool | What You Do |
|------|------|------------|
| 1 | Google AI Studio | Generate start frame (product assembled) |
| 2 | Google AI Studio | Generate end frame (x-ray / exploded / transformed) |
| 3 | Higgsfield | Animate transition between frames → video |
| 4 | `generate-scroll-frames` | Extract 60-120 WEBP frames from video |
| 5 | `build-scroll-animation` | Build canvas-based scroll flipbook |

**Critical rule**: Start frame background color must exactly match the website section background. Any mismatch shows edges and breaks the illusion.

**Quick start:**
```
I have start_frame.png and end_frame.png on a black background.
I want to build an Apple-style scroll animation for my product page.
```

---

## Notes

- `youtube-to-skill` requires internet access to fetch transcripts
- `generate-scroll-frames` requires `ffmpeg` (`brew install ffmpeg`)
- `generate-transition-video` is a guidance skill — actual video generation happens on Higgsfield's website
- Frame target: 60-120 WEBP frames at 24fps for smooth scroll (adjust if needed)
