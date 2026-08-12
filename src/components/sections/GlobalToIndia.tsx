"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_TEXT, hue } from "@/lib/palette";

const BRIDGE = [
  "Strategy", "Localization", "Menu", "Pricing", "Real Estate",
  "Operations", "Supply Chain", "People", "Marketing", "Training",
  "Franchising", "Execution",
];

export function GlobalToIndia() {
  return (
    <section className="relative mesh-indigo py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-soft">
            Global Brands → India
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-ivory sm:text-5xl text-balance">
            Entering India is not opening a restaurant. It is entering an
            ecosystem.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 flex items-center justify-between gap-4">
            <div className="rounded-2xl border border-ivory/20 bg-ink/50 px-6 py-8 text-center">
              <span className="font-display text-xl font-bold text-ivory sm:text-2xl">
                Global Brand
              </span>
            </div>
            <div className="hidden flex-1 sm:block">
              <div className="h-px w-full bg-gradient-to-r from-ivory/20 via-turmeric to-saffron" />
            </div>
            <div className="rounded-2xl border border-turmeric bg-turmeric/15 px-6 py-8 text-center">
              <span className="font-display text-xl font-bold text-turmeric-soft sm:text-2xl">
                India
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {BRIDGE.map((item, i) => (
              <span
                key={item}
                className={`rounded-full border border-ivory/15 bg-ink/40 px-3.5 py-1.5 font-mono-label text-[10px] uppercase tracking-[0.15em] ${hue(HUE_TEXT, i)}`}
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mt-16 text-center font-display text-2xl font-bold text-ivory sm:text-3xl">
            You know your brand. We know India.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
