"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

type Item = { id: string; question: string; answer: string };

export function Accordion({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();
  const reduce = useReducedMotion();

  return (
    <div className="divide-y divide-hairline rounded-2xl border border-hairline overflow-hidden">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const headerId = `${baseId}-${item.id}-header`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div key={item.id}>
            <button
              type="button"
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-foreground hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-inset"
            >
              <span className="font-medium">{item.question}</span>
              <span
                aria-hidden
                className={`text-muted text-2xl leading-none transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.section
                  key="panel"
                  id={panelId}
                  aria-labelledby={headerId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={
                    reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }
                  }
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-muted text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
