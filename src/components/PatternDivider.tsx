const COLORS = ["#f4881d", "#d6236e", "#f0b429", "#0e8a72", "#e13a2a", "#4d52c4"];

export function PatternDivider({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  const count = 30;
  const width = 1200;
  const step = width / count;

  return (
    <div className={`relative h-6 w-full overflow-hidden sm:h-8 ${className ?? ""}`}>
      <svg
        viewBox={`0 0 ${width} 32`}
        preserveAspectRatio="none"
        className={`h-full w-full ${flip ? "rotate-180" : ""}`}
        aria-hidden="true"
      >
        <line x1="0" y1="1" x2={width} y2="1" stroke="rgba(251,238,219,0.25)" strokeWidth="1" />
        {Array.from({ length: count }).map((_, i) => {
          const cx = step * i + step / 2;
          const color = COLORS[i % COLORS.length];
          return (
            <polygon
              key={i}
              points={`${cx - step * 0.32},2 ${cx + step * 0.32},2 ${cx},22`}
              fill={color}
              opacity={0.9}
            />
          );
        })}
      </svg>
    </div>
  );
}
