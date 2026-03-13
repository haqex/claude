# UX Writing Reference

## Core Rules

**Make every word earn its place.** If removing a word doesn't change meaning, remove it.

**Consistency beats perfection.** Using "Delete" everywhere beats using "Delete", "Remove", and "Trash" interchangeably.

---

## Button Labels

**Never use**: OK, Submit, Yes, No, Confirm, Click here, Learn more

**Use action-outcome format**: [Verb] [Object]

| Bad | Good |
|-----|------|
| Submit | Save changes |
| OK | Got it |
| Yes | Delete account |
| Confirm | Publish post |
| Learn more | See pricing |
| Click here | Download PDF |

---

## Error Messages

Every error must answer three questions:
1. **What happened?** ("Your payment failed")
2. **Why?** ("The card was declined")
3. **How to fix it?** ("Try a different card or contact your bank")

```
✗ "Error: 422"
✗ "Something went wrong"
✓ "Payment declined — your card was rejected. Try a different card or contact your bank."
```

**Tone during errors**: Never use humor. Users are already frustrated. Be direct, empathetic, and helpful.

---

## Empty States

Empty states should **teach**, not just report emptiness:

| Bad | Good |
|-----|------|
| "No items" | "No projects yet — create your first to get started" |
| "Empty" | "Your inbox is clear — nice work" |
| Nothing | Illustration + explanation + action button |

---

## Labels & Placeholders

- **Always use visible `<label>` elements** — placeholders disappear on input
- Placeholder text is for format hints only: `e.g. name@company.com`
- Required fields: `*` with legend, or "(required)" — be consistent
- Never use placeholder as the only label

---

## Tone vs Voice

- **Voice** is constant — it's your brand personality
- **Tone** shifts with context

| Situation | Tone |
|-----------|------|
| Onboarding | Warm, encouraging |
| Error | Calm, direct, helpful |
| Destructive action | Serious, no humor |
| Success | Celebratory but brief |
| Empty state | Helpful, forward-looking |

---

## Confirmation Copy

**Destructive actions** must be explicit:

```
✗ "Are you sure?"
✓ "Delete 'Project Alpha'? This cannot be undone."

Button: "Delete project" (not "Yes" or "Confirm")
Cancel: "Keep project" (not "No" or "Cancel")
```

---

## Accessibility

- **Link text**: Must make sense out of context. "Click here" → "Download 2024 report (PDF)"
- **Icon buttons**: Always need `aria-label` or `title`
- **Form errors**: Connected to input via `aria-describedby`

---

## Localization Notes

- German expands ~30% (design with extra space)
- Chinese is ~30% shorter visually but similar visual width
- Never hard-code string lengths in layouts — use `max-width` + overflow handling
- Avoid idioms, slang, or puns that don't translate
