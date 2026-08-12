"use client";

import { Reveal } from "@/components/Reveal";
import { HUE_BORDER, HUE_TEXT, hue } from "@/lib/palette";

const CONTEXTUAL_CTAS = [
  { q: "Bringing a brand to India?", a: "Let's build the entry strategy." },
  { q: "Already in India?", a: "Let's find your next growth engine." },
  { q: "Have a great restaurant?", a: "Let's see what it could become." },
  { q: "Building a new food brand?", a: "Let's build it together." },
  { q: "Want to take an Indian brand global?", a: "Let's take it further." },
  { q: "Think Pecia can help?", a: "Start a conversation." },
];

export function ContactFooter() {
  return (
    <section id="contact" className="relative mesh-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-ivory sm:text-5xl text-balance">
            What will you build with Pecia?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {CONTEXTUAL_CTAS.map((cta, i) => (
            <Reveal key={cta.q} delay={i * 0.04} y={12}>
              <div className={`rounded-2xl border bg-ink/40 p-6 ${hue(HUE_BORDER, i)}`}>
                <p className="font-display text-lg font-bold text-ivory">{cta.q}</p>
                <p className={`mt-1 text-sm ${hue(HUE_TEXT, i)}`}>{cta.a}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-col items-center gap-5 text-center">
            <a
              href="mailto:hello@peciafoodbrands.com"
              className="rounded-full bg-gradient-to-r from-saffron via-rani to-turmeric px-8 py-3 font-mono-label text-xs font-bold uppercase tracking-[0.25em] text-ink transition hover:opacity-90"
            >
              Build with Pecia →
            </a>
            <a
              href="mailto:hello@peciafoodbrands.com?subject=Entering%20India"
              className="font-mono-label text-xs uppercase tracking-[0.25em] text-ivory-dim underline decoration-ivory/30 underline-offset-4 transition hover:text-turmeric-soft"
            >
              Enter India with Pecia →
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-28 max-w-5xl border-t border-ivory/10 px-6 pt-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg text-ivory">Pecia Food Brands Private Limited</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory-dim">
              Building India&rsquo;s Next Generation of Food Brands
            </p>
          </div>
          <p className="text-xs text-ivory-dim">
            © {new Date().getFullYear()} Pecia Food Brands Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
