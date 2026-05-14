## 1. Foundations: tokens, fonts, deps, metadata

- [x] 1.1 Install `framer-motion` via `pnpm add framer-motion`
- [x] 1.2 Rewrite `src/app/globals.css`: replace the current "Lannet Core" light tokens with the dark palette (`--color-background #0b0f19`, surfaces 800/700, foreground/muted, brand-50..950 scale rooted at `#264bff`, hero radial gradient, `--font-sans: var(--font-inter)`)
- [x] 1.3 Swap Geist for Inter in `src/app/layout.tsx` using `next/font/google` (`subsets: ["latin"], variable: "--font-inter", display: "swap"`); remove Geist imports
- [x] 1.4 Set `<html lang="pt-BR" className={inter.variable}>` and ensure body inherits `font-sans`
- [x] 1.5 Author root `metadata` in `layout.tsx` (`metadataBase`, `title.template`, `title.default`, `description`, `keywords`, `robots`, `openGraph`, `twitter`, `alternates.canonical`, `themeColor: "#0b0f19"`, `manifest: "/manifest.webmanifest"`)
- [x] 1.6 Add skip-link `<a href="#main">` at top of `<body>` and wrap page sections in `<main id="main">`

## 2. Data layer (single source of truth for cards + JSON-LD)

- [x] 2.1 Create `src/data/plans.ts` exporting typed `FiberPlan[]` for Essencial / Gamer & Pro / Empresarial (id, name, tagline, priceBRL, speed, features[], featured, ctaLabel, ctaHref)
- [x] 2.2 Create `src/data/rural-plans.ts` with at least Rural Rádio and Rural Híbrido entries (same shape as fiber)
- [x] 2.3 Create `src/data/faq.ts` with 8–10 Q/A items (id, question, answer)
- [x] 2.4 Create `src/data/testimonials.ts` with at least 3 entries (id, name, role, quote, avatar, stars)
- [x] 2.5 Create `src/data/regions.ts` with placeholder city/region list (TODO content marker)
- [x] 2.6 Add `// TODO(content):` comments at the top of every data file flagging the placeholder data for marketing/legal review

## 3. Lib helpers

- [x] 3.1 Create `src/lib/whatsapp.ts` exporting `whatsappUrl(message?: string)` reading `process.env.NEXT_PUBLIC_WHATSAPP_NUMBER` with fallback
- [x] 3.2 Create `src/lib/masks.ts` with `maskPhoneBR` and `maskCEP` pure helpers
- [x] 3.3 Create `src/lib/seo.ts` exporting JSON-LD builders: `organizationLd()`, `localBusinessLd()`, `productLd(plan)`, `faqPageLd(items)`

## 4. UI primitives

- [x] 4.1 Implement `src/components/ui/Button.tsx` (variants: primary brand-gradient + ghost outline, sizes sm/md/lg, supports `asChild` via direct rendering of `<a>`)
- [x] 4.2 Implement `src/components/ui/Card.tsx` (base dark card with `surface-800` background, border `white/5`, rounded-3xl, padding scale)
- [x] 4.3 Implement `src/components/ui/Accordion.tsx` (client component, controlled items, animated height via framer-motion, `aria-expanded`/`aria-controls`, keyboard support)

## 5. Motion primitive

- [x] 5.1 Implement `src/components/motion/Reveal.tsx` (client) wrapping children in a `motion.div` with `useInView({ once: true, margin: "-10%" })` and a fade+slide-up variant; short-circuit to static when `useReducedMotion()` is true

## 6. Layout sections (visual)

- [x] 6.1 Implement `src/components/sections/Header.tsx` (client) — fixed top, blur background, logo, desktop nav with all six anchors, primary CTA "Começar", mobile menu toggle with state
- [x] 6.2 Implement `src/components/sections/Hero.tsx` — single h1, subtitle, CTA "Verificar Cobertura" → `#cobertura`, `next/image` hero with `priority`, wrapped in `<Reveal>`
- [x] 6.3 Implement `src/components/sections/Features.tsx` — 4 cards with inline SVG icons; stagger entrance via Reveal/staggerChildren
- [x] 6.4 Implement `src/components/sections/PlansFiber.tsx` — `id="planos"`, maps `plans.ts`, middle card lifted with brand border + "Mais Popular" badge, hover lift via `whileHover`
- [x] 6.5 Implement `src/components/sections/Rural.tsx` — `id="rural"`, pitch copy + maps `rural-plans.ts` + bulleted region list from `regions.ts`
- [x] 6.6 Implement `src/components/sections/Business.tsx` — `id="empresas"`, B2B copy + CTA "Falar com consultor" → WhatsApp helper
- [x] 6.7 Implement `src/components/sections/Testimonials.tsx` — `id="depoimentos"`, responsive grid mapping `testimonials.ts`, stars rendered as inline SVG
- [x] 6.8 Implement `src/components/sections/Footer.tsx` — 4-column grid, social icons, copyright computed from `new Date().getFullYear()`

