"use client";

export function Steam({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute flex justify-center gap-6 ${className ?? ""}`}
      aria-hidden="true"
    >
      <span className="h-24 w-8 animate-steam-1 rounded-full bg-ivory/10 blur-md" />
      <span className="h-28 w-6 animate-steam-2 rounded-full bg-ivory/10 blur-md" />
      <span className="h-20 w-10 animate-steam-3 rounded-full bg-ivory/10 blur-md" />
    </div>
  );
}
