"use client";

import { Reveal } from "@/components/Reveal";

const LAYERS = [
  "City Opportunity", "Category Trends", "Consumer Behavior", "Demographics",
  "Pricing", "Competition", "Real Estate", "Regional Preferences",
  "Franchise Potential", "White-Space Opportunities", "Unit Economics", "Expansion Potential",
];

export function PeciaIntelligence() {
  return (
    <section className="relative bg-ink py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            Pecia Intelligence
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-ivory sm:text-5xl text-balance">
            India is too complex to navigate by instinct alone.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-xl text-ivory-dim">
            Pecia Food Intelligence is our long-term platform vision — an
            intelligence layer built on top of everything we learn from
            operating in the market, growing over time as our capability and
            data matures.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {LAYERS.map((layer, i) => (
            <Reveal key={layer} delay={i * 0.02} y={12}>
              <div className="rounded-xl border border-ivory/10 bg-charcoal-soft/50 px-4 py-4 text-center">
                <span className="text-xs text-ivory">{layer}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 space-y-3 text-center">
            <p className="font-display text-lg text-ivory-dim sm:text-xl">
              Experience tells you what happened.
            </p>
            <p className="font-display text-lg text-ivory-dim sm:text-xl">
              Data tells you what is happening.
            </p>
            <p className="font-display text-2xl text-saffron-soft sm:text-3xl">
              Intelligence helps you decide what happens next.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
