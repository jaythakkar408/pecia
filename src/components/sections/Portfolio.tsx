"use client";

import { Reveal } from "@/components/Reveal";

const CATEGORIES = [
  { label: "Brands We Build", note: "Proprietary or co-created brands." },
  { label: "Brands We Represent", note: "Market or franchise relationships." },
  { label: "Brands We Operate", note: "Businesses where Pecia has an operating role." },
  { label: "Brands We Help Scale", note: "External brands supported through strategy, operations or expansion." },
  { label: "Brands We Help Enter India", note: "International companies using Pecia's India capabilities." },
];

export function Portfolio() {
  return (
    <section id="brands" className="relative bg-charcoal-soft py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            Our Brands
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-ivory sm:text-5xl text-balance">
            An architecture built to grow.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-xl text-ivory-dim">
            Pecia is early. This is the structure our portfolio will fill as
            partnerships close — five ways a brand can work with us.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.05} y={14}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-ivory/15 p-7">
                <div>
                  <h3 className="font-display text-xl text-ivory">
                    {cat.label}
                  </h3>
                  <p className="mt-2 text-sm text-ivory-dim">{cat.note}</p>
                </div>
                <span className="mt-6 font-mono-label text-[10px] uppercase tracking-[0.25em] text-copper">
                  This could be you →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
