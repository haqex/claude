---
name: audit
description: Comprehensive quality audit of frontend interfaces. Checks accessibility, performance, theming, responsive design, and AI anti-patterns. Generates a prioritized issue report with severity ratings and recommended fix commands.
user-invokable: true
args:
  - name: area
    description: Specific area to audit (optional — omit for full audit)
    required: false
---

**First**: Use the frontend-design skill for design principles and anti-patterns.

Perform a comprehensive audit of the frontend code or interface. Identify issues across all quality dimensions, rate their severity, and provide actionable remediation paths.

## Audit Scope

Run all five dimensions unless a specific area is requested:

1. **Accessibility** — WCAG compliance, keyboard nav, screen readers, ARIA
2. **Performance** — rendering, loading, animation, layout shift
3. **Theming & Design** — color system, typography, spacing, anti-patterns
4. **Responsive Design** — mobile-first, breakpoints, touch, container queries
5. **AI Anti-Patterns** — AI slop detection, generic aesthetics, design fingerprints

---

## Severity Levels

Every issue is rated:

| Severity | Label | Meaning |
|----------|-------|---------|
| 🔴 | **Critical** | Blocks users, violates WCAG AA, causes data loss |
| 🟠 | **High** | Significantly degrades experience, likely noticed by users |
| 🟡 | **Medium** | Quality issue, noticeable on inspection, should fix before ship |
| 🔵 | **Low** | Polish item, minor inconsistency, nice to fix |
| ⚪ | **Info** | Observation, no action required |

---

## Dimension 1: Accessibility

### Focus & Keyboard

- [ ] All interactive elements reachable by keyboard (Tab/Shift+Tab)
- [ ] Focus order is logical (matches visual/reading order)
- [ ] Focus indicators are visible and meet 3:1 contrast ratio
- [ ] No `outline: none` without `:focus-visible` replacement
- [ ] Skip links present for main navigation
- [ ] Roving tabindex used correctly for component groups (tabs, menus)
- [ ] No keyboard traps (except modals, which should trap correctly)

### Semantic HTML

- [ ] Heading hierarchy is correct (h1 → h2 → h3, no skips)
- [ ] Buttons used for actions, links used for navigation
- [ ] Form inputs have associated `<label>` elements (not just placeholder)
- [ ] Lists use `<ul>/<ol>/<li>` where appropriate
- [ ] Tables have `<th>` and `scope` attributes
- [ ] Landmarks used: `<main>`, `<nav>`, `<header>`, `<footer>`, `<aside>`

### ARIA

- [ ] ARIA roles match actual behavior (no `role="button"` on `<div>` that should be `<button>`)
- [ ] Dynamic content uses `aria-live` appropriately
- [ ] Icon-only buttons have `aria-label` or visually hidden text
- [ ] Error messages connected to inputs via `aria-describedby`
- [ ] Modals use `role="dialog"` with `aria-labelledby`
- [ ] No redundant ARIA (e.g., `<button role="button">`)

### Color & Contrast

- [ ] Body text: 4.5:1 minimum contrast ratio
- [ ] Large text (18px+ or 14px bold): 3:1 minimum
- [ ] UI components (borders, icons): 3:1 minimum
- [ ] Focus indicators: 3:1 against adjacent colors
- [ ] Information not conveyed by color alone
- [ ] No placeholder text below 4.5:1 contrast

### Screen Reader

- [ ] Images have descriptive `alt` text (decorative images use `alt=""`)
- [ ] `<iframe>` has `title` attribute
- [ ] Loading states announced (spinner has visually hidden label)
- [ ] Dynamic updates announced via `aria-live`
- [ ] Custom widgets have correct ARIA patterns (combobox, listbox, etc.)

---

## Dimension 2: Performance

### Rendering

- [ ] Animations only use `transform` and `opacity` (no layout properties)
- [ ] No `will-change` on every element (GPU memory waste)
- [ ] No layout thrashing in JavaScript (read then write, batch DOM updates)
- [ ] Expensive CSS selectors avoided (deep descendant selectors)

### Loading

- [ ] Images have `loading="lazy"` for below-fold content
- [ ] Images have explicit `width` and `height` to prevent layout shift
- [ ] Fonts use `font-display: swap` or `optional`
- [ ] Critical CSS inlined, non-critical deferred
- [ ] No render-blocking resources in `<head>` (scripts deferred)

### Layout Stability (CLS)

- [ ] No content jumping after load (fonts, images, ads)
- [ ] Skeleton screens or reserved space for dynamic content
- [ ] No unexpected layout shift on interaction

### Animation Performance

- [ ] Reduced motion preference respected (`prefers-reduced-motion`)
- [ ] Animations run at 60fps (test in DevTools Performance panel)
- [ ] Stagger delays don't accumulate to >500ms total
- [ ] Exit animations at ~75% of entry duration

---

## Dimension 3: Theming & Design

### Color System

