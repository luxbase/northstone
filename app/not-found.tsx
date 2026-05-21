import { Container } from "@/components/Container";
import { BlueprintBackdrop } from "@/components/BlueprintBackdrop";
import { SheetLabel } from "@/components/SheetLabel";
import { Button } from "@/components/Button";
import { IconArrow } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <BlueprintBackdrop />
      <Container className="relative py-24 text-center">
        <div className="mx-auto max-w-xl">
          <div className="flex justify-center">
            <SheetLabel code="E-04">Off The Map</SheetLabel>
          </div>
          <h1 className="mt-8 text-[clamp(4rem,12vw,8rem)] font-medium leading-none tracking-[-0.04em]">
            404
          </h1>
          <p className="mt-6 text-pretty leading-relaxed text-stone">
            This page isn&apos;t on the survey. The drawing you&apos;re looking
            for may have moved or never been drafted.
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-stone/60">
            No coordinates returned
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/">
              Back to Solid Ground
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
