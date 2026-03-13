---
name: build-scroll-animation
description: Extract frames from transition.mp4 with ffmpeg and implement a scroll-driven flipbook animation in Claude Code. Takes transition.mp4 from generate-transition-video and produces a production-ready scroll animation.
argument-hint: [--output-dir <path>] [--fps <15|24|30>] [--bg-color <hex>]
allowed-tools: [Bash, Read, Write, Edit]
---

# Build Scroll Animation: $ARGUMENTS

## What this produces

A scroll-driven flipbook animation embedded in your web project — full viewport width, canvas-based rendering, preloaded frames, mobile-responsive.

## Prerequisites

- `transition.mp4` in the current directory (from `generate-transition-video`)
- `ffmpeg` installed: `brew install ffmpeg`

## Step 1: Parse Arguments

- Extract `--output-dir` — where to save frames (default: `./animation/`)
- Extract `--fps` — frames per second to extract (default: `24`)
- Extract `--bg-color` — website section background hex (default: `#000000`)

## Step 2: Extract Frames

```bash
mkdir -p animation/frames

ffmpeg -i transition.mp4 \
  -vf "fps=24,scale=1920:1080" \
  -q:v 2 \
  animation/frames/frame_%04d.webp
```

Count frames:
```bash
ls animation/frames/ | wc -l
```

**Target: 60–120 frames** for a smooth scroll experience.
- Too many (>150): re-run with `fps=15` or `fps=18`
- Too few (<40): re-run with `fps=30`

Adjust fps in the command as needed, then re-extract.

## Step 3: Build the Scroll Animation

Paste this prompt into Claude Code (in your web project directory):

```
I have scroll animation frames in animation/frames/ — WEBP images named
frame_0001.webp through frame_[N].webp. [N] = total frame count.

Build a scroll-driven flipbook animation with:
- Full viewport width, fixed height section (frameCount * 12px tall)
- Canvas element for rendering (not img tag swapping)
- Animation progress keyed to scroll position within the section
- Preload all frames on page load with a visible loading bar
- CSS scroll-driven animations where supported, requestAnimationFrame JS fallback
- Section background: [BG_COLOR]
- Mobile responsive
```

Replace `[N]` with your actual frame count and `[BG_COLOR]` with the hex value.

## Step 4: Optimize

After the animation is working, paste this into Claude Code:

```
Optimize the scroll animation:
- Compress any frames over 150KB to 85% WEBP quality
- Lazy load frames that are below the fold on initial page load
- Use requestAnimationFrame for all scroll handlers
- Add will-change: transform to the canvas element
- Throttle scroll events to 60fps max
```

## Step 5: QA Checklist

- [ ] Frames directory contains 60–120 files
- [ ] Each WEBP frame is under 150KB
- [ ] Canvas-based rendering (not img swapping)
- [ ] All frames preload with loading indicator visible
- [ ] Scroll progress maps correctly to frame index (no jump at start or end)
- [ ] Animation works on mobile (touch scroll)
- [ ] Background color of section matches frame backgrounds exactly
- [ ] No flash of unstyled content on load

## Output

Report:
```
Frames extracted: [N] frames at [fps]fps
Output directory: animation/frames/
Background:       [hex]
Animation:        scroll-driven flipbook, canvas-based
Status:           ready for QA
```
