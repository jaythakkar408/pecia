"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

// The site reads as one continuous journey — an ancient food civilization
// slowly becoming a modern brand-building engine. This spine makes that
// arc visible and literal: the same gradient that colors the fill also
// names the era you're in, so scrolling has a sense of direction instead
// of just length.
const ERA_STOPS = [
  { at: 0, name: "Origins", hex: "#9c2318" },
  { at: 0.16, name: "Tradition", hex: "#f4881d" },
  { at: 0.36, name: "The Method", hex: "#f0b429" },
  { at: 0.58, name: "Today", hex: "#0e8a72" },
  { at: 0.78, name: "Tomorrow", hex: "#4d52c4" },
  { at: 0.92, name: "Beyond", hex: "#2b2f7d" },
];

const GRADIENT = `linear-gradient(180deg, ${ERA_STOPS.map(
  (s) => `${s.hex} ${Math.round(s.at * 100)}%`
).join(", ")})`;
const GRADIENT_HORIZONTAL = `linear-gradient(90deg, ${ERA_STOPS.map(
  (s) => `${s.hex} ${Math.round(s.at * 100)}%`
).join(", ")})`;

function eraNameAt(progress: number) {
  let current = ERA_STOPS[0];
  for (const stop of ERA_STOPS) {
    if (progress >= stop.at) current = stop;
  }
  return current.name;
}

export function EraSpine() {
  const { scrollYProgress } = useScroll();
  const fill = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.3 });
  const reducedMotion = usePrefersReducedMotion();
  const [eraName, setEraName] = useState("Origins");

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const next = eraNameAt(v);
      setEraName((prev) => (prev === next ? prev : next));
    });
    return unsub;
  }, [scrollYProgress]);

  const markerTop = useTransform(fill, (v) => `${v * 100}%`);
  // Clamped so the pill-shaped chip (centered on this position) never has
  // its edge clipped by the viewport at the very start/end of the scroll.
  const markerLeft = useTransform(fill, (v) => `${Math.min(90, Math.max(10, v * 100))}%`);
  // clip-path (not scaleY/scaleX) so the gradient itself never gets
  // squeezed — only the visible window into it grows as you scroll.
  const clipVertical = useTransform(fill, (v) => `inset(0 0 ${(1 - v) * 100}% 0)`);
  const clipHorizontal = useTransform(fill, (v) => `inset(0 ${(1 - v) * 100}% 0 0)`);
  // The page itself gets quieter as it modernizes — a grain texture that's
  // present (ancient, tactile) at the top and nearly gone (clean, modern)
  // by the bottom, driven by the same scroll value as the spine.
  const grainOpacity = useTransform(fill, [0, 1], [0.07, 0.015]);

  return (
    <>
      <motion.div
        className="grain"
        aria-hidden="true"
        style={reducedMotion ? undefined : { opacity: grainOpacity }}
      />

      {/* Desktop: a vertical spine along the right edge. */}
      <div
        className="pointer-events-none fixed right-6 top-1/2 z-40 hidden h-[62vh] w-2.5 -translate-y-1/2 sm:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-full bg-white/70 shadow-[0_0_0_1px_rgba(28,18,8,0.12)]" />
        <motion.div
          className="absolute inset-0 rounded-full shadow-[0_0_16px_2px_rgba(0,0,0,0.15)]"
          style={{ background: GRADIENT, clipPath: clipVertical }}
        />
        <motion.div
          className={`absolute left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current shadow-[0_0_0_3px_white,0_0_14px_3px_currentColor] ${
            reducedMotion ? "" : "animate-heartbeat"
          }`}
          style={{ top: markerTop, color: ERA_STOPS.find((s) => s.name === eraName)?.hex }}
        />
        <div className="absolute right-4 top-0 -translate-y-1/2 whitespace-nowrap font-mono-label text-[9px] uppercase tracking-[0.25em] text-ink-soft/60">
          Origins
        </div>
        <div className="absolute bottom-0 right-4 translate-y-1/2 whitespace-nowrap font-mono-label text-[9px] uppercase tracking-[0.25em] text-ink-soft/60">
          Beyond
        </div>
        <motion.div
          className="absolute right-4 -translate-y-1/2 whitespace-nowrap rounded-full border border-ink-strong/15 bg-white/85 px-2.5 py-1 font-mono-label text-[9px] font-bold uppercase tracking-[0.25em] backdrop-blur-sm"
          style={{ top: markerTop, color: ERA_STOPS.find((s) => s.name === eraName)?.hex }}
        >
          {eraName}
        </motion.div>
      </div>

      {/* Mobile: a bold horizontal spine just beneath the nav bar. */}
      <div
        className="pointer-events-none fixed inset-x-0 top-[67px] z-40 h-2 sm:hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-white/70" />
        <motion.div
          className="absolute inset-0 shadow-[0_0_10px_1px_rgba(0,0,0,0.15)]"
          style={{ background: GRADIENT_HORIZONTAL, clipPath: clipHorizontal }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-ink-strong/15 bg-white/90 px-2 py-0.5 font-mono-label text-[8px] font-bold uppercase tracking-[0.2em] shadow-sm"
          style={{ left: markerLeft, x: "-50%", color: ERA_STOPS.find((s) => s.name === eraName)?.hex }}
        >
          {eraName}
        </motion.div>
      </div>
    </>
  );
}
