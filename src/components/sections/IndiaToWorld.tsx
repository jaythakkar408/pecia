"use client";

import { Reveal } from "@/components/Reveal";
import { PulseLine } from "@/components/PulseLine";

export function IndiaToWorld() {
  return (
    <section className="relative mesh-peacock py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-soft">
            Indian Brands → The World
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-3xl font-bold text-ivory sm:text-5xl text-balance">
            India becomes the origin, not only the destination.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3 font-display text-lg font-semibold text-ivory sm:text-2xl">
            <span>Indian Concept</span>
            <PulseLine color="#f0b429" width={30} />
            <span>Build</span>
            <PulseLine color="#f0579c" width={30} />
            <span>Systemize</span>
            <PulseLine color="#2bbf9e" width={30} />
            <span>Scale</span>
            <PulseLine color="#f4881d" width={30} />
            <span className="text-gradient-warm">Beyond India</span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-16 font-display text-2xl font-bold text-ivory sm:text-3xl text-balance">
            India doesn&rsquo;t only need to import great food brands. India
            can export them too.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
