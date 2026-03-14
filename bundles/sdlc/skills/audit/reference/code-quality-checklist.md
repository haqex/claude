# Code Quality Audit Reference

## Type Safety
- No `any` types (use `unknown` with type guards if needed)
- Function return types are explicit for public APIs
- Null/undefined handled explicitly (no unchecked access)
- Error types are specific (not `catch(e: any)`)
- Discriminated unions for state machines and variants

## Error Handling
- All async operations wrapped in try/catch or `.catch()`
- User-facing errors have clear, actionable messages
- Internal errors are logged with context (not swallowed)
- Error boundaries for React components (if applicable)
- Graceful degradation when external services are unavailable

## Naming & Structure
- Files named consistently (kebab-case or PascalCase, not mixed)
- Functions/variables use descriptive names (not `x`, `data`, `temp`)
- Boolean variables start with is/has/can/should
- Constants in UPPER_SNAKE_CASE
- One concept per file (no 500-line god modules)

## DRY & Abstraction
- No significant code duplication (3+ similar blocks = extract)
- Abstractions are justified (no premature abstraction for 2 uses)
- Shared utilities are properly extracted and tested
- Configuration centralized (no magic numbers scattered in code)

## Clean Code
- No `console.log` in production code (use a logger)
- No `TODO` or `FIXME` comments remaining
- No commented-out code blocks
- No unused imports, variables, or functions
- No debug flags or test data in production paths
