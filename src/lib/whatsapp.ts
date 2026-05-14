const FALLBACK_NUMBER = "5511999999999";

export function whatsappNumber(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  return fromEnv && fromEnv.length >= 10 ? fromEnv : FALLBACK_NUMBER;
}

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${whatsappNumber()}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
