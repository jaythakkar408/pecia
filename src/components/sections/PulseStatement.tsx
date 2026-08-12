"use client";

import { Reveal } from "@/components/Reveal";

const ECG_PATH =
  "M0,50 L36,50 Q46,50 51,43 Q56,36 61,50 L94,50 L104,50 L112,60 L121,8 L130,88 L139,50 L172,50 Q182,50 190,41 Q198,32 206,50 L300,50";

function EcgTrace() {
  return (
    <div className="relative mx-auto h-16 w-full max-w-2xl overflow-hidden sm:h-20" aria-hidden="true">
      <div className="absolute inset-0 flex animate-ecg-scroll">
        {[0, 1].map((copy) => (
          <svg
            key={copy}
            viewBox="0 0 300 100"
            preserveAspectRatio="none"
            className="h-full w-[600px] shrink-0 sm:w-[700px]"
          >
            <defs>
              <linearGradient id={`ecgGrad-${copy}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f4881d" />
                <stop offset="50%" stopColor="#e13a2a" />
                <stop offset="100%" stopColor="#d6236e" />
              </linearGradient>
              <filter id={`ecgGlow-${copy}`} x="-20%" y="-100%" width="140%" height="300%">
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d={ECG_PATH}
              fill="none"
              stroke={`url(#ecgGrad-${copy})`}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter={`url(#ecgGlow-${copy})`}
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

export function PulseStatement() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center bg-ink py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <EcgTrace />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-12 font-display text-xl text-ivory-dim sm:text-2xl">
            Food isn&rsquo;t a category to us.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-3 font-display text-4xl font-black uppercase text-gradient-warm sm:text-6xl">
            It runs in our veins.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mx-auto mt-8 max-w-xl text-sm text-ivory-dim sm:text-base">
            Every brand we build, every market we enter, every system we
            engineer — it comes from the same pulse. Not a service we
            perform. A life we live.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
