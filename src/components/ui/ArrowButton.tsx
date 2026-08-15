import Link from "next/link";
import { ArrowCircleIcon, ArrowUpRightIcon } from "./icons";

/**
 * The solid blue pill CTA. `lg` is the hero / about-me button (24px text,
 * 24×16 padding, up-right arrow); `sm` is the "Case Study" button on a project
 * card (20px text, 16×8 padding, circled arrow).
 */
export function ArrowButton({
  href,
  children,
  size = "lg",
}: {
  href: string;
  children: React.ReactNode;
  size?: "lg" | "sm";
}) {
  const lg = size === "lg";

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-[8px] rounded-[68px] bg-brand font-medium text-white transition-colors hover:bg-[#1d4fd7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        lg ? "px-[24px] py-[16px] text-2xl" : "px-[16px] py-[8px] text-xl"
      }`}
    >
      <span className="leading-[28px] whitespace-nowrap">{children}</span>
      {lg ? <ArrowUpRightIcon /> : <ArrowCircleIcon />}
    </Link>
  );
}
