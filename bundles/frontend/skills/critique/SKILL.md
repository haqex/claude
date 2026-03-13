---
name: critique
description: Design director critique of a frontend interface. Reviews hierarchy, composition, emotional resonance, and craft. Identifies what's working, what's not, and what would make it exceptional. Includes AI slop detection.
user-invokable: true
args:
  - name: area
    description: Specific area or component to critique (optional — omit for full critique)
    required: false
---

**First**: Use the frontend-design skill for design principles and anti-patterns.

Perform a design director critique. This is not a bug report — it's an honest, professional assessment of the design's effectiveness. What would a senior designer say after 5 minutes of reviewing this work?

## Critique Philosophy

A good critique:
- Identifies **what's working** and why (so it's preserved, not accidentally removed)
- Identifies **what's failing** with specific, actionable feedback
- Distinguishes between **taste** (subjective, note but don't demand change) and **craft** (objective failures — fix these)
- Asks **"what would make this exceptional?"** not just "what's wrong?"

A bad critique:
- Nitpicks details while missing structural problems
- Says "this is bad" without explaining why
- Imposes personal style without considering context
- Ignores what's working

---

## The Ten Critique Dimensions

### 1. Visual Hierarchy

**Question**: Does the eye know where to go first, second, third?

Evaluate:
- Is there a clear focal point? (There can only be one primary visual anchor)
- Does the hierarchy guide the user through the intended information flow?
- Are there competing elements at the same visual weight? (Creates confusion)
- Is contrast used to create hierarchy? (Size, weight, color, space)

**Common failures**:
- Everything the same size and weight — no hierarchy at all
- Two elements fighting for dominance
- The most important information is not the most visually prominent
- Headers that don't feel more important than body text

---

### 2. Composition & Layout

**Question**: Does the layout feel intentional and considered?

Evaluate:
- Is asymmetry used to create dynamism, or is everything centered (lazy)?
- Does the layout have a clear structure that can be understood at a glance?
- Are negative space and breathing room used effectively?
- Does the grid feel coherent even if it's not rigid?

**Common failures**:
- Everything centered with equal spacing everywhere (undesigned)
- Elements floating without clear relationships
- No flow — sections feel disconnected
- No variation in density (tight everywhere, or loose everywhere)

---

### 3. Typography

**Question**: Does the type feel crafted or default?

Evaluate:
- Font choice: distinctive or generic?
- Pairing: genuine contrast between display and body, or two similar fonts?
- Scale: clear hierarchy with varied sizes, or four sizes all close together?
- Detail: appropriate line height, letter spacing, measure (line length)?

**Common failures**:
- Inter or Roboto with no personality
- Display and body fonts that look almost identical
- Paragraph text with 1.2 line height (too tight)
- Heading with 1.6 line height (too loose)
- Body text wider than 75 characters
- No size contrast between heading levels

---

### 4. Color

**Question**: Does the palette feel considered and cohesive?

Evaluate:
- Is there a clear dominant color with a sharp accent? Or a muddy multicolor palette?
- Are neutrals tinted toward the brand hue, or dead gray?
- Does color usage follow the 60-30-10 rule (roughly)?
- Is the palette consistent, or does color usage feel arbitrary?

**Common failures**:
- Too many colors — no dominance, no hierarchy
- Accent color used everywhere — loses its power
- Pure gray neutrals with no warmth or character
- AI palette: cyan-on-dark, purple-to-blue gradients
- Color used decoratively with no meaning

---

### 5. Motion & Interaction

**Question**: Does motion add meaning or just noise?

Evaluate:
- Are transitions smooth and purposeful?
- Does the easing feel natural (ease-out-quart/quint) or robotic/toy-like?
- Do animations communicate state changes clearly?
- Is the timing calibrated? (Too fast = imperceptible, too slow = annoying)

**Common failures**:
- Bounce/elastic easing (feels dated)
- Everything animating at the same duration
- Hover states with no feedback
- Transitions that animate layout properties (causes jank)
- No reduced motion support

---

### 6. Emotional Resonance

**Question**: How does this make you feel? Does that match the intent?

Evaluate:
- What emotion does the design evoke? (Calm, energetic, trustworthy, playful, premium?)
- Does that emotion match the context and audience?
- Is there a personality, or does it feel neutral and forgettable?
- Would a user feel confident using this? Delighted? Annoyed?

**Common failures**:
- No emotional point-of-view (feels like every other app)
- Trying to be "cool" without considering what the user actually needs to feel
- Mismatched tone (playful UI for serious enterprise task)
- Distrust-inducing details (cheap-looking, inconsistent, low craft)

---

### 7. Craft & Detail

**Question**: Does the level of finish signal care and quality?

Evaluate:
- Optical corrections: icons centered, text optically aligned
- Consistent spacing: same-scale values used, no random gaps
- All interactive states designed (not just default + hover)
- Edge cases handled: empty states, long content, loading states

**Common failures**:
- Icon visually low (mathematically centered but looks off)
- Random spacing values (17px here, 22px there)
- Missing focus styles
- Empty state that's just blank (no guidance)
- Loading state that jumps layout

---

### 8. Originality

**Question**: Is this distinctive, or could it be any product?

Evaluate:
- Does this have a clear visual identity?
- What would make someone remember this interface?
- Is it solving the design challenge in a novel way, or defaulting to the template?
- Would a designer look at this and say "that's interesting"?

**Common failures** (AI anti-patterns):
- Hero metric layout with gradient accent
- Icon + heading + paragraph card grid
- Glassmorphism for visual interest
- Dark mode with neon/glow accents
- No distinctive element — looks like 1,000 other apps

---

### 9. Accessibility & Inclusion

**Question**: Can everyone use this?

Evaluate (briefly — detailed audit is `/project:audit`):
- Sufficient contrast ratios
- Keyboard navigation works
- Focus indicators visible
- Not dependent on color alone
- Text doesn't get clipped at browser text zoom

---

### 10. Alignment with Intent

**Question**: Does the design achieve its stated goal?

Evaluate:
- What was the design trying to achieve? (If unclear, note this)
- Does the visual design serve the functional goal?
- Are the most important user actions the most visually prominent?
- Does the information architecture support the user's task?

---

## AI Slop Detection

After the ten dimensions, explicitly check for AI fingerprints:

**Run the AI Slop Test**: "If someone saw this and said 'AI made this,' would they immediately agree?"

Identify any present from the canonical list:
- Cyan-on-dark color palette
- Purple-to-blue gradients (backgrounds or text)
- Dark mode with glowing/neon accents
- Glassmorphism everywhere (not as a purposeful choice)
- Hero metric layout: big number + small label + gradient
- Identical card grid: icon + heading + paragraph × 4-6
- Inter or Roboto as the only font
- Nested cards inside cards
- Rounded rectangles with generic drop shadows
- Gradient text on headings for "impact"
- Large rounded icons above every section heading
- Centered everything with equal spacing

If any are present: call them out explicitly and recommend changes.

---

## Critique Report Format

### What's Working

> [2-4 specific things that are genuinely good and should be preserved]

This section is not filler — it exists to prevent good decisions from being accidentally "fixed."

### Priority Issues

#### P1 — Structural (Fix before anything else)

**[Issue title]**
> [Specific, honest assessment. Name the problem, explain why it matters, suggest direction — not prescription.]

#### P2 — Craft (Fix before shipping)

[Same format]

#### P3 — Polish (Fix before launch)

[Same format]

### The One Thing

> If this design could only improve in one way before shipping, it would be: [single most impactful change]

### What Would Make This Exceptional

> [1-3 sentences describing the delta between "good" and "exceptional" for this specific design]

---

## Critique Tone

Be honest without being cruel. Be specific without being pedantic. Acknowledge constraints (time, scope, platform) when they explain a decision.

Avoid:
- "This is bad" (too vague)
- "I would have done it differently" (irrelevant)
- Nitpicking details when structural problems exist
- Praising everything equally (waters down real praise)

Use:
- "The hierarchy breaks down here because..."
- "This works well — the contrast between X and Y creates a clear..."
- "The font choice undermines the premium positioning because..."
- "This is the most effective section because..."
