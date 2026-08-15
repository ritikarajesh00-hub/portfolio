import { Bricolage_Grotesque, Fraunces, Gamja_Flower } from "next/font/google";

/** Body + UI type for the whole page. */
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

/** Editorial serif used for the hero headline and the "Work I Shipped" title. */
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
});

/** Handwritten wordmark in the navbar. */
export const gamjaFlower = Gamja_Flower({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-gamja",
});
