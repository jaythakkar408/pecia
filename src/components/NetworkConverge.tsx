"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

type Particle = {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  targetX: number;
  targetY: number;
  color: string;
  radius: number;
};

const CATEGORY_COLORS = [
  "#e2872f", // saffron
  "#b3402b", // spice
  "#c99a2e", // turmeric
  "#a97540", // copper
  "#333c72", // indigo soft
  "#1f6e5c", // emerald
];

function samplePointsFromText(
  text: string,
  width: number,
  height: number,
  fontSize: number
) {
  const off = document.createElement("canvas");
  off.width = width;
  off.height = height;
  const ctx = off.getContext("2d");
  if (!ctx) return [] as { x: number; y: number }[];

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fff";
  ctx.font = `700 ${fontSize}px Georgia, "Times New Roman", serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);

  const data = ctx.getImageData(0, 0, width, height).data;
  const points: { x: number; y: number }[] = [];
  const stride = Math.max(3, Math.floor(width / 220));
  for (let y = 0; y < height; y += stride) {
    for (let x = 0; x < width; x += stride) {
      const alpha = data[(y * width + x) * 4 + 3];
      if (alpha > 128) points.push({ x, y });
    }
  }
  return points;
}

export function NetworkConverge({
  word = "PECIA",
  particleCount = 420,
  className,
  caption,
  dark = false,
}: {
  word?: string;
  particleCount?: number;
  className?: string;
  caption?: string;
  dark?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const convergedRef = useRef(reducedMotion);
  const [converged, setConverged] = useState(reducedMotion);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const init = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const fontSize = Math.min(width * 0.16, height * 0.5);
      const targets = samplePointsFromText(word, width, height, fontSize);

      particlesRef.current = Array.from({ length: particleCount }, (_, i) => {
        const target = targets.length
          ? targets[i % targets.length]
          : { x: width / 2, y: height / 2 };
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          homeX: Math.random() * width,
          homeY: Math.random() * height,
          targetX: target.x + (Math.random() - 0.5) * 1.5,
          targetY: target.y + (Math.random() - 0.5) * 1.5,
          color: CATEGORY_COLORS[i % CATEGORY_COLORS.length],
          radius: Math.random() * 1.3 + 0.7,
        };
      });
    };
    init();
    window.addEventListener("resize", init);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
          convergedRef.current = true;
          setConverged(true);
        }
      },
      { threshold: [0, 0.4, 1] }
    );
    observer.observe(container);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;
      const target = convergedRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const goalX = target ? p.targetX : p.homeX;
        const goalY = target ? p.targetY : p.homeY;
        p.x += (goalX - p.x) * (target ? 0.045 : 0.02);
        p.y += (goalY - p.y) * (target ? 0.045 : 0.02);

        if (!target) {
          p.x += Math.sin(Date.now() * 0.0004 + i) * 0.15;
          p.y += Math.cos(Date.now() * 0.0004 + i) * 0.15;
        }
      }

      if (!target) {
        ctx.strokeStyle = dark
          ? "rgba(244, 236, 220, 0.06)"
          : "rgba(28, 18, 8, 0.06)";
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = dx * dx + dy * dy;
            if (dist < 3600) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = target ? 0.9 : 0.7;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", init);
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [word, particleCount, reducedMotion, dark]);

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {caption && (
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-4 text-center font-mono-label text-[11px] uppercase tracking-[0.3em] ${dark ? "text-ivory-dim" : "text-ink-soft"} transition-opacity duration-700 ${
            converged ? "opacity-100" : "opacity-0"
          }`}
        >
          {caption}
        </div>
      )}
    </div>
  );
}
