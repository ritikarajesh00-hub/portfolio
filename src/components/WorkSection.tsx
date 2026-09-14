import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/data/site";
import { Pill } from "./ui/Pill";
import { ArrowButton } from "./ui/ArrowButton";
import { ProjectMedia } from "./ProjectMedia";
import { HighlightSquiggle, SparkleIcon } from "./ui/icons";
import { asset } from "@/lib/asset";

/** Paints one word of the headline brand blue, leaving the rest as ink. */
function AccentTitle({ title, accent }: { title: string; accent?: string }) {
  if (!accent || !title.includes(accent)) return <>{title}</>;
  const [before, after] = title.split(accent);
  return (
    <>
      {before}
      <span className="text-brand">{accent}</span>
      {after}
    </>
  );
}

/** Hand-drawn arrow curving from the annotation down toward the artwork. */
function AnnotationArrow() {
  return (
    <svg
      viewBox="0 0 88 80"
      aria-hidden
      className="h-[64px] w-[70px] text-ink/70"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M82 6C55 4 26 14 14 52" />
      <path d="M5 38l9 16 17-8" />
    </svg>
  );
}

/**
 * Hero project card, laid out like an editorial spread: an airy grid field,
 * a lowercase kicker, a large headline with one word in brand blue, a truthful
 * figure line, and the artwork tilted so it bleeds off the right edge with a
 * handwritten-style note pinned beside it. The whole card is one link.
 */
function FeatureCard({ project }: { project: Project }) {
  const inner = (
    <article
      id={project.id}
      className="relative grid overflow-hidden rounded-[44px] border border-hairline bg-card lg:grid-cols-[1.08fr_0.92fr]"
    >
      {/*
        Grid across the whole card, exactly like the reference: fine hairlines
        plus a soft blue wash pooling behind the artwork. Two layers so the
        wash doesn't dilute the grid's own contrast — a single gradient
        carrying both would wash the lines out near the artwork corner.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(20,20,20,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,20,20,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 78% 45%, rgba(37,99,235,0.16), transparent 70%)",
        }}
      />

      {/* ---- Copy ---- */}
      <div className="relative z-10 flex flex-col justify-center gap-[24px] p-[32px] sm:p-[40px] lg:p-[52px]">
        {project.kicker ? (
          <span className="text-base tracking-[0.04em] text-muted">{project.kicker}</span>
        ) : null}

        <div className="flex flex-col gap-[18px]">
          <h3 className="max-w-[16ch] text-[clamp(1.875rem,3.4vw,2.75rem)] leading-[1.1] font-semibold text-ink">
            <AccentTitle title={project.title} accent={project.titleAccent} />
          </h3>
          <p className="max-w-[46ch] text-lg leading-[1.55] text-muted">{project.description}</p>
        </div>

        {project.meta ? (
          <div className="mt-[4px] flex flex-col gap-[2px]">
            <span className="text-xl font-semibold text-ink">{project.meta.figure}</span>
            <span className="text-base text-muted">{project.meta.attribution}</span>
          </div>
        ) : null}

        {project.cta ? (
          <span className="mt-[4px] inline-flex w-fit items-center gap-[8px] border-b-2 border-brand pb-[3px] text-lg font-medium text-ink transition-colors group-hover:text-brand">
            {project.cta.label}
            <span className="transition-transform group-hover:translate-x-[3px]" aria-hidden>
              →
            </span>
          </span>
        ) : null}
      </div>

      {/* ---- Artwork ---- */}
      <div className="relative min-h-[360px] lg:min-h-0">
        {project.annotation ? (
          <div className="pointer-events-none absolute top-[26px] left-[16px] z-20 flex items-start gap-[8px] lg:left-auto lg:right-[34px]">
            <span className="flex items-start gap-[2px] text-lg font-medium whitespace-nowrap text-ink">
              {project.annotation}
              <SparkleIcon className="-mt-[2px] scale-[0.8]" />
            </span>
            <AnnotationArrow />
          </div>
        ) : null}

        {/* Tilted card that bleeds off the right and bottom, leaving white grid
            at the top for the note to sit on. */}
        <div className="absolute top-[18%] left-[10%] right-[-12%] bottom-[-8%] rotate-[3.5deg] lg:top-[24%]">
          <Image
            src={asset("/assets/pcos-mockup.png")}
            alt="Kapiva PCOSolve doctor-led landing page shown on a phone"
            fill
            sizes="(max-width: 1024px) 90vw, 520px"
            className="rounded-[24px] object-contain object-center drop-shadow-[0_24px_55px_-22px_rgba(20,20,20,0.5)]"
          />
        </div>
      </div>
    </article>
  );

  return project.cta ? (
    <Link href={project.cta.href} className="group block">
      {inner}
    </Link>
  ) : (
    inner
  );
}

const cardShell =
  "rounded-[44px] border border-hairline bg-card p-[24px] transition-shadow hover:shadow-[0_12px_40px_-12px_rgba(20,20,20,0.12)]";

function CardCopy({ project }: { project: Project }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-[20px]">
      <div className="flex flex-wrap gap-[12px]">
        {project.tags.map((tag) => (
          <Pill key={tag.label} tone={tag.tone}>
            {tag.label}
          </Pill>
        ))}
      </div>

      <div className="flex flex-col gap-[12px]">
        <h3 className="text-h2 font-medium text-ink">{project.title}</h3>
        <p
          className={`text-muted ${project.layout === "wide" && !project.cta ? "text-base" : "text-xl"}`}
        >
          {project.description}
        </p>
      </div>

      {project.cta ? (
        <div className="pt-[8px]">
          <ArrowButton href={project.cta.href} size="sm">
            {project.cta.label}
          </ArrowButton>
        </div>
      ) : null}
    </div>
  );
}

/** Full-bleed card: copy on the left, media tile on the right. */
function WideCard({ project }: { project: Project }) {
  return (
    <article
      className={`${cardShell} flex flex-col items-center gap-[28px] lg:flex-row`}
      id={project.id}
    >
      <CardCopy project={project} />
      <ProjectMedia id={project.id} />
    </article>
  );
}

/** Half-width card: media tile on top, copy underneath. */
function TallCard({ project }: { project: Project }) {
  return (
    <article className={`${cardShell} flex flex-col gap-[28px]`} id={project.id}>
      <ProjectMedia id={project.id} />
      <CardCopy project={project} />
    </article>
  );
}

export function WorkSection() {
  const [featured, ...rest] = projects;
  const pair = rest.filter((p) => p.layout === "tall");
  const closing = rest.filter((p) => p.layout === "wide");

  return (
    <section
      id="work"
      className="page-x mx-auto w-full max-w-[1280px] py-[80px]"
    >
      <div className="flex flex-col items-center gap-[64px]">
        <div className="flex flex-col items-center gap-[16px] text-center">
          <div className="relative">
            <h2 className="text-display font-semibold text-ink">
              Work I <span className="text-brand">Shipped</span>
            </h2>
            <HighlightSquiggle className="pointer-events-none absolute -top-[46px] -right-[92px] hidden lg:block" />
          </div>
          <p className="text-xl text-muted">
            Real product design work, from problem definition to production.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[48px]">
          {featured.layout === "feature" ? (
            <FeatureCard project={featured} />
          ) : (
            <WideCard project={featured} />
          )}

          <div className="grid gap-[48px] lg:grid-cols-2">
            {pair.map((project) => (
              <TallCard key={project.id} project={project} />
            ))}
          </div>

          {closing.map((project) => (
            <WideCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
