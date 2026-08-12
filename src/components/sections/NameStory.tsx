"use client";

import { Reveal } from "@/components/Reveal";

const CHAIN = [
  "Recipe", "Concept", "Restaurant", "Brand",
  "System", "Franchise", "Network", "Ecosystem",
];

export function NameStory() {
  return (
    <section className="relative bg-charcoal-soft py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            The Name
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-3xl text-ivory sm:text-5xl">
            Pecia.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-ivory-dim">
            In medieval Europe, the <em className="text-ivory not-italic font-medium">pecia</em>{" "}
            system was used to reproduce and circulate manuscripts. A text was
            divided into pieces — <em className="text-ivory not-italic">peciae</em>{" "}
            — that could be copied separately, allowing knowledge to travel
            faster and further than any single scribe ever could.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-ivory-dim">
            One valuable piece. Made reproducible. Let loose to travel.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 font-display text-2xl text-saffron-soft sm:text-3xl text-balance">
            Now replace knowledge with food brands.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-6 max-w-2xl text-ivory-dim">
            A recipe begins somewhere. A restaurant begins somewhere. A
            concept, a brand — each begins in one place. But a great idea
            should not remain confined to its place of origin. It should be
            capable of travelling — across neighborhoods, cities, states,
            cultures, borders and generations.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 font-display text-3xl text-ivory sm:text-5xl text-balance">
            From one piece to something much bigger.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-3">
            {CHAIN.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-saffron/30 bg-saffron/5 px-4 py-2 font-mono-label text-xs uppercase tracking-[0.2em] text-saffron-soft">
                  {step}
                </span>
                {i < CHAIN.length - 1 && (
                  <span className="text-ivory-dim" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-16 text-center font-display text-2xl italic text-ivory sm:text-3xl">
            Scale without losing the soul.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
