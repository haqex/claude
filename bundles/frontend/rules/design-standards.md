# Frontend Design Standards — Auto-Trigger Rules

These rules apply automatically to any frontend or design task in the frontend domain.

## When to Activate

Trigger these standards whenever:
- User asks to build, create, or generate any UI component, page, or application
- User asks to review, audit, or critique an interface
- User asks to improve or polish existing frontend code
- User pastes or references any HTML/CSS/JS/React/Vue code

## Required Behaviors

### 1. Always Load impeccable-design First
Before generating any UI code, mentally load the `impeccable-design` skill. Apply its design direction framework, typography rules, color rules, and layout rules.

### 2. Always Choose a Distinctive Aesthetic Direction
Never default to:
- Dark mode with cyan/purple gradients
- Card grid with icon + heading + paragraph
- Hero section with big metric + gradient accent
- Inter or Roboto font

Always commit to a specific, named aesthetic (editorial, brutalist, luxury, organic, etc.) and execute it consistently.

### 3. Always Apply the AI Slop Test
After generating any UI, review all DON'T guidelines from the impeccable-design skill. If the output looks AI-generated, revise before presenting.

### 4. Always Use OKLCH
Never use hex, rgb, or hsl for brand/UI colors. Use `oklch(L% C H)` and tint all neutrals (minimum 0.01 chroma).

### 5. Always Implement All 8 Interactive States
For any interactive element (button, input, link, toggle): default, hover, focus, active, disabled, loading, error, success.

### 6. Always Use Proper Semantic HTML
- Buttons for actions (`<button>`)
- Links for navigation (`<a href>`)
- Native `<dialog>` for modals
- Native `popover` for dropdowns/tooltips
- Proper heading hierarchy (h1 → h2 → h3)

### 7. After Building — Recommend Audit + Polish
Always suggest running audit and polish after building a component. Example:
> "Component built. Recommended next steps: `/project:audit` to check for accessibility issues, then `/project:polish` before shipping."
