import type { Metadata } from "next";
import { Unbounded, Manrope, Space_Mono } from "next/font/google";
import { SoundProvider } from "@/components/SoundProvider";
import { Nav } from "@/components/Nav";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pecia — Building India's Next Generation of Food Brands",
  description:
    "Pecia Food Brands is a food-brand growth and operating platform working at the intersection of food, culture, brand, operations, franchising and India. From one piece to something much bigger.",
  keywords: [
    "Pecia",
    "Pecia Food Brands",
    "food brand India",
    "master franchise India",
    "franchise food India",
    "restaurant brand building",
    "enter India food brand",
  ],
  openGraph: {
    title: "Pecia — Building India's Next Generation of Food Brands",
    description:
      "A food-brand growth and operating platform for India. From one piece to something much bigger.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${manrope.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-ivory">
        <div className="grain" aria-hidden="true" />
        <SoundProvider>
          <Nav />
          {children}
        </SoundProvider>
      </body>
    </html>
  );
}
