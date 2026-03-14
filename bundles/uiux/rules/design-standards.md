---
name: design-standards
description: Auto-applied rules for UI/UX design decisions — style matching, color tokens, typography, icons, spacing
trigger: Any task involving UI design, component creation, page layout, or visual styling
---

# Design Standards

These rules apply automatically when working on UI/UX tasks.

## Style Rules
1. **Match style to product type** — never pick a style arbitrarily; consult `reference/products.md` and `reference/ui-reasoning.md`
2. **Consistency across pages** — use the same style, spacing rhythm, and effects throughout
3. **No mixed paradigms** — don't combine flat and skeuomorphic, or glassmorphism and brutalism, without explicit design intent

## Color Rules
1. **Semantic color tokens** — define colors as CSS custom properties (primary, secondary, accent, etc.); never use raw hex in components
2. **Dark mode designed together** — light and dark variants must be tested independently for contrast
3. **WCAG AA minimum** — all text must meet 4.5:1 contrast ratio (large text 3:1)
4. **Color is not the only indicator** — always combine color with icon, text, or pattern

## Typography Rules
1. **Base font ≥ 16px** on mobile to avoid iOS auto-zoom
2. **Line height 1.5–1.75** for body text
3. **Line length 65-75 characters** for readability
4. **Consistent type scale** — use a modular scale (e.g., 12 / 14 / 16 / 18 / 24 / 32 / 48)
5. **Font weight hierarchy** — bold headings (600-700), regular body (400), medium labels (500)

## Icon Rules
1. **SVG icons only** — use Lucide, Heroicons, or equivalent vector icon sets
2. **No emojis as structural UI elements** — emojis are font-dependent and inconsistent across platforms
3. **Consistent stroke width** — use the same strokeWidth across the entire app
4. **One icon set** — don't mix icon families (e.g., Lucide + Font Awesome)

## Spacing Rules
1. **4pt/8dp base** — use incremental spacing system (4, 8, 12, 16, 24, 32, 48)
2. **Mobile-first** — design for mobile, then scale up
3. **Consistent breakpoints** — 375 / 768 / 1024 / 1440
4. **Safe areas** — respect device safe areas for headers, tab bars, and CTAs

## Effects Rules
1. **Effects match style** — shadows, blur, radius must align with the chosen design style
2. **Transitions 150-300ms** — micro-interactions should feel responsive, not sluggish
3. **Only transform/opacity** — never animate width, height, top, or left
4. **Respect reduced motion** — check `prefers-reduced-motion` and provide alternatives
