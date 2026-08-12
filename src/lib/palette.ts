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

export function hue(list: string[], i: number) {
  return list[i % list.length];
}
