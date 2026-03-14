---
name: review
description: "UI/UX quality review — audits UI code against 10 priority categories: accessibility, touch, performance, style, layout, typography, animation, forms, navigation, charts. Produces actionable findings."
argument-hint: "[file-or-directory] [focus-area]"
allowed-tools: [Read, Glob, Grep, Write, Edit]
---

# UI/UX Review: $ARGUMENTS

Review UI code or design files against comprehensive UX quality standards. Produces a prioritized findings report with severity, fix guidance, and a pass/fail checklist.

## When to Use

- Pre-launch UI quality audit
- Reviewing UI code for accessibility, usability, or visual consistency
- After implementing a design — verify it meets standards
- When UI "doesn't look professional" but the reason is unclear

## Workflow

### Step 1: Identify Scope

From `$ARGUMENTS` or user context:
- **Target**: specific file, component, page, or entire project
- **Focus area** (optional): accessibility, performance, animation, forms, etc.
- Read the target files to understand the UI implementation

### Step 2: Load Review Standards

Read from `<BUNDLE_ROOT>/reference/`:
- **`quick-reference.md`** — Pre-delivery checklist organized by priority
- **`ux-guidelines.md`** — 99 detailed UX rules with rationale

### Step 3: Audit by Priority

Review the code against each category in priority order (1 = most critical):

| Priority | Category | Impact |
|----------|----------|--------|
| 1 | Accessibility | CRITICAL |
| 2 | Touch & Interaction | CRITICAL |
| 3 | Performance | HIGH |
| 4 | Style Selection | HIGH |
| 5 | Layout & Responsive | HIGH |
| 6 | Typography & Color | MEDIUM |
| 7 | Animation | MEDIUM |
| 8 | Forms & Feedback | MEDIUM |
| 9 | Navigation Patterns | HIGH |
| 10 | Charts & Data | LOW |

For each category, check the relevant rules:

**1. Accessibility (CRITICAL)**
- Color contrast ≥ 4.5:1 (normal text), ≥ 3:1 (large text)
- Visible focus rings on interactive elements
- Alt text on meaningful images
- aria-label on icon-only buttons
- Tab order matches visual order
- Heading hierarchy (h1→h6, no skips)
- Color not the only indicator
- prefers-reduced-motion respected

**2. Touch & Interaction (CRITICAL)**
- Touch targets ≥ 44×44px (iOS) / 48×48dp (Android)
- ≥ 8px gap between touch targets
- No hover-only interactions
- Loading state on async buttons
- Clear error feedback near the problem

**3. Performance (HIGH)**
- WebP/AVIF images with srcset
- Width/height declared on images (CLS prevention)
- font-display: swap on web fonts
- Lazy loading below-the-fold content
- Virtualized lists for 50+ items

**4. Style Selection (HIGH)**
- Style matches product type (not arbitrary)
- Consistent style across all pages
- SVG icons (no emojis as structural elements)
- Effects aligned with chosen style

**5. Layout & Responsive (HIGH)**
- viewport meta tag present
- Mobile-first breakpoints
- No horizontal scroll on mobile
- 4pt/8dp spacing rhythm
- Safe area compliance

**6. Typography & Color (MEDIUM)**
- Base font ≥ 16px
- Line height 1.5–1.75 for body
- Semantic color tokens (not raw hex)
- Dark mode tested independently

**7. Animation (MEDIUM)**
- Duration 150–300ms for micro-interactions
- transform/opacity only (no width/height animation)
- Skeleton/shimmer for loading > 300ms

**8. Forms & Feedback (MEDIUM)**
- Visible labels (not placeholder-only)
- Errors shown near the field
- Required fields marked
- Confirmation before destructive actions

**9. Navigation (HIGH)**
- Bottom nav ≤ 5 items with labels
- Predictable back behavior
- Deep linking support

**10. Charts & Data (LOW)**
- Accessible color palettes
- Legends visible
- Tooltips on interact
- Table alternative for screen readers

### Step 4: Produce Findings Report

```markdown
## UI/UX Review: [Target]

### Summary
- **Score**: X/10
- **Critical issues**: N
- **High issues**: N
- **Medium issues**: N

### Findings

#### CRITICAL

##### [Finding title]
- **Category**: Accessibility
- **Rule**: `color-contrast`
- **Location**: `src/components/Card.tsx:42`
- **Issue**: Text contrast ratio is 2.8:1 (needs ≥ 4.5:1)
- **Fix**: Change `text-gray-400` to `text-gray-600` on the light background
- **Severity**: CRITICAL

#### HIGH
...

#### MEDIUM
...

### Pre-Delivery Checklist
- [x] / [ ] items from quick-reference.md

### Recommendations
1. [Prioritized action items]
```

## Quality Checklist
- [ ] All 10 categories reviewed (or documented as N/A)
- [ ] Each finding includes location, rule, and fix guidance
- [ ] Findings sorted by severity
- [ ] Pre-delivery checklist included
- [ ] No false positives (each issue verified in code)
