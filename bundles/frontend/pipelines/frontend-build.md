---
---

---
name: frontend-build
description: Full frontend design workflow — loads Impeccable design context, builds the component or page with a distinctive aesthetic, audits for quality and accessibility, then polishes before shipping
inputs:
  - name: target
    description: What to build (e.g. "a pricing page", "a user settings form", "a dashboard card component", "a landing page hero section")
    required: true
  - name: style
    description: Aesthetic direction (optional, e.g. "editorial minimal", "luxury refined", "brutalist raw", "playful organic", "retro-futuristic")
    required: false
  - name: framework
    description: Frontend framework (optional, e.g. "React+Tailwind", "Vue+UnoCSS", "vanilla HTML/CSS/JS", "Svelte")
    required: false
steps:
  - id: build
    skill: impeccable-design
    domain: frontend
    args: "{{input.target}} {{input.style}} {{input.framework}}"
    outputs:
      - path: "*.html"
        description: HTML file (vanilla) or component file
      - path: "*.css"
        description: Stylesheet with OKLCH colors and design tokens
      - path: "*.tsx"
        description: React/TypeScript component (if framework specified)
  - id: audit
    skill: audit
    domain: frontend
    args: "{{build.output}}"
    after:
      - build
    on_error: skip
    outputs:
      - description: Audit report with severity-rated issues and recommended commands
  - id: polish
    skill: polish
    domain: frontend
    args: "{{build.output}}"
    after:
      - audit
    on_error: skip
    outputs:
      - description: Final polished component with all states, alignment, and copy verified
color: var(--mk-color-purple)
---

# frontend-build Pipeline

Full design-to-ship workflow for frontend components and pages using the Impeccable design system.

## Steps

1. **build** (`impeccable-design`) — chooses an aesthetic direction, applies Impeccable design principles, builds production-grade component or page with working code
2. **audit** (`audit`) — scans for accessibility violations, performance issues, theming problems, responsive failures, and AI anti-patterns; generates prioritized issue report
3. **polish** (`polish`) — final pass: all 8 interactive states, pixel alignment, typography consistency, copy polish, 18-item checklist

## Usage

```
/project:run-pipeline frontend-build target="a pricing page for a B2B SaaS product"
/project:run-pipeline frontend-build target="user profile settings form" style="editorial minimal" framework="React+Tailwind"
/project:run-pipeline frontend-build target="mobile navigation menu" framework="vanilla HTML/CSS/JS"
/project:run-pipeline frontend-build target="data dashboard card with sparkline" style="luxury refined"
```

## Outputs

| Artifact | Description |
|----------|-------------|
| Component/page code | Production-ready HTML/CSS/JS or framework component |
| Audit report | Prioritized issues with severity ratings and fix commands |
| Polish checklist | All states verified, code clean, ready to ship |

## Design Principles Applied

Every build automatically applies:
- Distinctive font pairing (never Inter/Roboto)
- OKLCH color system with tinted neutrals
- All 8 interactive states
- Mobile-first responsive design
- WCAG AA accessibility
- `prefers-reduced-motion` support
- Semantic HTML with proper ARIA

## Notes

- The `style` input is a hint, not a constraint — the skill will choose the most appropriate aesthetic direction for the target
- The `audit` step runs but errors do not block `polish`
- The full pipeline takes 3 passes — one per step — so Claude will produce 3 separate outputs
