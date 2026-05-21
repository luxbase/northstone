import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northstone.build"),
  title: {
    default: "Northstone — Residential Plans & Permits",
    template: "%s — Northstone",
  },
  description:
    "Permit-ready residential plans with dependable guidance from concept to approval. Drafting, permit assistance, remodels and additions.",
  openGraph: {
    title: "Northstone — Residential Plans & Permits",
    description:
      "Permit-ready residential plans with dependable guidance from concept to approval.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="flex min-h-dvh flex-col overflow-x-hidden bg-ink text-bone antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <div className="grain" aria-hidden />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
