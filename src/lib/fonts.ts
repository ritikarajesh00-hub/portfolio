import { Bricolage_Grotesque, Fraunces, Gamja_Flower, Poppins } from "next/font/google";

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

/**
 * Heavy geometric face used only for the "Rithika" name mark in the hero, to
 * match the reference logo. Single weight — it is one word on one screen.
 */
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
  variable: "--font-poppins",
});

/** Handwritten wordmark in the navbar. */
export const gamjaFlower = Gamja_Flower({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-gamja",
});
