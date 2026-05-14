## Why

The repository ships only the Create Next App boilerplate (`src/app/page.tsx`), so Lannet — a fiber-optic + rural internet provider — has zero web presence to convert leads or rank in search. The business needs a single, performant, dark-themed landing page that (1) presents both product lines, (2) maximizes organic discovery for geo-local and intent queries, and (3) funnels visitors to WhatsApp or a contact form.

## What Changes

- Replace `src/app/page.tsx` boilerplate with a 12-section dark marketing landing page faithful to the Stitch reference screen `ac1bebf36e3f4baaa79cf5f768a421da`.
- Rewrite `src/app/globals.css` tokens from the previously-exported light "Lannet Core" palette to the dark palette used in the screen (`#0b0f19` body, `#264bff` brand). **BREAKING** for the tokens consumed in `globals.css`.
- Swap the Geist next/font setup in `src/app/layout.tsx` for **Inter** to match the design.
- Add a complete SEO foundation: per-route `metadata`, dynamic `sitemap.ts`, `robots.ts`, dynamic `opengraph-image.tsx`, JSON-LD (`Organization`, `LocalBusiness`, `Product`/`Offer` per plan, `FAQPage`), and a web manifest.
- Add lead-capture surfaces with deferred backend wiring: CEP coverage checker, contact form (Nome/Tel/Email), WhatsApp deep-link CTA, external Speed Test link.
- Add a dedicated **Internet Rural** section (planos rádio/híbrido + regiões atendidas) on top of the urban fiber plans the Stitch screen already shows.
- Materialize every header anchor as a real section: Planos, Rural, Cobertura, Speed Test, Empresas, Suporte/FAQ.

## Capabilities

### New Capabilities
- `marketing-landing`: All visual/content sections of the landing page — Header, Hero, Features, Urban Fiber Plans, Rural Internet, Business (B2B), Testimonials, FAQ accordion, Footer — plus the dark visual system (tokens, typography, primitives Button/Card/Accordion).
- `lp-seo`: SEO infrastructure — global and per-route `metadata`, canonical/OG/Twitter tags, dynamic `sitemap.ts`, `robots.ts`, dynamic `opengraph-image.tsx`, JSON-LD payloads (`Organization`, `LocalBusiness`, `Product`/`Offer` per plan, `FAQPage`), web manifest, Lighthouse SEO ≥ 95 target.
- `lp-lead-capture`: Conversion surfaces — CEP coverage checker (form + placeholder result), contact form (Nome/Tel/Email with TODO submit logging payload to console), WhatsApp deep-link helper with placeholder number, embedded/linked external Speed Test.

### Modified Capabilities
<!-- None — this is a greenfield site. -->

## Impact

- **Code**: full rewrite of `src/app/page.tsx`, `src/app/globals.css`, `src/app/layout.tsx`; new `src/app/{sitemap,robots,opengraph-image}.tsx`; new `src/components/sections/*` (12 files); new `src/components/ui/{Button,Card,Accordion}.tsx`; new `src/lib/{seo,whatsapp}.ts`; new `public/manifest.webmanifest` and icon placeholders.
- **APIs**: no backend APIs added. Form/coverage submit handlers log to console with a TODO comment for future Server Action wiring.
- **Dependencies**: add **`framer-motion`** (latest, compatible with React 19) for entrance and interaction animations across hero, feature cards, plan cards, and accordion. Otherwise sticks to Next 16, React 19, Tailwind v4, Biome. `next/font/google` Inter replaces Geist.
- **External**: Stitch MCP no longer needed at runtime (design is mirrored statically); WhatsApp number, CNPJ, address, plan pricing and city lists land as **placeholders** that must be confirmed before production.
- **Risk**: marketing copy and legal/structured-data placeholders (e.g., `LocalBusiness` address, plan offers) ship as filler and must be reviewed before public launch.
