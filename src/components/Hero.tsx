import Image from "next/image";
import { hero } from "@/data/site";
import { asset } from "@/lib/asset";
import { ArrowButton } from "./ui/ArrowButton";

/**
 * The faint blueprint grid behind the hero: the exported bitmap at 29% opacity,
 * with a radial white wash on top so it dissolves toward the edges. Figma's
 * gradient is an ellipse with radii ≈46.2% of the frame in both axes.
 */
export function GridBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[-28px] h-[730px]">
      <Image
        src={asset("/assets/grid-bg.png")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.29]"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 46.2% 46.2% at 50% 50%, rgba(255,255,255,0) 0%, #ffffff 100%)",
        }}
      />
    </div>
  );
}

/** One corner handle of the selection box: white dot, blue ring. */
function SelectionHandle({ className }: { className: string }) {
  return (
    <span
      className={`absolute size-[9px] rounded-full border-[1.5px] border-selection bg-white ${className}`}
    />
  );
}

/**
 * The name set as a wordmark, wrapped in Figma-style selection chrome.
 */
function NameMark({ name }: { name: string }) {
  return (
    // leading-[1] shrinks the inline box to the glyphs so the selection border
    // hugs the name; mr keeps the corner handles clear of the next character.
    <span className="relative mr-[9px] inline-block leading-[1] font-extrabold tracking-[-0.045em]">
      {name}

      {/*
        Figma-style selection chrome: bounding box plus four corner handles.
        Insets are in em so the box keeps hugging the glyphs as the heading
        scales — top just above cap height, bottom on the baseline — with a
        flat 2px of breathing room added on every side.
      */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-[calc(0.065em-2px)] right-[-2px] bottom-[calc(0.15em-2px)] left-[-2px] border border-selection"
      >
        <SelectionHandle className="-top-[5px] -left-[5px]" />
        <SelectionHandle className="-top-[5px] -right-[5px]" />
        <SelectionHandle className="-bottom-[5px] -left-[5px]" />
        <SelectionHandle className="-bottom-[5px] -right-[5px]" />
      </span>
    </span>
  );
}

/** Rotated outline label floating over the hero portrait. */
function Sticker({ label, className }: { label: string; className: string }) {
  return (
    <span
      className={`absolute z-10 rounded-[6px] border-[0.24px] border-brand bg-tint-blue p-[10px] text-base font-medium whitespace-nowrap text-brand ${className}`}
    >
      {label}
    </span>
  );
}

export function Hero() {
  return (
    <section className="page-x relative mx-auto w-full max-w-[1280px] pt-[60px] pb-[80px]">
      <div className="grid items-center gap-12 lg:grid-cols-[555px_1fr]">
        <div className="flex flex-col gap-[42px]">
          <h1 className="text-hero leading-[1.15] font-semibold whitespace-pre-line text-ink">
            {hero.headline.map((segment, i) =>
              segment.wordmark ? (
                <NameMark key={i} name={segment.text} />
              ) : (
                <span key={i} className={segment.accent ? "text-brand" : undefined}>
                  {segment.text}
                </span>
              ),
            )}
          </h1>

          <p className="text-xl text-muted">
            {hero.bio.before}
            <span className="font-semibold text-ink">{hero.bio.strong}</span>
            {hero.bio.after}
          </p>

          <div>
            <ArrowButton href={hero.cta.href} icon={hero.cta.icon}>
              {hero.cta.label}
            </ArrowButton>
          </div>
        </div>

        {/* Stickers are anchored to the portrait box rather than the page, so
            they stay pinned to the photo at every breakpoint. */}
        <div className="relative mx-auto aspect-[2/3] w-[300px] sm:w-[380px] lg:mx-0 lg:justify-self-center">
          <Image
            src={asset("/assets/hero-portrait.png")}
            alt={hero.portraitAlt}
            fill
            priority
            sizes="(max-width: 640px) 300px, 380px"
            className="object-cover"
          />
          {hero.stickers.map((sticker) => (
            <Sticker key={sticker.label} label={sticker.label} className={sticker.className} />
          ))}
        </div>
      </div>
    </section>
  );
}
