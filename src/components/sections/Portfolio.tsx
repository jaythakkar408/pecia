"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_BORDER, HUE_TEXT_DEEP, hue } from "@/lib/palette";

const CATEGORIES = [
  { label: "Brands We Build", note: "Proprietary or co-created brands." },
  { label: "Brands We Represent", note: "Market or franchise relationships." },
  { label: "Brands We Operate", note: "Businesses where Pecia has an operating role." },
  { label: "Brands We Help Scale", note: "External brands supported through strategy, operations or expansion." },
  { label: "Brands We Help Enter India", note: "International companies using Pecia's India capabilities." },
];

export function Portfolio() {
  return (
    <section id="brands" className="relative paper-deep py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-deep">
            Our Brands
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-ink-strong sm:text-5xl text-balance">
            An architecture built to grow.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-xl text-ink-soft">
            Pecia is early. This is the structure our portfolio will fill as
            partnerships close — five ways a brand can work with us.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.05} y={14}>
              <div
                className={`flex h-full flex-col justify-between rounded-2xl border border-dashed p-7 transition-all duration-300 hover:-translate-y-1 hover:border-solid hover:bg-white/70 ${hue(HUE_BORDER, i)}`}
              >
                <div>
                  <h3 className={`font-display text-xl font-bold ${hue(HUE_TEXT_DEEP, i)}`}>
                    {cat.label}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">{cat.note}</p>
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
