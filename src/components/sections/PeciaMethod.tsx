"use client";

import { Reveal } from "@/components/Reveal";

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
    <section className="relative bg-charcoal-soft py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            The Pecia Method
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-ivory sm:text-5xl text-balance">
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
              <div className="h-full rounded-2xl border border-ivory/10 bg-ink/50 p-6">
                <span className="font-mono-label text-xs text-copper">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-ivory">
                  {step.label}
                </h3>
                <p className="mt-2 text-sm text-ivory-dim">{step.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-14 text-center font-mono-label text-xs uppercase tracking-[0.3em] text-saffron-soft">
            Experience + System + Data + Execution
          </p>
        </Reveal>
      </div>
    </section>
  );
}
