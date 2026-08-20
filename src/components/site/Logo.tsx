export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-display text-2xl leading-none tracking-tight">everest</span>
      <svg
        viewBox="0 0 24 18"
        aria-hidden="true"
        className="h-3 w-4 translate-y-[-2px] fill-current text-accent"
      >
        <path d="M12 0 24 18H0L12 0Zm0 6.5L5.6 16h12.8L12 6.5Z" />
      </svg>
    </span>
  );
}
