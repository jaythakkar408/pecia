"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Flame } from "@/components/Flame";
import { HUE_DOT, HUE_TEXT_DEEP, hue } from "@/lib/palette";

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
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const drawProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="india" className="relative paper-deep py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-deep">
            Chapter One
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold text-ink-strong sm:text-5xl text-balance">
            India has always been a living food civilization.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
            {CIVILIZATION_MARKS.map((mark, i) => (
              <span
                key={mark}
                className={`rounded-full border border-ink-strong/10 bg-white/70 px-3 py-1 font-mono-label text-xs uppercase tracking-[0.2em] ${hue(HUE_TEXT_DEEP, i)}`}
              >
                {mark}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-28 space-y-10 text-center">
          <Reveal>
            <p className="font-display text-4xl font-extrabold uppercase text-turmeric-deep sm:text-6xl">
              Food evolves.
            </p>
          </Reveal>
          <Reveal>
            <p className="font-display text-4xl font-extrabold uppercase text-rani-deep sm:text-6xl">
              India evolves.
            </p>
          </Reveal>
          <Reveal>
            <p className="font-display text-4xl font-extrabold text-ink-strong sm:text-6xl text-balance">
              Brands must evolve with it.
            </p>
          </Reveal>
        </div>

        <div ref={timelineRef} className="relative mt-28">
          <div
            className="absolute left-4 top-2 bottom-2 w-px bg-ink-strong/10 sm:left-1/2"
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-4 top-2 w-px origin-top bg-gradient-to-b from-saffron via-rani to-peacock sm:left-1/2"
            style={{ scaleY: drawProgress, height: "calc(100% - 1rem)" }}
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
                      <span
                        className={`inline-flex items-center gap-1 font-mono-label text-[10px] uppercase tracking-[0.3em] text-copper ${
                          i % 2 === 1 ? "" : "sm:flex-row-reverse"
                        }`}
                      >
                        {i === 0 && <Flame className="-mb-2" />}
                        {step.era}
                      </span>
                    )}
                    <h3 className={`mt-1 font-display text-xl font-bold sm:text-2xl ${hue(HUE_TEXT_DEEP, i)}`}>
                      {step.label}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{step.note}</p>
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
