export function BlueprintBackdrop({
  className = "",
  fade = true,
}: {
  className?: string;
  fade?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
      style={
        fade
          ? {
              maskImage:
                "radial-gradient(120% 120% at 50% 0%, #000 35%, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(120% 120% at 50% 0%, #000 35%, transparent 90%)",
            }
          : undefined
      }
    >
      <div className="absolute inset-0 bp-grid-fine" />
      <div className="absolute inset-0 bp-grid" />
    </div>
  );
}
