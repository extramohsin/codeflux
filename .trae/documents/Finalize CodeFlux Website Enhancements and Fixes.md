## Scope
- Address remaining errors, polish copy, and complete UI/UX, SEO, performance, and accessibility improvements per your brief.
- Verify locally and with Lighthouse to target 90+ performance and best-practice scores.

## Fix Content Quality
- Workshops: Correct typos and rewrite each program card for professional, energetic tone; integrate target keywords naturally (AI workshop for college, school AI workshop, robotics workshop in India, coding bootcamp for students, AI tools for teachers).
- Gallery: Fix captions and titles (spelling/grammar), ensure concise, engaging descriptions.
- Why Choose, About, Hero: Ensure consistent voice and benefit-led copy; maintain one `h1` in Hero and proper H2/H3 cascade.

## Navigation & Structure
- Finalize Workshops dropdown items with clear labels and anchors to the `#workshops` section; add optional deep links (query hash or IDs per program) for future expansion.
- Keep sticky navbar, ensure CTA: `Book a Session` is prominent and accessible.

## Accessibility
- Add ARIA/focus improvements:
  - Social icons: `aria-label` per platform + focus-visible rings.
  - Testimonials stars: `role="img"` or `aria-label` to convey rating value.
  - Ensure all interactive elements have visible keyboard focus and meaningful labels.

## Performance
- Add `srcset` to Gallery images and any hero/about images under your control; keep `sizes` hints.
- Optimize local assets in `public/lovable-uploads/` (compressed WebP/AVIF variants) and reference responsive sources.
- Keep lazy-loading (`loading="lazy"`) and `decoding="async"` for non-critical images; defer heavy animations.
- Build with Vite for minified JS/CSS.

## SEO
- Refine `public/sitemap.xml` to include `/` only (or add prominent paths if you add routes) and confirm canonical domain.
- Confirm `robots.txt` allows crawl; keep OpenGraph/Twitter tags and JSON-LD (Organization + FAQ).
- Ensure keyword presence across Hero, About, Services, Footer without stuffing.

## Micro-Interactions & Visual Polish
- Maintain premium gradient theme (blue × purple × neon glow) and subtle glow on CTAs.
- Keep scroll-reveal IntersectionObserver; ensure thresholds don’t cause jank.
- Replace emoji with branded SVG icon set where appropriate (optional, can be added after content fixes).

## Bug & Error Review
- Investigate dev preview `net::ERR_ABORTED /src/pages/Index.tsx`. Validate imports and ensure the app doesn’t request `.tsx` directly; confirm Vite handles module graph via `src/main.tsx`. If preview tooling triggers non-impactful warnings, ensure the UI renders and functions correctly.
- Fix curriculum mapping issues: keep the corrected key-based iteration in `Workshops.tsx` and ensure all audiences render their lists reliably.

## Verification
- Run the app locally and navigate all sections; validate scroll-reveal, dropdown, and CTAs.
- Lighthouse run targeting 90+ in performance and accessibility; iterate on image sizes and focus states as needed.

## Deliverables
- Updated copy across Workshops, Gallery, About, Hero.
- `srcset` additions and responsive images for Gallery and hero/about visuals.
- Accessibility enhancements: social icon labels, rating labels, focus rings.
- Navigation dropdown polished with accessible markup.
- SEO artifacts reviewed (sitemap, robots, JSON-LD, meta tags) and aligned to canonical.
- Verification notes and Lighthouse report summary.