## 7. Interactive sections (forms + accordion)

- [x] 7.1 Implement `src/components/forms/CoverageForm.tsx` (client) — CEP input with `maskCEP`, validation (8 digits), submit logs `{ cep, source: "coverage" }` with `// TODO(server-action)` comment, shows placeholder result on success
- [x] 7.2 Implement `src/components/sections/Coverage.tsx` — server shell with `id="cobertura"`, copy, and `<CoverageForm />`
- [x] 7.3 Implement `src/components/sections/SpeedTest.tsx` — `id="speed-test"`, copy + external CTA opening fast.com in new tab with `rel="noopener noreferrer"`
- [x] 7.4 Implement `src/components/sections/FAQ.tsx` — `id="suporte"`, uses `Accordion` UI primitive, maps `faq.ts`
- [x] 7.5 Implement `src/components/forms/ContactForm.tsx` (client) — fields Nome/Tel/Email with required validation and `maskPhoneBR`, submit logs `{ name, phone, email, source: "contact" }`, resets form, shows success message
- [x] 7.6 Implement `src/components/sections/Contact.tsx` — server shell with `id="contato"`, `<ContactForm />`, and WhatsApp icon CTA via helper

## 8. Page composition

- [x] 8.1 Rewrite `src/app/page.tsx` to compose the 12 sections in order (Header, main { Hero, Features, PlansFiber, Rural, Coverage, SpeedTest, Business, Testimonials, FAQ, Contact }, Footer)
- [x] 8.2 Export route-level `metadata` from `page.tsx` (page-specific title, description, og.url)

## 9. SEO infrastructure

- [x] 9.1 Create `src/app/sitemap.ts` returning `MetadataRoute.Sitemap` with the home URL (uses `SITE_URL` env with localhost fallback)
- [x] 9.2 Create `src/app/robots.ts` returning `MetadataRoute.Robots` allowing all UAs and pointing to sitemap
- [x] 9.3 Create `src/app/opengraph-image.tsx` rendering an `ImageResponse` at 1200×630 with Lannet wordmark on the hero radial gradient
- [x] 9.4 In `layout.tsx`, mount `Organization` and `LocalBusiness` JSON-LD via `<Script type="application/ld+json">` reading from `lib/seo.ts`
- [x] 9.5 In `Plans` sections, emit one `Product` JSON-LD per plan (fiber + rural) via `lib/seo.ts`
- [x] 9.6 In `FAQ` section, emit `FAQPage` JSON-LD built from `data/faq.ts`
- [x] 9.7 Create `public/manifest.webmanifest` with name/short_name/description/start_url/display/background/theme/icons; add `public/icon-192.png` and `public/icon-512.png` placeholders

## 10. Accessibility pass

- [x] 10.1 Add `aria-label` on all icon-only buttons (mobile menu, WhatsApp CTA, social icons)
- [x] 10.2 Ensure single `<h1>`, `<h2>` per top-level section, single `<header>`/`<main>`/`<footer>`
- [x] 10.3 Verify focus-visible ring is present on every interactive element (anchor, button, input)
- [x] 10.4 Manually tab-walk the page; confirm all CTAs and form fields are reachable and operable via keyboard
- [x] 10.5 Confirm reduced-motion: toggle OS pref or DevTools emulation; entrance animations must collapse to static rendering

## 11. Verification & polish

- [x] 11.1 `pnpm lint` passes with zero errors
- [x] 11.2 `pnpm build` passes; capture `/` First Load JS — confirm ≤ 150 KB or document the overage
- [x] 11.3 `pnpm dev` → manual visual QA against the Stitch screen across mobile (375), tablet (768), desktop (1280) widths
- [x] 11.4 Open Chrome DevTools Lighthouse (mobile) on `pnpm build && pnpm start`; record scores; iterate if any pillar < 95
- [x] 11.5 View page source: verify `<title>`, meta description, canonical, OG/Twitter tags, all JSON-LD payloads present and parseable
- [x] 11.6 `curl http://localhost:3000/sitemap.xml`, `curl http://localhost:3000/robots.txt`, `curl http://localhost:3000/opengraph-image` — all return 200 with correct content-types
- [x] 11.7 Validate JSON-LD payloads against `https://validator.schema.org/` — fix anything flagged
- [x] 11.8 Form & coverage smoke test: submit Contact and Coverage forms; confirm console payload + success states; confirm WhatsApp CTA opens `wa.me/...` in a new tab
