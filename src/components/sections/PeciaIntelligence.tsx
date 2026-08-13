"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_BORDER, HUE_TEXT_DEEP, hue } from "@/lib/palette";

const LAYERS = [
  "City Opportunity", "Category Trends", "Consumer Behavior", "Demographics",
  "Pricing", "Competition", "Real Estate", "Regional Preferences",
  "Franchise Potential", "White-Space Opportunities", "Unit Economics", "Expansion Potential",
];

export function PeciaIntelligence() {
  return (
    <section className="relative paper-peacock py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-deep">
            Pecia Intelligence
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-ink-strong sm:text-5xl text-balance">
            India is too complex to navigate by instinct alone.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-xl text-ink-soft">
            Pecia Food Intelligence is our long-term platform vision — an
            intelligence layer built on top of everything we learn from
            operating in the market, growing over time as our capability and
            data matures.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {LAYERS.map((layer, i) => (
            <Reveal key={layer} delay={i * 0.02} y={12}>
              <div
                className={`flex items-center justify-center gap-2 rounded-xl border bg-white/70 px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white ${hue(HUE_BORDER, i)}`}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 animate-heartbeat rounded-full bg-current ${hue(HUE_TEXT_DEEP, i)}`}
                />
                <span className={`text-xs font-semibold ${hue(HUE_TEXT_DEEP, i)}`}>{layer}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 space-y-3 text-center">
            <p className="font-display text-lg text-ink-soft sm:text-xl">
              Experience tells you what happened.
            </p>
            <p className="font-display text-lg text-ink-soft sm:text-xl">
              Data tells you what is happening.
            </p>
            <p className="font-display text-2xl font-bold text-turmeric-deep sm:text-3xl">
              Intelligence helps you decide what happens next.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
