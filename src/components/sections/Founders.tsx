"use client";

import { Reveal } from "@/components/Reveal";
import { FounderMark } from "@/components/FounderMark";

const FOUNDERS = [
  {
    name: "Jay Thakkar",
    role: "International Food Operations × Expansion × Execution",
    title: "The Operator",
    bio: "Close to a decade of experience with leading food brands in North America — across operations, expansion, execution, systems and growth.",
    quote:
      "I spent years learning what makes food brands work at scale. Now I want to bring that experience, discipline and standard to India's next generation of food brands.",
    border: "border-t-peacock",
    title_color: "text-peacock-soft",
    name_color: "text-ivory",
    quote_border: "border-peacock/50",
    primary: "#0e8a72",
    secondary: "#2bbf9e",
  },
  {
    name: "Yukta Patel",
    role: "Entrepreneurship × Sales × New-Generation Thinking",
    title: "The Builder of the Next Generation",
    bio: "24 years old. Has built multiple successful businesses, with strong sales ability, commercial instinct and fast, ambitious execution.",
    quote: "The next generation doesn't wait for opportunity. It builds it.",
    border: "border-t-rani",
    title_color: "text-rani-soft",
    name_color: "text-ivory",
    quote_border: "border-rani/50",
    primary: "#d6236e",
    secondary: "#f0579c",
  },
  {
    name: "Dhruv Thakkar",
    role: "Sales × Relationships × Ground Execution",
    title: "The Connector",
    bio: "10+ years of sales experience, with strong people skills, ground-level expertise and a customer-first, commercially driven approach.",
    quote: "Markets aren't numbers on spreadsheets. Markets are people.",
    border: "border-t-turmeric",
    title_color: "text-turmeric",
    name_color: "text-ivory",
    quote_border: "border-turmeric/50",
    primary: "#f0b429",
    secondary: "#f4881d",
  },
];

export function Founders() {
  return (
    <section id="founders" className="relative mesh-ink py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono-label text-[11px] uppercase tracking-[0.35em] text-turmeric-soft">
            Founders
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-ivory sm:text-5xl text-balance">
            Three complementary forces.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {FOUNDERS.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.08}>
              <div className={`flex h-full flex-col rounded-2xl border-t-4 border-ivory/10 bg-charcoal-soft/60 p-8 ${founder.border}`}>
                <FounderMark
                  primary={founder.primary}
                  secondary={founder.secondary}
                  initial={founder.name[0]}
                />
                <span className={`mt-5 font-mono-label text-[10px] uppercase tracking-[0.25em] ${founder.title_color}`}>
                  {founder.title}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-ivory">
                  {founder.name}
                </h3>
                <p className={`mt-2 text-xs uppercase tracking-[0.08em] ${founder.title_color}`}>
                  {founder.role}
                </p>
                <p className="mt-4 text-sm text-ivory-dim">{founder.bio}</p>
                <p className={`mt-6 border-l-2 pl-4 font-display font-medium text-ivory ${founder.quote_border}`}>
                  &ldquo;{founder.quote}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-20 text-center">
            <p className="font-display text-xl text-ivory-dim sm:text-2xl">
              Global experience. Entrepreneurial energy. Ground-level
              relationships.
            </p>
            <p className="mt-6 font-display text-3xl font-extrabold text-gradient-warm sm:text-4xl">
              Three people. Three strengths. One mission.
            </p>
            <p className="mt-4 font-display text-2xl font-bold text-ivory sm:text-3xl">
              Building India&rsquo;s next generation of food brands.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
