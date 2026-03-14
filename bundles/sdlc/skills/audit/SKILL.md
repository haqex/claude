---
name: audit
description: Cross-cutting quality review — security, performance, code quality, and accessibility. Finds issues, fixes what it can, documents the rest.
argument-hint: <project-goal>
allowed-tools: [Read, Write, Edit, Glob, Grep, Bash]
---

# Audit: $ARGUMENTS

## Purpose
Perform a comprehensive quality review across security, performance, code quality, and accessibility. For each finding: fix it if straightforward, or document it as a finding with severity.

## Steps

### 1. Read inputs
- Read `checklists/04-build.md` for the list of implemented features and files
- Read `checklists/05-test.md` for test coverage status
- Read reference checklists from `<bundle-root>/skills/audit/reference/` for detailed criteria
- If a frontend bundle is installed alongside this bundle, note it for the accessibility dimension

### 2. Security audit
Reference: `reference/security-checklist.md`

Review each category:
- **Authentication**: JWT handling, token storage, session management
- **Authorization**: Route protection, role checks, data access control
- **Input validation**: All user inputs sanitized, SQL injection prevention, XSS prevention
- **Dependencies**: `npm audit` or equivalent for known vulnerabilities
- **Secrets**: No hardcoded secrets, `.env` not committed, `.gitignore` correct
- **Headers**: Security headers set (CSRF, CORS, CSP)

### 3. Performance audit
Reference: `reference/performance-checklist.md`

- **Bundle size**: Check for unnecessary imports, tree-shaking
- **Database**: N+1 queries, missing indexes, unoptimized joins
- **Caching**: Appropriate cache headers, data caching strategy
- **Lazy loading**: Code splitting, dynamic imports for heavy modules
- **Images/assets**: Optimized, using modern formats, proper sizing

### 4. Code quality audit
Reference: `reference/code-quality-checklist.md`

- **Type safety**: No `any` types, proper error types, null handling
- **Error handling**: All async operations have error handling, user-facing errors are clear
- **Naming**: Consistent conventions, descriptive variable/function names
- **DRY**: No significant code duplication
- **Dead code**: No unused functions, imports, or variables
- **Debug artifacts**: No `console.log`, `TODO`, `FIXME`, commented-out code

### 5. Accessibility audit (if frontend exists)
- Semantic HTML (proper headings, landmarks, labels)
- Keyboard navigation (all interactive elements focusable)
- Color contrast (WCAG AA minimum)
- Screen reader support (ARIA labels, alt text)
- If the frontend bundle is installed, defer to its audit skill for deeper analysis

### 6. Fix and document
For each finding:
- **Severity**: critical / high / medium / low
- **If fixable** (< 5 min, no architectural change): fix it immediately
- **If not fixable**: document with severity, location, and recommended fix

### 7. Write the audit checklist
Create `checklists/06-audit.md`:

```markdown
---
sdlc: true
project: <project-slug>
phase: audit
status: complete
started: YYYY-MM-DD
updated: YYYY-MM-DD
progress: N/N
---

# Audit Checklist

> Project: <project name>
> Phase: 6 of 7 — Audit
> Status: complete (N/N)

## Security
- [x] Authentication properly implemented
  - **verified**: JWT tokens validated, refresh flow secure
- [x] No hardcoded secrets
  - **verified**: grep for API keys/passwords returned 0 results

## Performance
- [x] No N+1 queries
  - **verified**: All data access uses efficient queries
- [ ] Bundle size optimized
  - **failed**: Main bundle 450KB (target: <300KB) — needs code splitting

## Code Quality
- [x] No TypeScript `any` types
  - **verified**: grep for `: any` returned 0 results
- [x] No debug artifacts
  - **verified**: No console.log, TODO, FIXME in production code

## Accessibility
- [x] Semantic HTML used throughout
  - **verified**: All interactive elements use proper elements

## Findings

| Severity | Finding | Location | Status |
|----------|---------|----------|--------|
| high | Bundle too large | src/app/page.tsx | open |
| medium | Missing rate limiting | src/api/ | fixed |
```

### 8. Update master checklist
Update `checklists/00-master.md`: Audit → `[x]`, progress → `6/7`

### 9. Report
```
## Audit Complete

Dimensions: 4 (security, performance, code quality, accessibility)
Findings: N total
  Fixed: X | Open: Y
  Critical: A | High: B | Medium: C | Low: D

Next: Ship phase will verify deployment readiness.
```

## Quality Checklist
- [ ] All 4 dimensions reviewed
- [ ] Reference checklists consulted for detailed criteria
- [ ] Quick fixes applied immediately
- [ ] Open findings documented with severity and location
- [ ] Master checklist updated
