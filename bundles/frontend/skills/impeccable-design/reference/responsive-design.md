# Responsive Design Reference

## Mobile-First Strategy

Start with mobile styles. Use `min-width` media queries to add complexity:

```css
/* Mobile base (no query needed) */
.component {
  display: block;
  padding: var(--space-4);
}

/* Tablet+ */
@media (min-width: 640px) {
  .component {
    display: flex;
    padding: var(--space-6);
  }
}

/* Desktop+ */
@media (min-width: 1024px) {
  .component {
    padding: var(--space-8);
    max-width: 1200px;
    margin-inline: auto;
  }
}
```

**Never use desktop-first** (`max-width`): mobile loads unnecessary styles.

---

## Container Queries (Preferred)

Use container queries for components instead of viewport queries:

```css
.card-grid {
  container-type: inline-size;
}

.card {
  /* Default: stacked */
  display: block;
}

@container (min-width: 400px) {
  .card {
    /* Side-by-side when container has room */
    display: grid;
    grid-template-columns: 160px 1fr;
  }
}
```

---

## Input-Aware Design

Detect actual interaction capability, not screen size:

```css
/* Touch: no hover, coarse pointer */
@media (hover: none) and (pointer: coarse) {
  .tooltip { display: none; }   /* No hover means no tooltip */
  .button { min-height: 44px; } /* Bigger touch targets */
}

/* Mouse: hover available, fine pointer */
@media (hover: hover) and (pointer: fine) {
  .hover-reveal { opacity: 0; }
  .card:hover .hover-reveal { opacity: 1; }
}
```

---

## Safe Areas (Notch/Home Indicator)

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

```css
.bottom-nav {
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
```

---

## Responsive Images

### srcset for Resolution Switching
```html
<img
  src="hero-800.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1600.webp 1600w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  alt="Hero image"
  loading="lazy"
>
```

### Picture for Art Direction
```html
<picture>
  <source media="(max-width: 640px)" srcset="hero-portrait.webp">
  <source media="(min-width: 641px)" srcset="hero-landscape.webp">
  <img src="hero-landscape.webp" alt="Hero">
</picture>
```

---

## Breakpoint Reference

| Name | Width | Typical Use |
|------|-------|------------|
| `xs` | < 480px | Smallest phones |
| `sm` | ≥ 640px | Large phones, small tablets |
| `md` | ≥ 768px | Tablets |
| `lg` | ≥ 1024px | Laptops |
| `xl` | ≥ 1280px | Desktops |
| `2xl` | ≥ 1536px | Large monitors |

---

## Testing

DevTools emulation misses: real touch events, actual performance, OS font rendering, safe area insets. **Always test on a real iPhone and Android phone before shipping.**

---

**Avoid**: Desktop-first (`max-width`) queries. Device detection over feature detection. Hiding critical mobile features. Separate mobile codebases.
