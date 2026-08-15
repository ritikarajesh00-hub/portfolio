import Link from "next/link";
import { footer } from "@/data/site";

export function Footer() {
  return (
    <footer id="resume" className="overflow-hidden bg-ink">
      <div className="page-x mx-auto flex w-full max-w-[1280px] flex-col gap-[105px] pt-[60px]">
        <div className="flex flex-col gap-[52px]">
          <h2 className="flex max-w-[687px] flex-col gap-[6px] text-display font-semibold text-white">
            <span>{footer.headline.line1}</span>
            <span className="opacity-60">{footer.headline.line2}</span>
          </h2>

          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-wrap justify-between gap-x-[40px] gap-y-[32px] text-xl">
              {footer.columns.map((column) => (
                <div key={column.label} className="flex flex-col gap-[12px]">
                  <span className="text-footer-muted">{column.label}</span>
                  <Link
                    href={column.href}
                    className="text-white transition-opacity hover:opacity-70"
                  >
                    {column.value}
                  </Link>
                </div>
              ))}
            </div>

            {/* Figma "Line 1": 1px stroke, white at 12% */}
            <div className="h-px w-full bg-white/12" />

            <div className="flex flex-wrap items-center justify-between gap-4 text-xl text-footer-muted">
              <p>
                {footer.location.before}
                <span className="text-white">{footer.location.city}</span>
              </p>
              <p>{footer.copyright}</p>
            </div>
          </div>
        </div>

        {/* Oversized wordmark that fades from blue into the footer background. */}
        <p
          aria-hidden
          className="gradient-text -mb-[2%] w-full text-mega leading-[0.95] font-semibold"
        >
          {footer.wordmark}
        </p>
      </div>
    </footer>
  );
}
