---
name: generate-transition-video
description: Animate the transition between two reference frames using any AI video generation tool. Takes start_frame.png and end_frame.png from generate-scroll-frames and produces transition.mp4 ready for frame extraction.
argument-hint: <product or scene> --effect <x-ray|explode|material> [--bg-color <hex>]
---

# Generate Transition Video: $ARGUMENTS

## What this produces

`transition.mp4` — a smooth 5-second animation bridging `start_frame.png` to `end_frame.png`, ready for ffmpeg frame extraction.

## Prerequisites

- `start_frame.png` and `end_frame.png` in the current directory (from `generate-scroll-frames`)
- An account with an AI video generation tool (see Step 2)

## Step 1: Parse Arguments

- Extract product/scene from `$ARGUMENTS`
- Extract `--effect` — the transformation type used in `generate-scroll-frames` (`x-ray`, `explode`, or `material`)
- Extract `--bg-color` — the background hex color used (needed for the prompt)

## Step 2: Choose a Video Generation Tool

The key requirement: the tool must support **start + end frame mode** (anchor both the first and last frame). Most modern video tools support this.

| Tool | Best for | Start/End frame | Notes |
|------|----------|-----------------|-------|
| **Higgsfield** (recommended) | Smooth object transitions | Yes — dedicated mode | Free tier available; higgsfield.ai |
| **Runway Gen-4** | High quality, reliable | Yes — via keyframes | Paid; best overall quality |
| **Kling** | Fast, cost-effective | Yes | Good background consistency |
| **Pika 2.0** | Easy to use | Yes | Good for simple transitions |
| **Luma Dream Machine** | Photorealistic motion | Partial — start frame only | Less control over end state |
| **Sora** | OpenAI users | Yes — storyboard mode | ChatGPT Pro |

**What to look for in any tool:**
- Start frame + end frame upload (not just single image)
- Ability to write your own prompt (disable auto-enhancement)
- 5-second minimum duration
- Consistent background color support

## Step 3: Upload the Frames

In your chosen tool, find the **Start/End Frame** or **Keyframe** mode and:

1. Upload `start_frame.png` as the **first frame**
2. Upload `end_frame.png` as the **last frame**
3. Set duration: **5 seconds**
4. **Disable any auto prompt enhancement / auto-captioning** — these often override your prompt and add unwanted motion

## Step 4: Write the Transition Prompt

Output the exact prompt for the user to copy based on the `--effect` value:

**x-ray:**
```
Continuous transition where the [PRODUCT]'s outer shell gradually becomes transparent,
revealing the inner components and circuitry underneath.
Smooth, even pacing. No camera movement. [BG_COLOR] background throughout.
```

**explode:**
```
Continuous transition where the [PRODUCT] slowly breaks apart into its component pieces,
each part drifting outward from the center.
Smooth, even pacing. No rotation or camera movement. [BG_COLOR] background throughout.
```

**material:**
```
Smooth, continuous transformation from [MATERIAL_A] to [MATERIAL_B].
The change sweeps gradually across the surface of the [PRODUCT].
No camera movement. [BG_COLOR] background throughout.
```

Replace `[PRODUCT]`, `[BG_COLOR]`, `[MATERIAL_A]`, `[MATERIAL_B]` with the parsed values.

**If unsure what to write:** drop both frames into Claude and ask:
> "Write a video transition prompt that smoothly animates between image 1 (start) and image 2 (end). No camera movement, 5 seconds, [BG_COLOR] background."

## Step 5: Pre-Generation Checklist

- [ ] Start frame in first frame slot
- [ ] End frame in last frame slot
- [ ] Duration: **5 seconds**
- [ ] Prompt enhancement / auto-caption **OFF**
- [ ] No camera movement, zoom, or rotation in the prompt

## Step 6: Evaluate the Output

After the video generates, check:
- [ ] Background stays consistent throughout — no color drift
- [ ] Transition is gradual, not abrupt
- [ ] No jitter, flicker, or warping artifacts
- [ ] Product is recognizable in both start and end states

**If output is poor:**
- Simplify the prompt — shorter usually works better
- Add "gradual and even pacing" and "no sudden changes" if motion is too fast
- Add "solid [color] background, no variation" if background flickers
- Regenerate 1–2 more times (results vary between generations)
- Try a different tool — background consistency varies significantly between models

## Step 7: Download

Download the accepted video and save as `transition.mp4` in the same directory as the frames.

## Output

Report:
```
Transition video: transition.mp4
Duration:         5 seconds
Effect:           [x-ray|explode|material]
Tool used:        [tool name]
Ready for:        build-scroll-animation
```
