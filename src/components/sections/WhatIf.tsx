"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_TEXT_DEEP, hue } from "@/lib/palette";

const POSSIBILITIES = [
  "Enter India?",
  "Expand across India?",
  "Become a franchise?",
  "Become a national brand?",
  "Become international?",
  "Launch a new concept?",
  "Transform an existing business?",
  "Scale without losing identity?",
];

export function WhatIf() {
  return (
    <section className="relative paper-peacock py-28 sm:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-ink-strong sm:text-5xl text-balance">
            What if your brand could&hellip;
          </h2>
        </Reveal>

        <div className="mt-14 space-y-5">
          {POSSIBILITIES.map((item, i) => (
            <Reveal key={item} delay={i * 0.05}>
              <p className={`font-display text-2xl font-semibold sm:text-3xl ${hue(HUE_TEXT_DEEP, i)}`}>
                {item}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <p className="mt-16 font-display text-3xl font-bold text-ink-strong sm:text-5xl text-balance">
            What if it could do all of it?
          </p>
        </Reveal>
        <Reveal delay={0.58}>
          <p className="mt-6 font-display text-6xl font-black text-gradient-deep sm:text-8xl">
            PECIA.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
