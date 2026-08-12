"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const NODES = [
  "Consumer", "Menu", "Pricing", "Location", "Operations",
  "People", "Franchise", "Marketing", "Unit Economics",
  "Expansion", "Brand Value",
];

export function IndiaEngine() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-charcoal-soft py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            The India Engine
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-ivory sm:text-5xl text-balance">
            Food businesses are systems. Change one variable and the whole
            system responds.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mt-16 flex flex-wrap items-center justify-center gap-x-2 gap-y-4"
            onMouseLeave={() => setActive(null)}
          >
            {NODES.map((node, i) => (
              <div key={node} className="flex items-center gap-2">
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    active === i
                      ? "border-saffron bg-saffron/15 text-saffron-soft"
                      : "border-ivory/15 text-ivory hover:border-ivory/40"
                  }`}
                >
                  {node}
                </button>
                {i < NODES.length - 1 && (
                  <span className="text-ivory-dim/60" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
            <span className="text-ivory-dim/60" aria-hidden="true">↺</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-md text-center text-sm text-ivory-dim">
            {active !== null
              ? `Shift ${NODES[active]}, and pricing, operations, unit economics and brand value all move with it.`
              : "Hover a variable to see how it ripples through the rest of the engine."}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center font-display text-2xl italic text-ivory sm:text-3xl">
            Pecia understands the system.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
