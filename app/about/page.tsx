import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SheetLabel } from "@/components/SheetLabel";
import { Reveal } from "@/components/Reveal";
import { ContourArt } from "@/components/ContourArt";
import { CTASection } from "@/components/CTASection";
import { values, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Northstone is a residential planning studio built on precision, permanence, and plain communication.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        code="C-00"
        label="About"
        title="A planning studio built on solid ground."
        intro="Northstone began with a simple conviction: a residential plan should be as dependable as the ground it sits on. We named the studio for that idea — and we draw to it every day."
      />

      {/* story */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <Reveal>
              <div>
                <SheetLabel code="C-01">Our Footing</SheetLabel>
                <h2 className="mt-6 text-balance text-3xl font-medium leading-[1.12] tracking-tight md:text-[2.6rem]">
                  We take our cues from granite — proportion, permanence, and a
                  refusal to cut corners.
                </h2>
                <div className="mt-7 space-y-5 text-pretty leading-relaxed text-stone">
                  <p>
                    For eighteen years, Northstone has drawn residential plans
                    for the foothills and valleys around Yosemite. We have
                    learned how every nearby building department reads a set,
                    where projects tend to stall, and how to draw so they
                    don&apos;t.
                  </p>
                  <p>
                    We are not a contractor and not a sales office. We are
                    drafters and planners. The drawing on the table is the
                    product — measured, dimensioned, and checked against code
                    before anyone outside the studio sees it.
                  </p>
                  <p>
                    That is what &ldquo;plans built on solid ground&rdquo;
                    means: a set the reviewer trusts, and a process the
                    homeowner can actually follow.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-2xl border border-bone/10 bg-granite p-6">
                <div className="absolute inset-0 bp-grid" aria-hidden />
                <ContourArt className="relative w-full" />
                <p className="relative mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
                  Topographic study · {site.coordinates}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* values */}
      <section className="border-y border-bone/10 bg-granite py-20 md:py-28">
        <Container>
          <Reveal>
            <SheetLabel code="C-02">How We Work</SheetLabel>
            <h2 className="mt-6 max-w-2xl text-balance text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.08] tracking-tight">
              Four principles, on every sheet.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Reveal key={v.code}>
                <div className="flex h-full flex-col bg-granite p-7 md:p-8">
                  <span className="font-mono text-xs tracking-widest text-warm">
                    {v.code}
                  </span>
                  <h3 className="mt-10 text-xl font-medium tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-stone">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* studio */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="grid gap-10 rounded-2xl border border-bone/10 bg-coal/40 p-8 md:grid-cols-3 md:p-12">
              <div className="md:col-span-1">
                <SheetLabel code="C-03">The Studio</SheetLabel>
                <p className="mt-5 text-pretty leading-relaxed text-stone">
                  One studio, one point of contact. You work directly with the
                  person drawing your plans.
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
                {[
                  ["Established", String(site.established)],
                  ["Based in", "Mariposa, CA"],
                  ["Jurisdictions", "14 counties"],
                  ["Practice", "Residential only"],
                  ["Coordinates", site.coordinates],
                  ["Hours", site.hours],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone/60">
                      {k}
                    </dt>
                    <dd className="mt-1.5 text-sm text-bone">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        code="C-99"
        label="Work With Us"
        title="Build on solid ground."
        body="If precision and a calm process sound like what your project needs, we should talk."
      />
    </>
  );
}
