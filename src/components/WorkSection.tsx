import Link from "next/link";
import { projects, type Project } from "@/data/site";
import { Pill } from "./ui/Pill";
import { ArrowButton } from "./ui/ArrowButton";
import { ProjectMedia } from "./ProjectMedia";
import { ArrowRightIcon, HighlightSquiggle } from "./ui/icons";

/** Splits the description so one phrase can be italicised in place. */
function Description({ text, emphasize }: { text: string; emphasize?: string }) {
  if (!emphasize || !text.includes(emphasize)) return <>{text}</>;
  const [before, after] = text.split(emphasize);
  return (
    <>
      {before}
      <em className="italic">{emphasize}</em>
      {after}
    </>
  );
}

/**
 * Hero project card: copy on the left, media panel running edge-to-edge on the
 * right, with an outcome row and a text link rather than a filled button.
 */
function FeatureCard({ project }: { project: Project }) {
  return (
    <article
      id={project.id}
      className="grid overflow-hidden rounded-[44px] border border-hairline bg-card lg:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="flex flex-col justify-center gap-[22px] p-[28px] sm:p-[32px] lg:p-[36px]">
        <div className="flex flex-wrap gap-[10px]">
          {project.tags.map((tag) => (
            <Pill key={tag.label} tone={tag.tone}>
              {tag.label}
            </Pill>
          ))}
        </div>

        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[clamp(1.625rem,2.8vw,2.25rem)] leading-[1.15] font-semibold text-ink">
            {project.title}
          </h3>
          <p className="text-lg text-muted">
            <Description text={project.description} emphasize={project.emphasize} />
          </p>
        </div>

        {project.cta ? (
          <Link
            href={project.cta.href}
            className="group inline-flex w-fit items-center gap-[8px] border-b-2 border-brand pb-[4px] text-xl font-medium text-ink transition-colors hover:text-brand"
          >
            {project.cta.label}
            <span className="transition-transform group-hover:translate-x-[3px]">
              <ArrowRightIcon />
            </span>
          </Link>
        ) : null}
      </div>

      {/* Panel is painted the mockup's own background colour so the artwork
          blends into it. min-h gives it height once the grid stacks. */}
      <div className="relative min-h-[360px] overflow-hidden bg-media-mockup lg:min-h-0">
        <ProjectMedia id={project.id} bleed />
      </div>
    </article>
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
