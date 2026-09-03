import { Bricolage_Grotesque } from "next/font/google";

/**
 * The single typeface for the whole page. Bricolage Grotesque is a variable
 * font covering 200–800, so every weight on the site comes from this one
 * family — headings, body, wordmark and all.
 */
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});
