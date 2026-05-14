import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { PlanCard } from "@/components/sections/PlanCard";
import { fiberPlans } from "@/data/plans";
import { productLd } from "@/lib/seo";

const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000";

export function PlansFiber() {
  return (
    <section
      id="planos"
      className="py-20 bg-surface-900 border-t border-hairline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-muted">
            Sem taxas ocultas, instalação gratuita e suporte premium em todos os
            planos.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto"
        >
          {fiberPlans.map((plan) => (
            <RevealItem key={plan.id}>
              <PlanCard plan={plan} />
            </RevealItem>
          ))}
        </Reveal>
      </div>

      {fiberPlans.map((plan) => (
        <script
          key={plan.id}
          id={`ld-product-${plan.id}`}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productLd(plan, SITE_URL)).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      ))}
    </section>
  );
}
