export function PulseLine({
  color = "#f4881d",
  width = 44,
  className,
  bidirectional = false,
}: {
  color?: string;
  width?: number;
  className?: string;
  bidirectional?: boolean;
}) {
  return (
    <span
      className={`relative inline-block h-px shrink-0 align-middle ${className ?? ""}`}
      style={{ width }}
      aria-hidden="true"
    >
      <span
        className="absolute inset-0 rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${color}88, transparent)` }}
      />
      <span
        className="animate-pulse-travel absolute top-1/2 h-1.5 w-1.5 rounded-full"
        style={{ background: color, boxShadow: `0 0 6px ${color}` }}
      />
      {bidirectional && (
        <span
          className="animate-pulse-travel-reverse absolute top-1/2 h-1.5 w-1.5 rounded-full"
          style={{ background: color, boxShadow: `0 0 6px ${color}` }}
        />
      )}
    </span>
  );
}
