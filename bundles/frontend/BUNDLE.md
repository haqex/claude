---
bundle: frontend
version: 1.0.0
source: https://github.com/pbakaus/impeccable
skills: [run-pipeline, impeccable-design, audit, polish, normalize, critique]
pipeline: frontend-build
---

# Frontend Design Bundle

> Powered by [Impeccable](https://impeccable.style) — 1 skill, 4 commands, and curated anti-patterns for production-grade frontend design that avoids generic AI aesthetics.

---

## Activation Prompt

Drop this bundle folder anywhere in your project, then tell Claude:

```
I've added the frontend bundle to this project at `<path-to-bundle-folder>`.
Read `<path-to-bundle-folder>/BUNDLE.md` to load all skills and rules.
Use `<path-to-bundle-folder>` as the bundle root for all skill and pipeline lookups.
```

That's it. No config files, no server setup, no `.claude/` copying required.

---

## Optional: Install into `.claude/` (for persistent projects)

If you want the skills globally available across sessions:

```bash
cp -r skills/* .claude/skills/
cp -r rules/* .claude/rules/
```

Then add to your `CLAUDE.md`:
```markdown
@path/to/frontend/BUNDLE.md
```

---

## Skills

### `run-pipeline` — Execute a Pipeline

**Trigger**: User asks to "run the X pipeline" or invokes `run-pipeline <name>`.

Loads the pipeline definition from `<bundle-root>/pipelines/<name>.md`, executes each skill step in sequence using skills from `<bundle-root>/skills/`, and writes an outcome report to `<bundle-root>/outcomes/`.

```
run-pipeline frontend-build target="a pricing page"
run-pipeline frontend-build target="settings form" style="minimal" framework="React+Tailwind"
```

---

### `impeccable-design` — Build UI

**Trigger**: User asks to build, create, design, or generate any UI component, page, or application.

Generates distinctive, production-grade interfaces with a committed aesthetic direction. Loads 7 reference domains: typography, color, layout, motion, interaction, responsive, UX writing.

```
Build a pricing page for a B2B SaaS product
Create a mobile navigation menu
Design a user settings form — minimal editorial aesthetic
Build a landing page hero with scroll animation
```

### `audit` — Quality Assessment

**Trigger**: "review this UI", "check this component", "audit this page", "what's wrong with this?"

Scans across 5 dimensions: accessibility (WCAG), performance, theming (design tokens), responsive design, and AI anti-patterns. Generates a severity-rated report with recommended fix commands.

```
Audit the checkout flow for accessibility issues
Review this dashboard for anti-patterns
```

### `polish` — Final Pass Before Shipping

**Trigger**: "polish this", "final pass", "clean this up", "before we ship", "review details"

Works through 10 dimensions: visual alignment, typography, color/contrast, all 8 interactive states, micro-interactions, copy, icons, forms, edge cases, responsiveness, performance, code quality. 19-item checklist.

```
Polish the settings page before shipping
Final pass on the onboarding flow
```

### `normalize` — Align with Design System

**Trigger**: "normalize this", "make this consistent", "align with the design system", "it looks different from the rest"

Discovers the existing design system, replaces hard-coded values with tokens, swaps custom implementations for design system components, aligns spacing/typography/motion with established patterns.

```
Normalize the new invoice page to match the rest of the app
Make this component consistent with the design system
```

### `critique` — Design Director Review

**Trigger**: "critique this design", "design review", "what's wrong with this UI", "give me honest feedback"

Evaluates across 10 dimensions: AI slop detection, visual hierarchy, information architecture, emotional resonance, discoverability, composition, typography, color, states/edge cases, microcopy. Feedback structured as a design director: what works, priority issues, questions to reconsider.

```
Critique the new dashboard layout
Give me an honest design review of the homepage
```

---

## Pipeline: `frontend-build`

Full design-to-ship in 3 passes:

```
build (impeccable-design) → audit → polish
```

```
run-pipeline frontend-build target="a pricing page"
run-pipeline frontend-build target="user settings form" style="editorial minimal" framework="React+Tailwind"
run-pipeline frontend-build target="mobile nav" framework="vanilla HTML/CSS/JS"
```

---

## Auto-Applied Rules

These apply to **every frontend and design task** automatically — you do not need to invoke a skill for them to take effect.

### 1. Choose a Distinctive Aesthetic Direction
Never default to a generic aesthetic. Before generating any UI, commit to a named direction:
- Brutally minimal / editorial / luxury / organic / retro-futuristic / brutalist / maximalist / playful

### 2. The AI Slop Test (Run After Every Generation)
If someone saw this and said "AI made this" — would they agree immediately? If yes, rework it.

**Fingerprints to eliminate:**
- Cyan-on-dark or purple-to-blue gradient color palette
- Dark mode with glowing/neon accents
- Glassmorphism used decoratively (blur cards, glow borders)
- Hero metric layout: big number + small label + gradient accent bar
- Identical card grid: icon + heading + paragraph, repeated N times
- Inter, Roboto, Arial, or system fonts
- Nested cards inside cards
- Gradient text on headings or metrics
- Rounded rectangles with generic drop shadows

### 3. OKLCH Color System (Always)
```css
/* Always: perceptually uniform, tinted neutrals */
--color-primary: oklch(60% 0.15 250);
--neutral-100: oklch(95% 0.01 250);  /* tinted, not pure gray */

/* Never: */
color: #3b82f6;          /* hex */
color: rgb(59, 130, 246); /* rgb */
color: hsl(217, 91%, 60%); /* hsl */
color: #000000;           /* pure black */
color: #ffffff;           /* pure white */
```

### 4. Font Rules (Always)
- Never use Inter, Roboto, Arial, Open Sans, or system font stack for display/brand
- Always pair a distinctive display font with a refined body font
- Use `clamp()` for fluid heading sizes
- Never use monospace as "developer aesthetic" shorthand

### 5. Eight Interactive States (Always)
Every interactive element needs all 8 states designed: default, hover, focus, active, disabled, loading, error, success.

Focus rings: `:focus-visible` only, 2-3px, offset, high contrast. Never `outline: none` without replacement.

### 6. Semantic HTML (Always)
- Actions → `<button>`
- Navigation → `<a href>`
- Dialogs → `<dialog>` with `showModal()`
- Tooltips/dropdowns → `popover` attribute
- Proper heading hierarchy: `h1 → h2 → h3`
- Never `<div>` for interactive elements

### 7. Motion (Always)
- Only animate `transform` and `opacity` — never layout properties
- Exponential easing (`cubic-bezier(0.16, 1, 0.3, 1)`) for entrances
- Never bounce or elastic easing
- Always `@media (prefers-reduced-motion: reduce)` support
- Height animations: use `grid-template-rows` transition, not `height`

### 8. After Building — Recommend Next Steps
Always suggest: "Run `/project:audit` to check for issues, then `/project:polish` before shipping."

---

## Reference Files

Loaded automatically by `impeccable-design` — consult these for deep guidance:

| File | Topic |
|------|-------|
| `skills/impeccable-design/reference/typography.md` | Font selection, type scale, `clamp()` sizing, OpenType |
| `skills/impeccable-design/reference/color-and-contrast.md` | OKLCH in depth, palette structure, WCAG, dark mode |
| `skills/impeccable-design/reference/spatial-design.md` | 4pt grid, spacing tokens, container queries, optical corrections |
| `skills/impeccable-design/reference/motion-design.md` | 100/300/500ms rule, easing functions, reduced motion |
| `skills/impeccable-design/reference/interaction-design.md` | All 8 states, focus rings, forms, Popover API, keyboard nav |
| `skills/impeccable-design/reference/responsive-design.md` | Mobile-first, input-aware design, safe areas, srcset |
| `skills/impeccable-design/reference/ux-writing.md` | Button labels, error messages, empty states, tone |
