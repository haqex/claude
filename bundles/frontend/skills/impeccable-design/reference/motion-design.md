# Motion Design Reference

## The 100/300/500 Rule

| Duration | Use | Examples |
|----------|-----|---------|
| 100–150ms | Instant feedback | Button press, toggle switch, checkbox |
| 200–300ms | State changes | Dropdown open, tooltip appear, menu expand |
| 300–500ms | Layout shifts | Accordion, modal, panel slide |
| 500–800ms | Entrance animations | Page hero, modal backdrop, route transition |

**Exit animations are ~75% of enter duration** — elements leave faster than they arrive.

---

## Easing

Never use the generic `ease` function. Use purpose-specific curves:

```css
:root {
  /* Entering: starts fast, decelerates (most natural) */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);       /* expo-out */
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);

  /* Leaving: starts slow, accelerates */
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);         /* expo-in */

  /* Toggles: symmetric */
  --ease-in-out: cubic-bezier(0.85, 0, 0.15, 1);

  /* Standard: small interactions */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);    /* Material */
}
```

**Never use**:
- `bounce` or `elastic` — feel dated and toy-like
- `linear` — robotic, unnatural
- `ease-in` for entrances — heavy and wrong

---

## Only Animate transform and opacity

```css
/* ✓ GPU-composited, no layout recalculation */
.card {
  transition: transform 200ms var(--ease-out),
              opacity 200ms var(--ease-out);
}
.card:hover {
  transform: translateY(-4px);
  opacity: 0.9;
}

/* ✗ Triggers layout, causes jank */
.card:hover {
  margin-top: -4px;  /* Never */
  width: 110%;       /* Never */
}
```

---

## Accordion / Height Animations

Never animate `height` directly. Use `grid-template-rows`:

```css
.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 300ms var(--ease-out);
}

.accordion-content.open {
  grid-template-rows: 1fr;
}

.accordion-inner {
  overflow: hidden;  /* Required */
}
```

---

## Staggered Reveals

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card {
  animation: fadeUp 400ms var(--ease-out) both;
}

/* Stagger: respect cumulative timing */
/* 10 items × 50ms = 500ms total — acceptable */
/* 10 items × 150ms = 1500ms — too slow */
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 50ms; }
.card:nth-child(3) { animation-delay: 100ms; }
```

---

## Reduced Motion (Non-Negotiable)

Affects ~35% of adults over 40. Always support it:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Keep functional animations (progress, spinners) but remove spatial movement */
@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: spin 1s linear infinite; /* Keep rotation */
  }
  .slide-in {
    animation: none; /* Remove movement */
    opacity: 1;      /* Show immediately */
  }
}
```

---

## Performance

The **80ms threshold** — below this, interactions feel instantaneous.

```css
/* Promote to GPU layer for complex animations */
.animated-element {
  will-change: transform, opacity;
}

/* Remove after animation to free GPU memory */
.animated-element.done {
  will-change: auto;
}
```
