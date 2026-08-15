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

/**
 * Logo treatment of the name: heavy geometric letterforms, with the final "a"
 * replaced by a comment bubble in brand blue — a circle with the bottom-left
 * corner left square, which is what gives it the speech-bubble tail.
 *
 * The dropped letter is restored for screen readers so the name still reads
 * whole.
 */
function NameMark({ name }: { name: string }) {
  const stem = name.slice(0, -1);
  const dropped = name.slice(-1);

  return (
    <span className="font-wordmark inline-flex items-end font-extrabold tracking-[-0.03em]">
      {stem}
      <span
        aria-hidden
        className="mb-[0.04em] ml-[0.05em] inline-block size-[0.66em] rounded-tl-full rounded-tr-full rounded-br-full bg-brand"
      />
      <span className="sr-only">{dropped}</span>
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
          <h1 className="font-display wonk text-hero leading-[1.15] font-semibold whitespace-pre-line text-ink">
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

          <p className="font-display wonk text-xl text-muted">
            {hero.bio.before}
            <span className="font-semibold text-ink">{hero.bio.strong}</span>
            {hero.bio.after}
          </p>

          <div>
            <ArrowButton href={hero.cta.href}>{hero.cta.label}</ArrowButton>
          </div>
        </div>

        {/* Stickers are anchored to the portrait box rather than the page, so
            they stay pinned to the photo at every breakpoint. */}
        <div className="relative mx-auto h-[480px] w-[320px] lg:mx-0 lg:justify-self-center">
          <Image
            src={asset("/assets/hero-portrait.png")}
            alt={hero.portraitAlt}
            fill
            priority
            sizes="320px"
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
