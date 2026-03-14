---
bundle: uiux
version: 1.0.0
skills: [run-pipeline, design, review, design-system, brand, ui-styling]
pipeline: design-system
---

# UI/UX Bundle

Production-grade UI/UX design intelligence. 67 styles, 161 color palettes, 57 font pairings, 99 UX guidelines, 25 chart types, and 161 product-type decision rules — all as searchable markdown reference files. No Python or external dependencies.

---

## Activation Prompt

Drop this bundle folder anywhere in your project, then tell Claude:

```
I've added the UI/UX bundle to this project at `<path-to-bundle-folder>`.
Read `<path-to-bundle-folder>/BUNDLE.md` to load all skills and rules.
Use `<path-to-bundle-folder>` as the bundle root for all skill and pipeline lookups.
```

---

## Quick Start

### Design a new project
```
run-pipeline design-system product="fintech SaaS dashboard" stack="Next.js, Tailwind, shadcn/ui"
```

### Get style recommendations
```
Tell Claude: "I'm building a wellness app. Use the design skill to recommend a style, colors, and typography."
```

### Review existing UI
```
Tell Claude: "Review this page for UX issues using the review skill."
```

---

## Pipeline: `design-system`

```
design → ✓ → design-system → ✓ → review
```

Analyzes the product type, recommends style/colors/typography, generates a design system with tokens, then reviews against UX guidelines.

```
run-pipeline design-system product="e-commerce luxury fashion" stack="Next.js, Tailwind"
run-pipeline design-system product="healthcare patient portal" stack="React, MUI"
run-pipeline design-system product="AI search tool" stack="Svelte, Tailwind"
```

---

## Skills

### `design` — Design Intelligence

**Trigger**: "design this page", "what style fits this product?", "recommend colors"

The core skill. Analyzes product type, recommends UI style, color palette, typography, and effects. Loads reference files for styles, colors, typography, products, and UI reasoning rules. Produces a complete design recommendation with rationale.

### `review` — UI/UX Review

**Trigger**: "review this UI", "check accessibility", "audit this page"

Reviews UI code or designs against 10 priority categories (accessibility, touch, performance, style, layout, typography, animation, forms, navigation, charts). Uses the quick-reference checklist and UX guidelines. Produces an actionable findings report.

### `design-system` — Token Architecture

**Trigger**: "create a design system", "generate design tokens", "set up theming"

Creates a three-layer token architecture (primitive → semantic → component) with CSS variables, Tailwind config, and component specs. Produces a complete design system file.

### `brand` — Brand Identity

**Trigger**: "define the brand", "brand voice", "visual identity"

Defines brand voice, visual identity, messaging framework, and asset guidelines. Produces a brand guidelines document.

### `ui-styling` — Implementation

**Trigger**: "implement this design", "set up shadcn", "configure Tailwind"

Implements designs using shadcn/ui + Tailwind CSS. Covers component installation, theme configuration, responsive layouts, dark mode, and accessibility patterns.

### `run-pipeline` — Execute a Pipeline

**Trigger**: "run the design-system pipeline" or `run-pipeline design-system product="..."`

Loads the pipeline definition, executes each skill step in sequence with verification gates, and writes an outcome report.

---

## Reference Files

Loaded by skills for detailed design data:

| File | Content |
|------|---------|
| `reference/styles.md` | 67 UI styles with colors, effects, best-for, anti-patterns |
| `reference/colors.md` | 161 color palettes by product type with hex values |
| `reference/typography.md` | 57 font pairings with Google Fonts URLs and Tailwind config |
| `reference/products.md` | 161 product types with style/color/layout recommendations |
| `reference/ui-reasoning.md` | Decision rules mapping products to patterns, effects, anti-patterns |
| `reference/ux-guidelines.md` | 99 UX best practices across 10 categories |
| `reference/charts.md` | 25 chart types with library recommendations |
| `reference/icons.md` | Icon set recommendations by style and platform |
| `reference/landing-patterns.md` | Landing page structure patterns |
| `reference/quick-reference.md` | Pre-delivery checklist (a11y, touch, perf, layout) |

---

## Auto-Applied Rules

### Design Standards
- Match style to product type — never pick a style arbitrarily
- Use semantic color tokens, not raw hex in components
- Typography must meet minimum contrast ratios (4.5:1 AA, 7:1 AAA)
- SVG icons only — no emojis as structural UI elements
- Mobile-first responsive design with consistent breakpoints

### Accessibility
- WCAG AA minimum, AAA preferred
- All interactive elements ≥44×44px touch targets
- Visible focus states on all interactive elements
- Color is never the only indicator of state or meaning

---

## Stacking with Other Bundles

### With SDLC Bundle
- **Build phase**: The SDLC build skill can invoke this bundle's design skill for UI tasks
- **Audit phase**: The SDLC audit skill can invoke the review skill for UI quality checks

### With Frontend Bundle
- **Impeccable design**: Frontend's design standards complement this bundle's data-driven recommendations
- **Polish**: Frontend polish skill can be run after this bundle's design-system pipeline

```
npx @haqex/claude uiux frontend
npx @haqex/claude uiux sdlc
```
