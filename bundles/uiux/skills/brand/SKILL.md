---
name: brand
description: "Brand identity definition — voice, visual identity, messaging framework, asset guidelines, and consistency standards."
argument-hint: "[create|review] [brand-name]"
allowed-tools: [Read, Write, Edit, Glob, Grep]
---

# Brand Identity: $ARGUMENTS

Define or review brand identity including voice, visual identity, messaging, and consistency standards.

## When to Use

- Defining brand voice and tone for a new product
- Creating visual identity guidelines
- Building a messaging framework
- Reviewing existing brand assets for consistency
- Setting up a brand style guide

## Workflow

### Step 1: Gather Brand Context

From `$ARGUMENTS` or user conversation:
- **Brand name**: product or company name
- **Industry**: what space the brand operates in
- **Target audience**: who the brand speaks to
- **Brand personality**: 3–5 adjectives (e.g., trustworthy, innovative, playful)
- **Competitors**: what to differentiate from

### Step 2: Define Brand Voice

#### Voice Attributes (pick 3–5)

| Attribute | Description | Do | Don't |
|-----------|-------------|-----|-------|
| Professional | Competent, reliable | Clear jargon-free language | Overly casual or slangy |
| Friendly | Approachable, warm | Conversational tone | Cold, corporate speak |
| Bold | Confident, direct | Strong statements | Hedging, passive voice |
| Innovative | Forward-thinking | Reference progress | Sound outdated |
| Playful | Fun, witty | Light humor, wordplay | Forced jokes, puns |
| Trustworthy | Honest, transparent | Cite data, be specific | Vague promises |

#### Tone Spectrum

Define how voice shifts by context:
- **Marketing**: [more casual/bold]
- **Product UI**: [more clear/concise]
- **Support**: [more empathetic/helpful]
- **Legal/Policy**: [more formal/precise]

### Step 3: Define Visual Identity

#### Color System
Reference `<BUNDLE_ROOT>/reference/colors.md` for industry-appropriate palettes.

- **Primary color**: brand anchor color + rationale
- **Secondary color**: supporting color
- **Accent color**: CTAs and highlights
- **Neutral palette**: grays for text, backgrounds, borders
- **Semantic colors**: success, warning, error, info

#### Typography
Reference `<BUNDLE_ROOT>/reference/typography.md` for font pairings.

- **Heading font**: [name] — personality, weight range
- **Body font**: [name] — readability, weight range
- **Monospace** (if needed): for code, data
- **Type scale**: consistent size progression

#### Logo Usage
- Minimum size
- Clear space requirements
- Approved color variations (full color, monochrome, reversed)
- Prohibited modifications

### Step 4: Create Messaging Framework

#### Positioning Statement
"For [target audience] who [need/want], [brand] is the [category] that [key benefit] because [reason to believe]."

#### Key Messages (3–5)
Each message should:
- Address a specific audience pain point
- Connect to a brand value
- Be provable or demonstrable

#### Tagline Options
- Short (2–4 words): for logo lockup
- Medium (5–8 words): for marketing
- Long (1 sentence): for elevator pitch

### Step 5: Output

Write to project directory:
- **`docs/brand-guidelines.md`** — Complete brand guide with voice, visual identity, messaging
- Include all color hex values, font names, and usage rules

## Quality Checklist
- [ ] Brand voice defined with 3–5 attributes
- [ ] Tone spectrum covers key contexts (marketing, product, support)
- [ ] Color system includes primary, secondary, accent, neutrals, semantic
- [ ] Typography includes heading + body fonts with import URLs
- [ ] Messaging framework has positioning statement and key messages
- [ ] Do/don't examples provided for voice
