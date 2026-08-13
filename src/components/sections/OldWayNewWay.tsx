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
    <section className="relative paper-indigo py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-deep">
            The Difference
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink-strong sm:text-5xl text-balance">
            The old way vs. the Pecia way.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-ink-strong/12 bg-white/50 p-8 opacity-70">
              <h3 className="font-mono-label text-xs uppercase tracking-[0.25em] text-ink-soft">
                The Old Way
              </h3>
              <ol className="mt-6 space-y-3">
                {OLD_WAY.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-ink-soft">
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
            <div className="h-full rounded-2xl border-2 border-turmeric mesh-spice p-8 shadow-[0_0_50px_rgba(240,180,41,0.15)]">
              <h3 className="font-mono-label text-xs uppercase tracking-[0.25em] text-turmeric-soft">
                The Pecia Way
              </h3>
              <ol className="mt-6 space-y-3">
                {PECIA_WAY.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 font-medium text-ivory">
                    <span className="font-mono-label text-xs text-turmeric-soft">
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
