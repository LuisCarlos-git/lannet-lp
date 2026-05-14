"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { digitsOnly, maskPhoneBR } from "@/lib/masks";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [observations, setObservations] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (digitsOnly(phone).length < 10) return;
    // TODO(server-action): wire to Server Action / backend.
    console.info({
      name,
      phone: digitsOnly(phone),
      email,
      observations: observations.trim() || null,
      source: "contact",
    });
    setSuccess(true);
    setName("");
    setPhone("");
    setEmail("");
    setObservations("");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-muted mb-1"
          >
            Nome
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome completo"
            className="w-full bg-surface-900/60 border border-hairline-strong rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-medium text-muted mb-1"
          >
            Telefone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel-national"
            value={phone}
            onChange={(e) => setPhone(maskPhoneBR(e.target.value))}
            placeholder="(00) 00000-0000"
            className="w-full bg-surface-900/60 border border-hairline-strong rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-muted mb-1"
        >
          E-mail
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="w-full bg-surface-900/60 border border-hairline-strong rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label
          htmlFor="contact-observations"
          className="block text-sm font-medium text-muted mb-1"
        >
          Observações{" "}
          <span className="text-muted/70 font-normal">(opcional)</span>
        </label>
        <textarea
          id="contact-observations"
          name="observations"
          rows={5}
          maxLength={1000}
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
          placeholder="Conte sobre o seu cenário, plano de interesse ou dúvidas específicas."
          className="w-full h-36 bg-surface-900/60 border border-hairline-strong rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
        />
      </div>

      {success && (
        <output className="block text-sm text-brand-300 bg-brand-900/30 border border-brand-800/40 rounded-lg p-3">
          Recebemos sua mensagem. Em breve um consultor Lannet entra em contato.
        </output>
      )}

      <div className="flex justify-end pt-2">
        <Button type="submit" size="md">
          Enviar mensagem
        </Button>
      </div>
    </form>
  );
}
