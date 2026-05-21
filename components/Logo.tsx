export function Logo({
  withWordmark = true,
  className = "",
}: {
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="h-8 w-8 shrink-0 text-bone"
        aria-hidden
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h100v100H0Z M22 20h15v60H22z M63 20h15v60H63z M22 20h15l41 60h-15z"
        />
      </svg>
      {withWordmark && (
        <span className="text-[0.95rem] font-medium tracking-[0.24em] text-bone">
          NORTHSTONE
        </span>
      )}
    </span>
  );
}
