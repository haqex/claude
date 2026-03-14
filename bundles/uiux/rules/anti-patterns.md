---
name: anti-patterns
description: Common UI/UX anti-patterns to avoid — things that make interfaces look unprofessional or harm usability
trigger: Any task involving UI implementation, component creation, or visual design
---

# UI/UX Anti-Patterns

Avoid these patterns. Each one makes the interface feel unprofessional or harms usability.

## Visual Anti-Patterns

| Anti-Pattern | Why It's Bad | Do Instead |
|-------------|-------------|------------|
| Emojis as structural icons | Font-dependent, inconsistent across platforms, can't be themed | Use Lucide/Heroicons SVG icons |
| Mixed icon styles | Filled + outlined at same hierarchy breaks cohesion | One style per hierarchy level |
| Raw hex colors in components | No theme switching, hard to maintain | Semantic CSS custom properties |
| Random shadow values | Inconsistent depth perception | Define elevation scale |
| Mixing flat and skeuomorphic | Visual identity confusion | Pick one style, stay consistent |
| Gray text on gray background | Fails contrast, hard to read | slate-900 on white, 4.5:1 minimum |
| Decorative-only animation | Distracting, harms performance | Every animation must convey meaning |

## Interaction Anti-Patterns

| Anti-Pattern | Why It's Bad | Do Instead |
|-------------|-------------|------------|
| Hover-only interactions | Don't work on touch devices | Click/tap for primary interactions |
| Removing focus rings | Keyboard users can't navigate | Visible focus:ring-2 |
| No loading state on buttons | Causes double-submit, confusion | Disable + spinner during async |
| Placeholder-only labels | Disappear on focus, fail accessibility | Visible label above/beside input |
| Errors only at form top | Users can't find which field failed | Error below each related field |
| Silent success/failure | Users don't know what happened | Toast, checkmark, or status message |
| Delete without confirmation | Accidental data loss | Confirmation dialog for destructive actions |
| Animations > 500ms | Feel sluggish and blocking | 150-300ms for micro-interactions |

## Layout Anti-Patterns

| Anti-Pattern | Why It's Bad | Do Instead |
|-------------|-------------|------------|
| Horizontal scroll on mobile | Frustrating, content hidden | Ensure content fits viewport |
| z-index: 9999 | Unmaintainable, stacking conflicts | Define z-index scale (10/20/50) |
| No viewport meta tag | Mobile renders desktop layout | `width=device-width, initial-scale=1` |
| 100vh on mobile | Doesn't account for browser chrome | `min-h-dvh` or `min-h-screen` |
| Fixed elements overlapping | UI becomes inaccessible | Account for safe areas and stacking |
| Tiny touch targets | Impossible to tap accurately | Minimum 44×44px |
| No safe area respect | Content under notch/gesture bar | Respect device safe areas |

## Typography Anti-Patterns

| Anti-Pattern | Why It's Bad | Do Instead |
|-------------|-------------|------------|
| Body text < 16px on mobile | iOS auto-zooms, hard to read | Minimum 16px body |
| Full-width text on desktop | Lines too long, hard to read | max-width: 65-75ch |
| No line-height on body | Cramped, hard to read | 1.5-1.75 for body text |
| Random font sizes | No visual hierarchy | Consistent modular scale |
| Font loading without swap | Invisible text flash (FOIT) | `font-display: swap` |

## Performance Anti-Patterns

| Anti-Pattern | Why It's Bad | Do Instead |
|-------------|-------------|------------|
| Unoptimized images | Slow load, bandwidth waste | WebP/AVIF + srcset + lazy load |
| No image dimensions | Layout shift (CLS) | Declare width/height or aspect-ratio |
| Animating width/height | Expensive repaints, jank | Use transform/opacity only |
| Loading everything upfront | Slow initial load | Lazy load below-fold + code split |
| Synchronous third-party scripts | Block rendering | async/defer attributes |

## Navigation Anti-Patterns

| Anti-Pattern | Why It's Bad | Do Instead |
|-------------|-------------|------------|
| Bottom nav > 5 items | Overcrowded, hard to tap | Maximum 5 with text labels |
| Icon-only navigation | Poor discoverability | Both icon and text label |
| Breaking back button | Users lose trust and orientation | Preserve navigation history |
| No deep linking | Can't share or bookmark state | URLs reflect current view |
| Modals for primary navigation | Breaks user's mental model | Modals for secondary/confirmation only |
