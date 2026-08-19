import { Fraunces, Jost } from "next/font/google";

// Primary — Jost (free Futura substitute, matches ardian.com's geometric sans)
export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Accent italic serif — used sparingly for pull quotes (Ardian's Grifo role)
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["italic"],
  axes: ["opsz"],
});
