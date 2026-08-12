"use client";

import { Reveal } from "@/components/Reveal";

const JOURNEY = [
  { step: "Where they started", note: "A concept, a restaurant, or a brand looking at India." },
  { step: "What was broken", note: "The gap between ambition and an operable, scalable model." },
  { step: "What Pecia discovered", note: "Market reality, consumer truth, unit economics." },
  { step: "What changed", note: "Positioning, format, operations, or go-to-market." },
  { step: "What was built", note: "Brand, systems, franchise architecture." },
  { step: "What happened", note: "Measured in locations, revenue and repeatability." },
];

export function Proof() {
  return (
    <section className="relative bg-ink py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            How We Work
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-ivory sm:text-5xl text-balance">
            Story creates attention. Proof creates trust.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-xl text-ivory-dim">
            This is the shape every Pecia partnership takes. As brands launch
            with us, this space will carry their real story — locations,
            growth, launch timelines, and the numbers behind them.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-saffron via-copper to-indigo-soft"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {JOURNEY.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.04} y={12}>
                <div className="relative pl-12">
                  <span
                    className="absolute left-2.5 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-saffron"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-lg text-ivory">
                    {item.step}
                  </h3>
                  <p className="mt-1 text-sm text-ivory-dim">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
