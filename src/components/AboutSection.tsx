import Image from "next/image";
import { about } from "@/data/site";
import { ArrowButton } from "./ui/ArrowButton";
import { CurvedArrow, SparkleIcon } from "./ui/icons";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-[1280px] px-6 py-[80px] md:px-12 xl:px-[120px]"
    >
      <div className="mx-auto grid max-w-[952px] gap-[32px] lg:grid-cols-[326px_1fr] lg:gap-[32px]">
        {/* Title stack sitting on top of the portrait card. */}
        <div className="relative h-[451px] w-[326px] shrink-0 justify-self-center lg:justify-self-start">
          <div className="absolute bottom-0 h-[351px] w-[326px] overflow-hidden rounded-[20px] bg-[#d9d9d9]">
            <Image
              src="/assets/about-portrait.png"
              alt={about.portraitAlt}
              width={743}
              height={1010}
              sizes="326px"
              className="absolute top-[-44.87%] left-[-28.2%] h-[323.59%] w-[256.31%] max-w-none object-cover"
            />
            {/* White wash fading downward, so the crop melts into the page. */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 140.88%)",
              }}
            />
          </div>

          <div className="absolute top-0 left-[11px] flex flex-col">
            <span className="text-title font-medium text-ink opacity-60">{about.eyebrow}</span>
            <span className="text-display font-medium text-brand">{about.heading}</span>
            <SparkleIcon className="absolute top-[-4px] left-[129px]" />
            <SparkleIcon className="absolute top-[27px] left-[140px]" />
          </div>

          <CurvedArrow className="absolute top-[84px] left-[-99px] hidden xl:block" />
        </div>

        <div className="flex max-w-[594px] flex-col gap-[42px] lg:pt-[29px]">
          <div className="flex flex-col gap-[24px]">
            <p className="text-h2 font-medium text-ink">
              {about.statement.before}
              <span className="text-brand">{about.statement.accent}</span>
              {about.statement.after}
            </p>
            <p className="text-h3 text-muted">
              {about.body.before}
              <span className="font-bold">{about.body.strong}</span>
              {about.body.after}
            </p>
          </div>

          <div>
            <ArrowButton href={about.cta.href}>{about.cta.label}</ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
