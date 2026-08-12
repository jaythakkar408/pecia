"use client";

import { Reveal } from "@/components/Reveal";

const QUESTIONS = [
  { q: "What must remain?", a: "The core identity, values and craft that made the brand loved." },
  { q: "What can change?", a: "Format, footprint and channel mix to fit Indian real estate." },
  { q: "What should adapt?", a: "Menu architecture, pricing ladder and portion logic." },
  { q: "What must be localized?", a: "Sourcing, taste calibration and regional variants." },
  { q: "What must never be touched?", a: "The promise the brand makes to its guest." },
];

export function Localization() {
  return (
    <section className="relative bg-ink py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            Localization
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-ivory sm:text-5xl text-balance">
            We break the brand apart to put it back together for India.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-4">
          {QUESTIONS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05} y={14}>
              <div className="rounded-xl border border-ivory/10 bg-charcoal-soft/50 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
                <span className="font-display text-lg text-saffron-soft sm:w-72 sm:shrink-0">
                  {item.q}
                </span>
                <span className="mt-2 block text-sm text-ivory-dim sm:mt-0">
                  {item.a}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-16 text-center font-display text-2xl italic text-ivory sm:text-3xl">
            We don&rsquo;t copy brands into India. We translate them for
            India.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
