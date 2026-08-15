import type { Metadata } from "next";
import { bricolage, fraunces, gamjaFlower } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rithika — Product Designer",
  description:
    "Product designer in Bengaluru with 3 years of experience in UI/UX design, blending artistry with strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${fraunces.variable} ${gamjaFlower.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
