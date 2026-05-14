"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Plan } from "@/data/plans";

export function PlanCard({ plan }: { plan: Plan }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -6 }}
      transition={
        reduce ? undefined : { type: "spring", stiffness: 220, damping: 18 }
      }
      className={[
        "relative bg-surface-800 rounded-3xl p-8 flex flex-col",
        plan.featured
          ? "border-2 border-brand-500 shadow-[0_0_30px_rgba(38,75,255,0.2)] lg:-translate-y-4"
          : "border border-hairline",
      ].join(" ")}
    >
      {plan.featured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
          Mais Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
      <p className="text-muted text-sm mb-6">{plan.tagline}</p>

      <div className="mb-2">
        <span className="text-muted text-sm">R$</span>
        <span className="text-5xl font-bold text-foreground">
          {plan.priceBRL}
        </span>
        <span className="text-muted text-sm">/mês</span>
      </div>
      <p className="text-brand-400 text-sm font-medium mb-8">{plan.speed}</p>

      <ul className="space-y-4 mb-8 text-sm text-foreground/80 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <svg
              aria-hidden
              className="w-5 h-5 mt-0.5 shrink-0 text-brand-500"
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
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.ctaHref}
        className={[
          "block w-full py-3 px-4 rounded-xl text-center text-foreground font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
          plan.featured
            ? "bg-brand-600 hover:bg-brand-500 shadow-lg"
            : "border border-hairline-strong hover:bg-white/5",
        ].join(" ")}
      >
        {plan.ctaLabel}
      </a>
    </motion.div>
  );
}
