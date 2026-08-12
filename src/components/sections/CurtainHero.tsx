"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "@/components/SoundProvider";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

const STRING_COUNT = 48;
// A warm, north-Indian-classical-leaning pentatonic run across two octaves.
const SCALE = [220, 246.94, 277.18, 329.63, 369.99, 440, 493.88, 554.37, 659.25, 739.99];

type StringState = {
  offset: number;
  velocity: number;
  lastPluckAt: number;
};

export function CurtainHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stringsRef = useRef<StringState[]>(
    Array.from({ length: STRING_COUNT }, () => ({
      offset: 0,
      velocity: 0,
      lastPluckAt: -1000,
    }))
  );
  const pluckedSetRef = useRef<Set<number>>(new Set());
  const pointerRef = useRef<{ x: number; y: number; down: boolean } | null>(null);
  const rafRef = useRef<number | null>(null);
  const { pluck } = useSound();
  const reducedMotion = usePrefersReducedMotion();

  const [opened, setOpened] = useState(false);
  const [pluckedCount, setPluckedCount] = useState(0);

  const handleReveal = useCallback(() => setOpened(true), []);

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

    const gap = () => width / STRING_COUNT;

    const triggerNear = (x: number) => {
      const strings = stringsRef.current;
      const g = gap();
      const now = performance.now();
      strings.forEach((s, i) => {
        const sx = g * i + g / 2;
        const dist = Math.abs(sx - x);
        if (dist < g * 1.4) {
          s.velocity += (dist < g * 0.5 ? 14 : 7) * (x > sx ? -1 : 1);
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
      pointerRef.current = { x, y, down: e.buttons > 0 };
      if (e.buttons > 0) triggerNear(x);
    };
    const onPointerDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      triggerNear(e.clientX - rect.left);
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
      const strings = stringsRef.current;
      const pointer = pointerRef.current;

      for (let i = 0; i < strings.length; i++) {
        const s = strings[i];
        const springForce = -s.offset * 0.06;
        const damping = s.velocity * 0.9;
        s.velocity += springForce - damping * 0.06;
        s.offset += s.velocity * 0.6;

        const baseX = g * i + g / 2;
        const hoverBoost =
          pointer && Math.abs(pointer.x - baseX) < g * 3
            ? (1 - Math.abs(pointer.x - baseX) / (g * 3)) * 6
            : 0;

        const segments = 24;
        ctx.beginPath();
        for (let seg = 0; seg <= segments; seg++) {
          const t = seg / segments;
          const bow = Math.sin(t * Math.PI) * (s.offset + hoverBoost);
          const x = baseX + bow;
          const y = t * height;
          if (seg === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const warmth = 0.55 + (Math.sin(i * 0.7) + 1) * 0.08;
        ctx.strokeStyle = `rgba(226, 135, 47, ${warmth})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.beginPath();
        const t2 = 0.5;
        const bow2 = Math.sin(t2 * Math.PI) * (s.offset + hoverBoost);
        ctx.fillStyle = `rgba(244, 236, 220, ${Math.min(0.5, Math.abs(s.velocity) * 0.05)})`;
        ctx.arc(baseX + bow2, height * 0.5, 3, 0, Math.PI * 2);
        ctx.fill();
      }

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
      id="story"
      className="relative h-[100svh] w-full overflow-hidden bg-ink"
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
            aria-label="An interactive woven curtain that plays musical notes when touched"
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
              <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-ivory-dim">
                Pecia Food Brands Private Limited
              </span>
              <h1 className="font-display text-4xl italic text-ivory sm:text-5xl">
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
              ? "An interactive curtain lives here — motion reduced for your device"
              : "Drag across the strings. The fabric is an instrument."}
          </p>
          <button
            onClick={handleReveal}
            className="pointer-events-auto rounded-full border border-ivory-dim/40 px-6 py-2 font-mono-label text-[11px] uppercase tracking-[0.3em] text-ivory transition hover:border-saffron hover:text-saffron"
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
            <span className="font-mono-label text-[11px] uppercase tracking-[0.4em] text-saffron">
              Behind the curtain
            </span>
            <h2 className="font-display text-5xl text-ivory sm:text-7xl">
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
