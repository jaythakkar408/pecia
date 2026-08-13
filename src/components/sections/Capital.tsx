"use client";

import { Reveal } from "@/components/Reveal";
import { PulseLine } from "@/components/PulseLine";
import { HUE_HEX, HUE_TEXT_DEEP, hue } from "@/lib/palette";

export function Capital() {
  return (
    <section className="relative paper-spice py-28 sm:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-deep">
            Capital &amp; Investment
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink-strong sm:text-5xl text-balance">
            Food brands need more than strategy.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-ink-soft">
            They need capital, locations, people, systems, technology, supply
            chain, marketing and execution — all moving together.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-4 font-display text-lg font-semibold text-ink-strong sm:text-xl">
            {["Brands", "Capital", "Operators", "Franchisees", "Markets", "Opportunities"].map(
              (item, i, arr) => (
                <span key={item} className={`flex items-center gap-4 ${hue(HUE_TEXT_DEEP, i)}`}>
                  {item}
                  {i < arr.length - 1 && (
                    <PulseLine color={hue(HUE_HEX, i)} width={28} bidirectional />
                  )}
                </span>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mt-14 max-w-xl mx-auto text-ink-soft">
            Pecia is positioned to connect brands, capital, operators,
            franchisees and markets — building toward becoming more than a
            service company.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="mt-6 font-display text-2xl font-bold text-turmeric-deep sm:text-3xl">
            An ecosystem where food brands can grow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
