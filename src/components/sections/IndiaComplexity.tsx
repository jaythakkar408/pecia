"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";

type Region = {
  id: string;
  name: string;
  cities: string;
  behavior: string;
  format: string;
  price: string;
  supply: string;
};

const REGIONS: Region[] = [
  {
    id: "north",
    name: "North",
    cities: "Delhi NCR, Chandigarh, Lucknow, Jaipur",
    behavior: "High dine-out frequency, brand-conscious, celebration-led spending.",
    format: "Large-format dine-in and premium QSR do well.",
    price: "Wide price ladder — value and premium both scale.",
    supply: "Deep wheat, dairy and mandi networks; strong logistics corridors.",
  },
  {
    id: "west",
    name: "West",
    cities: "Mumbai, Pune, Ahmedabad, Surat",
    behavior: "Fast-paced, delivery-first, high competitive density.",
    format: "Cloud kitchens and compact high-footfall formats win.",
    price: "High real-estate cost forces disciplined unit economics.",
    supply: "Strong QSR supply chains; vegetarian-first categories thrive in Gujarat markets.",
  },
  {
    id: "south",
    name: "South",
    cities: "Bengaluru, Chennai, Hyderabad, Kochi",
    behavior: "High digital adoption, strong regional cuisine loyalty.",
    format: "Café culture and multi-cuisine QSR expand quickly.",
    price: "Value-conscious but willing to pay for consistency.",
    supply: "Rice, coconut and coffee ecosystems; tech-enabled operators.",
  },
  {
    id: "east",
    name: "East",
    cities: "Kolkata, Bhubaneswar, Guwahati, Patna",
    behavior: "Strong local-brand loyalty, price-sensitive entry, community dining.",
    format: "Emerging QSR category with real estate advantages.",
    price: "Lower average ticket size, high volume potential.",
    supply: "Fish, rice and mustard-led regional palates.",
  },
  {
    id: "central",
    name: "Central & Tier II/III",
    cities: "Indore, Nagpur, Bhopal, 100+ emerging towns",
    behavior: "Fastest-growing consumption class in the country.",
    format: "First-mover national brands win disproportionate share.",
    price: "Lower cost base, strong margin potential at scale.",
    supply: "Under-penetrated — the next decade's real estate opportunity.",
  },
];

export function IndiaComplexity() {
  const [active, setActive] = useState<Region>(REGIONS[0]);

  return (
    <section className="relative bg-ink py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-saffron">
            Chapter Two
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl font-display text-3xl text-ivory sm:text-5xl text-balance">
            India is not one market.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-ivory-dim">
            One country. Many food cultures. Millions of consumers. Thousands of
            markets. The challenge isn&rsquo;t simply entering India — it&rsquo;s
            understanding which India you are entering.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {REGIONS.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActive(region)}
                  className={`rounded-2xl border px-5 py-6 text-left transition ${
                    active.id === region.id
                      ? "border-saffron bg-saffron/10"
                      : "border-ivory/10 hover:border-ivory/30"
                  }`}
                >
                  <span className="font-display text-lg text-ivory sm:text-xl">
                    {region.name}
                  </span>
                  <span className="mt-2 block text-xs text-ivory-dim">
                    {region.cities}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-ivory/10 bg-charcoal-soft/60 p-8"
              >
                <h3 className="font-display text-2xl text-saffron-soft">
                  {active.name}
                </h3>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="font-mono-label text-[10px] uppercase tracking-[0.25em] text-copper">
                      Consumer behavior
                    </dt>
                    <dd className="mt-1 text-sm text-ivory">{active.behavior}</dd>
                  </div>
                  <div>
                    <dt className="font-mono-label text-[10px] uppercase tracking-[0.25em] text-copper">
                      Format that wins
                    </dt>
                    <dd className="mt-1 text-sm text-ivory">{active.format}</dd>
                  </div>
                  <div>
                    <dt className="font-mono-label text-[10px] uppercase tracking-[0.25em] text-copper">
                      Pricing reality
                    </dt>
                    <dd className="mt-1 text-sm text-ivory">{active.price}</dd>
                  </div>
                  <div>
                    <dt className="font-mono-label text-[10px] uppercase tracking-[0.25em] text-copper">
                      Supply chain
                    </dt>
                    <dd className="mt-1 text-sm text-ivory">{active.supply}</dd>
                  </div>
                </dl>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
