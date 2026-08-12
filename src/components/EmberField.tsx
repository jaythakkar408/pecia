"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

type Ember = {
  x: number;
  y: number;
  vy: number;
  vx: number;
  r: number;
  hue: [number, number, number];
  phase: number;
  speed: number;
};

const HUES: [number, number, number][] = [
  [244, 136, 29], // saffron
  [240, 180, 41], // turmeric
  [214, 35, 110], // rani
  [225, 58, 42], // vermilion
];

const COUNT = 46;

export function EmberField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const embers: Ember[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vy: -(0.12 + Math.random() * 0.22),
      vx: (Math.random() - 0.5) * 0.08,
      r: 0.8 + Math.random() * 1.6,
      hue: HUES[Math.floor(Math.random() * HUES.length)],
      phase: Math.random() * Math.PI * 2,
      speed: 0.008 + Math.random() * 0.01,
    }));

    let raf = 0;
    let t = 0;
    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, width, height);
      for (const e of embers) {
        e.y += e.vy;
        e.x += e.vx + Math.sin(t * e.speed + e.phase) * 0.15;
        if (e.y < -10) {
          e.y = height + 10;
          e.x = Math.random() * width;
        }
        if (e.x < -10) e.x = width + 10;
        if (e.x > width + 10) e.x = -10;

        const flicker = 0.4 + (Math.sin(t * e.speed * 3 + e.phase) + 1) * 0.3;
        const [r, g, b] = e.hue;
        const grad = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 5);
        grad.addColorStop(0, `rgba(${r},${g},${b},${flicker})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(1, flicker + 0.3)})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40 mix-blend-screen opacity-70"
      aria-hidden="true"
    />
  );
}
