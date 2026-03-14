---
name: ux-guidelines
description: 99 UX best practices organized by category — navigation, animation, layout, touch, interaction, accessibility, performance, forms, responsive, typography, feedback, content, onboarding, search, data entry, AI, spatial UI, sustainability
---

# UX Guidelines

99 actionable UX rules organized by category and severity.

---

## Navigation

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 1 | Smooth Scroll | Web | High | `html { scroll-behavior: smooth; }` | Jump directly without transition |
| 2 | Sticky Navigation | Web | Medium | Add padding-top to body equal to nav height | Let nav overlap first section |
| 3 | Active State | All | Medium | Highlight active nav item with color/underline | No visual feedback on current location |
| 4 | Back Button | Mobile | High | Preserve navigation history properly | Break browser/app back button behavior |
| 5 | Deep Linking | All | Medium | Update URL on state/view changes | Static URLs for dynamic content |
| 6 | Breadcrumbs | Web | Low | Use for sites with 3+ levels of depth | Use for flat single-level sites |

## Animation

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 7 | Excessive Motion | All | High | Animate 1-2 key elements per view max | Animate everything |
| 8 | Duration Timing | All | Medium | 150-300ms for micro-interactions | Animations > 500ms for UI |
| 9 | Reduced Motion | All | High | Check `prefers-reduced-motion` | Ignore accessibility motion settings |
| 10 | Loading States | All | High | Skeleton screens or spinners | Leave UI frozen with no feedback |
| 11 | Hover vs Tap | All | High | Use click/tap for primary interactions | Rely only on hover |
| 12 | Continuous Animation | All | Medium | For loading indicators only | Decorative infinite animations |
| 13 | Transform Performance | Web | Medium | Use transform and opacity only | Animate width/height/top/left |
| 14 | Easing Functions | All | Low | ease-out for entering, ease-in for exiting | Linear for UI transitions |

## Layout

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 15 | Z-Index Management | Web | High | Define z-index scale (10, 20, 30, 50) | Arbitrary z-[9999] |
| 16 | Overflow Hidden | Web | Medium | Test all content fits within containers | Blindly apply overflow-hidden |
| 17 | Fixed Positioning | Web | Medium | Account for safe areas and other fixed elements | Stack fixed elements carelessly |
| 18 | Stacking Context | Web | Medium | Understand what creates new stacking context | Expect z-index across contexts |
| 19 | Content Jumping | Web | High | Reserve space for async content | Let images push layout around |
| 20 | Viewport Units | Web | Medium | Use `dvh` or account for mobile browser chrome | Use 100vh for full-screen mobile |
| 21 | Container Width | Web | Medium | max-width for text (65-75ch) | Full viewport width paragraphs |

## Touch

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 22 | Touch Target Size | Mobile | High | Minimum 44×44px touch targets | Tiny w-6 h-6 buttons |
| 23 | Touch Spacing | Mobile | Medium | Minimum 8px gap between targets | gap-0 or gap-1 |
| 24 | Gesture Conflicts | Mobile | Medium | Avoid horizontal swipe on main content | Override system gestures |
| 25 | Tap Delay | Mobile | Medium | `touch-action: manipulation` | Default mobile tap handling |
| 26 | Pull to Refresh | Mobile | Low | Disable where not needed | Enable by default everywhere |
| 27 | Haptic Feedback | Mobile | Low | For confirmations and important actions | Vibrate on every tap |

## Interaction

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 28 | Focus States | All | High | Visible focus rings (`focus:ring-2`) | Remove outline without replacement |
| 29 | Hover States | Web | Medium | Change cursor + subtle visual change | No hover feedback on clickable elements |
| 30 | Active States | All | Medium | Add pressed/active visual change | No feedback during interaction |
| 31 | Disabled States | All | Medium | Reduced opacity + changed cursor | Same style as enabled |
| 32 | Loading Buttons | All | High | Disable + show spinner during async | Allow multiple clicks during processing |
| 33 | Error Feedback | All | High | Clear error messages near problem | Silent failures |
| 34 | Success Feedback | All | Medium | Success message or visual change | Action completes silently |
| 35 | Confirmation Dialogs | All | High | Confirm before destructive actions | Direct delete on click |

## Accessibility

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 36 | Color Contrast | All | High | Minimum 4.5:1 ratio for normal text | #999 on white (2.8:1) |
| 37 | Color Only | All | High | Icons/text in addition to color | Red/green only for error/success |
| 38 | Alt Text | All | High | Descriptive alt for meaningful images | Empty alt for content images |
| 39 | Heading Hierarchy | Web | Medium | Sequential h1→h6, no level skip | h1 then h4 |
| 40 | ARIA Labels | All | High | aria-label for icon-only buttons | Icon buttons without labels |
| 41 | Keyboard Navigation | Web | High | Tab order matches visual order | Keyboard traps or illogical order |
| 42 | Screen Reader | All | Medium | Semantic HTML and ARIA properly | Div soup with no semantics |
| 43 | Form Labels | All | High | label with `for` attribute | Placeholder-only inputs |
| 44 | Error Messages | All | High | `aria-live` or `role="alert"` | Visual-only error indication |
| 45 | Skip Links | Web | Medium | Skip to main content link | 100 tabs to reach content |
| 99 | Motion Sensitivity | All | High | Respect `prefers-reduced-motion` | Force scroll effects |

