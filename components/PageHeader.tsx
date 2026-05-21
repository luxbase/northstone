import { Container } from "./Container";
import { BlueprintBackdrop } from "./BlueprintBackdrop";
import { SheetLabel } from "./SheetLabel";

export function PageHeader({
  code,
  label,
  title,
  intro,
}: {
  code: string;
  label: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-bone/10">
      <BlueprintBackdrop />
      <Container className="relative pb-20 pt-20 md:pb-28 md:pt-28">
        <SheetLabel code={code}>{label}</SheetLabel>
        <h1 className="mt-7 max-w-4xl text-balance text-[clamp(2.5rem,5.4vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.025em]">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-stone">
          {intro}
        </p>
      </Container>
    </section>
  );
}
