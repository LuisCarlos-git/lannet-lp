// TODO(content): placeholder pricing and feature copy — confirm with marketing/comercial before launch.

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  priceBRL: number;
  speed: string;
  features: string[];
  featured?: boolean;
  ctaLabel: string;
  ctaHref: string;
  kind: "fiber" | "rural";
};

export const fiberPlans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    tagline: "Ideal para navegação e streaming.",
    priceBRL: 99,
    speed: "400 Mega",
    features: [
      "400 Mega de velocidade",
      "Roteador Wi-Fi incluso",
      "Suporte 24/7",
    ],
    ctaLabel: "Assinar Essencial",
    ctaHref: "#contato",
    kind: "fiber",
  },
  {
    id: "gamer-pro",
    name: "Gamer & Pro",
    tagline: "Desempenho máximo para jogar e trabalhar.",
    priceBRL: 149,
    speed: "600 Mega simétrico",
    features: [
      "600 Mega simétrico",
      "Wi-Fi 6 de alta performance",
      "Ping otimizado para games",
      "Instalação prioritária",
    ],
    featured: true,
    ctaLabel: "Assinar Gamer & Pro",
    ctaHref: "#contato",
    kind: "fiber",
  },
  {
    id: "empresarial",
    name: "Empresarial",
    tagline: "Conectividade ideal para a sua empresa.",
    priceBRL: 249,
    speed: "1 Giga dedicado",
    features: ["1 Giga dedicado", "IP fixo disponível", "SLA de 4 horas"],
    ctaLabel: "Falar com consultor",
    ctaHref: "#empresas",
    kind: "fiber",
  },
];
