import type { Metadata } from "next";
import { bricolage, fraunces, gamjaFlower, poppins } from "@/lib/fonts";
import { CustomCursor } from "@/components/CustomCursor";
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
      className={`${bricolage.variable} ${fraunces.variable} ${gamjaFlower.variable} ${poppins.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
