---
name: generate-scroll-frames
description: Generate a matched start and end frame for a 3D scroll animation using any AI image generation tool. Outputs prompt formulas ready to use in your preferred tool and confirms the frames are ready for video generation.
argument-hint: <product or scene> --bg-color <hex> [--effect x-ray|explode|material]
---

# Generate Scroll Frames: $ARGUMENTS

## What this produces

Two image files — `start_frame.png` and `end_frame.png` — with matching backgrounds, lighting, and composition, ready to feed into `generate-transition-video`.

## Step 1: Parse Arguments

- Extract product/scene description from `$ARGUMENTS`
- Extract `--bg-color` — hex of the website section background (REQUIRED — no default, ask if missing)
- Extract `--effect` — transformation type: `x-ray` (default), `explode`, or `material`
- If any are missing, ask before proceeding

## Step 2: Confirm Background Color

Ask the user:
> "What is the exact background color of the website section this animation will sit on? (hex value, e.g. #0a0a0a)"

**This is the most important input.** If the frame background doesn't match the site background, the edges will be visible and the illusion breaks entirely.

## Step 3: Choose an Image Generation Tool

Recommend the best option for the user's situation:

| Tool | Best for | Reference image support | Notes |
|------|----------|------------------------|-------|
| **Gemini 2.5 Flash** (recommended) | Free, fast, accurate backgrounds | Yes — upload as reference | UI at aistudio.google.com, no API key needed |
| **Imagen 3 API** | Automation / API pipeline | Partial | Google AI API, paid per image |
| **DALL-E 3** | OpenAI users | Via GPT-4V inpainting | ChatGPT Plus or API |
| **Midjourney** | Highest artistic quality | `--cref` for style reference | Requires subscription |
| **Stable Diffusion** | Local / full control | img2img or ControlNet | Free, self-hosted |
| **Flux** | Open-source alternative | IP-Adapter or reference | Free, strong for products |

**Key requirement:** The tool you choose must be able to generate a second image that references the first (same composition, lighting, background). Gemini and Midjourney handle this most reliably.

## Step 4: Generate the Start Frame

**Prompt formula (works in any tool):**

```
[PRODUCT] fully assembled, sitting on a solid [BG_COLOR_NAME] background.
High-end product photography at 2K quality or higher.
Clean, premium aesthetic, soft directional studio lighting, no text, no shadows on background.
```

Replace `[PRODUCT]` with the parsed product/scene and `[BG_COLOR_NAME]` with the color name matching the hex (e.g. `#000000` → "black", `#ffffff` → "white", `#1a1a2e` → "deep navy").

**Tool-specific tips:**
- **Gemini**: Go to aistudio.google.com → Gemini 2.5 Flash → Image generation tab
- **Midjourney**: Append `--ar 16:9 --style raw` for cleaner product shots
- **DALL-E 3**: Works well in ChatGPT; add "photorealistic" and "studio photography"
- **Stable Diffusion**: Use a product photography LoRA + solid color background in inpainting

**Instructions:**
- Generate 3–4 variations and pick the best composition
- Product should be centered with breathing room on all edges
- Save the chosen image as `start_frame.png`

## Step 5: Generate the End Frame

**Upload `start_frame.png` as a reference image first** (in tools that support it), then use the prompt matching the chosen `--effect`:

**x-ray (default):**
```
X-ray image of the [PRODUCT] showing the inner component parts in great detail.
Keep the solid [BG_COLOR_NAME] background. Same composition as the reference image. No text.
```

**explode:**
```
[PRODUCT] exploding into its component parts in great detail, parts spreading outward.
Maintain the solid [BG_COLOR_NAME] background, same centered composition. No text.
```

**material:**
```
[PRODUCT] transforming from [MATERIAL_A] to [MATERIAL_B].
Keep the solid [BG_COLOR_NAME] background, same lighting and composition as the reference image. No text.
```

**Tool-specific tips for the end frame:**
- **Gemini**: Upload start_frame.png in the same conversation before prompting
- **Midjourney**: Use `--cref [start_frame_url]` for composition reference
- **DALL-E 3**: Paste start frame into ChatGPT, ask it to generate the transformed version
- **Stable Diffusion**: Use img2img with start frame as init image at ~0.6 denoising strength

**Instructions:**
- Generate 2–3 variations and pick the one most visually distinct from the start frame
- More contrast between frames = more dramatic scroll effect
- Save as `end_frame.png`

## Step 6: Verify the Frames

Before passing to the next skill, confirm:
- [ ] Both frames have the **exact same background color**
- [ ] Both frames are the **same aspect ratio**
- [ ] The product is clearly visible in both
- [ ] The transformation between frames is visually distinct (not too subtle)
- [ ] No visible text or UI artifacts in either frame

## Output

Report:
```
Start frame: start_frame.png
End frame:   end_frame.png
Background:  [hex]
Effect:      [x-ray|explode|material]
Tool used:   [tool name]
Ready for:   generate-transition-video
```
