---
name: quick-reference
description: Pre-delivery UI/UX checklist organized by priority — accessibility, touch, performance, style, layout, typography, animation, forms, navigation, charts
---

# Pre-Delivery UI/UX Checklist

Review UI against these 10 categories before delivery. Priority 1-3 are **mandatory**; 4-10 are recommended.

---

## Priority 1: Accessibility (CRITICAL)

- [ ] Color contrast ≥ 4.5:1 for normal text, ≥ 3:1 for large text
- [ ] Visible focus rings on all interactive elements (2-4px)
- [ ] Descriptive alt text on meaningful images
- [ ] `aria-label` on icon-only buttons
- [ ] Tab order matches visual order
- [ ] `<label>` with `for` attribute on form inputs
- [ ] Skip to main content link
- [ ] Sequential heading hierarchy (h1→h2→h3, no skips)
- [ ] Color is not the only indicator of state
- [ ] Support system text scaling (Dynamic Type)
- [ ] Respect `prefers-reduced-motion`
- [ ] Meaningful VoiceOver/screen reader labels
- [ ] Cancel/back available in modals and multi-step flows

## Priority 2: Touch & Interaction (CRITICAL)

- [ ] Touch targets ≥ 44×44pt (iOS) / 48×48dp (Android)
- [ ] ≥ 8px gap between touch targets
- [ ] No hover-only interactions (click/tap for primary)
- [ ] Loading state on async buttons (disabled + spinner)
- [ ] Clear error messages near the problem
- [ ] cursor-pointer on clickable elements (web)
- [ ] No horizontal swipe conflicts on main content
- [ ] `touch-action: manipulation` to reduce tap delay
- [ ] Visual feedback on press (ripple/opacity/elevation)
- [ ] Primary touch targets away from notch/gesture bar/edges

## Priority 3: Performance (HIGH)

- [ ] WebP/AVIF images with srcset/sizes
- [ ] Width/height declared on images (CLS prevention)
- [ ] `font-display: swap` on web fonts
- [ ] Critical CSS inlined or early-loaded
- [ ] Lazy loading for below-fold content
- [ ] Code splitting by route/feature
- [ ] Third-party scripts loaded async/defer
- [ ] Layout shift < 0.1 (CLS)
- [ ] Skeleton screens for operations > 1s
- [ ] Debounce/throttle high-frequency events
- [ ] Virtualized lists for 50+ items

## Priority 4: Style Selection (HIGH)

- [ ] Style matches product type (not arbitrary)
- [ ] Consistent style across all pages
- [ ] SVG icons only (no emojis as structural UI)
- [ ] Color palette derived from product/industry
- [ ] Effects aligned with chosen style (glass/flat/clay)
- [ ] Platform idioms respected (iOS HIG vs Material)
- [ ] Hover/pressed/disabled states visually distinct
- [ ] Consistent elevation/shadow scale
- [ ] Light/dark variants designed together
- [ ] One icon set/visual language throughout

## Priority 5: Layout & Responsive (HIGH)

- [ ] `viewport` meta tag: `width=device-width, initial-scale=1`
- [ ] Mobile-first breakpoints (375 / 768 / 1024 / 1440)
- [ ] No horizontal scroll on mobile
- [ ] 4pt/8dp spacing rhythm
- [ ] Touch-comfortable component spacing
- [ ] max-width on desktop content containers
- [ ] z-index scale defined (10 / 20 / 50 / 100)
- [ ] Fixed elements reserve safe padding
- [ ] `min-h-dvh` instead of `100vh` on mobile
- [ ] Content priority: core content first on mobile

## Priority 6: Typography & Color (MEDIUM)

- [ ] Base font ≥ 16px body text
- [ ] Line height 1.5–1.75 for body
- [ ] Line length 65–75 characters
- [ ] Font pairing: heading + body personalities match
- [ ] Consistent type scale (12 / 14 / 16 / 18 / 24 / 32)
- [ ] Semantic color tokens (not raw hex in components)
- [ ] Dark mode: desaturated tonal variants, tested independently
- [ ] Font weight hierarchy: bold headings (600-700), regular body (400)
- [ ] Tabular figures for data columns and prices

## Priority 7: Animation (MEDIUM)

- [ ] Duration 150–300ms for micro-interactions
- [ ] Only transform/opacity animated (not width/height)
- [ ] Skeleton or progress for loading > 300ms
- [ ] Max 1-2 animated elements per view
- [ ] ease-out for entering, ease-in for exiting
- [ ] Every animation expresses cause-effect
- [ ] State changes animate smoothly (not snap)
- [ ] Exit animations shorter than enter (~60-70%)
- [ ] Animations interruptible by user
- [ ] No layout reflow from animations

## Priority 8: Forms & Feedback (MEDIUM)

- [ ] Visible label per input (not placeholder-only)
- [ ] Error shown below related field
- [ ] Loading → success/error on submit
- [ ] Required fields marked (asterisk)
- [ ] Helpful empty states with action
- [ ] Toast auto-dismiss 3-5 seconds
- [ ] Confirmation before destructive actions
- [ ] Validate on blur (not keystroke)
- [ ] Semantic input types (email, tel, number)
- [ ] Show/hide toggle for password fields

## Priority 9: Navigation (HIGH)

- [ ] Bottom nav ≤ 5 items with text labels
- [ ] Predictable back behavior
- [ ] Deep linking support (URLs reflect state)
- [ ] Navigation items have both icon and text
- [ ] Current location visually highlighted
- [ ] Modals/sheets have clear close affordance
- [ ] Back navigation restores scroll/filter state
- [ ] System gesture navigation supported
- [ ] Core navigation reachable from deep pages

## Priority 10: Charts & Data (LOW)

- [ ] Chart type matches data type
- [ ] Accessible color palettes (no red/green only)
- [ ] Table alternative for screen readers
- [ ] Legends visible and near chart
- [ ] Tooltips on hover/tap
- [ ] Responsive chart layout on small screens
- [ ] Empty state for no data
- [ ] Loading skeleton while data loads
