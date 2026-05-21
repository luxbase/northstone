import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-wide transition-colors duration-200";

const sizes: Record<Size, string> = {
  md: "w-full px-7 py-3.5 text-sm sm:w-auto",
  sm: "w-full px-5 py-2.5 text-[0.8rem] sm:w-auto",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-coal text-bone border border-bone/10 hover:bg-warm hover:text-granite hover:border-warm",
  secondary:
    "border border-bone/20 text-bone hover:border-warm hover:text-warm",
  ghost: "text-stone hover:text-bone px-0",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  const isInternal = href.startsWith("/");
  const cls = `${base} ${variant === "ghost" ? "" : sizes[size]} ${variants[variant]} ${className}`;

  if (isInternal) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
