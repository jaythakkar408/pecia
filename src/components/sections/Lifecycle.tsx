"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";

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

const HEX = ["#f4881d", "#d6236e", "#f0b429", "#0e8a72", "#e13a2a", "#4d52c4"];

const STEP_X = 150;
const PAD_X = 70;
const HEIGHT = 300;
const MID_Y = 160;
const AMP = 60;

function smoothPath(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1];
    const p1 = points[i];
    const cx = (p0.x + p1.x) / 2;
    d += ` C ${cx},${p0.y} ${cx},${p1.y} ${p1.x},${p1.y}`;
  }
  return d;
}

export function Lifecycle() {
  const [active, setActive] = useState<number | null>(null);

  const points = useMemo(
    () =>
      STAGES.map((_, i) => ({
        x: PAD_X + i * STEP_X,
        y: MID_Y + Math.sin(i * 0.85) * AMP,
      })),
    []
  );
  const width = PAD_X * 2 + (STAGES.length - 1) * STEP_X;
  const pathD = useMemo(() => smoothPath(points), [points]);

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
            Pecia can participate at any stage. But the deeper work is a
            single, continuous lifeline.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 overflow-x-auto pb-6">
            <div
              className="relative"
              style={{ width, height: HEIGHT }}
              onMouseLeave={() => setActive(null)}
            >
              <svg
                width={width}
                height={HEIGHT}
                viewBox={`0 0 ${width} ${HEIGHT}`}
                className="absolute inset-0"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="lifelineGrad" x1="0" y1="0" x2="1" y2="0">
                    {HEX.concat(HEX[0]).map((c, i) => (
                      <stop key={i} offset={`${(i / HEX.length) * 100}%`} stopColor={c} />
                    ))}
                  </linearGradient>
                  <filter id="lifelineGlow" x="-20%" y="-100%" width="140%" height="300%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d={pathD}
                  fill="none"
                  stroke="url(#lifelineGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.85"
                  filter="url(#lifelineGlow)"
                />
                <circle r="6" fill="#fbeedb" filter="url(#lifelineGlow)">
                  <animateMotion dur="9s" repeatCount="indefinite" path={pathD} />
                </circle>
                <circle r="4" fill="#ffd166" opacity="0.7">
                  <animateMotion dur="9s" begin="-0.4s" repeatCount="indefinite" path={pathD} />
                </circle>
              </svg>

              {STAGES.map((stage, i) => {
                const p = points[i];
                const above = i % 2 === 0;
                const isActive = active === i;
                const color = HEX[i % HEX.length];
                return (
                  <div
                    key={stage.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: p.x, top: p.y }}
                  >
                    <button
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="block h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition"
                      style={{
                        borderColor: color,
                        background: isActive ? color : "#16130f",
                        boxShadow: isActive ? `0 0 16px ${color}` : "none",
                      }}
                      aria-label={stage.label}
                    />
                    <div
                      className={`pointer-events-none absolute left-1/2 w-36 -translate-x-1/2 text-center ${
                        above ? "bottom-full mb-4" : "top-full mt-4"
                      }`}
                    >
                      <span
                        className="font-mono-label text-[10px]"
                        style={{ color }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-0.5 font-display text-sm font-bold text-ivory sm:text-base">
                        {stage.label}
                      </h3>
                      {isActive && (
                        <p className="mt-1 text-[11px] leading-snug text-ivory-dim">
                          {stage.note}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-display text-2xl font-bold text-turmeric-soft sm:text-3xl">
            We don&rsquo;t just help brands open. We help them become.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
