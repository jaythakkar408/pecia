"use client";

export function Flame({ className }: { className?: string }) {
  return (
    <span className={`relative inline-flex h-8 w-6 items-end justify-center ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 24 32" className="h-full w-full animate-flame-flicker">
        <defs>
          <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#e13a2a" />
            <stop offset="55%" stopColor="#f4881d" />
            <stop offset="100%" stopColor="#ffd166" />
          </linearGradient>
        </defs>
        <path
          d="M12 2C8 8 4 12 4 18a8 8 0 0 0 16 0c0-4-2-6-3-8 0 3-2 4-3 3 1-4-1-8-2-11Z"
          fill="url(#flameGrad)"
        />
      </svg>
      <span className="absolute -top-1 left-1/2 h-1 w-1 -translate-x-1/2 animate-ember-1 rounded-full bg-turmeric-soft" />
      <span className="absolute -top-1 left-1/2 h-1 w-1 -translate-x-1/2 animate-ember-2 rounded-full bg-saffron-soft" />
    </span>
  );
}
