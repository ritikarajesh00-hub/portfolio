import Link from "next/link";
import { nav } from "@/data/site";
import { DownloadIcon } from "./ui/icons";
import { gamjaFlower } from "@/lib/fonts";

export function Navbar() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-[20px] md:px-12 xl:px-[120px]">
      <Link
        href="/"
        className={`${gamjaFlower.className} text-[40px] leading-none tracking-[-0.8px] text-brand`}
      >
        {nav.wordmark}
      </Link>

      <nav className="flex items-center gap-[24px]">
        {nav.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="hidden text-xl text-muted transition-colors hover:text-ink sm:block"
          >
            {link.label}
          </Link>
        ))}
        <Link href={nav.resume.href} className="flex items-center gap-[9px] text-xl text-brand">
          {nav.resume.label}
          <DownloadIcon />
        </Link>
      </nav>
    </header>
  );
}
