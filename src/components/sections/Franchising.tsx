"use client";

import { Reveal } from "@/components/Reveal";

const PIECES = [
  "Brand", "Menu", "Operations", "Training", "Technology",
  "Supply Chain", "Marketing", "Unit Economics", "Franchise Model",
];

export function Franchising() {
  return (
    <section className="relative bg-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            Franchising
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-3xl text-ivory sm:text-5xl text-balance">
            One successful concept. Broken into pieces. Rebuilt to travel.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap justify-center gap-2.5">
            {PIECES.map((piece) => (
              <span
                key={piece}
                className="rounded-full border border-saffron/25 bg-saffron/5 px-4 py-1.5 font-mono-label text-[11px] uppercase tracking-[0.15em] text-saffron-soft"
              >
                {piece}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-14 flex items-center justify-center gap-3 text-ivory-dim">
            <span className="font-display text-2xl">1 Restaurant</span>
            <span className="text-saffron">→</span>
            <span className="font-display text-2xl text-ivory">Many Locations</span>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mt-16 font-display text-2xl italic text-ivory sm:text-3xl">
            Replication is not copying. Replication is system design.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
