"use client";

import { motion } from "framer-motion";

export type MapCity = { name: string; x: number; y: number };
export type MapRegion = {
  id: string;
  name: string;
  hex: string;
  cities: MapCity[];
};

export function IndiaMap({
  regions,
  active,
  onSelect,
}: {
  regions: MapRegion[];
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 100 128"
        className="mx-auto h-auto w-full max-w-sm"
        role="img"
        aria-label="A network map of India's regions, grouped by consumer behavior"
      >
        <defs>
          <filter id="dotGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {regions.map((region) => {
          const isActive = region.id === active;
          const cities = region.cities;
          return (
            <g key={region.id} opacity={isActive ? 1 : 0.38}>
              {cities.map((a, i) =>
                cities.slice(i + 1).map((b, j) => (
                  <line
                    key={`${i}-${j}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke={region.hex}
                    strokeWidth={isActive ? 0.35 : 0.2}
                  />
                ))
              )}
            </g>
          );
        })}

        {regions.map((region) => {
          const isActive = region.id === active;
          return (
            <g key={region.id}>
              {region.cities.map((city) => (
                <g
                  key={city.name}
                  className="cursor-pointer"
                  onClick={() => onSelect(region.id)}
                >
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={isActive ? 2.1 : 1.3}
                    fill={region.hex}
                    opacity={isActive ? 1 : 0.5}
                    filter={isActive ? "url(#dotGlow)" : undefined}
                    style={{ transition: "r 0.3s, opacity 0.3s" }}
                  />
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="4.5"
                    fill="transparent"
                  />
                  {isActive && (
                    <text
                      x={city.x}
                      y={city.y - 3.2}
                      textAnchor="middle"
                      fontSize="2.6"
                      fill="#1c1208"
                      fontFamily="var(--font-mono), monospace"
                      opacity={0.85}
                    >
                      {city.name}
                    </text>
                  )}
                </g>
              ))}
            </g>
          );
        })}
      </svg>

      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute inset-0 flex items-end justify-center pb-1"
      >
        <span className="font-mono-label text-[9px] uppercase tracking-[0.25em] text-ink-soft/70">
          A network, not a survey map
        </span>
      </motion.div>
    </div>
  );
}
