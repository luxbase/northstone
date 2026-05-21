import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SheetLabel } from "@/components/SheetLabel";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { iconMap } from "@/components/icons";
import { services, financialServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential plans, drafting, permit assistance, remodels and additions, and approval support — the full arc of residential planning.",
};

function Tick() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-warm"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        code="S-00"
        label="Services"
        title="Plans, permits, and the path between them."
        intro="Northstone covers the full arc of residential and commercial planning — homes, additions, and ADUs alongside restaurant and retail work, from the first measured drawing to the building department's final stamp. Each service is built to keep your project moving."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="border-t border-bone/10">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <Reveal key={s.code}>
                  <div className="grid gap-8 border-b border-bone/10 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 md:py-16">
                    <div>
                      <SheetLabel code={s.code}>
                        {`Service ${String(i + 1).padStart(2, "0")}`}
                      </SheetLabel>
                      <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-xl border border-bone/10 bg-coal text-warm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="mt-6 text-3xl font-medium tracking-tight md:text-4xl">
                        {s.title}
                      </h2>
                    </div>

                    <div className="lg:pt-2">
                      <p className="text-pretty text-lg leading-relaxed text-stone">
                        {s.detail}
                      </p>
                      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                        {s.scope.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 rounded-xl border border-bone/10 bg-coal/40 px-4 py-3.5"
                          >
                            <Tick />
                            <span className="text-sm leading-snug text-bone">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* financial — secondary */}
      <section className="border-t border-bone/10 bg-granite py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <SheetLabel code="F-00">Complementary Services</SheetLabel>
              <h2 className="mt-6 text-balance text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl">
                Financial guidance, kept in its place.
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-stone">
                For clients who want it, Northstone offers measured insurance
                and investment guidance. It is a complement to the planning
                work — never the headline.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {financialServices.map((f) => {
              const Icon = iconMap[f.icon];
              return (
                <Reveal key={f.code}>
                  <div className="flex h-full gap-5 rounded-2xl border border-bone/10 bg-ink p-7">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-bone/10 text-stone">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[11px] tracking-widest text-stone/60">
                        {f.code}
                      </div>
                      <h3 className="mt-1.5 text-xl font-medium tracking-tight">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-pretty text-sm leading-relaxed text-stone">
                        {f.short}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        code="S-99"
        label="Next Step"
        title="Not sure which service you need?"
        body="Start with a consultation. We'll review your project and tell you plainly what it takes to reach an approved permit."
      />
    </>
  );
}
