"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_TEXT_DEEP, hue } from "@/lib/palette";

const BRIDGE = [
  "Strategy", "Localization", "Menu", "Pricing", "Real Estate",
  "Operations", "Supply Chain", "People", "Marketing", "Training",
  "Franchising", "Execution",
];

export function GlobalToIndia() {
  return (
    <section className="relative paper-indigo py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-deep">
            Global Brands → India
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-ink-strong sm:text-5xl text-balance">
            Entering India is not opening a restaurant. It is entering an
            ecosystem.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 flex items-center justify-between gap-4">
            <div className="rounded-2xl border border-ink-strong/15 bg-white/70 px-6 py-8 text-center">
              <span className="font-display text-xl font-bold text-ink-strong sm:text-2xl">
                Global Brand
              </span>
            </div>
            <div className="relative hidden h-px flex-1 sm:block">
              <div className="absolute inset-0 bg-gradient-to-r from-ivory/20 via-turmeric to-saffron" />
              <span
                className="animate-pulse-travel absolute top-1/2 h-2 w-2 rounded-full bg-turmeric-soft"
                style={{ boxShadow: "0 0 8px #f0b429" }}
                aria-hidden="true"
              />
            </div>
            <div className="rounded-2xl border border-turmeric bg-turmeric/15 px-6 py-8 text-center">
              <span className="font-display text-xl font-bold text-turmeric-deep sm:text-2xl">
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
                className={`rounded-full border border-ink-strong/12 bg-white/70 px-3.5 py-1.5 font-mono-label text-[10px] uppercase tracking-[0.15em] ${hue(HUE_TEXT_DEEP, i)}`}
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mt-16 text-center font-display text-2xl font-bold text-ink-strong sm:text-3xl">
            You know your brand. We know India.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
