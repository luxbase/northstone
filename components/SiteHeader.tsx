"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { IconMenu, IconClose, IconArrow } from "./icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-bone/10 bg-ink/85 backdrop-blur-md">
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" aria-label="Northstone — home" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-bone"
                    : "text-stone hover:text-bone"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-bone/15 bg-coal px-5 py-2.5 text-sm font-medium tracking-wide text-bone transition-colors hover:border-warm hover:bg-warm hover:text-granite"
            >
              Start Your Project
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="-mr-1 p-2 text-bone md:hidden"
          >
            {open ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto border-t border-bone/10 bg-ink md:hidden">
          <Container className="py-8">
            <nav className="flex flex-col">
              {nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between border-b border-bone/10 py-5 text-2xl font-medium tracking-tight"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-stone">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-warm px-7 py-4 text-sm font-medium tracking-wide text-granite"
            >
              Start Your Project
              <IconArrow className="h-4 w-4" />
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
