"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_TEXT, hue } from "@/lib/palette";

const ENTITIES = [
  "Global Brands", "Indian Entrepreneurs", "Restaurant Owners", "Franchisees",
  "Operators", "Investors", "Real Estate Partners", "Suppliers",
  "Technology Partners", "Marketing Partners", "Consumers",
];

export function Ecosystem() {
  return (
    <section className="relative mesh-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-soft">
            The Pecia Ecosystem
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-3xl font-bold text-ivory sm:text-5xl text-balance">
            The network grows stronger with every connection.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-16 flex flex-wrap items-center justify-center gap-3">
            {ENTITIES.map((entity, i) => (
              <span
                key={entity}
                className={`rounded-full border border-ivory/12 bg-ink/50 px-4 py-2 text-sm font-medium transition hover:border-ivory/40 ${hue(HUE_TEXT, i)}`}
              >
                {entity}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="animate-heartbeat mx-auto mt-14 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-turmeric bg-ink font-display text-sm font-bold text-turmeric-soft shadow-[0_0_40px_rgba(240,180,41,0.3)]">
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
