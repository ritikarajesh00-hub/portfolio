import type { ReactNode } from "react";

/*
 * Presentational pieces for long-form case studies, all built from the
 * portfolio's own tokens — Bricolage Grotesque, brand blue, ink/muted, the
 * hairline border. The source document's sage/clay/paper palette collapses
 * onto brand blue and white here so the case study reads as part of the site.
 */

/** Reading measure. Narrower than the site container — this is body copy. */
export function Measure({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[760px] ${className}`}>{children}</div>;
}

/** "01 — Overview" section marker. */
export function SectionNumber({ children }: { children: ReactNode }) {
  return (
    <div className="mb-[14px] text-base font-semibold tracking-[0.02em] text-brand">{children}</div>
  );
}

export function Section({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} className="page-x py-[44px]">
      <Measure>{children}</Measure>
    </section>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="mb-[18px] text-h2 leading-[1.15] font-semibold text-ink">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-[38px] mb-[10px] text-h3 leading-[1.2] font-semibold text-ink">{children}</h3>;
}

/** Standard body paragraph. */
export function P({ children }: { children: ReactNode }) {
  return <p className="mb-[20px] text-lg leading-[1.68] text-muted">{children}</p>;
}

/** The larger opening paragraph that sets up a section. */
export function LeadIn({ children }: { children: ReactNode }) {
  return <p className="mb-[20px] text-xl leading-[1.55] text-ink">{children}</p>;
}

/** Inline emphasis that lifts a phrase back to full-contrast ink. */
export function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

/** Meta strip under the hero: role, scope, timeline, platform. */
export function MetaStrip({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="my-[44px] grid grid-cols-2 gap-[22px] border-y border-hairline py-[26px] sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="mb-[5px] text-sm font-medium text-muted">{item.label}</dt>
          <dd className="text-base leading-[1.4] font-medium text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Label/description rows separated by hairlines. */
export function DefinitionRows({ rows }: { rows: { term: string; detail: string }[] }) {
  return (
    <dl className="my-[24px]">
      {rows.map((row, i) => (
        <div
          key={row.term}
          className={`grid gap-[8px] border-t border-hairline py-[18px] sm:grid-cols-[150px_1fr] sm:gap-[20px] ${
            i === rows.length - 1 ? "border-b" : ""
          }`}
        >
          <dt className="text-base font-semibold text-ink">{row.term}</dt>
          <dd className="text-base leading-[1.6] text-muted">{row.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Pull-quote: the single idea a section turns on. */
export function Insight({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-[34px] border-l-[3px] border-brand py-[6px] pl-[26px]">
      <p className="text-h3 leading-[1.36] font-medium text-ink">{children}</p>
    </blockquote>
  );
}

/** Verbatim interview quotes. */
export function Voices({ quotes }: { quotes: { quote: string; who: string }[] }) {
  return (
    <div className="my-[30px] flex flex-col gap-[16px]">
      {quotes.map((v) => (
        <figure
          key={v.quote}
          className="rounded-[20px] border border-hairline bg-card px-[24px] py-[22px]"
        >
          <blockquote className="text-lg leading-[1.45] text-ink italic">{v.quote}</blockquote>
          <figcaption className="mt-[12px] text-sm text-muted">{v.who}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Two-column comparison. Scrolls inside itself on narrow screens. */
export function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: { label: string; cells: { text: string; positive?: boolean }[] }[];
}) {
  return (
    <div className="my-[26px] overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-base">
        <thead>
          <tr>
            <th className="border-b border-hairline bg-tint-blue/50 px-[16px] py-[14px] text-left text-sm font-semibold text-muted" />
            {columns.map((c) => (
              <th
                key={c}
                className="border-b border-hairline bg-tint-blue/50 px-[16px] py-[14px] text-left text-sm font-semibold text-muted"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="border-b border-hairline px-[16px] py-[14px] align-top font-semibold text-ink">
                {row.label}
              </td>
              {row.cells.map((cell) => (
                <td
                  key={cell.text}
                  className={`border-b border-hairline px-[16px] py-[14px] align-top ${
                    cell.positive ? "font-semibold text-brand" : "text-muted"
                  }`}
                >
                  {cell.text}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** The emotional arc the page walks through. */
export function Arc({ steps }: { steps: string[] }) {
  return (
    <ol className="my-[26px] flex flex-wrap items-center gap-[10px] rounded-[20px] bg-tint-blue px-[24px] py-[22px]">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-[10px]">
          <span className="text-lg font-medium text-brand">{step}</span>
          {i < steps.length - 1 ? (
            <span aria-hidden className="text-brand/40">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/** One numbered step of the page walkthrough. */
export function PageBlock({
  number,
  title,
  job,
  children,
}: {
  number: string;
  title: string;
  job: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-hairline py-[30px] last:border-b">
      <div className="mb-[6px] flex items-baseline gap-[12px]">
        <span className="text-base font-semibold text-brand">{number}</span>
        <h3 className="text-h3 leading-[1.2] font-semibold text-ink">{title}</h3>
      </div>
      <p className="mb-[14px] text-sm text-muted">{job}</p>
      {children}
    </div>
  );
}

/** The rationale box inside a walkthrough block. */
export function Rationale({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-[14px] rounded-[12px] bg-tint-blue px-[18px] py-[14px] text-base leading-[1.6] text-muted">
      <span className="font-semibold text-brand">{label}</span> {children}
    </div>
  );
}

/** Slot for a screen that has not been dropped in yet. */
export function ShotPlaceholder({
  caption,
  hint,
  tall = false,
}: {
  caption: string;
  hint?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`my-[24px] rounded-[20px] border-[1.5px] border-dashed border-hairline bg-tint-blue/40 px-[28px] text-center ${
        tall ? "py-[80px]" : "py-[44px]"
      }`}
    >
      <p className="text-base font-semibold text-muted">{caption}</p>
      {hint ? <p className="mt-[4px] text-sm text-muted/80">{hint}</p> : null}
    </div>
  );
}

/**
 * Author-facing reminder carried over from the source draft. These are notes
 * to self, not content — they should be deleted before the site goes public.
 */
export function DraftNote({ children }: { children: ReactNode }) {
  return (
    <aside className="my-[20px] rounded-[12px] border border-dashed border-brand/40 bg-tint-blue/60 px-[18px] py-[14px] text-base leading-[1.6] text-muted">
      <span className="mb-[4px] block text-xs font-bold tracking-[0.08em] text-brand uppercase">
        Draft note — remove before publishing
      </span>
      {children}
    </aside>
  );
}
