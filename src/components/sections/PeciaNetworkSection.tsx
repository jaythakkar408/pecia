"use client";

import { Reveal } from "@/components/Reveal";
import { NetworkConverge } from "@/components/NetworkConverge";

const NODES = [
  "Consumers", "Brands", "Restaurants", "Franchisees", "Operators",
  "Entrepreneurs", "International Companies", "Investors", "Real Estate",
  "Suppliers", "Technology", "Marketing", "Capital", "Talent", "Cities",
];

export function PeciaNetworkSection() {
  return (
    <section className="relative bg-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="max-w-2xl font-display text-2xl text-ivory sm:text-4xl text-balance">
            One country. Many food cultures. Millions of consumers. Thousands
            of markets — and a growing web connecting all of them.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <NetworkConverge
          word="PECIA"
          className="mx-auto mt-16 h-[46vh] w-full max-w-5xl sm:h-[56vh]"
          caption="The network converges."
        />
      </Reveal>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <Reveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {NODES.map((node) => (
              <span
                key={node}
                className="font-mono-label text-xs uppercase tracking-[0.2em] text-ivory-dim"
              >
                {node}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h3 className="mt-16 text-center font-display text-3xl text-saffron-soft sm:text-5xl text-balance">
            Pecia is the connective tissue of food brand growth.
          </h3>
        </Reveal>
      </div>
    </section>
  );
}
