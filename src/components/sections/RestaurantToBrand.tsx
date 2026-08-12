"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_TEXT, hue } from "@/lib/palette";

const TRANSFORM = [
  ["Recipe", "Product Architecture"],
  ["Restaurant", "Brand"],
  ["Instinct", "Process"],
  ["Process", "System"],
  ["System", "Training"],
  ["Training", "Repeatability"],
  ["Repeatability", "Franchise"],
  ["Franchise", "Expansion"],
  ["Expansion", "National Brand"],
];

export function RestaurantToBrand() {
  return (
    <section className="relative mesh-ink py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-soft">
            Restaurant → Brand
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-ivory sm:text-5xl text-balance">
            Great food, loyal customers, a story, a founder — potential
            waiting to become scalable.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          {TRANSFORM.map((pair, i) => (
            <Reveal key={pair[0]} delay={i * 0.03} y={12}>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-ivory/10 bg-charcoal-soft/50 px-5 py-4">
                <span className="text-sm text-ivory-dim">{pair[0]}</span>
                <span className={hue(HUE_TEXT, i)} aria-hidden="true">→</span>
                <span className={`text-sm font-bold ${hue(HUE_TEXT, i)}`}>{pair[1]}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-16 text-center font-display text-2xl font-bold text-turmeric-soft sm:text-3xl">
            A restaurant sells food. A brand creates a reason to come back.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
