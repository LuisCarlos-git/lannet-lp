"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#planos", label: "Planos" },
  { href: "#rural", label: "Rural" },
  { href: "#speed-test", label: "Speed Test" },
  { href: "#empresas", label: "Empresas" },
  { href: "#suporte", label: "Suporte" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-900/90 backdrop-blur-md border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#main"
            className="text-2xl font-bold text-foreground tracking-tight"
          >
            Lannet
          </a>

          <nav aria-label="Principal" className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button as="a" href="#planos" size="sm">
              Começar
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-hairline text-foreground hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <title>{open ? "Fechar menu" : "Abrir menu"}</title>
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {link.label}
                </a>
              ))}
              <Button
                as="a"
                href="#planos"
                size="sm"
                className="mt-2 self-start"
              >
                Começar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
