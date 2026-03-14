---
name: design-system
description: Analyze product type, recommend style/colors/typography, generate a complete design system with tokens, then review against UX guidelines.
inputs:
  - name: product
    description: Product type and industry (e.g. "fintech SaaS dashboard", "e-commerce luxury fashion")
    required: true
  - name: stack
    description: Technology stack (e.g. "Next.js, Tailwind, shadcn/ui")
    required: false
  - name: name
    description: Project name for file naming
    required: false
steps:
  - id: design
    skill: design
    args: "{{input.product}} {{input.stack}}"
    outputs:
      - design-recommendation.md

  - id: design-system
    skill: design-system
    args: "{{input.name}} {{input.product}}"
    after: [design]
    outputs:
      - design-system/tokens.css
      - design-system/MASTER.md
      - design-system/tailwind.config.snippet.js

  - id: review
    skill: review
    args: "design-system/"
    after: [design-system]
    on_error: skip
    outputs:
      - design-review.md
---

# Design System Pipeline

Analyze → Design → Token Architecture → Review

## Flow

```
design → design-system → review
```

## Usage

```
run-pipeline design-system product="fintech SaaS dashboard" stack="Next.js, Tailwind, shadcn/ui" name="FinFlow"
run-pipeline design-system product="e-commerce luxury fashion" stack="React, MUI"
run-pipeline design-system product="healthcare patient portal" stack="Vue, Vuetify"
run-pipeline design-system product="AI search tool" stack="Svelte, Tailwind"
```

## Outputs

| File | Phase | Content |
|------|-------|---------|
| `design-recommendation.md` | Design | Style, colors, typography, effects recommendation |
| `design-system/tokens.css` | Design System | CSS custom properties (3-layer tokens) |
| `design-system/MASTER.md` | Design System | Complete design system documentation |
| `design-system/tailwind.config.snippet.js` | Design System | Tailwind theme extension |
| `design-review.md` | Review | UX quality audit findings |
