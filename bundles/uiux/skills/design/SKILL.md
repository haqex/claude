---
name: design
description: "UI/UX design intelligence — analyzes product type and recommends style, color palette, typography, effects, and layout patterns. Loads reference data for 67 styles, 161 colors, 57 font pairings, 161 product types."
argument-hint: "[product-type] [industry] [keywords]"
allowed-tools: [Read, Glob, Grep, Write, Edit]
---

# Design Intelligence: $ARGUMENTS

Comprehensive design recommendation engine. Analyzes the product type, industry, and style keywords to produce a complete design system recommendation with rationale.

## When to Use

- Designing new pages (landing, dashboard, admin, SaaS, mobile app)
- Choosing color schemes, typography, spacing, or layout systems
- Making product-level design decisions (style, hierarchy, brand expression)
- Starting a new project and need a cohesive visual direction

## Workflow

### Step 1: Analyze Requirements

Extract from user request or `$ARGUMENTS`:
- **Product type**: SaaS, e-commerce, healthcare, fintech, portfolio, etc.
- **Industry**: specific vertical (luxury, wellness, education, etc.)
- **Style keywords**: modern, minimal, vibrant, dark, elegant, playful, etc.
- **Target audience**: B2B enterprise, consumer, creative professionals, etc.
- **Stack**: React, Next.js, Vue, Svelte, Tailwind, shadcn/ui, etc.

### Step 2: Load Reference Data

Read these files from `<BUNDLE_ROOT>/reference/`:

1. **`products.md`** — Find the matching product type to get:
   - Primary style recommendation
   - Secondary style options
   - Landing page pattern
   - Color palette focus
   - Key considerations

2. **`ui-reasoning.md`** — Get decision rules for the product type:
   - Recommended UI pattern
   - Style priority
   - Color mood
   - Typography mood
   - Key effects
   - Anti-patterns to avoid

3. **`styles.md`** — Look up the recommended style(s) for:
   - Primary/secondary colors
   - Effects & animation guidelines
   - Best-for and do-not-use scenarios
   - CSS/technical keywords
   - Implementation checklist
   - Design system variables

4. **`colors.md`** — Find matching color palettes:
   - Full semantic color system (primary, secondary, accent, background, foreground, card, muted, border, destructive)
   - WCAG compliance notes

5. **`typography.md`** — Select font pairing:
   - Heading + body font combination
   - Google Fonts URL for import
   - CSS import statement
   - Tailwind config snippet
   - Mood/style match

### Step 3: Synthesize Design Recommendation

Produce a structured recommendation:

```markdown
## Design Recommendation: [Product Name]

### Style
- **Primary**: [style name] — [why it fits]
- **Secondary**: [style name] — [when to use]

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| Primary | #XXXXXX | Main brand, CTAs |
| On Primary | #XXXXXX | Text on primary |
| Secondary | #XXXXXX | Supporting elements |
| Accent | #XXXXXX | Highlights, badges |
| Background | #XXXXXX | Page background |
| Foreground | #XXXXXX | Primary text |
| Card | #XXXXXX | Card surfaces |
| Muted | #XXXXXX | Subtle backgrounds |
| Border | #XXXXXX | Dividers, borders |
| Destructive | #XXXXXX | Error, delete |

### Typography
- **Heading**: [font] — [weight range]
- **Body**: [font] — [weight range]
- **Import**: `[CSS import URL]`
- **Scale**: 12 / 14 / 16 / 18 / 24 / 32 / 48

### Effects
- **Shadows**: [style-appropriate shadow values]
- **Border radius**: [px values]
- **Transitions**: [duration and easing]
- **Special**: [glass blur, clay shadows, etc.]

### Layout Pattern
- **Landing**: [recommended pattern]
- **Dashboard**: [if applicable]
- **Breakpoints**: 375 / 768 / 1024 / 1440

### Anti-Patterns
- [What NOT to do for this product type]
```

### Step 4: Apply Decision Rules

Cross-reference `ui-reasoning.md` for conditional rules:
- If data-heavy → add glassmorphism for layered depth
- If luxury → switch to liquid glass / glassmorphism
- If pre-launch → use waitlist pattern
- If conversion-focused → add urgency accent colors
- If checkout → emphasize trust signals

### Step 5: Output

Write the design recommendation to the project directory or present inline. Include:
- All color hex values ready for CSS variables
- Google Fonts import URL ready to paste
- Tailwind config snippet for fonts
- Implementation checklist for the chosen style

## Quality Checklist
- [ ] Product type identified and matched to reference data
- [ ] Style recommendation backed by product-type reasoning
- [ ] Color palette includes all semantic tokens
- [ ] Font pairing includes import URL and Tailwind config
- [ ] Anti-patterns documented
- [ ] Effects aligned with chosen style (not mixed arbitrarily)
