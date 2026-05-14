## ADDED Requirements

### Requirement: Global metadata
The root `src/app/layout.tsx` SHALL export a `metadata` object with `metadataBase`, `title.template` ("`%s | Lannet`"), `title.default`, `description`, `applicationName`, `keywords`, `authors`, `robots: { index: true, follow: true }`, `openGraph` (type, locale `pt_BR`, url, siteName, title, description, images), `twitter` (card `summary_large_image`, title, description, images), `alternates.canonical`, and `themeColor: "#0b0f19"`. `<html lang="pt-BR">` SHALL be set on the root element.

#### Scenario: View-source contains canonical and OG tags
- **WHEN** the page is fetched and the raw HTML is inspected
- **THEN** `<link rel="canonical">`, `<meta property="og:title">`, `<meta property="og:image">`, `<meta name="twitter:card">`, and `<html lang="pt-BR">` are present

### Requirement: Per-page metadata override
`src/app/page.tsx` SHALL export a route-level `metadata` with a page-specific `title`, `description`, and `openGraph.url`, refining the defaults from layout.

#### Scenario: Home title is page-specific
- **WHEN** the home page renders
- **THEN** `<title>` matches the route-level title (not the layout default)

### Requirement: Dynamic sitemap
The system SHALL serve `/sitemap.xml` via `src/app/sitemap.ts` (Next 16 `MetadataRoute.Sitemap`) listing the home URL with `lastModified`, `changeFrequency: "monthly"`, and `priority: 1.0`. The base URL SHALL come from a `SITE_URL` environment variable with a sensible local fallback.

#### Scenario: Sitemap returns a valid XML body
- **WHEN** `GET /sitemap.xml` is requested
- **THEN** the response status is 200, `Content-Type` is `application/xml`, and the body contains `<urlset>` with at least one `<url>` entry pointing at the site root

### Requirement: Robots policy
The system SHALL serve `/robots.txt` via `src/app/robots.ts` allowing all user-agents and pointing to the sitemap URL.

#### Scenario: Robots references the sitemap
- **WHEN** `GET /robots.txt` is requested
- **THEN** the body contains `User-agent: *`, `Allow: /`, and `Sitemap: <SITE_URL>/sitemap.xml`

### Requirement: Dynamic Open Graph image
The system SHALL generate the social share image at `/opengraph-image` via `src/app/opengraph-image.tsx` using Next's `ImageResponse` API, rendering the Lannet wordmark over the dark brand gradient at 1200×630.

#### Scenario: OG image is a valid PNG
- **WHEN** `GET /opengraph-image` is requested
- **THEN** the response status is 200, `Content-Type` is `image/png`, and dimensions are 1200×630

### Requirement: Organization JSON-LD
The page SHALL embed an `Organization` JSON-LD payload in the document head (via Next `Script` with `type="application/ld+json"`) declaring `name: "Lannet"`, `url`, `logo`, and a `sameAs` array of social URLs (placeholders acceptable).

#### Scenario: Organization payload validates
- **WHEN** the JSON-LD block is extracted and parsed
- **THEN** `JSON.parse` succeeds, `@context` is `https://schema.org`, and `@type` is `Organization`

### Requirement: Product/Offer JSON-LD per plan
The page SHALL emit one `Product` JSON-LD entry per fiber/rural plan (Essencial, Gamer & Pro, Empresarial, plus rural plans), each with `name`, `description`, `brand: "Lannet"`, and a single `Offer` (`priceCurrency: "BRL"`, `price`, `availability: "https://schema.org/InStock"`).

#### Scenario: Every plan card has a matching Product entry
- **WHEN** the rendered HTML is parsed for `Product` JSON-LD entries
- **THEN** the count of entries equals the number of plan cards rendered on the page

### Requirement: FAQPage JSON-LD
The FAQ section SHALL be mirrored as a `FAQPage` JSON-LD payload containing each accordion question and its plain-text answer.

#### Scenario: FAQPage matches the rendered accordion
- **WHEN** the JSON-LD is parsed
- **THEN** `mainEntity` is an array of `Question` items whose `name` strings match the accordion question texts one-for-one

### Requirement: Web manifest and theme color
The site SHALL ship `public/manifest.webmanifest` with `name`, `short_name`, `description`, `start_url: "/"`, `display: "standalone"`, `background_color: "#0b0f19"`, `theme_color: "#0b0f19"`, and at least 192×192 and 512×512 icons. The manifest SHALL be referenced from layout `metadata.manifest`.

#### Scenario: Manifest is linked and parses
- **WHEN** the page is loaded and `<link rel="manifest">` is followed
- **THEN** the manifest URL returns valid JSON containing the required fields above

### Requirement: Performance & SEO budget
The home route SHALL achieve Lighthouse scores ≥ 95 in mobile audits for Performance, SEO, Accessibility, and Best Practices. The initial JS bundle reported by `next build` for `/` SHALL be under 150 KB (gzipped).

#### Scenario: Production build passes the budget
- **WHEN** `pnpm build` completes
- **THEN** the route summary for `/` shows First Load JS ≤ 150 kB
