import type { ReactNode } from "react";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: "Velocidade Simétrica",
    description:
      "Taxa de upload na mesma velocidade que de download. Perfeito para criadores de conteúdo e profissionais em home office.",
    icon: (
      <path
        d="M13 10V3L4 14h7v7l9-11h-7z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
  },
  {
    title: "Wi-Fi 6 Incluso",
    description:
      "Roteador de última geração para máxima cobertura e estabilidade, mesmo com múltiplos dispositivos conectados.",
    icon: (
      <path
        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
  },
  {
    title: "Ping Baixo",
    description:
      "Rotas otimizadas para os principais servidores de games, garantindo a menor latência nas suas partidas.",
    icon: (
      <path
        d="M3 12l3-3 4 4 5-5 6 6M3 18l3-3 4 4 5-5 6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
  },
  {
    title: "Estabilidade e Segurança",
    description:
      "Rede 100% fibra óptica imune a interferências climáticas, garantindo que você não fique offline quando mais precisa.",
    icon: (
      <path
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-surface-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A tecnologia que transforma sua experiência
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Nossa rede de fibra óptica de ponta a ponta garante o máximo
            desempenho para todas as suas necessidades digitais.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <RevealItem
              key={feature.title}
              className="bg-surface-800/50 border border-hairline rounded-2xl p-8 hover:bg-surface-800 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-900/50 rounded-xl flex items-center justify-center text-brand-400 mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <title>{feature.title}</title>
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
