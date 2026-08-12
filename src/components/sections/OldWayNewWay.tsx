"use client";

import { Reveal } from "@/components/Reveal";

const OLD_WAY = ["Enter India", "Find a location", "Open", "Hope", "Franchise", "Repeat"];
const PECIA_WAY = [
  "Understand India",
  "Understand the consumer",
  "Define the proposition",
  "Localize",
  "Build the brand",
  "Engineer the operations",
  "Validate economics",
  "Build the franchise system",
  "Create repeatability",
  "Scale intelligently",
];

export function OldWayNewWay() {
  return (
    <section className="relative bg-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            The Difference
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-3xl text-ivory sm:text-5xl text-balance">
            The old way vs. the Pecia way.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-ivory/10 bg-ink/40 p-8 opacity-70">
              <h3 className="font-mono-label text-xs uppercase tracking-[0.25em] text-ivory-dim">
                The Old Way
              </h3>
              <ol className="mt-6 space-y-3">
                {OLD_WAY.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-ivory-dim">
                    <span className="font-mono-label text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl border border-saffron/30 bg-saffron/5 p-8">
              <h3 className="font-mono-label text-xs uppercase tracking-[0.25em] text-saffron-soft">
                The Pecia Way
              </h3>
              <ol className="mt-6 space-y-3">
                {PECIA_WAY.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-ivory">
                    <span className="font-mono-label text-xs text-saffron">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
