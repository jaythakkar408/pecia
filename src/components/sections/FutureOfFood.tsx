"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_TEXT_DEEP, hue } from "@/lib/palette";

const VISION_2035 = [
  "More consumers.", "More cities.", "More wealth.", "More competition.",
  "More international brands.", "More Indian brands going global.",
  "More technology.", "More delivery.", "More experiential dining.",
  "More franchising.", "More complexity.",
];

export function FutureOfFood() {
  return (
    <section className="relative paper-deep py-28 sm:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-deep">
            India, 2035
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-2">
            {VISION_2035.map((item, i) => (
              <span key={item} className={`font-display text-lg font-semibold sm:text-xl ${hue(HUE_TEXT_DEEP, i)}`}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-16 font-display text-3xl font-bold text-ink-strong sm:text-5xl">
            Someone has to build it.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="mt-8 font-display text-2xl font-bold text-saffron-deep sm:text-3xl">
            Why not us?
          </p>
        </Reveal>
        <Reveal delay={0.34}>
          <p className="mt-6 font-display text-2xl font-bold text-rani-deep sm:text-3xl">
            Why not you?
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-10 font-display text-4xl font-extrabold text-gradient-deep sm:text-6xl">
            Let&rsquo;s build it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
