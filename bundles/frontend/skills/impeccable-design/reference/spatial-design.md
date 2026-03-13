# Spatial Design Reference

## Spacing System: 4-Point Base

Use a **4-point base unit**, not 8-point. 8pt systems are too coarse — you'll frequently need 12px (between 8 and 16).

**Scale**: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px

```css
:root {
  --space-1: 0.25rem;   /* 4px  — tight: icon gap, inline separation */
  --space-2: 0.5rem;    /* 8px  — close: label-to-input, list item padding */
  --space-3: 0.75rem;   /* 12px — snug: between related elements */
  --space-4: 1rem;      /* 16px — base: standard component padding */
  --space-6: 1.5rem;    /* 24px — comfortable: card padding, section gaps */
  --space-8: 2rem;      /* 32px — spacious: between components */
  --space-12: 3rem;     /* 48px — open: major section separation */
  --space-16: 4rem;     /* 64px — breathe: hero/feature spacing */
  --space-24: 6rem;     /* 96px — grand: page-level separation */
}
```

**Semantic naming** (preferred in components):
```css
--space-xs: var(--space-1);
--space-sm: var(--space-2);
--space-md: var(--space-4);
--space-lg: var(--space-6);
--space-xl: var(--space-8);
--space-2xl: var(--space-12);
```

---

## Visual Rhythm

Rhythm is created by **contrast**, not uniformity. Tight groupings + generous separations communicate hierarchy without labels.

**The Squint Test**: Blur your eyes looking at the layout. You should see:
1. One dominant focal point
2. Clear groupings
3. Breathing room between sections

**Reinforcing hierarchy** — combine multiple dimensions for emphasis:
```css
/* Weak: only size changes */
h2 { font-size: var(--text-xl); }

/* Strong: size + weight + space above */
h2 {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-top: var(--space-12);  /* generous above */
  margin-bottom: var(--space-2); /* tight below (connects to content) */
}
```

---

## Grid Patterns

### Auto-fit Grid (No Media Queries)
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}
```

### Named Grid Lines (Complex Layouts)
```css
.layout {
  display: grid;
  grid-template-columns:
    [full-start] minmax(var(--space-6), 1fr)
    [content-start] min(65ch, 100%) [content-end]
    minmax(var(--space-6), 1fr) [full-end];
}

/* Full bleed element */
.full-bleed {
  grid-column: full-start / full-end;
}
```

---

## Container Queries

Prefer container queries over viewport media queries for components:

```css
/* Define the container */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* Style component based on its container */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}
```

---

## Optical Corrections

### Icon Centering
Icons optically appear low when mathematically centered. Nudge 1-2px up:
```css
.icon { transform: translateY(-1px); }
```

### Visual vs Touch Target Size
```css
.small-button {
  /* Visual size */
  width: 24px;
  height: 24px;
  /* Touch target (invisible expansion) */
  padding: 10px;
  margin: -10px;
}
```

---

## Fluid Spacing

Use `clamp()` for spacing that breathes on larger screens:
```css
.section {
  padding-block: clamp(var(--space-8), 5vw, var(--space-24));
}
```
