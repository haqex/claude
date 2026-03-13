---
name: normalize
description: Align a feature or component with the existing design system. Replaces hard-coded values with design tokens, fixes inconsistent patterns, and ensures the feature integrates cohesively with the rest of the codebase.
user-invokable: true
args:
  - name: feature
    description: The feature, component, or file to normalize (optional)
    required: false
---

**First**: Use the frontend-design skill for design principles and anti-patterns.

Normalize the target feature to match the established design system. This is not redesign — it's alignment. The goal is to make newly built or inconsistent features feel like they've always been part of the system.

## What Normalization Is (And Isn't)

**Normalization IS**:
- Replacing hard-coded colors with design tokens
- Replacing arbitrary spacing values with scale values
- Replacing non-standard fonts with the established type system
- Aligning component patterns with existing patterns in the codebase
- Making the component respond to the established theming system (dark mode, etc.)

**Normalization IS NOT**:
- Redesigning the component from scratch
- Changing the component's function or content
- Making it "better" — just making it consistent
- A creative exercise — it's a mechanical alignment process

---

## Step 1: Audit the Target

Before normalizing, understand both sides:

### Identify what the target uses

Scan for:
- Hard-coded color values (hex, rgb, hsl) → replace with tokens
- Arbitrary spacing (px values not on the scale) → replace with scale
- Non-system fonts → replace with established font stack
- Custom z-index values → replace with z-index scale
- One-off shadows → replace with shadow tokens
- Component patterns that duplicate existing ones → consolidate

### Identify what the design system provides

Look for:
- Existing CSS custom properties (`--color-*`, `--space-*`, `--text-*`)
- Existing utility classes or component classes
- Existing component patterns (how are buttons done? cards? forms?)
- Existing breakpoints and media query conventions
- Existing animation tokens (`--ease-*`, `--duration-*`)

---

## Step 2: Map Hard-Coded Values to Tokens

### Colors

```css
/* Before: hard-coded */
.component {
  background: #1a1a2e;
  color: #e0e0e0;
  border: 1px solid #333;
}

/* After: tokenized */
.component {
  background: var(--surface-1);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
}
```

If a token doesn't exist for a value, **create the token** rather than leaving the hard-coded value. Add it to the design system.

### Spacing

```css
/* Before: arbitrary */
.component {
  padding: 14px 18px;
  margin-bottom: 22px;
  gap: 10px;
}

/* After: scale-based */
.component {
  padding: var(--space-3) var(--space-4);  /* 12px 16px */
  margin-bottom: var(--space-6);           /* 24px */
  gap: var(--space-2);                     /* 8px */
}
```

Round to nearest scale value. If 22px should be 24px (`--space-6`) or 16px (`--space-4`), choose based on visual intent, not proximity.

### Typography

```css
/* Before: non-system */
.heading {
  font-family: 'Georgia', serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.3;
}

/* After: system fonts */
.heading {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
}
```

### Z-Index

```css
/* Before: magic numbers */
.modal { z-index: 9999; }
.tooltip { z-index: 1000; }

/* After: scale */
.modal { z-index: var(--z-modal); }
.tooltip { z-index: var(--z-tooltip); }
```

Establish a z-index scale if one doesn't exist:
```css
:root {
  --z-base:    0;
  --z-raised:  10;
  --z-dropdown: 100;
  --z-sticky:  200;
  --z-overlay: 300;
  --z-modal:   400;
  --z-toast:   500;
  --z-tooltip: 600;
}
```

---

## Step 3: Align Component Patterns

### Match existing patterns

If the codebase has an established button style:

```css
/* Existing pattern */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
  transition: background 150ms var(--ease-out);
}
```

The new component's buttons should use `.btn`, not define their own button style.

### Consolidate duplicate patterns

If the new component introduces a card pattern that already exists:

```css
/* Don't create a new .feature-card */
/* Use the existing .card with modifiers */
.card { ... }
.card--featured { ... }
```

### Align state patterns

Match how the codebase handles interactive states. If existing components use:
```css
.btn:hover { background: var(--color-primary-dark); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
```

The normalized component should follow the same pattern, not introduce new approaches.

---

## Step 4: Theme Compatibility

Ensure the component responds to the established theming system:

### CSS custom properties

If the codebase uses `[data-theme="dark"]` or `@media (prefers-color-scheme: dark)`:

```css
/* The component should NOT hard-code for one theme */
.component {
  background: white;  /* Breaks in dark mode */
}

/* It SHOULD use tokens that respond to the theme */
.component {
  background: var(--surface-1);  /* Defined for both themes */
}
```

### Color scheme

If the component introduces new colors, define them for all themes:

```css
:root {
  --component-bg: oklch(97% 0.01 250);
}

[data-theme="dark"] {
  --component-bg: oklch(20% 0.01 250);
}
```

---

## Step 5: Verify Integration

After normalizing, verify:

- [ ] No hard-coded color values remain
- [ ] All spacing on the 4-point scale
- [ ] Typography uses system fonts and scale
- [ ] Component responds correctly to theme switching
- [ ] Interactive states match established patterns
- [ ] No duplicate component definitions (reuses existing where possible)
- [ ] Z-index values use the scale
- [ ] Animation tokens used (`--ease-*`, `--duration-*`)

---

## Output Format

Present changes as:

### Summary

> Normalized [X] hard-coded values. Created [X] new tokens. Consolidated [X] duplicate patterns.

### Changes Made

| Before | After | Reason |
|--------|-------|--------|
| `color: #1a1a2e` | `var(--surface-1)` | Theme compatibility |
| `padding: 14px 18px` | `var(--space-3) var(--space-4)` | Spacing scale |
| `font-family: Georgia` | `var(--font-display)` | System font |

### New Tokens Added

If you created new tokens to fill gaps in the system:

```css
/* Added to design system */
:root {
  --token-name: value;
}
```

### Remaining Issues

Note anything that couldn't be normalized without a redesign decision:
- "The sidebar width (347px) has no equivalent token — recommend adding `--sidebar-width` or adjusting to `--space-24` (96px × 3.6 — likely needs a dedicated token)"

---

**Philosophy**: Normalization makes the whole codebase more maintainable. One hard-coded value today is ten inconsistencies tomorrow. When in doubt, create the token.
