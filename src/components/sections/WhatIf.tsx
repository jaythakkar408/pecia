"use client";

import { Reveal } from "@/components/Reveal";

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
    <section className="relative bg-ink py-28 sm:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl text-ivory sm:text-5xl text-balance">
            What if your brand could&hellip;
          </h2>
        </Reveal>

        <div className="mt-14 space-y-5">
          {POSSIBILITIES.map((item, i) => (
            <Reveal key={item} delay={i * 0.05}>
              <p className="font-display text-2xl text-ivory-dim sm:text-3xl">
                {item}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <p className="mt-16 font-display text-3xl text-ivory sm:text-5xl text-balance">
            What if it could do all of it?
          </p>
        </Reveal>
        <Reveal delay={0.58}>
          <p className="mt-6 font-display text-5xl text-saffron sm:text-7xl">
            PECIA.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
