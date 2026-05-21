import type { Project } from "@/lib/content";
import { FloorPlan } from "./FloorPlan";
import { StatusBadge } from "./StatusBadge";

export function ProjectCard({
  project,
  showNote = false,
}: {
  project: Project;
  showNote?: boolean;
}) {
  const meta: [string, string][] = [
    ["Type", project.type],
    ["Scope", project.scope],
    ["Area", project.area],
    ["Jurisdiction", project.jurisdiction],
  ];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-bone/10 bg-coal/40 p-4">
      <div className="overflow-hidden rounded-xl border border-bone/10 bg-granite p-3">
        <FloorPlan
          plan={project.plan}
          code={project.code}
          className="h-auto w-full"
        />
      </div>

      <div className="flex flex-1 flex-col px-2 pb-1 pt-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-widest text-warm">
            {project.code}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-3 text-xl font-medium tracking-tight">
          {project.title}
        </h3>

        {showNote && (
          <p className="mt-3 text-pretty text-sm leading-relaxed text-stone">
            {project.note}
          </p>
        )}

        <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-bone/10 pt-5">
          {meta.map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone/70">
                {k}
              </dt>
              <dd className="mt-1 text-sm text-bone">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
