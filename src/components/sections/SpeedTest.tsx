import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

const SPEED_TEST_URL = "https://fast.com";

export function SpeedTest() {
  return (
    <section
      id="speed-test"
      className="py-20 bg-surface-900 border-t border-hairline"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="bg-surface-800 rounded-3xl p-8 md:p-12 border border-hairline relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-900/40 text-brand-300 text-xs font-medium uppercase tracking-wider mb-4">
              Speed Test
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meça a velocidade da sua conexão
            </h2>
            <p className="text-muted mb-8">
              Use o teste independente do fast.com para verificar a velocidade
              real do seu plano. Para resultados precisos, conecte o dispositivo
              via cabo e pause downloads em segundo plano.
            </p>
            <Button
              as="a"
              href={SPEED_TEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Abrir Speed Test
              <svg
                aria-hidden
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Abre em nova aba</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
