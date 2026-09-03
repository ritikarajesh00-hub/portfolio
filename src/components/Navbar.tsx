"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { DownloadIcon } from "./ui/icons";

/** Ignore scroll jitter below this many pixels before flipping direction. */
const DIRECTION_THRESHOLD = 6;

/** Never hide the bar while it is still overlapping the top of the hero. */
const HIDE_AFTER = 120;

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const read = () => {
      frame = 0;
      // Clamp: macOS rubber-banding reports negative scrollY past the top.
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY;

      setScrolled(y > 8);

      if (Math.abs(delta) < DIRECTION_THRESHOLD) return;
      setHidden(delta > 0 && y > HIDE_AFTER);
      lastY = y;
    };

    const onScroll = () => {
      // Coalesce to one read per frame; scroll fires far more often than that.
      if (!frame) frame = requestAnimationFrame(read);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ease-out motion-reduce:transition-none ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        // Backdrop only once scrolled, so the bar stays transparent over the
        // hero grid as designed. A shadow rather than a border, which would
        // add a pixel of height and nudge the layout.
        scrolled ? "bg-white/85 shadow-[0_1px_0_rgba(20,20,20,0.07)] backdrop-blur-md" : ""
      }`}
    >
      <div className="page-x mx-auto flex w-full max-w-[1280px] items-center justify-between py-[20px]">
        <Link
          href="/"
          className="text-[40px] leading-none font-extrabold tracking-[-0.8px] text-brand"
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
      </div>
    </header>
  );
}
