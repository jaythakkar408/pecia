"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type SoundContextValue = {
  muted: boolean;
  toggleMuted: () => void;
  pluck: (frequency: number, duration?: number) => void;
  tone: (frequency: number, duration?: number, type?: OscillatorType) => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [muted, setMuted] = useState(true);
  const ctxRef = useRef<AudioContext | null>(null);

  const ensureCtx = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!ctxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      ctxRef.current = new AudioCtx();
    }
    return ctxRef.current;
  }, []);

  const tone = useCallback(
    (frequency: number, duration = 0.6, type: OscillatorType = "sine") => {
      if (muted) return;
      const ctx = ensureCtx();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = frequency;

      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + duration + 0.05);
    },
    [muted, ensureCtx]
  );

  const pluck = useCallback(
    (frequency: number, duration = 1.1) => tone(frequency, duration, "triangle"),
    [tone]
  );

  const toggleMuted = useCallback(() => {
    setMuted((m) => {
      const next = !m;
      if (!next) {
        const ctx = ensureCtx();
        if (ctx && ctx.state === "suspended") ctx.resume();
      }
      return next;
    });
  }, [ensureCtx]);

  useEffect(() => {
    return () => {
      ctxRef.current?.close();
    };
  }, []);

  return (
    <SoundContext.Provider value={{ muted, toggleMuted, pluck, tone }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
}
