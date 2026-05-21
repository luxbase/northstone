import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated blueprint gallery of recent residential plans, additions, ADUs, and permit-ready work.",
};

// HIDDEN until correct figures confirmed — restore together with the
// summary <section> in the JSX below.
// const summary = [
//   ["Projects shown", String(projects.length)],
//   ["Permits approved", String(projects.filter((p) => p.status === "Permit Approved").length)],
//   ["Jurisdictions", String(new Set(projects.map((p) => p.jurisdiction)).size)],
//   ["Years drafting", "30"],
// ];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        code="A-00"
        label="Projects"
        title="A blueprint gallery."
        intro="Recent residential plans, additions, and ADU conversions from the studio. Owner names are withheld — the drafting, layouts, and permit outcomes are real."
      />

      {/* HIDDEN until correct figures confirmed — restore together with the
          `summary` const above.
      <section className="border-b border-bone/10">
        <Container>
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {summary.map(([label, value], i) => (
              <div
                key={label}
                className={`py-8 ${
                  i !== 0 ? "md:border-l md:border-bone/10 md:pl-8" : ""
                } ${i % 2 !== 0 ? "border-l border-bone/10 pl-6 md:pl-8" : ""}`}
              >
                <dd className="text-3xl font-medium tracking-tight md:text-4xl">
                  {value}
                </dd>
                <dt className="mt-1 text-sm text-stone">{label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      */}

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.code} delay={(i % 3) * 80}>
                <ProjectCard project={p} showNote />
              </Reveal>
            ))}
          </div>

          <p className="mt-12 text-pretty text-sm leading-relaxed text-stone/70">
            Drawings shown are stylised excerpts prepared for presentation.
            Full construction documents include structural, electrical, and
            energy-compliance sheets not pictured here.
          </p>
        </Container>
      </section>

      <CTASection
        code="A-99"
        label="Your Project"
        title="Your plan belongs in this gallery."
        body="Bring us your lot and your goals. We'll draw the set and carry it through approval."
      />
    </>
  );
}
