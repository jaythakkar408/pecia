"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSound } from "@/components/SoundProvider";

const LINKS = [
  { label: "Story", href: "#story" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "India", href: "#india" },
  { label: "Brands", href: "#brands" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { muted, toggleMuted } = useSound();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-ink/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#story"
          className="font-display text-lg tracking-wide text-ivory"
        >
          PECIA
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono-label text-[11px] uppercase tracking-[0.2em] text-ivory-dim transition hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleMuted}
            aria-label={muted ? "Unmute sound" : "Mute sound"}
            className="rounded-full border border-ivory/20 p-2 text-ivory-dim transition hover:border-saffron hover:text-saffron-soft"
          >
            {muted ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                <path d="M18.5 5.5a9 9 0 0 1 0 13" />
              </svg>
            )}
          </button>

          <Link
            href="#contact"
            className="hidden rounded-full bg-saffron px-5 py-2 font-mono-label text-[11px] uppercase tracking-[0.2em] text-ink transition hover:bg-saffron-soft sm:inline-block"
          >
            Build with Pecia →
          </Link>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-full border border-ivory/20 p-2 text-ivory lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-ivory/10 bg-ink/95 px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono-label text-xs uppercase tracking-[0.2em] text-ivory-dim"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