- [ ] OKLCH used for all brand/UI colors (not hex, rgb, hsl)
- [ ] Neutrals tinted toward brand hue (chroma ≥ 0.005)
- [ ] No pure black (#000) or pure white (#fff) for large areas
- [ ] No gray text on colored backgrounds (use shade of background instead)
- [ ] Design tokens used consistently (no hard-coded color values)
- [ ] Dark mode uses surface elevation, not shadows
- [ ] Accent color used sparingly (10% rule)

### Typography

- [ ] No Inter, Roboto, Arial, Open Sans as the only/primary font
- [ ] Fluid sizing with `clamp()` for display/heading text
- [ ] Modular type scale with clear hierarchy (not arbitrary px values)
- [ ] Line height appropriate for context (1.0–1.2 for headings, 1.5–1.7 for body)
- [ ] Body text `max-width: 65ch` for readability
- [ ] Font sizes in `rem`/`em` (not `px`)
- [ ] No monospace as "developer aesthetic" shorthand

### Spacing

- [ ] 4-point base spacing system used consistently
- [ ] No arbitrary spacing values (no random 13px, 17px gaps)
- [ ] Visual rhythm through contrast (tight groupings + generous separations)
- [ ] Fluid spacing with `clamp()` for major sections

### Layout

- [ ] No cards nested inside cards
- [ ] Not everything wrapped in a card container
- [ ] Asymmetry used intentionally (not everything centered)
- [ ] Container queries used for component-level responsiveness

---

## Dimension 4: Responsive Design

### Mobile-First

- [ ] Mobile base styles with `min-width` queries (not desktop-first `max-width`)
- [ ] No horizontal scroll on any viewport
- [ ] Text readable at mobile (≥14px, ≤65ch line length)
- [ ] Touch targets ≥44x44px on mobile

### Input-Aware

- [ ] Hover-only interactions have touch alternatives
- [ ] `@media (hover: none)` used to hide/adapt hover interactions
- [ ] Tooltips not the only way to access information on touch

### Safe Areas

- [ ] `viewport-fit=cover` with `env(safe-area-inset-*)` for notch/home indicator
- [ ] Fixed/sticky elements don't overlap system UI

### Images

- [ ] `srcset` and `sizes` for responsive images
- [ ] `<picture>` for art direction (different crop per breakpoint)
- [ ] WebP/AVIF format used where supported

---

## Dimension 5: AI Anti-Patterns

### The AI Slop Checklist

These are the fingerprints of AI-generated design from 2024-2025. Flag any that are present:

**Color Anti-Patterns**:
- [ ] 🔴 Cyan-on-dark color palette
- [ ] 🔴 Purple-to-blue gradients on backgrounds or headings
- [ ] 🔴 Neon/glowing accents on dark mode
- [ ] 🟠 Gradient text for "impact" on headings or metrics
- [ ] 🟠 Glassmorphism (blur + transparency) as primary visual style

**Layout Anti-Patterns**:
- [ ] 🔴 Hero metric layout: big number + small label + supporting stats + gradient accent
- [ ] 🔴 Identical card grid: icon + heading + paragraph, repeated 3-6 times
- [ ] 🟠 Everything centered (no asymmetry, no left-aligned layouts)
- [ ] 🟠 Cards nested inside cards
- [ ] 🟡 Sparklines as decoration (tiny charts that convey nothing)
- [ ] 🟡 Rounded rectangles with thick colored border on one side

**Typography Anti-Patterns**:
- [ ] 🟠 Inter or Roboto as the only font (no pairing, no personality)
- [ ] 🟡 Monospace font as "developer/tech aesthetic" shorthand
- [ ] 🟡 All-gradient or all-bold headings with no weight hierarchy

**Detail Anti-Patterns**:
- [ ] 🟡 Large rounded icons above every section heading
- [ ] 🟡 Generic drop shadows on every card
- [ ] 🟡 Identical padding/spacing everywhere (no rhythm)

---

## Audit Report Format

Present findings as:

### Executive Summary

> **[X] Critical, [X] High, [X] Medium, [X] Low issues found.**
> Priority areas: [1-3 sentence summary of most important issues]

### Issues by Severity

#### 🔴 Critical

**[Issue title]**
- **Where**: Component/file/line
- **What**: Description of the problem
- **Why**: Why this matters (user impact)
- **Fix**: Specific remediation with code example if helpful
- **Command**: `/project:polish` or specific fix instruction

#### 🟠 High

[Same format]

#### 🟡 Medium

[Same format]

#### 🔵 Low

[Same format]

### Recommended Next Steps

```
/project:polish     — fix alignment, states, and copy issues
/project:normalize  — align with design system tokens
/project:critique   — design director review after fixes
```

---

**Audit philosophy**: Be specific, not general. "Contrast ratio is 2.8:1 on the disabled button text" is actionable. "Accessibility could be improved" is not. Every issue should have a clear fix path.
