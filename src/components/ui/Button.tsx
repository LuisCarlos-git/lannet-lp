import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center font-medium rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 hover:bg-brand-500 text-white shadow-[0_0_15px_rgba(38,75,255,0.4)]",
  ghost: "text-foreground hover:bg-white/5 border border-transparent",
  outline: "border border-white/10 hover:bg-white/5 text-foreground",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base font-bold",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    as?: "button";
  };

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    as: "a";
    href: string;
  };

export type Props = ButtonProps | AnchorProps;

export function Button(props: Props) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = [base, variants[variant], sizes[size], props.className]
    .filter(Boolean)
    .join(" ");

  if (props.as === "a") {
    const {
      as: _as,
      variant: _v,
      size: _s,
      className: _c,
      children,
      ...rest
    } = props;
    return (
      <a className={className} {...rest}>
        {children}
      </a>
    );
  }

  const {
    as: _as,
    variant: _v,
    size: _s,
    className: _c,
    children,
    ...rest
  } = props;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
