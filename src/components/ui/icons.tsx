/*
 * Every glyph below is the exact SVG exported from Figma (public/assets/*.svg),
 * rendered at its designed box size. SVGs are served directly rather than
 * through next/image, which refuses to optimise them without
 * `dangerouslyAllowSVG`.
 */

/* eslint-disable @next/next/no-img-element */

import { asset } from "@/lib/asset";

export function DownloadIcon() {
  return (
    <img src={asset("/assets/icon-download.svg")} alt="" aria-hidden className="size-[24px] shrink-0" />
  );
}

/** 24×24 arrow used inside the two large blue buttons. */
export function ArrowUpRightIcon() {
  return (
    <img src={asset("/assets/icon-arrow-up-right.svg")} alt="" aria-hidden className="size-[24px] shrink-0" />
  );
}

/**
 * The same exported arrow turned to point right, for inline text links.
 * 45° because the glyph starts pointing up-right.
 */
export function ArrowRightIcon() {
  return (
    <img
      src={asset("/assets/icon-arrow-up-right.svg")}
      alt=""
      aria-hidden
      className="size-[20px] shrink-0 rotate-45"
    />
  );
}

/**
 * The same exported arrow turned to point straight down, for the CTA that
 * sends you further down the page. 135° because the glyph starts at 45°.
 */
export function ArrowDownIcon() {
  return (
    <img
      src={asset("/assets/icon-arrow-up-right.svg")}
      alt=""
      aria-hidden
      className="size-[24px] shrink-0 rotate-[135deg]"
    />
  );
}

/**
 * 20×20 circled arrow on the "Case Study" button. Figma composes it from two
 * layers — a 20×20 ring plus a 3.676×7 arrowhead offset by (8.65, 6.53) —
 * so both leaves keep their own explicit dimensions.
 */
export function ArrowCircleIcon() {
  return (
    <span className="relative block size-[20px] shrink-0" aria-hidden>
      <img
        src={asset("/assets/icon-arrow-circle-outer.svg")}
        alt=""
        className="absolute inset-0 size-[20px]"
      />
      <img
        src={asset("/assets/icon-arrow-circle-inner.svg")}
        alt=""
        className="absolute left-[8.65px] top-[6.53px] h-[7px] w-[3.676px]"
      />
    </span>
  );
}

/**
 * Four-point sparkle scattered around the "about me" title. Figma clips a
 * 21.858×23.614 drawing inside a 24×24 frame, so the leaf keeps its own size
 * rather than being stretched to fill the frame.
 */
export function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`relative block size-[24px] overflow-hidden ${className}`}>
      <img
        src={asset("/assets/icon-sparkle.svg")}
        alt=""
        className="absolute top-[0.01%] left-[3.61%] h-[23.614px] w-[21.858px]"
      />
    </span>
  );
}

/**
 * Hand-drawn arrow pointing from the about-me title down to the portrait.
 * Same story: a 52.44×129.595 drawing clipped inside a 130×130 frame, with the
 * whole frame rotated 180°.
 */
export function CurvedArrow({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`relative size-[130px] rotate-180 overflow-hidden ${className}`}
    >
      <img
        src={asset("/assets/icon-curved-arrow.svg")}
        alt=""
        className="absolute top-0 left-[30.49%] h-[129.595px] w-[52.44px]"
      />
    </span>
  );
}

/** Squiggle underline that sits beside the "Work I Shipped" heading. */
export function HighlightSquiggle({ className = "" }: { className?: string }) {
  return (
    <img
      src={asset("/assets/highlight-squiggle.svg")}
      alt=""
      aria-hidden
      className={`h-[76px] w-[128px] ${className}`}
    />
  );
}

/** 57×57 avatar placeholder on the testimonial cards. */
export function AvatarPlaceholder() {
  return (
    <img src={asset("/assets/avatar.svg")} alt="" aria-hidden className="size-[57px] shrink-0" />
  );
}
