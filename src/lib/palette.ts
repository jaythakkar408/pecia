// Complete, literal Tailwind class strings only — Tailwind's scanner needs
// the full class name present in source, so nothing here may be built via
// string interpolation.

export const HUE_TEXT = [
  "text-saffron-soft",
  "text-rani-soft",
  "text-turmeric",
  "text-peacock-soft",
  "text-spice-soft",
  "text-indigo-soft",
];

export const HUE_TEXT_STRONG = [
  "text-saffron",
  "text-rani",
  "text-turmeric",
  "text-peacock",
  "text-spice",
  "text-indigo-soft",
];

export const HUE_BORDER = [
  "border-saffron/40",
  "border-rani/40",
  "border-turmeric/40",
  "border-peacock/40",
  "border-spice/40",
  "border-indigo-soft/40",
];

export const HUE_BG_SOFT = [
  "bg-saffron/10",
  "bg-rani/10",
  "bg-turmeric/10",
  "bg-peacock/10",
  "bg-spice/10",
  "bg-indigo-soft/10",
];

export const HUE_BG_SOLID = [
  "bg-saffron",
  "bg-rani",
  "bg-turmeric",
  "bg-peacock",
  "bg-spice",
  "bg-indigo-soft",
];

export const HUE_DOT = [
  "bg-saffron",
  "bg-rani-soft",
  "bg-turmeric",
  "bg-peacock-soft",
  "bg-spice-soft",
  "bg-indigo-soft",
];

// Raw hex values in the same order as the HUE_* class arrays above, for
// contexts that need an actual color value (inline SVG/canvas styles)
// rather than a Tailwind class.
export const HUE_HEX = [
  "#ffab52", // saffron-soft
  "#f0579c", // rani-soft
  "#f0b429", // turmeric
  "#2bbf9e", // peacock-soft
  "#ff6b53", // spice-soft
  "#4d52c4", // indigo-soft
];

// AA-contrast-safe deep hues for text on the light "paper" backgrounds.
// The bright variants above stay reserved for dark backgrounds (PulseHero,
// PulseStatement, FinalScene) where they read fine against ink.
export const HUE_TEXT_DEEP = [
  "text-saffron-deep",
  "text-rani-deep",
  "text-turmeric-deep",
  "text-peacock-deep",
  "text-spice-deep",
  "text-indigo-deep",
];

export const HUE_BORDER_DEEP = [
  "border-saffron-deep/30",
  "border-rani-deep/30",
  "border-turmeric-deep/30",
  "border-peacock-deep/30",
  "border-spice-deep/30",
  "border-indigo-deep/30",
];

export const HUE_HEX_DEEP = [
  "#a85c10", // saffron-deep
  "#9c1456", // rani-deep
  "#86620f", // turmeric-deep
  "#0b5f4d", // peacock-deep
  "#9c2318", // spice-deep
  "#33367a", // indigo-deep
];

export function hue(list: string[], i: number) {
  return list[i % list.length];
}
