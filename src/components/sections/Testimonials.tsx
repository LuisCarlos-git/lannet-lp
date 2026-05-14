import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="py-20 bg-surface-900 border-t border-hairline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2
            id="testimonials-title"
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Quem usa, aprova.
          </h2>
        </Reveal>

        <Reveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <RevealItem
              key={t.id}
              className="bg-surface-800/50 p-6 rounded-2xl border border-hairline"
            >
              <div
                role="img"
                className="flex items-center gap-1 mb-4 text-yellow-500"
                aria-label={`${t.stars} de 5 estrelas`}
              >
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg
                    // biome-ignore lint/suspicious/noArrayIndexKey: rating is static per testimonial
                    key={i}
                    aria-hidden
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <title>Estrela</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/90 text-sm mb-6 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  aria-hidden
                  className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white text-sm font-semibold"
                >
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">
                    {t.name}
                  </p>
                  <p className="text-muted text-xs">{t.role}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
