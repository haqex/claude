---
name: accessibility
description: Auto-applied accessibility rules — WCAG compliance, touch targets, keyboard navigation, screen reader support
trigger: Any task involving interactive elements, forms, navigation, or visual content
---

# Accessibility Rules

These rules apply automatically to ALL UI work. Accessibility is not optional.

## Critical (Must Have)

1. **Color contrast** — 4.5:1 minimum for normal text, 3:1 for large text (WCAG AA)
2. **Touch targets** — minimum 44×44pt (iOS) / 48×48dp (Android) with ≥8px gap between targets
3. **Focus states** — visible focus rings (2-4px) on all interactive elements; never `outline: none` without replacement
4. **ARIA labels** — `aria-label` on every icon-only button; `accessibilityLabel` in React Native
5. **Keyboard navigation** — tab order matches visual order; no keyboard traps
6. **Form labels** — every input has an associated `<label>` with `for` attribute
7. **Color not sole indicator** — always add icon or text alongside color for error/success/warning states
8. **Heading hierarchy** — sequential h1→h2→h3, never skip levels

## High Priority

9. **Reduced motion** — respect `prefers-reduced-motion`; disable or reduce animations
10. **Skip links** — "Skip to main content" link for keyboard users on nav-heavy pages
11. **Dynamic type** — support system text scaling without truncation or layout breakage
12. **Screen reader order** — semantic HTML with meaningful reading order
13. **Error announcements** — use `aria-live="polite"` or `role="alert"` for form errors

## Implementation Patterns

```tsx
// Icon-only button with aria-label
<button aria-label="Close menu" className="p-2">
  <X className="h-5 w-5" />
</button>

// Form field with proper label
<label htmlFor="email" className="block text-sm font-medium">Email</label>
<input id="email" type="email" autoComplete="email" className="..." />

// Error with screen reader announcement
<div role="alert" className="text-destructive text-sm mt-1">
  {error.message}
</div>

// Reduced motion
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
