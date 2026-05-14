## ADDED Requirements

### Requirement: Dark visual system tokens
The system SHALL expose Lannet's dark palette as Tailwind v4 `@theme` tokens in `src/app/globals.css`, including brand (`--color-brand-*` scale rooted at `#264bff`), surfaces (`--color-background #0b0f19`, `--color-surface-800 #111827`, `--color-surface-700 #1f2937`), foreground (`#f3f4f6` body, `#9ca3af` muted) and a hero radial-gradient utility.

#### Scenario: Tokens are consumable via Tailwind utilities
- **WHEN** a component uses `className="bg-background text-foreground"` or `className="bg-brand-600"`
- **THEN** the rendered element applies the dark Lannet palette without any inline style overrides

#### Scenario: Light-theme remnants are removed
- **WHEN** `globals.css` is inspected after this change
- **THEN** the previously-exported light "Lannet Core" tokens (`#f7f9fb` surface, `#00d1ff` cyan, Material 3 names) are gone

### Requirement: Inter typography via next/font
The system SHALL load Inter through `next/font/google` in `src/app/layout.tsx`, exposing it as `--font-sans` and applying it on `<html>` or `<body>` so every section inherits it without external `<link rel="stylesheet">` requests to Google Fonts.

#### Scenario: Inter is self-hosted by Next.js
- **WHEN** the page renders and Network is inspected
- **THEN** no request to `fonts.googleapis.com` or `fonts.gstatic.com` occurs; Inter is served from the same origin

### Requirement: Fixed header with anchored navigation
The page SHALL render a fixed header containing the Lannet wordmark, a desktop navigation linking to `#planos`, `#rural`, `#cobertura`, `#speed-test`, `#empresas`, `#suporte`, and a primary CTA "Começar" pointing to `#planos`. On viewports below `md`, the desktop nav and CTA SHALL be hidden in favor of a mobile menu trigger.

#### Scenario: Anchor click smooth-scrolls to a real section
- **WHEN** the user clicks any header nav link on desktop
- **THEN** the viewport scrolls to a section whose `id` matches the anchor and that section is actually present in the DOM

### Requirement: Hero section
The page SHALL render a hero with one `<h1>` ("A internet fibra óptica que acompanha o seu ritmo." or close variant), a supporting paragraph, a primary CTA "Verificar Cobertura" linking to `#cobertura`, and an illustrative image. The hero image SHALL use `next/image` with `priority` to be LCP-eligible.

#### Scenario: Single H1 on the page
- **WHEN** the rendered DOM is queried for `h1` elements
- **THEN** exactly one is found, and it lives inside the hero

### Requirement: Features section
The page SHALL render four feature cards under a section `id="features"` with titles: "Velocidade Simétrica", "Wi-Fi 6 Incluso", "Ping Baixo", "Estabilidade e Segurança", each with an inline SVG icon and a short description.

#### Scenario: Four feature cards rendered
- **WHEN** the features section is rendered
- **THEN** four cards are present, each with its title text visible

### Requirement: Urban fiber plans section
The page SHALL render section `id="planos"` containing three plan cards — Essencial (R$ 99), Gamer & Pro (R$ 149, marked as "Mais Popular"), Empresarial (R$ 249) — each with a feature list and a primary CTA. The middle card SHALL be visually emphasized (border + lift on `lg` and up).

#### Scenario: Popular plan visually emphasized
- **WHEN** the plans section renders on a viewport ≥ `lg`
- **THEN** the middle card has a brand-colored border and a "Mais Popular" badge anchored at its top edge

### Requirement: Rural internet section
The page SHALL render section `id="rural"` describing Lannet's rural offering. It SHALL include a short pitch, at least two rural plan cards (e.g., Rural Rádio, Rural Híbrido) with speed/price/CTA, and a textual list of regions/cities currently served (placeholder content acceptable).

#### Scenario: Rural section exists with plans
- **WHEN** the rural section is rendered
- **THEN** at least two rural plan cards and a "regiões atendidas" list are present

### Requirement: Business (B2B) section
The page SHALL render section `id="empresas"` with a B2B pitch (SLA, IP fixo, suporte dedicado) and a CTA "Falar com consultor" linking to the contact section or WhatsApp helper.

#### Scenario: B2B section CTA wired
- **WHEN** the user clicks the "Falar com consultor" CTA
- **THEN** the browser navigates to `#contato` or opens the WhatsApp deep-link (per `lp-lead-capture`)

### Requirement: Testimonials grid
The page SHALL render a testimonials section with at least three customer review cards in a responsive grid (1 column on mobile, 3 on `md` and up). Each card SHALL include a star rating, quote, avatar, name, and role.

#### Scenario: Three testimonials on desktop
- **WHEN** the testimonials section renders at viewport ≥ `md`
- **THEN** three review cards are visible in a single row

### Requirement: FAQ accordion
The page SHALL render section `id="suporte"` as an accordion containing 8–10 questions covering installation, support hours, coverage, equipment, and contact channels. Each item SHALL be keyboard-operable (Enter/Space toggles), expose `aria-expanded`, and only one item open at a time is **not** required.

#### Scenario: Keyboard toggles accordion
- **WHEN** a user focuses a question button and presses Enter
- **THEN** the corresponding panel toggles between open and closed, and `aria-expanded` updates accordingly

### Requirement: Footer
The page SHALL render a footer with four columns: brand+tagline, Empresa links, Serviços links, Suporte links — plus social icon row and copyright "© <current year> Lannet". The current year SHALL be computed at render time, not hard-coded.

#### Scenario: Footer year reflects current year
- **WHEN** the page renders
- **THEN** the copyright displays `new Date().getFullYear()` (or equivalent server-time value)

### Requirement: Section animations via Framer Motion
The system SHALL use `framer-motion` to drive entrance and interaction animations: fade+slide-up on section reveal (triggered by viewport intersection, run once), staggered children for cards in Features/Plans/Rural/Testimonials, hover lift on plan cards and CTAs, accordion item expansion. Animations SHALL respect `prefers-reduced-motion`, falling back to a no-motion variant when the user has set the OS-level preference.

#### Scenario: Reduced motion preference is honored
- **WHEN** the user has set `prefers-reduced-motion: reduce` in their OS
- **THEN** Framer Motion variants resolve to a no-transform, no-opacity-change state and components render in their final position immediately

#### Scenario: Animated components are Client Components
- **WHEN** a section uses `framer-motion` (e.g., `motion.div`)
- **THEN** the file declares `"use client"` at the top and the parent server-component page imports it normally — no `framer-motion` import leaks into a server-only module

### Requirement: Semantic HTML structure
The page SHALL use exactly one `<h1>` (in the hero), `<h2>` for each top-level section heading, and a `<header>`/`<main>`/`<footer>` landmark structure. Every interactive icon-only control SHALL carry an `aria-label`.

#### Scenario: Single landmark structure
- **WHEN** the page is parsed
- **THEN** exactly one `<header>`, one `<main>`, and one `<footer>` are present at the top level
