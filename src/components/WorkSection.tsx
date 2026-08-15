import { projects, type Project } from "@/data/site";
import { Pill } from "./ui/Pill";
import { ArrowButton } from "./ui/ArrowButton";
import { ProjectMedia } from "./ProjectMedia";
import { HighlightSquiggle } from "./ui/icons";

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
      className="mx-auto w-full max-w-[1280px] px-6 py-[80px] md:px-12 xl:px-[120px]"
    >
      <div className="flex flex-col items-center gap-[64px]">
        <div className="flex flex-col items-center gap-[16px] text-center">
          <div className="relative">
            <h2 className="font-display wonk text-display font-semibold text-ink">
              Work I <span className="text-brand">Shipped</span>
            </h2>
            <HighlightSquiggle className="pointer-events-none absolute -top-[46px] -right-[92px] hidden lg:block" />
          </div>
          <p className="text-xl text-muted">
            Real product design work, from problem definition to production.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[48px]">
          <WideCard project={featured} />

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
