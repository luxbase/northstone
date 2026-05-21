import type { ReactNode } from "react";

export function SheetLabel({
  code,
  children,
  className = "",
}: {
  code: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`block font-mono text-[11px] uppercase leading-[1.7] tracking-[0.16em] text-stone ${className}`}
    >
      <span
        className="mr-2.5 inline-block h-px w-6 align-middle bg-warm/70"
        aria-hidden
      />
      <span className="text-warm">{code}</span>
      <span className="mx-2 text-stone/40" aria-hidden>
        /
      </span>
      {children}
    </span>
  );
}
