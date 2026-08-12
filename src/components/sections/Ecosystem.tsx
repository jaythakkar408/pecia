"use client";

import { Reveal } from "@/components/Reveal";

const ENTITIES = [
  "Global Brands", "Indian Entrepreneurs", "Restaurant Owners", "Franchisees",
  "Operators", "Investors", "Real Estate Partners", "Suppliers",
  "Technology Partners", "Marketing Partners", "Consumers",
];

export function Ecosystem() {
  return (
    <section className="relative bg-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            The Pecia Ecosystem
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-3xl text-ivory sm:text-5xl text-balance">
            The network grows stronger with every connection.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-16 flex flex-wrap items-center justify-center gap-3">
            {ENTITIES.map((entity) => (
              <span
                key={entity}
                className="rounded-full border border-ivory/12 bg-ink/60 px-4 py-2 text-sm text-ivory-dim transition hover:border-saffron/40 hover:text-ivory"
              >
                {entity}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mx-auto mt-14 inline-flex h-20 w-20 items-center justify-center rounded-full border border-saffron/40 bg-saffron/10 font-display text-sm text-saffron-soft">
            PECIA
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mt-10 max-w-xl mx-auto text-ivory-dim">
            Pecia sits at the center — not to control the network, but to
            connect it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
