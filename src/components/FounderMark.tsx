"use client";

export function FounderMark({
  primary,
  secondary,
  initial,
}: {
  primary: string;
  secondary: string;
  initial: string;
}) {
  return (
    <div className="relative h-16 w-16 shrink-0">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <linearGradient id={`fm-${initial}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primary} />
            <stop offset="100%" stopColor={secondary} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="none" stroke={primary} strokeOpacity="0.35" strokeWidth="1.5" />
        {/* head */}
        <circle cx="50" cy="38" r="17" fill={`url(#fm-${initial})`} opacity="0.9" />
        {/* shoulders / bust */}
        <path
          d="M18 92c0-19 14-32 32-32s32 13 32 32Z"
          fill={`url(#fm-${initial})`}
          opacity="0.55"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center pt-1 font-display text-lg font-black text-ink/80">
        {initial}
      </span>
    </div>
  );
}
