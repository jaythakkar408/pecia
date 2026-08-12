"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_TEXT, hue } from "@/lib/palette";

const FLOW = [
  ["Idea", "Market"],
  ["Restaurant", "Brand"],
  ["Brand", "Franchise"],
  ["Franchise", "Network"],
  ["International Brand", "India"],
  ["Indian Brand", "World"],
];

export function CategoryPositioning() {
  return (
    <section className="relative mesh-ink py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-display text-xl text-ivory-dim sm:text-2xl">
            Pecia is not a food consultancy.
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 font-display text-3xl font-bold text-ivory sm:text-5xl text-balance">
            Pecia is building a new category —
            <br className="hidden sm:block" /> a food-brand growth and
            operating platform for India.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-14 flex flex-wrap justify-center gap-x-3 gap-y-3">
            {["Market Access", "Brand Building", "Operations", "Franchising", "Expansion", "Intelligence", "Execution", "Capital"].map(
              (item, i) => (
                <span
                  key={item}
                  className={`rounded-full border border-ivory/10 bg-ink/40 px-3 py-1 font-mono-label text-xs uppercase tracking-[0.2em] ${hue(HUE_TEXT, i)}`}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-16 max-w-xl mx-auto text-ivory-dim">
            Pecia doesn&rsquo;t just advise food brands. Pecia helps food
            brands move.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 space-y-4">
            {FLOW.map(([from, to], i) => (
              <div
                key={`${from}-${to}`}
                className="flex items-center justify-center gap-4 font-display text-lg font-semibold text-ivory sm:text-2xl"
              >
                <span className="text-ivory-dim">{from}</span>
                <span className={hue(HUE_TEXT, i)}>→</span>
                <span>{to}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-16 font-display text-2xl font-bold text-turmeric-soft sm:text-3xl">
            We don&rsquo;t just help brands open. We help them become.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
