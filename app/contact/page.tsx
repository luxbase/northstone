import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SheetLabel } from "@/components/SheetLabel";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your residential planning project with Northstone. Request a consultation — we respond within one business day.",
};

const nextSteps = [
  {
    code: "01",
    title: "We review your details",
    body: "Your lot, your goals, and your jurisdiction — we look at all three before we reply.",
  },
  {
    code: "02",
    title: "We schedule a consultation",
    body: "A direct conversation with the planner who will draw your set. No account managers.",
  },
  {
    code: "03",
    title: "We map the path to permit",
    body: "You leave with a clear scope, a timeline, and a plain estimate of what approval takes.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        code="X-00"
        label="Contact"
        title="Start your project."
        intro="Tell us what you're planning. We review every inquiry ourselves and follow up within one business day."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={120}>
              <aside className="flex flex-col gap-10">
                <div>
                  <SheetLabel code="X-01">The Studio</SheetLabel>
                  <ul className="mt-6 flex flex-col gap-4">
                    <li className="text-sm text-bone">{site.location}</li>
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
                    <li className="font-mono text-[11px] tracking-widest text-stone/60">
                      {site.coordinates}
                    </li>
                  </ul>
                </div>

                <div className="border-t border-bone/10 pt-8">
                  <SheetLabel code="X-02">What Happens Next</SheetLabel>
                  <ol className="mt-6 flex flex-col">
                    {nextSteps.map((step, i) => (
                      <li
                        key={step.code}
                        className={`flex gap-5 py-5 ${
                          i !== 0 ? "border-t border-bone/10" : ""
                        }`}
                      >
                        <span className="font-mono text-xs tracking-widest text-warm">
                          {step.code}
                        </span>
                        <div>
                          <h3 className="text-base font-medium tracking-tight text-bone">
                            {step.title}
                          </h3>
                          <p className="mt-1.5 text-pretty text-sm leading-relaxed text-stone">
                            {step.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
