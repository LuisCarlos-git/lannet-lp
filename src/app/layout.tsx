import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { localBusinessLd, organizationLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Lannet",
    default: "Lannet — Internet Fibra Óptica e Rural de alta performance",
  },
  description:
    "Internet fibra óptica e rural com velocidade simétrica, Wi-Fi 6 e suporte 24/7. Escolha o plano ideal pra você.",
  applicationName: "Lannet",
  keywords: [
    "internet fibra óptica",
    "internet rural",
    "provedor de internet",
    "Wi-Fi 6",
    "plano internet 600 mega",
    "lannet",
  ],
  authors: [{ name: "Lannet" }],
  creator: "Lannet",
  publisher: "Lannet",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Lannet",
    title: "Lannet — Internet Fibra Óptica e Rural",
    description:
      "Conexão ultra-rápida, estabilidade e baixa latência. Fibra na cidade, rádio no campo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lannet — Internet Fibra Óptica e Rural",
    description:
      "Conexão ultra-rápida, estabilidade e baixa latência. Fibra na cidade, rádio no campo.",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
        <script
          id="ld-organization"
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationLd(SITE_URL)).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <script
          id="ld-local-business"
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessLd(SITE_URL)).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      </body>
    </html>
  );
}
