"use client";

import { Reveal } from "@/components/Reveal";

const VISION_2035 = [
  "More consumers.", "More cities.", "More wealth.", "More competition.",
  "More international brands.", "More Indian brands going global.",
  "More technology.", "More delivery.", "More experiential dining.",
  "More franchising.", "More complexity.",
];

export function FutureOfFood() {
  return (
    <section className="relative bg-charcoal-soft py-28 sm:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            India, 2035
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {VISION_2035.map((item) => (
              <span key={item} className="font-display text-lg text-ivory-dim sm:text-xl">
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-16 font-display text-3xl text-ivory sm:text-5xl">
            Someone has to build it.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="mt-8 font-display text-2xl italic text-saffron-soft sm:text-3xl">
            Why not us?
          </p>
        </Reveal>
        <Reveal delay={0.34}>
          <p className="mt-6 font-display text-2xl italic text-spice sm:text-3xl">
            Why not you?
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-10 font-display text-4xl text-ivory sm:text-6xl">
            Let&rsquo;s build it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
