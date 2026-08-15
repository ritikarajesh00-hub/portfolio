"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Figma-style presence cursor: a pointer arrow with a name tag trailing it.
 *
 * Two deliberate choices:
 * - The arrow tracks the pointer 1:1. Easing it would feel laggy, and since we
 *   hide the native cursor, aiming at links has to stay precise.
 * - Only the tag eases, which is what gives multiplayer cursors their drift.
 *
 * Never renders on touch devices — they have no pointer to replace.
 */
export function CustomCursor({ label = "You" }: { label?: string }) {
  const arrowRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  // Only take over the cursor on devices that actually have one.
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    const arrow = arrowRef.current;
    const tag = tagRef.current;
    if (!arrow || !tag) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Start off-screen so nothing flashes at (0,0) before the first move.
    const target = { x: -200, y: -200 };
    const trail = { x: -200, y: -200 };
    let started = false;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!started) {
        // Snap the tag to the pointer on the very first move so it does not
        // fly in from off-screen.
        started = true;
        trail.x = target.x;
        trail.y = target.y;
      }
      // Set on every move, not just the first: anything that hid the cursor
      // (tab switch, pointer leaving the window) must be undone as soon as the
      // pointer moves again. React bails out when the value is unchanged, so
      // this does not re-render on every frame.
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      arrow.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;

      const ease = reduceMotion ? 1 : 0.28;
      trail.x += (target.x - trail.x) * ease;
      trail.y += (target.y - trail.y) * ease;
      // Offset puts the tag below-right of the arrow tip.
      tag.style.transform = `translate3d(${trail.x + 17}px, ${trail.y + 23}px, 0)`;

      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  const fade = visible ? "opacity-100" : "opacity-0";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <div
        ref={arrowRef}
        className={`absolute top-0 left-0 transition-opacity duration-200 ${fade}`}
      >
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
        >
          <path
            d="M1 1L1 19.2L5.9 14.6L9.1 21.4L12.3 19.9L9.1 13.3L15.7 13.1Z"
            fill="#111111"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        ref={tagRef}
        className={`absolute top-0 left-0 rounded-[8px] border-2 border-[#a5c2f8] bg-brand px-[10px] py-[3px] text-[15px] leading-[1.25] font-bold text-white italic shadow-[0_2px_8px_rgba(37,99,235,0.35)] transition-opacity duration-200 select-none ${fade}`}
      >
        {label}
      </div>
    </div>
  );
}
