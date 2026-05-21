import { Container } from "./Container";
import { Button } from "./Button";
import { SheetLabel } from "./SheetLabel";
import { IconArrow } from "./icons";

export function CTASection({
  code = "X-01",
  label = "Start Here",
  title = "Let's get your plans on solid ground.",
  body = "Tell us about your project. We'll review your lot, your goals, and your jurisdiction — then map the clearest path to an approved permit.",
}: {
  code?: string;
  label?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-bone/10 bg-coal">
      <div className="absolute inset-0 bp-grid" aria-hidden />
      {/* watermark monogram */}
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute -right-10 top-1/2 h-[150%] w-auto -translate-y-1/2 text-bone/[0.03]"
        aria-hidden
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h100v100H0Z M22 20h15v60H22z M63 20h15v60H63z M22 20h15l41 60h-15z"
        />
      </svg>

      <Container className="relative py-24 md:py-32">
        <div className="max-w-2xl">
          <SheetLabel code={code}>{label}</SheetLabel>
          <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-stone">
            {body}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact">
              Start Your Project
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/contact" variant="secondary">
              Request Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
