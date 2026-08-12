"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { NetworkConverge } from "@/components/NetworkConverge";

const OPTIONS = [
  { label: "Enter India →", href: "#contact" },
  { label: "Build a Brand →", href: "#contact" },
  { label: "Scale Your Brand →", href: "#contact" },
  { label: "Take Your Brand Global →", href: "#contact" },
];

export function FinalScene() {
  return (
    <section className="relative bg-ink py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <NetworkConverge
            word="PECIA"
            particleCount={520}
            className="mx-auto h-[42vh] w-full max-w-3xl sm:h-[50vh]"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 font-display text-2xl text-ivory-dim sm:text-3xl text-balance">
            India has always been a food country.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mt-6 font-display text-3xl text-ivory sm:text-4xl text-balance">
            Now we are building its next generation of food brands.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14">
            <p className="font-display text-4xl text-saffron sm:text-6xl">
              PECIA
            </p>
            <p className="mt-3 font-mono-label text-xs uppercase tracking-[0.3em] text-ivory-dim">
              Building India&rsquo;s Next Generation of Food Brands
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-16 font-display text-3xl text-ivory sm:text-5xl">
            What will you build?
          </p>
        </Reveal>

        <Reveal delay={0.46}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {OPTIONS.map((opt) => (
              <Link
                key={opt.label}
                href={opt.href}
                className="rounded-full border border-ivory/20 px-5 py-2.5 text-sm text-ivory transition hover:border-saffron hover:text-saffron-soft"
              >
                {opt.label}
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.52}>
          <Link
            href="#contact"
            className="mt-8 inline-block rounded-full bg-saffron px-8 py-3 font-mono-label text-xs uppercase tracking-[0.25em] text-ink transition hover:bg-saffron-soft"
          >
            Build with Pecia →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
