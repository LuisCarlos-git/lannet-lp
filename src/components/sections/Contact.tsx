import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { whatsappUrl } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section
      id="contato"
      className="py-20 bg-surface-900 border-t border-hairline relative"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="bg-surface-800 rounded-3xl p-8 md:p-12 border border-hairline shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-600/5 backdrop-blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Ficou com alguma dúvida?
              </h2>
              <p className="text-muted text-sm">
                Nossa equipe está pronta para ajudar você a escolher o melhor
                plano.
              </p>
            </div>

            <ContactForm />

            <div className="mt-10 pt-8 border-t border-hairline text-center">
              <p className="text-sm text-muted mb-4">
                Ou fale conosco agora pelo WhatsApp
              </p>
              <a
                href={whatsappUrl(
                  "Olá! Quero saber mais sobre os planos Lannet.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <title>WhatsApp</title>
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.518 5.276l-.999 3.648 3.97-1.623zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
                </svg>
                <span>Entrar em contato via WhatsApp</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
