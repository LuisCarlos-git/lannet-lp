import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/whatsapp";

const highlights = [
  "SLA de 4 horas com técnicos dedicados",
  "IP fixo, links redundantes e VLAN",
  "Atendimento prioritário 24/7",
  "Consultoria de infraestrutura inclusa",
];

export function Business() {
  return (
    <section
      id="empresas"
      className="py-20 bg-surface-900 border-t border-hairline"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="bg-surface-800 rounded-3xl p-8 md:p-12 border border-hairline relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-600/5 blur-3xl pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-900/40 text-brand-300 text-xs font-medium uppercase tracking-wider mb-4">
                Para empresas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Conectividade pensada para quem não pode parar.
              </h2>
              <p className="text-muted mb-8">
                Planos corporativos com banda garantida, IP fixo e suporte
                dedicado. Tire o seu projeto do papel com um consultor Lannet.
              </p>
              <Button
                as="a"
                href={whatsappUrl(
                  "Olá! Quero falar com um consultor Lannet sobre o plano Empresarial.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Falar com consultor
              </Button>
            </div>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground/90"
                >
                  <svg
                    aria-hidden
                    className="w-5 h-5 mt-0.5 shrink-0 text-brand-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>Incluído</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
