## Context

The repository is a fresh Next.js 16 App Router project (`pnpm` + Tailwind v4 + Biome 2.2 + React 19 with the React Compiler enabled) with no product UI yet — `src/app/page.tsx` is the Create Next App boilerplate and `src/app/globals.css` was just populated with a light "Lannet Core" palette extracted from the Stitch design system. The visual reference for this landing page is the dark Stitch screen `ac1bebf36e3f4baaa79cf5f768a421da` of project `16255078324883041791`. The page must convert visitors (WhatsApp + form), surface two product lines (fiber + rural), and rank for geo-local and intent queries.

Constraints:
- Next.js 16 App Router only — see `AGENTS.md`; APIs differ from older training data, consult `node_modules/next/dist/docs/01-app/` before writing route, layout, or data-fetching code.
- React Compiler is enabled — do **not** hand-add `useMemo`/`useCallback`; follow Rules of React strictly or the compiler bails.
- Tailwind v4 with `@theme` tokens in `globals.css`; no JS Tailwind config.
- Biome 2.2 replaces ESLint+Prettier; 2-space indent.
- `pnpm-workspace.yaml` already ignores `sharp` and `unrs-resolver` postinstall scripts — leave that alone.

## Goals / Non-Goals

**Goals:**
- Visually faithful reproduction of the Stitch dark screen, extended with a Rural section and full-anchor navigation.
- Lighthouse mobile ≥ 95 across Performance, SEO, Accessibility, Best Practices.
- Production JS payload for `/` under 150 KB First Load (gzipped) — every section is a Server Component unless interactivity forces otherwise.
- Tasteful entrance/interaction animations via Framer Motion that respect `prefers-reduced-motion`.
- Lead-capture surfaces wired to placeholder handlers that log + show a success state, so real backend integration is a clean follow-up.

**Non-Goals:**
- Light/dark theme toggle — site is dark-only.
- CMS, i18n, A/B testing, analytics integration.
- Real Server Action for form submission (TODO comment + console log instead).
- Real coverage API (placeholder result text).
- Authentication, dashboards, customer portal.
- Pixel-perfect parity with Stitch — fidelity is to layout, hierarchy, and palette.

## Decisions

### D1. Server Components by default, Client only where needed
Compose `page.tsx` from server-rendered section components. Mark only these as `"use client"`: `Header` (mobile menu state), `FAQ` (accordion state), `CoverageChecker`, `ContactForm`, and any `motion.*` wrapper that needs `useInView`. Keeps the JS bundle small and SEO clean (server HTML carries all copy at first byte).

Alternative considered: a single client `page.tsx` for simplicity — rejected because it would balloon the bundle and break the initial-HTML SEO advantage.

### D2. Tokens via Tailwind v4 `@theme`, no JS config
Define the dark palette and gradient utilities inside `@theme { ... }` in `globals.css`. Reachable as `bg-brand-600`, `text-foreground`, etc. The previously-exported light Material 3 tokens are removed entirely.

Token shape (final):
```
--color-background: #0b0f19;
--color-surface-900: #0b0f19;
--color-surface-800: #111827;
--color-surface-700: #1f2937;
--color-foreground: #f3f4f6;
--color-muted: #9ca3af;
--color-brand-50..950 (rooted at brand-600 #264bff)
--gradient-hero-glow: radial-gradient(circle at center, rgba(38,75,255,0.15) 0%, rgba(11,15,25,1) 70%);
--font-sans: var(--font-inter);
```

Alternative considered: keep both light + dark sets behind a `[data-theme]` selector — rejected because requirement is dark-only and dual sets bloat the stylesheet.

### D3. Inter via `next/font/google`, self-hosted
`Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })` in `layout.tsx`. No `<link>` to Google Fonts CDN — Next handles font hosting and CSS injection. Geist usage is removed.

### D4. Framer Motion for animations, with reduced-motion gate
Add `framer-motion` (compatible with React 19). Pattern:
- A small `src/components/motion/Reveal.tsx` client wrapper using `useInView` to fade+slide-up its children once per session.
- A `staggerChildren` variant on the parent for cards in Features/Plans/Rural/Testimonials.
- Hover lift on plan cards via `whileHover`.
- Accordion expansion via `motion.div` with `height: "auto"` animate.
- Read `useReducedMotion()` at the top of each animated component and short-circuit to static rendering when true.

Alternative considered: pure CSS animations via Tailwind + `@keyframes` — rejected by the user; richer choreography is desired.

Trade-off: framer-motion is ~30 KB gzipped. Mitigation: only client-component sections import it; server components stay free of it. Re-evaluate against the 150 KB budget after a build.

### D5. SEO: per-route metadata + JSON-LD via `next/script`
- Global metadata in `layout.tsx`, route-level overrides in `page.tsx`.
- JSON-LD payloads emitted via `<Script id="ld-organization" type="application/ld+json" strategy="afterInteractive">` (or `beforeInteractive` for the Organization payload to maximize crawler visibility). One `<Script>` per payload — Organization, LocalBusiness, FAQPage, and one Product entry per plan generated from a `src/data/plans.ts` source-of-truth.
- `app/sitemap.ts`, `app/robots.ts`, and `app/opengraph-image.tsx` use Next 16's built-in metadata route handlers. The OG image renders the Lannet wordmark over the hero radial gradient via `ImageResponse`.

Alternative considered: a third-party SEO helper like `next-seo` — rejected because Next 16's native `metadata` API covers everything cleanly and adds no dependency.

