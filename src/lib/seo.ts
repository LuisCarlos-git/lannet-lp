import type { FAQItem } from "@/data/faq";
import type { Plan } from "@/data/plans";

export function organizationLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lannet",
    url: siteUrl,
    logo: `${siteUrl}/icon-512.png`,
    description:
      "Provedor de internet fibra óptica e rural com cobertura nacional, suporte 24/7 e planos para residências, gamers e empresas.",
    sameAs: [
      "https://www.facebook.com/lannet",
      "https://www.instagram.com/lannet",
      "https://www.linkedin.com/company/lannet",
    ],
  };
}

export function localBusinessLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lannet",
    url: siteUrl,
    image: `${siteUrl}/icon-512.png`,
    telephone: "+55-11-99999-9999",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Paulista, 1000",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "01310-100",
      addressCountry: "BR",
    },
  };
}

export function productLd(plan: Plan, siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Lannet ${plan.name}`,
    description: `${plan.tagline} ${plan.speed}. ${plan.features.join(". ")}.`,
    brand: { "@type": "Brand", name: "Lannet" },
    category:
      plan.kind === "fiber" ? "Internet Fibra Óptica" : "Internet Rural",
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/#${plan.kind === "fiber" ? "planos" : "rural"}`,
      priceCurrency: "BRL",
      price: plan.priceBRL.toFixed(2),
      availability: "https://schema.org/InStock",
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
    },
  };
}

export function faqPageLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
