"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";

const NODES = [
  "Consumer", "Menu", "Pricing", "Location", "Operations",
  "People", "Franchise", "Marketing", "Unit Economics",
  "Expansion", "Brand Value",
];

const HEX = ["#f4881d", "#d6236e", "#f0b429", "#0e8a72", "#e13a2a", "#4d52c4"];

const CX = 250;
const CY = 195;
const RX = 220;
const RY = 155;
const K = 0.5523;

const LOOP_PATH = `M ${CX + RX},${CY} C ${CX + RX},${CY + RY * K} ${CX + RX * K},${CY + RY} ${CX},${CY + RY} C ${CX - RX * K},${CY + RY} ${CX - RX},${CY + RY * K} ${CX - RX},${CY} C ${CX - RX},${CY - RY * K} ${CX - RX * K},${CY - RY} ${CX},${CY - RY} C ${CX + RX * K},${CY - RY} ${CX + RX},${CY - RY * K} ${CX + RX},${CY} Z`;

export function IndiaEngine() {
  const [active, setActive] = useState<number | null>(null);

  const points = useMemo(
    () =>
      NODES.map((_, i) => {
        const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
        return {
          x: CX + RX * Math.cos(angle),
          y: CY + RY * Math.sin(angle),
        };
      }),
    []
  );

  return (
    <section className="relative paper-peacock py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-deep">
            The India Engine
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-ink-strong sm:text-5xl text-balance">
            Food businesses are living systems. Change one variable and the
            whole circulation responds.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-16 aspect-[500/390] w-full max-w-xl">
            <svg viewBox="0 0 500 390" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <filter id="engineGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path d={LOOP_PATH} fill="none" stroke="rgba(28,18,8,0.15)" strokeWidth="1.5" />
              <circle r="5" fill="#86620f" filter="url(#engineGlow)">
                <animateMotion dur="10s" repeatCount="indefinite" path={LOOP_PATH} />
              </circle>
              <circle r="3.5" fill="#f4881d" opacity="0.75">
                <animateMotion dur="10s" begin="-2.5s" repeatCount="indefinite" path={LOOP_PATH} />
              </circle>
              <circle r="3.5" fill="#d6236e" opacity="0.6">
                <animateMotion dur="10s" begin="-5s" repeatCount="indefinite" path={LOOP_PATH} />
              </circle>
            </svg>

            {NODES.map((node, i) => {
              const p = points[i];
              const color = HEX[i % HEX.length];
              const isActive = active === i;
              return (
                <button
                  key={node}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  style={{
                    left: `${(p.x / 500) * 100}%`,
                    top: `${(p.y / 390) * 100}%`,
                    borderColor: isActive ? color : "rgba(28,18,8,0.18)",
                    color: isActive ? color : undefined,
                    boxShadow: isActive ? `0 0 18px ${color}55` : "none",
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border bg-white/70 px-3 py-1.5 font-mono-label text-[10px] uppercase tracking-[0.1em] text-ink-strong transition sm:px-4 sm:py-2 sm:text-xs"
                >
                  {node}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-md text-center text-sm text-ink-soft">
            {active !== null
              ? `Shift ${NODES[active]}, and pricing, operations, unit economics and brand value all move with it.`
              : "Hover a variable to see how it ripples through the rest of the engine."}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-display text-2xl font-bold text-turmeric-deep sm:text-3xl">
            Pecia understands the system.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
