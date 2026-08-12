"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_BORDER, HUE_TEXT, hue } from "@/lib/palette";

const STAGES = [
  { label: "Discover", note: "Understand the opportunity." },
  { label: "Validate", note: "Test the concept." },
  { label: "Create", note: "Build the product and proposition." },
  { label: "Brand", note: "Build identity, positioning and experience." },
  { label: "Launch", note: "Take it to market." },
  { label: "Operate", note: "Build consistent execution." },
  { label: "Optimize", note: "Improve performance." },
  { label: "Franchise", note: "Make the model repeatable." },
  { label: "Expand", note: "Enter new markets." },
  { label: "Nationalize", note: "Build a national footprint." },
  { label: "Internationalize", note: "Take the brand beyond India." },
];

export function Lifecycle() {
  return (
    <section className="relative mesh-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-soft">
            The Full Food Brand Lifecycle
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-ivory sm:text-5xl text-balance">
            Pecia can participate at any stage. But the deeper work is the
            whole journey.
          </h2>
        </Reveal>

        <div className="mt-16 overflow-x-auto pb-4">
          <div className="flex min-w-max items-stretch gap-3">
            {STAGES.map((stage, i) => (
              <Reveal key={stage.label} delay={i * 0.02} y={12} className="flex items-stretch">
                <div className="flex items-center gap-3">
                  <div className={`w-44 rounded-xl border bg-ink/60 p-5 ${hue(HUE_BORDER, i)}`}>
                    <span className={`font-mono-label text-[10px] font-bold ${hue(HUE_TEXT, i)}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-ivory">
                      {stage.label}
                    </h3>
                    <p className="mt-2 text-xs text-ivory-dim">{stage.note}</p>
                  </div>
                  {i < STAGES.length - 1 && (
                    <span className={hue(HUE_TEXT, i)} aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-display text-2xl font-bold text-turmeric-soft sm:text-3xl">
            We don&rsquo;t just help brands open. We help them become.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
