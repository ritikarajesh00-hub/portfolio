import { testimonials } from "@/data/site";
import { AvatarPlaceholder } from "./ui/icons";

export function Testimonials() {
  return (
    <section className="page-x mx-auto w-full max-w-[1280px] py-[80px]">
      <div className="grid gap-[48px] lg:grid-cols-2 lg:gap-[32px]">
        <div className="flex max-w-[504px] flex-col gap-[16px] lg:sticky lg:top-[60px] lg:self-start">
          <h2 className="text-display font-medium text-ink">{testimonials.heading}</h2>
          <p className="text-xl text-muted">{testimonials.subheading}</p>
        </div>

        <div className="flex flex-col gap-[28px]">
          {testimonials.items.map((item) => (
            <figure
              key={item.id}
              className="flex max-w-[504px] flex-col gap-[32px] rounded-[44px] border border-hairline bg-card p-[24px]"
            >
              <blockquote className="text-h3 font-medium text-ink">{item.quote}</blockquote>
              <figcaption className="flex items-start gap-[8px]">
                <AvatarPlaceholder />
                <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
                  <span className="text-2xl font-medium text-ink">{item.name}</span>
                  <span className="text-xl text-muted">{item.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
