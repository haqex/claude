# Performance Audit Reference

## Bundle & Load Time
- JavaScript bundle < 300KB gzipped (main chunk)
- Code splitting used for route-level chunks
- Dynamic imports for heavy libraries (charts, editors, etc.)
- Tree-shaking enabled (no barrel imports pulling entire libraries)
- CSS is extracted, not inlined in JS

## Database
- No N+1 query patterns (use eager loading / joins)
- Indexes on all columns used in WHERE, JOIN, ORDER BY
- Queries return only needed columns (no `SELECT *`)
- Connection pooling configured
- Slow query logging enabled in development

## Caching
- Static assets have long cache headers (immutable hashes in filenames)
- API responses use appropriate Cache-Control headers
- Frequently-read data cached in memory or Redis
- Cache invalidation strategy documented

## Images & Assets
- Images use modern formats (WebP/AVIF with fallbacks)
- Images are properly sized (no 4000px images displayed at 400px)
- `srcset` and `sizes` used for responsive images
- Lazy loading for below-fold images
- Fonts preloaded, subset to used characters

## Rendering
- No layout thrashing (batch DOM reads/writes)
- Animations use `transform` and `opacity` only
- Lists use virtualization for > 100 items
- Server-side rendering for SEO-critical pages
- Largest Contentful Paint < 2.5s
