# Mawkish Technologies — Website

Marketing website for Mawkish Technologies, built with Next.js (App Router) and Tailwind CSS.

## Structure

- **Home** (`/`) — hero, stats, methodology, services preview, industries, partners
- **About** (`/about`) — founding story, values, 5-year vision, regional presence, leadership
- **Services** (`/services`, `/services/[slug]`) — SAP, Salesforce, Odoo, plus future service areas, each with a dedicated detail page
- **Industries** (`/industries`) — the 8 industry verticals Mawkish focuses on
- **Insights & Perspectives** (`/insights`, `/insights/[slug]`) — thought-leadership article hub
- **Contact** (`/contact`) — lead form, office/market info, map

Content (services, industries, regions, values, insights, leadership) lives in `lib/site-data.ts` — edit there to update copy without touching page markup.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Brand

- Primary: `#114232`, Secondary: `#1C6B51` (see `app/globals.css` `@theme` tokens, prefixed `mw-*`)
- Font: Inter (display + body) via `next/font/google`, matching the Figma file
- Logo mark: `components/Logo.tsx`

## Images (placeholders — replace these)

`public/images/` currently has generated placeholder graphics (green "REPLACE ME" cards) standing in for real photography, so the site never 404s while assets are pending. Drop in real files with the **same names** and everything picks them up automatically — no code changes needed:

| File | Used in | Notes |
| --- | --- | --- |
| `public/images/about-background.svg` | Homepage "Mawkish Technologies" story section (`app/page.tsx`) | Full-bleed background photo behind the stats/story block — a dark gradient overlay is already applied on top for text contrast. |
| `public/images/testimonial.svg` | CEO pull-quote (`components/PullQuote.tsx`) | Headshot, shown in a 160×160 bracket-framed square — square/portrait crop works best. |
| `public/images/grow/sap.svg`, `salesforce.svg`, `odoo.svg`, `ai.svg`, `data.svg` | "Make You Grow, together" service cards (`components/GrowRow.tsx`) | 5 card thumbnails, ~4:3 crop, shown at 128px tall. |

If your real files use a different extension (`.jpg`/`.png`/`.webp`), update the `src` path in the corresponding component to match — the extension in the URL has to match the actual file since the server sets the image's content type from it. To regenerate the placeholders: `node scripts/gen-placeholders.js`.

## Known gaps (out of scope for this codebase)

The requirements doc also calls for a set of items that are operational/infra work rather than application code, and aren't wired up here:

- **CMS** — content currently lives in `lib/site-data.ts`; swapping in a headless CMS (e.g. Sanity/Contentful) would replace that file with fetch calls.
- **Lead routing** — `app/api/contact/route.ts` validates and logs submissions; connecting it to email (SMTP) or a CRM (e.g. Salesforce Web-to-Lead) needs real credentials in environment variables.
- **Google Maps** — the contact page embeds an OpenStreetMap iframe (no API key required) centered on Colombo; swap for a Google Maps embed + real office address once available.
- **Domain, SSL, DNS, analytics/SEO submission** — these are registrar/hosting-account actions, not code.
- Partner logos (Samishti Infotec, Levarus) are referenced by name only — add real logo assets under `public/` once received.
