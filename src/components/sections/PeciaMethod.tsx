"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_BORDER, HUE_TEXT, hue } from "@/lib/palette";

const STEPS = [
  { label: "Understand", note: "The market, consumer, culture and opportunity." },
  { label: "Define", note: "The brand, proposition, format and positioning." },
  { label: "Build", note: "The product, brand, operations and economics." },
  { label: "Validate", note: "The concept and unit model." },
  { label: "Systemize", note: "The processes, training, standards and franchise architecture." },
  { label: "Scale", note: "The brand through intelligent expansion." },
  { label: "Optimize", note: "Using data, feedback and continuous improvement." },
];

export function PeciaMethod() {
  return (
    <section className="relative mesh-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-soft">
            The Pecia Method
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-ivory sm:text-5xl text-balance">
            Experience, made into a system.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-xl text-ivory-dim">
            Pecia&rsquo;s expertise doesn&rsquo;t live only in individual
            judgment — it&rsquo;s built into a repeatable operating
            methodology.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.05} y={16}>
              <div
                className={`h-full rounded-2xl border-t-4 bg-ink/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-ink/80 ${hue(HUE_BORDER, i)}`}
              >
                <span className={`font-mono-label text-xs font-bold ${hue(HUE_TEXT, i)}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-ivory">
                  {step.label}
                </h3>
                <p className="mt-2 text-sm text-ivory-dim">{step.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-14 text-center font-mono-label text-xs uppercase tracking-[0.3em] text-turmeric-soft">
            Experience + System + Data + Execution
          </p>
        </Reveal>
      </div>
    </section>
  );
}
