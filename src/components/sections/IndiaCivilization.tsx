"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_DOT, HUE_TEXT, hue } from "@/lib/palette";

const CIVILIZATION_MARKS = [
  "Fire", "Clay", "Grain", "Spice Routes", "Open Markets",
  "Family Kitchens", "Street Food", "Royal Kitchens", "Regional Cuisine",
];

const EVOLUTION = [
  { era: "Then", label: "The Ancient Kitchen", note: "Fire, clay, grain — food as ritual and survival." },
  { era: "", label: "The Local Restaurant", note: "A single room, a single family, a single recipe." },
  { era: "", label: "The Modern Café", note: "Food starts becoming a place to be seen." },
  { era: "", label: "The QSR", note: "Speed, consistency, format." },
  { era: "", label: "Food Delivery", note: "The kitchen disappears from the street. The brand doesn't." },
  { era: "", label: "The Restaurant Group", note: "Multiple concepts, one operator." },
  { era: "", label: "The Franchise", note: "One idea, many owners, one standard." },
  { era: "", label: "The National Brand", note: "A name every city recognizes." },
  { era: "Now", label: "The International Brand", note: "Built in India. Built for the world." },
];

export function IndiaCivilization() {
  return (
    <section id="india" className="relative mesh-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-soft">
            Chapter One
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold text-ivory sm:text-5xl text-balance">
            India has always been a living food civilization.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
            {CIVILIZATION_MARKS.map((mark, i) => (
              <span
                key={mark}
                className={`rounded-full border border-ivory/10 bg-ink/40 px-3 py-1 font-mono-label text-xs uppercase tracking-[0.2em] ${hue(HUE_TEXT, i)}`}
              >
                {mark}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-28 space-y-10 text-center">
          <Reveal>
            <p className="font-display text-4xl font-extrabold uppercase text-turmeric-soft sm:text-6xl">
              Food evolves.
            </p>
          </Reveal>
          <Reveal>
            <p className="font-display text-4xl font-extrabold uppercase text-rani-soft sm:text-6xl">
              India evolves.
            </p>
          </Reveal>
          <Reveal>
            <p className="font-display text-4xl font-extrabold text-ivory sm:text-6xl text-balance">
              Brands must evolve with it.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-28">
          <div
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-saffron via-rani to-peacock sm:left-1/2"
            aria-hidden="true"
          />
          <div className="space-y-10">
            {EVOLUTION.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.02} y={16}>
                <div
                  className={`relative flex items-start gap-6 pl-12 sm:w-1/2 sm:pl-0 sm:pr-12 ${
                    i % 2 === 1
                      ? "sm:ml-auto sm:pl-12 sm:pr-0 sm:text-left"
                      : "sm:text-right"
                  }`}
                >
                  <span
                    className={`absolute left-2.5 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full sm:left-auto sm:right-0 sm:translate-x-1/2 ${hue(HUE_DOT, i)}`}
                    style={
                      i % 2 === 1
                        ? { left: "-0.75rem", right: "auto" }
                        : undefined
                    }
                    aria-hidden="true"
                  />
                  <div>
                    {step.era && (
                      <span className="font-mono-label text-[10px] uppercase tracking-[0.3em] text-copper">
                        {step.era}
                      </span>
                    )}
                    <h3 className={`mt-1 font-display text-xl font-bold sm:text-2xl ${hue(HUE_TEXT, i)}`}>
                      {step.label}
                    </h3>
                    <p className="mt-1 text-sm text-ivory-dim">{step.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
