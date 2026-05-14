import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";
import { faqPageLd } from "@/lib/seo";

export function FAQ() {
  return (
    <section
      id="suporte"
      className="py-20 bg-surface-900 border-t border-hairline"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-900/40 text-brand-300 text-xs font-medium uppercase tracking-wider mb-4">
            Suporte
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-muted">
            Não encontrou o que precisa? Fale com a gente no WhatsApp ou pelo
            formulário abaixo.
          </p>
        </Reveal>

        <Reveal>
          <Accordion items={faqItems} />
        </Reveal>
      </div>

      <script
        id="ld-faq"
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageLd(faqItems)).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
}
