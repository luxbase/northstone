import type { SVGProps } from "react";
import type { IconKey } from "@/lib/content";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconPlans(p: IconProps) {
  return (
    <Base {...p}>
      <rect x="3.5" y="4" width="17" height="16" rx="1" />
      <path d="M3.5 9.5h17M3.5 14.5h17M9 4v16M15 4v16" />
    </Base>
  );
}

export function IconDrafting(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M4 20h16L4 4Z" />
      <path d="M4 11h4M4 15.5h6.5" />
      <path d="m14 14 2.5 2.5" />
    </Base>
  );
}

export function IconPermit(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="10.5" r="6.5" />
      <path d="m9 10.5 2.2 2.2L15 8.6" />
      <path d="M8.6 16.4 7.5 22l4.5-2.4L16.5 22l-1.1-5.6" />
    </Base>
  );
}

export function IconRemodel(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M2.5 11 9 5.5 15.5 11" />
      <path d="M4.5 9.7V20h9V9.7" />
      <path d="M13.5 13.5h8V20h-8" />
      <path d="M17.5 13.5v6.5" />
    </Base>
  );
}

export function IconApproval(p: IconProps) {
  return (
    <Base {...p}>
      <rect x="5" y="4" width="14" height="17" rx="1.5" />
      <path d="M9.5 4V2.6h5V4" />
      <path d="m9 12.5 2.3 2.3L16 10" />
    </Base>
  );
}

export function IconDiscover(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1Z" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    </Base>
  );
}

export function IconDraft(p: IconProps) {
  return (
    <Base {...p}>
      <path d="m3.8 20.2 3.2-.9L18.6 7.7l-2.3-2.3L4.7 17 3.8 20.2Z" />
      <path d="m14.6 7.1 2.3 2.3" />
      <path d="M13.5 21h7" />
    </Base>
  );
}

export function IconApprove(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M6.5 4.5h11v8a5.5 5.5 0 0 1-11 0Z" />
      <path d="m9.3 8.6 2 2L15 6.6" />
      <path d="M8 21h8M12 17.8V21" />
    </Base>
  );
}

export function IconBuild(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M3.5 21V8.5L12 3l8.5 5.5V21" />
      <path d="M3.5 13h17M9 8.5V21M15 8.5V21" />
    </Base>
  );
}

export function IconShield(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M12 3 5.5 5.6v5.6c0 4.6 3 7.6 6.5 8.8 3.5-1.2 6.5-4.2 6.5-8.8V5.6Z" />
      <path d="m9.2 11.6 2 2 3.6-4" />
    </Base>
  );
}

export function IconChart(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M4 4v16h16" />
      <path d="m7.5 14.5 3.3-4 3 2.4L20 6.5" />
      <path d="M20 6.5h-3.4M20 6.5V10" />
    </Base>
  );
}

export function IconArrow(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" />
    </Base>
  );
}

export function IconMenu(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </Base>
  );
}

export function IconClose(p: IconProps) {
  return (
    <Base {...p}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Base>
  );
}

export const iconMap: Record<IconKey, (p: IconProps) => React.ReactElement> = {
  plans: IconPlans,
  drafting: IconDrafting,
  permit: IconPermit,
  remodel: IconRemodel,
  approval: IconApproval,
  discover: IconDiscover,
  draft: IconDraft,
  approve: IconApprove,
  build: IconBuild,
  shield: IconShield,
  chart: IconChart,
};
