import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { PlanCard } from "@/components/sections/PlanCard";
import { ruralRegions } from "@/data/regions";
import { ruralPlans } from "@/data/rural-plans";
import { productLd } from "@/lib/seo";

const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000";

export function Rural() {
  return (
    <section
      id="rural"
      className="py-20 bg-surface-900 border-t border-hairline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-900/40 text-brand-300 text-xs font-medium uppercase tracking-wider mb-4">
            Internet Rural
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conexão de verdade onde a fibra ainda não chegou.
          </h2>
          <p className="text-muted">
            Levamos internet de alta performance ao campo via rádio dedicado e
            soluções híbridas com satélite. Sem oscilação, com suporte técnico
            local.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
        >
          {ruralPlans.map((plan) => (
            <RevealItem key={plan.id}>
              <PlanCard plan={plan} />
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="max-w-3xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Regiões atendidas
          </h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {ruralRegions.map((region) => (
              <li
                key={region}
                className="px-4 py-1.5 rounded-full bg-surface-800 border border-hairline text-sm text-muted"
              >
                {region}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {ruralPlans.map((plan) => (
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
