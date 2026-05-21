export function StatusBadge({
  status,
}: {
  status: "Permit Approved" | "In Review";
}) {
  const approved = status === "Permit Approved";
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-stone">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          approved
            ? "bg-warm"
            : "border border-stone bg-transparent"
        }`}
        aria-hidden
      />
      {status}
    </span>
  );
}
