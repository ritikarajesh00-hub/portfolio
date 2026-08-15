import Image from "next/image";
import { skills } from "@/data/site";
import { asset } from "@/lib/asset";

/**
 * The skill row is ~1938px of chips inside a 1040px card, i.e. a marquee.
 * The list is rendered twice and translated by -50%, so the loop is seamless;
 * `prefers-reduced-motion` freezes it (see globals.css).
 */
function SkillMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-[20px]">
      <div className="animate-marquee flex w-max gap-[24px]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 gap-[24px]" aria-hidden={copy === 1}>
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex shrink-0 items-center justify-center rounded-[50px] bg-tint-blue px-[18px] py-[10px] text-xl font-medium whitespace-nowrap text-brand"
              >
                {skill}
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Blue fades so chips dissolve into the card edges. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[160px] bg-gradient-to-r from-brand to-transparent lg:w-[276px]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[140px] bg-gradient-to-l from-brand to-transparent lg:w-[216px]" />
    </div>
  );
}

export function SkillsBand() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-[40px] md:px-12 xl:px-[120px]">
      <div className="relative flex flex-col items-center gap-[32px] overflow-hidden rounded-[40px] bg-brand py-[60px]">
        {/* Same blueprint grid as the hero, tinted blue instead of white. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
          <Image
            src={asset("/assets/grid-bg.png")}
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1040px"
            className="object-cover opacity-[0.29]"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 46.2% 46.2% at 50% 50%, rgba(37,99,235,0.4) 0%, rgba(37,99,235,1) 100%)",
            }}
          />
        </div>

        <div className="relative flex max-w-[682px] flex-col items-center gap-[16px] px-6 text-center text-white">
          <h2 className="text-display font-medium">What I bring to the table</h2>
          <p className="max-w-[504px] text-xl opacity-80">
            Digital experiences that engage users and help your startup stand out from day one
          </p>
        </div>

        <div className="relative w-full">
          <SkillMarquee />
        </div>
      </div>
    </section>
  );
}
