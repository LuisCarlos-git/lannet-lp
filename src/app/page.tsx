import type { Metadata } from "next";
import { Business } from "@/components/sections/Business";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { PlansFiber } from "@/components/sections/PlansFiber";
import { Rural } from "@/components/sections/Rural";
import { SpeedTest } from "@/components/sections/SpeedTest";
import { Testimonials } from "@/components/sections/Testimonials";

const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Internet Fibra Óptica e Rural — Planos a partir de R$ 99",
  description:
    "Planos de internet fibra óptica (400 Mega a 1 Giga) e internet rural via rádio. Wi-Fi 6 incluso, instalação rápida e suporte 24/7.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: "Internet Fibra Óptica e Rural — Lannet",
    description:
      "Planos a partir de R$ 99 com Wi-Fi 6 incluso, fibra ou rádio rural, instalação rápida e suporte 24/7.",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1 pt-20">
        <Hero />
        <Features />
        <PlansFiber />
        <Rural />
        <SpeedTest />
        <Business />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
