# Security Audit Reference

## Authentication
- Passwords hashed with bcrypt/scrypt/argon2 (never plaintext, never MD5/SHA)
- JWT tokens have expiry, are validated on every request
- Refresh tokens are single-use and stored securely
- Session tokens rotated after privilege changes
- OAuth2 state parameter used to prevent CSRF

## Authorization
- Every route has explicit access control (no "open by default")
- Role checks happen server-side, never client-side only
- Users can only access their own data (IDOR prevention)
- Admin endpoints are behind separate middleware
- API keys scoped to minimum necessary permissions

## Input Validation
- All user input validated on the server (never trust client-side only)
- SQL queries use parameterized statements (never string concatenation)
- HTML output escaped to prevent XSS
- File uploads validated for type, size, and content
- JSON payloads validated against a schema

## Dependencies
- `npm audit` / `cargo audit` shows no critical vulnerabilities
- Dependencies are pinned or use lock files
- No deprecated packages with known security issues

## Secrets Management
- No hardcoded API keys, passwords, or tokens in source code
- `.env` is in `.gitignore`
- `.env.example` exists with placeholder values
- Secrets passed via environment variables or secret manager

## HTTP Security
- HTTPS enforced (redirect HTTP → HTTPS)
- CORS configured to allow only necessary origins
- CSRF protection on state-changing endpoints
- Content-Security-Policy headers set
- Rate limiting on authentication endpoints
