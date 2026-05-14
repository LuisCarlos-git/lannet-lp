// TODO(content): placeholder rural plan structure — confirm naming, speeds, and pricing with comercial rural.

import type { Plan } from "./plans";

export const ruralPlans: Plan[] = [
  {
    id: "rural-radio",
    name: "Rural Rádio",
    tagline: "Conexão estável onde a fibra ainda não chega.",
    priceBRL: 129,
    speed: "100 Mega via rádio",
    features: [
      "100 Mega de velocidade",
      "Instalação com torre dedicada",
      "Roteador Wi-Fi incluso",
      "Suporte técnico no campo",
    ],
    ctaLabel: "Assinar Rural Rádio",
    ctaHref: "#contato",
    kind: "rural",
  },
  {
    id: "rural-hibrido",
    name: "Rural Híbrido",
    tagline: "Rádio + satélite para máxima cobertura.",
    priceBRL: 199,
    speed: "200 Mega híbrido",
    features: [
      "200 Mega via rádio + satélite de redundância",
      "Wi-Fi 6 em propriedades extensas",
      "Failover automático em caso de queda",
      "Visita técnica trimestral",
    ],
    featured: true,
    ctaLabel: "Assinar Rural Híbrido",
    ctaHref: "#contato",
    kind: "rural",
  },
];
