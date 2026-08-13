"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_BORDER, HUE_TEXT_DEEP, hue } from "@/lib/palette";

export function Thesis() {
  return (
    <section className="relative paper-spice py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-deep">
            The Pecia Thesis
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 font-display text-2xl text-ink-soft sm:text-3xl text-balance">
            The food industry does not suffer from a shortage of restaurants.
            It does not suffer from a shortage of recipes. It does not suffer
            from a shortage of entrepreneurs.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 font-display text-3xl text-ink-strong sm:text-4xl text-balance">
            It suffers from a shortage of food businesses built to become
            scalable brands.
          </p>
        </Reveal>

        <div className="mx-auto mt-20 max-w-2xl space-y-8">
          <Reveal delay={0.15}>
            <p className="font-display text-xl font-bold text-saffron-deep sm:text-2xl">
              A great restaurant is not necessarily a great brand.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display text-xl font-bold text-rani-deep sm:text-2xl">
              A great brand is not necessarily a scalable brand.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="font-display text-xl font-bold text-peacock-deep sm:text-2xl">
              Scale is not just more locations.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-16 text-sm uppercase tracking-[0.3em] text-ink-soft">
            True scale requires
          </p>
        </Reveal>
        <Reveal delay={0.32}>
          <div className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-3">
            {[
              "Brand", "Consumer Understanding", "Localization", "Operations",
              "Unit Economics", "People", "Technology", "Supply Chain",
              "Franchise Systems", "Market Intelligence", "Execution", "Discipline",
            ].map((item, i) => (
              <span
                key={item}
                className={`rounded-full border px-4 py-1.5 text-xs ${hue(HUE_BORDER, i)} ${hue(HUE_TEXT_DEEP, i)}`}
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-20 font-display text-3xl font-bold text-ink-strong sm:text-5xl text-balance">
            Pecia exists at that intersection.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