## Performance

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 46 | Image Optimization | All | High | Appropriate size + WebP format | 4000px image for 400px display |
| 47 | Lazy Loading | All | Medium | Lazy load below-fold content | Load everything upfront |
| 48 | Code Splitting | Web | Medium | Split by route/feature | Single large bundle |
| 49 | Caching | Web | Medium | Appropriate cache headers | No caching strategy |
| 50 | Font Loading | Web | Medium | `font-display: swap` | Invisible text during font load |
| 51 | Third Party Scripts | Web | Medium | Load async/defer | Synchronous third-party in head |
| 52 | Bundle Size | Web | Medium | Monitor and minimize | Ignore growth |
| 53 | Render Blocking | Web | Medium | Inline critical CSS | All CSS in head blocking |

## Forms

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 54 | Input Labels | All | High | Visible label above or beside input | Placeholder as only label |
| 55 | Error Placement | All | Medium | Error below related input | Single error at form top |
| 56 | Inline Validation | All | Medium | Validate on blur | Only on submit |
| 57 | Input Types | All | Medium | Use email, tel, number, url | type="text" for everything |
| 58 | Autofill Support | Web | Medium | autocomplete attribute | autocomplete="off" everywhere |
| 59 | Required Indicators | All | Medium | Asterisk or (required) text | No indication of required |
| 60 | Password Visibility | All | Medium | Show/hide toggle | Always hidden |
| 61 | Submit Feedback | All | High | Loading → success/error state | No feedback after submit |
| 62 | Input Affordance | All | Medium | Distinct input styling | Inputs that look like plain text |
| 63 | Mobile Keyboards | Mobile | Medium | `inputmode="numeric"` for numbers | Text keyboard for numbers |

## Responsive

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 64 | Mobile First | Web | Medium | Start mobile, add breakpoints | Desktop-first |
| 65 | Breakpoint Testing | Web | Medium | Test 320, 375, 414, 768, 1024, 1440 | Only your device |
| 66 | Touch Friendly | Web | High | Increase touch targets on mobile | Same tiny buttons |
| 67 | Readable Font Size | All | High | Minimum 16px body on mobile | text-xs for body |
| 68 | Viewport Meta | Web | High | `width=device-width, initial-scale=1` | Missing viewport |
| 69 | Horizontal Scroll | Web | High | Content fits viewport width | Horizontal scrollbar on mobile |
| 70 | Image Scaling | Web | Medium | `max-width: 100%` on images | Fixed width overflow |
| 71 | Table Handling | Web | Medium | Horizontal scroll or card layout | Wide tables breaking layout |

## Typography

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 72 | Line Height | All | Medium | 1.5-1.75 for body text | leading-none (1) |
| 73 | Line Length | Web | Medium | 65-75 characters per line | Full viewport text |
| 74 | Font Size Scale | All | Medium | Consistent modular scale | Random sizes |
| 75 | Font Loading | Web | Medium | Fallback font + swap | Layout shift on load |
| 76 | Contrast Readability | All | High | Darker text on light backgrounds | Gray on gray |
| 77 | Heading Clarity | All | Medium | Clear size/weight difference | Headings similar to body |

## Feedback

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 78 | Loading Indicators | All | High | Spinner/skeleton for > 300ms | Frozen UI |
| 79 | Empty States | All | Medium | Helpful message + action | Blank empty screens |
| 80 | Error Recovery | All | Medium | Clear next steps (try again + help) | Error without recovery |
| 81 | Progress Indicators | All | Medium | Step indicators or progress bar | No progress indication |
| 82 | Toast Notifications | All | Medium | Auto-dismiss 3-5 seconds | Toasts that never disappear |
| 83 | Confirmation Messages | All | Medium | Brief success message | Silent success |

## Content

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 84 | Truncation | All | Medium | Ellipsis + expand option | Overflow or cut off |
| 85 | Date Formatting | All | Low | Relative or locale-aware dates | Ambiguous 01/02/03 |
| 86 | Number Formatting | All | Low | Thousand separators or abbreviations | Long unformatted numbers |
| 87 | Placeholder Content | All | Low | Realistic sample data | Lorem ipsum everywhere |

## Misc

| # | Issue | Platform | Severity | Do | Don't |
|---|-------|----------|----------|-----|-------|
| 88 | User Freedom (Onboarding) | All | Medium | Skip + Back buttons on tutorials | Force linear unskippable tour |
| 89 | Autocomplete (Search) | Web | Medium | Predictions as user types | Require full type + enter |
| 90 | No Results (Search) | Web | Medium | "No results" + suggestions | Blank screen |
| 91 | Bulk Actions | Web | Low | Multi-select + bulk edit | Single row actions only |
| 92 | AI Disclaimer | All | High | Clearly label AI content | Present AI as human |
| 93 | AI Streaming | All | Medium | Stream token by token | Spinner for 10+ seconds |
| 94 | Gaze Hover (VisionOS) | VisionOS | High | Scale/highlight on look | Static until pinch |
| 95 | Depth Layering (VisionOS) | VisionOS | Medium | Glass material + z-offset | Flat opaque panels |
| 96 | Auto-Play Video | Web | Medium | Click-to-play or pause off-screen | Auto-play high-res loops |
| 97 | Asset Weight | Web | Medium | Compress + lazy load 3D models | Raw 50MB textures |
| 98 | AI Feedback Loop | All | Low | Thumbs up/down + regenerate | Static output only |
