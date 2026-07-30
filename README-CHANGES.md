# Mawkish Technologies — CEO feedback fixes

## How to apply
Copy every file/folder in this zip into your project, overwriting the
existing ones at the same paths.

## Then DELETE these two files (no longer used, safe to remove):
- public/images/about_pic.jpg
- public/images/bg-image3.jpg
- public/images/brand/watermark-mark.png

(Your old `public/images/brand/logo-mark.png` can stay — it's still used
by the splash-screen loader. Only the navbar/footer logo now uses the new
`logo-icon.png`.)

## What changed

**Fonts**
- `app/layout.tsx` — swapped Inter + Bebas Neue for self-hosted **Pliant**
  (main/heading text) and self-hosted **Libre Baskerville** (sub text /
  small text). Also self-hosted JetBrains Mono for consistency (purely a
  build-reliability improvement, not a visible change).
- `public/fonts/` — the actual font files (all OFL-licensed, from Google
  Fonts' own repo). Pliant is brand new to Google Fonts and isn't in
  Next.js's bundled font list yet, so it has to be self-hosted rather than
  pulled via `next/font/google`.
- `app/globals.css` — `--font-sans` now points to Libre Baskerville,
  `--font-display` (used by all headings, `font-display` class) now points
  to Pliant.

**Backgrounds — removed AI images, added black + green CSS glow**
- `app/page.tsx` — the "Who We Are" and "Platforms We Grow With" sections
  no longer use `about_pic.jpg` / `bg-image3.jpg`. They now use a new
  `.mw-glow-section` class: solid black with layered CSS radial-gradient
  glows in your brand green.
- `app/globals.css` — added `.mw-glow-section` / `.mw-glow-section--reverse`,
  removed the animated scanline sweep (`.mw-scanline`) and the drifting
  logo-image watermark (now a static CSS glow instead of an animated PNG
  mask). These were the biggest contributors to the "gamified" look.

**Logo**
- The real problem wasn't padding — `logo-mark.png` had the wordmark text
  baked into the image itself, which is why it read as small/thin in the
  navbar, and why the footer was literally showing the wordmark twice
  (once baked into the image, once as separate text next to it).
- `public/images/brand/logo-icon.png` — new, tightly-cropped, icon-only
  mark (no text baked in).
- `components/Logo.tsx` — navbar now renders the icon-only mark at a
  bigger size (`h-11`/`h-12`) plus "Mawkish Technologies" as real HTML
  text next to it — crisp at any size, no more duplicate wordmark.
- `components/Footer.tsx` — sized up to match, duplicate wordmark fixed.
- `app/icon.tsx` — favicon now uses the icon-only crop so it's legible at
  32×32.

## Verified
Ran a full `next build` locally after these changes — compiles cleanly
with no errors.
