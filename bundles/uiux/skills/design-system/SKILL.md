---
name: design-system
description: "Token architecture and design system generation — three-layer tokens (primitive → semantic → component), CSS variables, Tailwind config, component specs, spacing/typography scales."
argument-hint: "[product-name] [style] [colors]"
allowed-tools: [Read, Write, Edit, Glob, Grep, Bash]
---

# Design System: $ARGUMENTS

Generate a complete design system with three-layer token architecture, CSS variables, Tailwind config, and component specifications.

## When to Use

- Creating design tokens for a new project
- Setting up a systematic theme (light/dark mode)
- Generating CSS variables and Tailwind config from a design recommendation
- Building a reusable component library foundation

## Workflow

### Step 1: Gather Design Inputs

From `$ARGUMENTS`, prior design skill output, or user context:
- **Project name**: for file naming and token prefixes
- **Style**: the chosen UI style (from design skill recommendation)
- **Color palette**: primary, secondary, accent, background, etc.
- **Typography**: heading font, body font, scale
- **Spacing**: base unit (typically 4px or 8px)
- **Border radius**: per chosen style
- **Effects**: shadows, blur, transitions

If no design recommendation exists, invoke the `design` skill first.

### Step 2: Generate Three-Layer Token Architecture

#### Layer 1: Primitive Tokens (Raw Values)
```css
/* Colors */
--color-blue-50: #EFF6FF;
--color-blue-500: #3B82F6;
--color-blue-600: #2563EB;
--color-blue-900: #1E3A8A;

/* Spacing */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-4: 1rem;     /* 16px */
--space-8: 2rem;     /* 32px */

/* Typography */
--font-size-xs: 0.75rem;   /* 12px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-base: 1rem;    /* 16px */
--font-size-lg: 1.125rem;  /* 18px */
--font-size-xl: 1.25rem;   /* 20px */
--font-size-2xl: 1.5rem;   /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem;  /* 36px */

/* Radius */
--radius-none: 0;
--radius-sm: 0.25rem;
--radius-md: 0.5rem;
--radius-lg: 1rem;
--radius-full: 9999px;
```

#### Layer 2: Semantic Tokens (Purpose Aliases)
```css
:root {
  /* Brand */
  --color-primary: var(--color-blue-600);
  --color-on-primary: #FFFFFF;
  --color-secondary: var(--color-blue-500);
  --color-on-secondary: #FFFFFF;
  --color-accent: var(--color-orange-500);
  --color-on-accent: #FFFFFF;

  /* Surfaces */
  --color-background: var(--color-slate-50);
  --color-foreground: var(--color-slate-900);
  --color-card: #FFFFFF;
  --color-card-foreground: var(--color-slate-900);
  --color-muted: var(--color-slate-100);
  --color-muted-foreground: var(--color-slate-500);

  /* Feedback */
  --color-destructive: var(--color-red-600);
  --color-on-destructive: #FFFFFF;
  --color-success: var(--color-green-600);
  --color-warning: var(--color-amber-500);

  /* UI */
  --color-border: var(--color-slate-200);
  --color-ring: var(--color-primary);

  /* Spacing */
  --spacing-section: var(--space-8);
  --spacing-component: var(--space-4);
  --spacing-element: var(--space-2);

  /* Typography */
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'DM Sans', sans-serif;

  /* Effects */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  --radius: var(--radius-md);
  --transition-fast: 150ms ease-out;
  --transition-normal: 250ms ease-out;
}
```

#### Layer 3: Component Tokens
```css
/* Button */
--button-bg: var(--color-primary);
--button-text: var(--color-on-primary);
--button-hover-bg: color-mix(in srgb, var(--color-primary) 90%, black);
--button-radius: var(--radius);
--button-padding: var(--space-2) var(--space-4);
--button-font-weight: 500;

/* Card */
--card-bg: var(--color-card);
--card-text: var(--color-card-foreground);
--card-border: var(--color-border);
--card-radius: var(--radius-lg);
--card-shadow: var(--shadow-sm);
--card-padding: var(--space-4);

/* Input */
--input-bg: var(--color-background);
--input-text: var(--color-foreground);
--input-border: var(--color-border);
--input-focus-ring: var(--color-ring);
--input-radius: var(--radius);
--input-padding: var(--space-2) var(--space-4);
```

### Step 3: Generate Dark Mode Tokens

```css
[data-theme="dark"], .dark {
  --color-background: var(--color-slate-950);
  --color-foreground: var(--color-slate-50);
  --color-card: var(--color-slate-900);
  --color-card-foreground: var(--color-slate-50);
  --color-muted: var(--color-slate-800);
  --color-muted-foreground: var(--color-slate-400);
  --color-border: var(--color-slate-800);
  /* Primary stays the same, adjust if needed for contrast */
}
```

### Step 4: Generate Tailwind Config

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'on-primary': 'var(--color-on-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: 'var(--color-card)',
        'card-foreground': 'var(--color-card-foreground)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        border: 'var(--color-border)',
        destructive: 'var(--color-destructive)',
        ring: 'var(--color-ring)',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
}
```

### Step 5: Component State Specs

| Component | Property | Default | Hover | Active | Disabled |
|-----------|----------|---------|-------|--------|----------|
| Button | Background | primary | primary-dark | primary-darker | muted |
| Button | Text | on-primary | on-primary | on-primary | muted-fg |
| Button | Shadow | sm | md | none | none |
| Card | Background | card | card | card | muted |
| Card | Shadow | sm | md | sm | none |
| Input | Border | border | ring | ring | muted |
| Input | Background | background | background | background | muted |

### Step 6: Output Files

Write to project directory:
1. **`design-system/tokens.css`** — All CSS custom properties (primitive + semantic + component + dark mode)
2. **`design-system/MASTER.md`** — Design system documentation with all decisions and rationale
3. **`design-system/tailwind.config.snippet.js`** — Tailwind theme extension

## Quality Checklist
- [ ] All three token layers generated (primitive, semantic, component)
- [ ] Dark mode tokens defined
- [ ] Tailwind config snippet produced
- [ ] Component state specs documented
- [ ] Color contrast verified (4.5:1 minimum)
- [ ] Font import URL included
- [ ] Spacing scale is consistent (4px/8px base)
