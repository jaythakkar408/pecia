"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";

const CAPABILITIES = [
  { label: "Enter India", note: "Market entry strategy and local execution." },
  { label: "Master Franchise", note: "Bridging international brands and Indian growth." },
  { label: "Localize", note: "Adapting global concepts for Indian consumers." },
  { label: "Build", note: "Turning restaurants and concepts into brands." },
  { label: "Operate", note: "Operational systems, execution and local support." },
  { label: "Franchise", note: "Creating scalable franchise architecture." },
  { label: "Expand", note: "City-by-city and region-by-region growth." },
  { label: "Transform", note: "Improving existing food businesses." },
  { label: "Create", note: "Developing proprietary concepts and brands." },
  { label: "Consult", note: "Strategic guidance for food businesses." },
  { label: "Intelligence", note: "Understanding markets, consumers and opportunity." },
  { label: "Scale", note: "Building repeatable systems for growth." },
];

export function CapabilityEcosystem() {
  const [active, setActive] = useState(0);

  const positions = useMemo(
    () =>
      CAPABILITIES.map((_, i) => {
        const angle = (i / CAPABILITIES.length) * Math.PI * 2 - Math.PI / 2;
        return {
          x: Math.round((50 + 42 * Math.cos(angle)) * 1000) / 1000,
          y: Math.round((50 + 42 * Math.sin(angle)) * 1000) / 1000,
        };
      }),
    []
  );

  return (
    <section id="what-we-do" className="relative bg-ink py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            The Capability Ecosystem
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-ivory sm:text-5xl text-balance">
            Pecia&rsquo;s advantage isn&rsquo;t one service. It&rsquo;s the
            system.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-16 aspect-square w-full max-w-2xl">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              {positions.map((p, i) => (
                <line
                  key={i}
                  x1={50}
                  y1={50}
                  x2={p.x}
                  y2={p.y}
                  stroke={i === active ? "#e2872f" : "rgba(244,236,220,0.12)"}
                  strokeWidth={i === active ? 0.5 : 0.3}
                />
              ))}
            </svg>

            <button
              onClick={() => setActive((a) => (a + 1) % CAPABILITIES.length)}
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-saffron/40 bg-charcoal-soft font-display text-sm text-saffron-soft sm:h-24 sm:w-24 sm:text-base"
            >
              PECIA
            </button>

            {CAPABILITIES.map((cap, i) => (
              <button
                key={cap.label}
                onClick={() => setActive(i)}
                style={{
                  left: `${positions[i].x}%`,
                  top: `${positions[i].y}%`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-2.5 py-1.5 font-mono-label text-[9px] uppercase tracking-[0.12em] transition sm:px-3 sm:py-2 sm:text-[10px] ${
                  i === active
                    ? "border-saffron bg-saffron/15 text-saffron-soft"
                    : "border-ivory/15 bg-ink text-ivory-dim hover:border-ivory/40"
                }`}
              >
                {cap.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 max-w-md text-center">
            <h3 className="font-display text-2xl text-ivory">
              {CAPABILITIES[active].label}
            </h3>
            <p className="mt-2 text-sm text-ivory-dim">
              {CAPABILITIES[active].note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
