# Typography Reference

## Core Principles

**Vertical Rhythm**: Line-height is the base unit for ALL vertical spacing — creates mathematical harmony throughout the design.

**Font Hierarchy**: Use fewer sizes with greater contrast. Five tiers maximum: `xs`, `sm`, `base`, `lg`, `xl+`. Base ratios: 1.25 (minor third) or 1.5 (perfect fifth).

**Readability**: `max-width: 65ch` for body text. Adjust line-height inversely with column width. Increase by 0.05–0.1 for light text on dark backgrounds.

---

## Font Selection

**Never use**: Inter, Roboto, Arial, Open Sans, or system defaults. These are the typographic fingerprint of AI-generated work.

**Distinctive alternatives**:
- Display: Fraunces, Playfair Display, Cormorant Garamond, Cabinet Grotesk, Instrument Serif
- Body: Instrument Sans, DM Sans, General Sans, Plus Jakarta Sans
- Performance-first: System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`) but only when brand permits

**Pairing Strategy**:
- One font in multiple weights often suffices
- When pairing, ensure genuine contrast: serif/sans, geometric/humanist, wide/narrow
- Never pair two fonts that are similar (two humanist sans-serifs = no contrast)

**Loading**:
```css
@font-face {
  font-family: 'Fraunces';
  src: url('/fonts/fraunces.woff2') format('woff2');
  font-display: swap;
  /* Metric-matching fallback prevents layout shift */
  size-adjust: 98%;
  ascent-override: 90%;
}
```

---

## Type Scale

Use a modular scale with fluid sizing via `clamp()`:

```css
:root {
  /* Base: 1rem = 16px */
  --text-xs:   clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm:   clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg:   clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --text-xl:   clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl:  clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
  --text-3xl:  clamp(2rem, 1.5rem + 2.5vw, 3rem);
  --text-4xl:  clamp(2.5rem, 1.75rem + 3.75vw, 4.5rem);
}
```

**DO NOT** use `clamp()` for UI elements that need size consistency (buttons, inputs, labels).

---

## Line Height & Spacing

| Context | Line Height |
|---------|-------------|
| Display / Headings | 1.0–1.2 |
| Subheadings | 1.2–1.35 |
| Body copy | 1.5–1.7 |
| Small text / captions | 1.4–1.5 |
| Dark bg / reversed | +0.05–0.1 |

---

## OpenType Features

```css
/* Tables and data */
font-variant-numeric: tabular-nums;

/* Fractions */
font-variant-numeric: diagonal-fractions;

/* All caps labels */
font-variant-caps: all-small-caps;
letter-spacing: 0.05em;

/* Headlines */
font-kerning: auto;
```

---

## Accessibility

- Use `rem`/`em` — never `px` for font sizes
- Minimum 16px body text (1rem)
- Never disable browser zoom (`user-scalable=no` is an accessibility violation)
- Text links need 44px touch targets on mobile
- Line length: 45–75 characters for body (`max-width: 65ch`)