### D6. Lead capture: TODO handlers, environment-driven WhatsApp number
- `CoverageChecker` and `ContactForm` are minimal client components with a `handleSubmit` that does `event.preventDefault()`, logs a typed payload to `console.info`, and toggles a local success state. Each has a `// TODO(server-action): wire to backend` comment marking the integration point.
- `src/lib/whatsapp.ts` exports `whatsappUrl(message?: string)` reading `process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999"`. All CTAs go through this helper.
- Form mask helpers live in `src/lib/masks.ts` (phone, CEP) — tiny pure functions, no `react-input-mask` dependency.

### D7. Data layer in `src/data/`
Hard-code plan and FAQ content as typed const arrays in `src/data/plans.ts`, `src/data/rural-plans.ts`, `src/data/faq.ts`, `src/data/testimonials.ts`, `src/data/regions.ts`. Both the visual cards and the JSON-LD generators read from the same source — guarantees the structured data matches what's rendered, and a single edit propagates to both.

### D8. Component layout
```
src/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ globals.css
│  ├─ sitemap.ts
│  ├─ robots.ts
│  └─ opengraph-image.tsx
├─ components/
│  ├─ sections/
│  │  ├─ Header.tsx              (client — mobile menu)
│  │  ├─ Hero.tsx                (server, wraps motion Reveal child)
│  │  ├─ Features.tsx            (server, stagger children client wrapper)
│  │  ├─ PlansFiber.tsx          (server)
│  │  ├─ Rural.tsx               (server)
│  │  ├─ Coverage.tsx            (server shell, client form child)
│  │  ├─ SpeedTest.tsx           (server)
│  │  ├─ Business.tsx            (server)
│  │  ├─ Testimonials.tsx        (server)
│  │  ├─ FAQ.tsx                 (client — accordion)
│  │  ├─ Contact.tsx             (server shell, client form child)
│  │  └─ Footer.tsx              (server)
│  ├─ motion/
│  │  └─ Reveal.tsx              (client)
│  ├─ forms/
│  │  ├─ CoverageForm.tsx        (client)
│  │  └─ ContactForm.tsx         (client)
│  └─ ui/
│     ├─ Button.tsx              (server)
│     ├─ Card.tsx                (server)
│     └─ Accordion.tsx           (client)
├─ data/
│  ├─ plans.ts
│  ├─ rural-plans.ts
│  ├─ faq.ts
│  ├─ testimonials.ts
│  └─ regions.ts
└─ lib/
   ├─ seo.ts                     (JSON-LD builders)
   ├─ whatsapp.ts
   └─ masks.ts
```

### D9. Accessibility baseline
- Skip-link at the top of `<body>` jumping to `#main`.
- Visible focus ring (Tailwind `focus-visible:ring-2 ring-brand-500 ring-offset-2 ring-offset-background`) on every interactive element.
- Color contrast verified for body text on `--color-background` and on each card surface.
- `aria-label` on icon-only buttons (mobile menu toggle, WhatsApp icon).
- Accordion uses `<button aria-expanded>` + `<div role="region" aria-labelledby>`.

## Risks / Trade-offs

- **[Framer Motion adds ~30 KB to the client bundle]** → Mitigation: import `motion` only inside client components, lazy-mount the staggered grids if needed; re-check the budget after `pnpm build`. If we miss the 150 KB target, swap entrance animations for CSS `@keyframes` while keeping framer-motion only for the accordion.
- **[Placeholder business data (CNPJ, address, phone, plan pricing, cities served) ships unreviewed]** → Mitigation: centralize all such strings in `src/data/*.ts` files; mark them with `// TODO(content):` so a search reveals every spot for legal/marketing review before launch.
- **[Form submits log to console only — visitors might assume their data was received]** → Mitigation: success message is intentionally vague ("entraremos em contato") and the form remains, so a follow-up Server Action can replace the handler without UI changes; the WhatsApp CTA is the primary real conversion path until then.
- **[React Compiler bails on Rules-of-React violations, silently downgrading perf]** → Mitigation: keep server components pure; in client components use plain state, derive values inline, avoid mutating refs in render. Spot-check with `pnpm build` output (compiler warnings show there).
- **[Tailwind v4 `@theme` semantics differ from v3 — common training-data patterns won't compile]** → Mitigation: tokens live exclusively in `globals.css`, no JS config attempted; refer to v4 docs before adding anything fancy.
- **[Stitch screen uses a different brand color than the Stitch `list_design_systems` output]** → Mitigation: documented; we follow the screen (user's explicit choice).

## Migration Plan

This is greenfield — no migration. Rollback is a single `git revert` of the merge commit; no data, no schema, no external integration to undo. The placeholder env vars (`SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`) have sane fallbacks so `pnpm dev` works without configuring anything.

## Open Questions

1. Real **WhatsApp number** (with country code) — placeholder `5511999999999` until provided.
2. Real **plan pricing and speeds** — `99/149/249` are from the Stitch screen but need business confirmation.
3. Real **rural plan structure** — Rádio/Híbrido naming is invented; confirm product names + speeds + prices.
4. **Cities/regions served** — placeholder list; replace with the real footprint.
5. **CNPJ, address, phone** for `LocalBusiness` JSON-LD — placeholders.
6. **Speed Test provider** — default to fast.com or use a Lannet-hosted Ookla widget? (defaults to fast.com link unless told otherwise)
7. **`SITE_URL` for production** — needed for canonical, OG URLs, sitemap. Will use `http://localhost:3000` as dev fallback.
