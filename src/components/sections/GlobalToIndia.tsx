"use client";

import { Reveal } from "@/components/Reveal";

const BRIDGE = [
  "Strategy", "Localization", "Menu", "Pricing", "Real Estate",
  "Operations", "Supply Chain", "People", "Marketing", "Training",
  "Franchising", "Execution",
];

export function GlobalToIndia() {
  return (
    <section className="relative bg-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            Global Brands → India
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-ivory sm:text-5xl text-balance">
            Entering India is not opening a restaurant. It is entering an
            ecosystem.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 flex items-center justify-between gap-4">
            <div className="rounded-2xl border border-ivory/15 bg-ink/60 px-6 py-8 text-center">
              <span className="font-display text-xl text-ivory sm:text-2xl">
                Global Brand
              </span>
            </div>
            <div className="hidden flex-1 sm:block">
              <div className="h-px w-full bg-gradient-to-r from-ivory/20 via-saffron to-ivory/20" />
            </div>
            <div className="rounded-2xl border border-saffron/30 bg-saffron/10 px-6 py-8 text-center">
              <span className="font-display text-xl text-saffron-soft sm:text-2xl">
                India
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {BRIDGE.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ivory/10 bg-charcoal-soft/60 px-3.5 py-1.5 font-mono-label text-[10px] uppercase tracking-[0.15em] text-ivory-dim"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mt-16 text-center font-display text-2xl italic text-ivory sm:text-3xl">
            You know your brand. We know India.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
