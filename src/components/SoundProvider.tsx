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
  heartbeat: () => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [muted, setMuted] = useState(false);
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

      const play = () => {
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
      };

      // Scheduling immediately while the context is still suspended silently
      // drops the note — resume() is async, so wait for it before playing
      // rather than racing it. This is what made the very first sound after
      // a page load or tab-switch unreliable, especially on mobile.
      if (ctx.state === "running") play();
      else ctx.resume().then(play).catch(() => {});
    },
    [muted, ensureCtx]
  );

  const pluck = useCallback(
    (frequency: number, duration = 1.1) => tone(frequency, duration, "triangle"),
    [tone]
  );

  const heartbeat = useCallback(() => {
    if (muted) return;
    const ctx = ensureCtx();
    if (!ctx) return;

    const play = () => {
      const thump = (delay: number, freq: number, peak: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        const start = ctx.currentTime + delay;
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(peak, start + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.32);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.35);
      };
      thump(0, 58, 0.09);
      thump(0.18, 46, 0.06);
    };

    if (ctx.state === "running") play();
    else ctx.resume().then(play).catch(() => {});
  }, [muted, ensureCtx]);

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

  // Browsers only allow audio to start after a real user gesture — a click,
  // tap or key press. Sound is on by default, so the very first gesture
  // anywhere on the page (not necessarily the mute button) should unlock it.
  useEffect(() => {
    const events: Array<keyof WindowEventMap> = ["pointerdown", "touchstart", "keydown"];
    const unlock = () => {
      const ctx = ensureCtx();
      if (ctx && ctx.state === "suspended") ctx.resume();
      events.forEach((event) => window.removeEventListener(event, unlock, true));
    };
    events.forEach((event) =>
      window.addEventListener(event, unlock, { passive: true, capture: true })
    );
    return () => {
      events.forEach((event) => window.removeEventListener(event, unlock, true));
    };
  }, [ensureCtx]);

  return (
    <SoundContext.Provider value={{ muted, toggleMuted, pluck, tone, heartbeat }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
}
