import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden"
    >
      <Image
        src="/background_hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-10"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-surface-900 via-surface-900/85 to-surface-900/40"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <Reveal className="lg:w-1/2 text-left">
            <h1
              id="hero-title"
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight"
            >
              A internet fibra óptica que <br className="hidden md:block" />
              acompanha o seu ritmo.
            </h1>
            <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl">
              Conexão ultra-rápida, estabilidade inabalável e latência mínima
              para você jogar, trabalhar e assistir em 4K sem interrupções.
            </p>
            <Button as="a" href="#planos" size="lg" className="group">
              Ver planos
              <svg
                aria-hidden
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Seta para a direita</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </Reveal>

          <Reveal delay={0.15} className="lg:w-1/2">
            <Image
              src="/person-full-body.png"
              alt="Cliente Lannet conectado à internet"
              width={1024}
              height={1536}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full h-auto"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
