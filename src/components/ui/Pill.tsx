import type { ReactNode } from "react";

type Tone = "violet" | "blue" | "rose";

const tones: Record<Tone, string> = {
  violet: "bg-tint-violet text-tint-violet-fg",
  blue: "bg-tint-blue text-brand",
  rose: "bg-tint-rose text-tint-rose-fg",
};

/** Rounded category chip — 18px/10px padding, 50px radius, medium weight. */
export function Pill({
  children,
  tone = "blue",
  size = "sm",
}: {
  children: ReactNode;
  tone?: Tone;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[50px] px-[18px] py-[10px] text-center font-medium whitespace-nowrap ${
        size === "sm" ? "text-base" : "text-xl"
      } ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
