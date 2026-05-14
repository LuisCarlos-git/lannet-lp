import type { HTMLAttributes, ReactNode } from "react";

type Tone = "default" | "elevated" | "featured";

const tones: Record<Tone, string> = {
  default: "bg-surface-800/50 border border-hairline",
  elevated: "bg-surface-800 border border-hairline",
  featured:
    "bg-surface-800 border-2 border-brand-500 shadow-[0_0_30px_rgba(38,75,255,0.2)]",
};

type Props = HTMLAttributes<HTMLDivElement> & {
  tone?: Tone;
  children: ReactNode;
};

export function Card({
  tone = "default",
  className,
  children,
  ...rest
}: Props) {
  return (
    <div
      className={["rounded-3xl p-8 transition-colors", tones[tone], className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}
