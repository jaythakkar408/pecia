"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "@/components/SoundProvider";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

const VEIN_COUNT = 44;
// A warm, north-Indian-classical-leaning pentatonic run across two octaves.
const SCALE = [220, 246.94, 277.18, 329.63, 369.99, 440, 493.88, 554.37, 659.25, 739.99];
// Lifeblood colors — each vein carries a different vivid thread of it.
const VEIN_COLORS = [
  [244, 136, 29], // saffron
  [214, 35, 110], // rani pink
  [240, 180, 41], // turmeric
  [14, 138, 114], // peacock
  [225, 58, 42], // vermilion
  [77, 82, 196], // indigo
];

// One cardiac cycle: a quick "lub" then a softer "dub".
const BEAT_PERIOD = 1150;
function heartbeatCurve(msIntoCycle: number) {
  const t = msIntoCycle / BEAT_PERIOD;
  const lub = Math.exp(-Math.pow((t - 0.06) * 11, 2));
  const dub = Math.exp(-Math.pow((t - 0.24) * 14, 2)) * 0.6;
  return Math.min(1, lub + dub);
}

type VeinState = {
  offset: number;
  velocity: number;
  lastPluckAt: number;
};

export function PulseHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const veinsRef = useRef<VeinState[]>(
    Array.from({ length: VEIN_COUNT }, () => ({
      offset: 0,
      velocity: 0,
      lastPluckAt: -1000,
    }))
  );
  const pluckedSetRef = useRef<Set<number>>(new Set());
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);
  const { pluck, heartbeat } = useSound();
  const reducedMotion = usePrefersReducedMotion();

  const [opened, setOpened] = useState(false);
  const [pluckedCount, setPluckedCount] = useState(0);

  const handleReveal = useCallback(() => setOpened(true), []);

  // Ambient heartbeat sound — only while this section is on screen.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let interval: ReturnType<typeof setInterval> | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heartbeat();
          interval = setInterval(heartbeat, BEAT_PERIOD);
        } else if (interval) {
          clearInterval(interval);
          interval = null;
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, [heartbeat]);

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const startedAt = performance.now();

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const gap = () => width / VEIN_COUNT;
    const sourceX = () => width / 2;
    const sourceY = () => height - 10;

    // Point along vein i at parameter t (0 = source, 1 = tip), before pluck displacement.
    const veinPoint = (i: number, t: number) => {
      const g = gap();
      const tipX = g * i + g / 2;
      const sx = sourceX();
      const sy = sourceY();
      const cx = sx + (tipX - sx) * 0.55;
      const cy = height * 0.42;
      const it = 1 - t;
      const x = it * it * sx + 2 * it * t * cx + t * t * tipX;
      const y = it * it * sy + 2 * it * t * cy + t * t * 0;
      return { x, y, tipX };
    };

    const triggerNear = (x: number, y: number) => {
      const veins = veinsRef.current;
      const g = gap();
      const now = performance.now();
      const tApprox = Math.min(1, Math.max(0, 1 - y / height));
      veins.forEach((s, i) => {
        const p = veinPoint(i, tApprox);
        const dist = Math.abs(p.x - x);
        if (dist < g * 1.4) {
          s.velocity += (dist < g * 0.5 ? 14 : 7) * (x > p.x ? -1 : 1);
          if (now - s.lastPluckAt > 220) {
            s.lastPluckAt = now;
            const note = SCALE[i % SCALE.length];
            pluck(note, 1.4);
            if (!pluckedSetRef.current.has(i)) {
              pluckedSetRef.current.add(i);
              setPluckedCount(pluckedSetRef.current.size);
            }
          }
        }
      });
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointerRef.current = { x, y };
      // Plucks on plain hover, not just click-and-drag — dragging still
      // works too since a drag is a series of these same move events.
      triggerNear(x, y);
    };
    const onPointerDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      triggerNear(e.clientX - rect.left, e.clientY - rect.top);
    };
    const onPointerLeave = () => {
      pointerRef.current = null;
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointerleave", onPointerLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const g = gap();
      const veins = veinsRef.current;
      const pointer = pointerRef.current;
      const elapsed = performance.now() - startedAt;
      const beat = heartbeatCurve(elapsed % BEAT_PERIOD);

      for (let i = 0; i < veins.length; i++) {
        const s = veins[i];
        const springForce = -s.offset * 0.06;
        const damping = s.velocity * 0.9;
        s.velocity += springForce - damping * 0.06;
        s.offset += s.velocity * 0.6;

        let hoverBoost = 0;
        if (pointer) {
          const tHover = Math.min(1, Math.max(0, 1 - pointer.y / height));
          const atHover = veinPoint(i, tHover);
          const hoverDist = Math.abs(pointer.x - atHover.x);
          if (hoverDist < g * 3) {
            hoverBoost = (1 - hoverDist / (g * 3)) * 6;
          }
        }

        const segments = 26;
        ctx.beginPath();
        for (let seg = 0; seg <= segments; seg++) {
          const t = seg / segments;
          const p = veinPoint(i, t);
          const bow = Math.sin(t * Math.PI) * (s.offset + hoverBoost);
          const x = p.x + bow;
          if (seg === 0) ctx.moveTo(x, p.y);
          else ctx.lineTo(x, p.y);
        }
        const [tr, tg, tb] = VEIN_COLORS[i % VEIN_COLORS.length];
        const warmth = 0.45 + (Math.sin(i * 0.7) + 1) * 0.1 + beat * 0.3;
        ctx.strokeStyle = `rgba(${tr}, ${tg}, ${tb}, ${Math.min(1, warmth)})`;
        ctx.lineWidth = 1.5 + beat * 0.9;
        ctx.stroke();

        ctx.beginPath();
        const mid = veinPoint(i, 0.5);
        const bow2 = Math.sin(Math.PI / 2) * (s.offset + hoverBoost);
        const glow = Math.min(0.9, Math.abs(s.velocity) * 0.07 + beat * 0.18);
        ctx.fillStyle = `rgba(${tr}, ${tg}, ${tb}, ${glow})`;
        ctx.arc(mid.x + bow2, mid.y, 3.2 + beat * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // The source — a living pulse everything else branches from.
      const sx = sourceX();
      const sy = sourceY();
      const coreR = 22 + beat * 20;
      const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, coreR);
      grad.addColorStop(0, `rgba(244, 136, 29, ${0.55 + beat * 0.4})`);
      grad.addColorStop(0.5, `rgba(225, 58, 42, ${0.25 + beat * 0.2})`);
      grad.addColorStop(1, "rgba(225, 58, 42, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(sx, sy, coreR, 0, Math.PI * 2);
      ctx.fill();

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pluck, reducedMotion]);

  useEffect(() => {
    if (pluckedCount >= 7 && !opened) {
      const timeout = setTimeout(() => setOpened(true), 500);
      return () => clearTimeout(timeout);
    }
  }, [pluckedCount, opened]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative h-[100svh] w-full overflow-hidden mesh-dusk"
      aria-label="Pecia opening experience"
    >
      <div
        ref={containerRef}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          opened ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {!reducedMotion && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full touch-none"
            role="img"
            aria-label="A field of pulsing, vein-like vessels that play musical notes when touched"
          />
        )}

        <AnimatePresence>
          {!opened && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="pointer-events-none absolute inset-x-0 top-[18%] flex flex-col items-center gap-3 text-center"
            >
              <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-soft">
                Pecia Food Brands Private Limited
              </span>
              <h1 className="font-display text-5xl font-extrabold uppercase text-gradient-warm sm:text-7xl">
                Touch it.
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className={`pointer-events-none absolute inset-x-0 bottom-14 flex flex-col items-center gap-4 px-6 text-center transition-opacity duration-700 ${
            opened ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="max-w-xs font-mono-label text-[11px] uppercase tracking-[0.3em] text-ivory-dim sm:max-w-none">
            {reducedMotion
              ? "A living pulse lives here — motion reduced for your device"
              : "Drag across the veins below. Feel it pulse."}
          </p>
          <button
            onClick={handleReveal}
            className="pointer-events-auto rounded-full border border-turmeric-soft/50 px-6 py-2 font-mono-label text-[11px] uppercase tracking-[0.3em] text-ivory transition hover:border-rani hover:text-rani-soft"
          >
            {reducedMotion ? "Enter" : "Skip to India →"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 text-center"
          >
            <span className="font-mono-label text-[11px] uppercase tracking-[0.4em] text-turmeric-soft">
              It leads here
            </span>
            <h2 className="font-display text-6xl font-black uppercase text-gradient-sunrise sm:text-8xl">
              INDIA.
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-4 z-30 flex justify-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: opened ? 0 : Infinity }}
          className={`transition-opacity duration-700 ${opened ? "opacity-60" : "opacity-30"}`}
        >
          <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
            <rect x="1" y="1" width="16" height="26" rx="8" stroke="#f4ecdc" strokeOpacity="0.5" />
            <circle cx="9" cy="8" r="2" fill="#e2872f" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
