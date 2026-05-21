import Link from "next/link";
import { Container } from "@/components/Container";
import { BlueprintBackdrop } from "@/components/BlueprintBackdrop";
import { ContourArt } from "@/components/ContourArt";
import { SheetLabel } from "@/components/SheetLabel";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { iconMap, IconArrow } from "@/components/icons";
import {
  services,
  process,
  stats,
  projects,
  trustPoints,
  financialServices,
  site,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <BlueprintBackdrop />
        <div
          className="pointer-events-none absolute -top-[14%] right-[-22%] hidden w-[min(960px,70vw)] md:block lg:right-[-8%]"
          aria-hidden
        >
          <ContourArt className="w-full" />
        </div>

        <Container className="relative">
          <div className="max-w-3xl pb-24 pt-20 md:pb-32 md:pt-28">
            <div className="rise" style={{ animationDelay: "0ms" }}>
              <SheetLabel code="A-00">
                Residential Planning &amp; Permits
              </SheetLabel>
            </div>

            <h1
              className="rise mt-8 text-balance text-[clamp(3rem,8vw,6.25rem)] font-medium leading-[0.98] tracking-[-0.04em]"
              style={{ animationDelay: "90ms" }}
            >
              Plans built on{" "}
              <span className="text-warm">solid ground.</span>
            </h1>

            <p
              className="rise mt-8 max-w-xl text-pretty text-lg leading-relaxed text-stone md:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              {site.description}
            </p>

            <div
              className="rise mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "270ms" }}
            >
              <Button href="/contact">
                Start Your Project
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request Consultation
              </Button>
            </div>

            <div
              className="rise mt-14 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-stone/70"
              style={{ animationDelay: "360ms" }}
            >
              <span className="h-px w-10 bg-bone/15" aria-hidden />
              Est. {site.established} · {site.location}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="border-y border-bone/10 bg-granite">
        <Container>
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-1 py-8 md:py-10 ${
                  i !== 0 ? "md:border-l md:border-bone/10 md:pl-8" : ""
                } ${i % 2 !== 0 ? "border-l border-bone/10 pl-6 md:pl-8" : ""}`}
              >
                <dt className="order-2 text-sm text-stone">{s.label}</dt>
                <dd className="order-1 text-4xl font-medium tracking-tight md:text-5xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="grid gap-8 md:grid-cols-2 md:items-end">
              <div>
                <SheetLabel code="S-00">What We Do</SheetLabel>
                <h2 className="mt-6 text-balance text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.025em]">
                  Every service points toward one outcome — an approved permit.
                </h2>
              </div>
              <p className="text-pretty leading-relaxed text-stone md:pb-2">
                Northstone handles the full arc of residential and commercial
                planning: the drawings, the submittal, and the back-and-forth
                with the building department. You stay focused on the project.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 border-t border-bone/10">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <Reveal key={s.code} delay={i * 60}>
                  <Link
                    href="/services"
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-bone/10 py-7 transition-colors hover:bg-warm/[0.03] md:gap-8 md:py-8"
                  >
                    <span className="font-mono text-xs tracking-widest text-stone/60">
                      {s.code}
                    </span>
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-7">
                      <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-bone/10 bg-coal text-warm transition-colors group-hover:border-warm/40">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-warm md:text-2xl">
                          {s.title}
                        </h3>
                      </div>
                      <p className="max-w-md text-pretty text-sm leading-relaxed text-stone md:ml-auto md:text-right">
                        {s.short}
                      </p>
                    </div>
                    <IconArrow className="h-5 w-5 text-stone transition-all group-hover:translate-x-1 group-hover:text-warm" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="border-y border-bone/10 bg-granite py-24 md:py-32">
        <Container>
          <Reveal>
            <SheetLabel code="P-00">The Process</SheetLabel>
            <h2 className="mt-6 max-w-2xl text-balance text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.025em]">
              A calm, four-step path from concept to keys.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <Reveal key={step.code} delay={i * 80}>
                  <div className="flex h-full flex-col bg-granite p-7 md:p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm tracking-widest text-warm">
                        {step.code}
                      </span>
                      <Icon className="h-6 w-6 text-stone" />
                    </div>
                    <h3 className="mt-12 text-2xl font-medium tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-stone">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- BLUEPRINT SHOWCASE ---------- */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <SheetLabel code="A-00">Featured Plans</SheetLabel>
                <h2 className="mt-6 text-balance text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.025em]">
                  Permit-ready work, drawn to last.
                </h2>
                <p className="mt-5 text-pretty leading-relaxed text-stone">
                  A selection of recent residential plans and approvals.
                  Client details are redacted; the drafting is not.
                </p>
              </div>
              <Button href="/projects" variant="secondary" className="shrink-0">
                View All Projects
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.code} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- TRUST ---------- */}
      <section className="border-t border-bone/10 bg-granite py-24 md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <Reveal>
              <div>
                <SheetLabel code="T-00">Why Northstone</SheetLabel>
                <h2 className="mt-6 text-balance text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.025em]">
                  The permit process should feel structured — not stressful.
                </h2>
                <p className="mt-6 max-w-md text-pretty leading-relaxed text-stone">
                  Most delays come from drawings that raise questions and
                  applications no one is watching. We remove both. You get a
                  clean set and a studio that tracks every step.
                </p>
                <blockquote className="mt-10 border-l-2 border-warm/50 pl-6">
                  <p className="text-pretty text-lg leading-relaxed text-bone">
                    A clean, code-checked set is the fastest path through plan
                    review — it is the difference between a permit issued and a
                    project that stalls in correction cycles.
                  </p>
                  <footer className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
                    Northstone · How we draw
                  </footer>
                </blockquote>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-col">
                {trustPoints.map((t, i) => (
                  <div
                    key={t.title}
                    className={`flex gap-6 py-7 ${
                      i !== 0 ? "border-t border-bone/10" : ""
                    }`}
                  >
                    <span className="font-mono text-xs tracking-widest text-warm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-pretty leading-relaxed text-stone">
                        {t.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- FINANCIAL (SECONDARY) ---------- */}
      <section className="border-t border-bone/10 py-16 md:py-20">
        <Container>
          <Reveal>
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-14">
              <div className="max-w-sm">
                <SheetLabel code="F-00">Beyond the Blueprint</SheetLabel>
                <p className="mt-5 text-pretty text-sm leading-relaxed text-stone">
                  Alongside our planning work, Northstone offers measured
                  insurance and investment guidance — a complementary service
                  for clients who want it, never a distraction from the plans.
                </p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-xl border border-bone/10 bg-bone/10 sm:grid-cols-2">
                {financialServices.map((f) => {
                  const Icon = iconMap[f.icon];
                  return (
                    <div
                      key={f.code}
                      className="flex items-start gap-4 bg-ink p-6"
                    >
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-stone" />
                      <div>
                        <h3 className="text-sm font-medium tracking-tight text-bone">
                          {f.title}
                        </h3>
                        <p className="mt-1.5 text-pretty text-xs leading-relaxed text-stone">
                          {f.short}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
