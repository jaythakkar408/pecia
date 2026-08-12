"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { HUE_BG_SOFT, HUE_BORDER, HUE_TEXT, hue } from "@/lib/palette";

const HEX = ["#f4881d", "#d6236e", "#f0b429", "#0e8a72", "#e13a2a", "#4d52c4"];

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
    <section id="what-we-do" className="relative mesh-indigo py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-soft">
            The Capability Ecosystem
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-ivory sm:text-5xl text-balance">
            Pecia&rsquo;s advantage isn&rsquo;t one service. It&rsquo;s the
            system.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-16 aspect-square w-full max-w-2xl">
            <div
              className="absolute inset-[6%] rounded-full opacity-60"
              style={{
                background:
                  "radial-gradient(circle, rgba(240,180,41,0.08) 0%, rgba(240,180,41,0.03) 55%, transparent 75%)",
              }}
              aria-hidden="true"
            />
            <motion.svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(240,180,41,0.25)" strokeWidth="0.3" strokeDasharray="0.6 2.4" />
            </motion.svg>
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(251,238,219,0.08)" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(251,238,219,0.1)" strokeWidth="0.3" />
            </svg>
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
                  stroke={i === active ? HEX[i % HEX.length] : "rgba(251,238,219,0.14)"}
                  strokeWidth={i === active ? 0.6 : 0.3}
                />
              ))}
            </svg>

            <button
              onClick={() => setActive((a) => (a + 1) % CAPABILITIES.length)}
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-turmeric bg-ink font-display text-sm font-bold text-turmeric-soft shadow-[0_0_40px_rgba(240,180,41,0.35)] sm:h-24 sm:w-24 sm:text-base"
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
                    ? `${hue(HUE_BORDER, i)} ${hue(HUE_BG_SOFT, i)} ${hue(HUE_TEXT, i)} border-opacity-100`
                    : "border-ivory/20 bg-ink/40 text-ivory-dim hover:border-ivory/40"
                }`}
              >
                {cap.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 max-w-md text-center">
            <h3 className={`font-display text-2xl font-bold ${hue(HUE_TEXT, active)}`}>
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
