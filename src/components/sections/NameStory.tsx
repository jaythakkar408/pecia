"use client";

import { Reveal } from "@/components/Reveal";
import { Steam } from "@/components/Steam";
import { PulseLine } from "@/components/PulseLine";
import { HUE_BORDER, HUE_HEX, HUE_TEXT_DEEP, hue } from "@/lib/palette";

const CHAIN = [
  "Recipe", "Concept", "Restaurant", "Brand",
  "System", "Franchise", "Network", "Ecosystem",
];

export function NameStory() {
  return (
    <section className="relative paper-deep py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-deep">
            The Name
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="relative inline-block">
            <Steam className="-top-16 left-1/2 -translate-x-1/2" />
            <h2 className="relative mt-4 font-display text-3xl font-extrabold text-gradient-deep sm:text-5xl">
              Pecia.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-ink-soft">
            In medieval Europe, the <em className="text-ink-strong not-italic font-medium">pecia</em>{" "}
            system was used to reproduce and circulate manuscripts. A text was
            divided into pieces — <em className="text-ink-strong not-italic">peciae</em>{" "}
            — that could be copied separately, allowing knowledge to travel
            faster and further than any single scribe ever could.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-ink-soft">
            One valuable piece. Made reproducible. Let loose to travel.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 font-display text-2xl font-bold text-turmeric-deep sm:text-3xl text-balance">
            Now replace knowledge with food brands.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-6 max-w-2xl text-ink-soft">
            A recipe begins somewhere. A restaurant begins somewhere. A
            concept, a brand — each begins in one place. But a great idea
            should not remain confined to its place of origin. It should be
            capable of travelling — across neighborhoods, cities, states,
            cultures, borders and generations.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 font-display text-3xl font-extrabold text-ink-strong sm:text-5xl text-balance">
            From one piece to something much bigger.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-3">
            {CHAIN.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span
                  className={`rounded-full border px-4 py-2 font-mono-label text-xs uppercase tracking-[0.2em] ${hue(HUE_BORDER, i)} ${hue(HUE_TEXT_DEEP, i)}`}
                >
                  {step}
                </span>
                {i < CHAIN.length - 1 && (
                  <PulseLine color={hue(HUE_HEX, i)} width={24} />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-16 text-center font-display text-2xl font-bold text-ink-strong sm:text-3xl">
            Scale without losing the soul.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
