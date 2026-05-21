import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { site, services, nav } from "@/lib/content";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="relative border-t border-bone/10 bg-granite">
      <Container className="py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-6 text-pretty text-sm leading-relaxed text-stone">
              {site.tagline} Permit-ready residential planning from concept to
              approval.
            </p>
            <p className="mt-6 font-mono text-xs tracking-widest text-stone/70">
              {site.coordinates}
            </p>
          </div>

          <FooterCol title="Services">
            {services.map((s) => (
              <FooterLink key={s.code} href="/services">
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {nav.map((n) => (
              <FooterLink key={n.href} href={n.href}>
                {n.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Studio">
            <li className="text-sm leading-relaxed text-stone">
              {site.address[0]}
              <br />
              {site.address[1]}
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="text-sm text-stone transition-colors hover:text-bone"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-stone transition-colors hover:text-bone"
              >
                {site.email}
              </a>
            </li>
            <li className="text-sm text-stone">{site.hours}</li>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-bone/10 pt-8 text-xs text-stone/70 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono tracking-wide">
            © {year} {site.name}. Est. {site.established}.
          </p>
          <p className="text-pretty">
            Residential planning &amp; permits · Insurance and investment
            guidance offered as complementary services.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-warm">
        {title}
      </h3>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-stone transition-colors hover:text-bone"
      >
        {children}
      </Link>
    </li>
  );
}
