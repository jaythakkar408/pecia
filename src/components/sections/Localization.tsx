"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_BORDER, HUE_TEXT_DEEP, hue } from "@/lib/palette";

const QUESTIONS = [
  { q: "What must remain?", a: "The core identity, values and craft that made the brand loved." },
  { q: "What can change?", a: "Format, footprint and channel mix to fit Indian real estate." },
  { q: "What should adapt?", a: "Menu architecture, pricing ladder and portion logic." },
  { q: "What must be localized?", a: "Sourcing, taste calibration and regional variants." },
  { q: "What must never be touched?", a: "The promise the brand makes to its guest." },
];

export function Localization() {
  return (
    <section className="relative paper-deep py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-deep">
            Localization
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-ink-strong sm:text-5xl text-balance">
            We break the brand apart to put it back together for India.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-4">
          {QUESTIONS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05} y={14}>
              <div className={`rounded-xl border-l-4 bg-white/70 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 ${hue(HUE_BORDER, i)}`}>
                <span className={`font-display text-lg font-bold sm:w-72 sm:shrink-0 ${hue(HUE_TEXT_DEEP, i)}`}>
                  {item.q}
                </span>
                <span className="mt-2 block text-sm text-ink-soft sm:mt-0">
                  {item.a}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-16 text-center font-display text-2xl font-bold text-turmeric-deep sm:text-3xl">
            We don&rsquo;t copy brands into India. We translate them for
            India.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
