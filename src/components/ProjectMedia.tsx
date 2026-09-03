import Image from "next/image";
import { asset } from "@/lib/asset";

/*
 * Each tile is 448×308 in Figma with screenshots absolutely placed inside it
 * (and deliberately overflowing top and bottom). Every offset below is that
 * design coordinate expressed as a percentage of the tile, so the whole
 * composition scales down intact instead of drifting apart.
 */

const tones = {
  violet: "bg-media-violet",
  mint: "bg-media-mint",
  sky: "bg-media-sky",
  rose: "bg-media-rose",
} as const;

function Tile({
  tone,
  children,
}: {
  tone: keyof typeof tones;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative aspect-[448/308] w-full max-w-[448px] shrink-0 overflow-hidden rounded-[20px] ${tones[tone]}`}
    >
      {children}
    </div>
  );
}

/**
 * Portrait composition for the feature card's full-height panel.
 *
 * The landscape tile below cannot simply be stretched here — its offsets are
 * percentages of a 448×308 box, so a portrait panel would distort them. The
 * device instead takes its height from the panel and derives its width from
 * the source aspect ratio, then bleeds off the bottom edge.
 */
function PcosFeatureMedia() {
  // The supplied mockup already bakes in the device, its shadow and its own
  // lavender backdrop, so no frame or rounding of ours goes on top.
  //
  // `contain` rather than `cover`: the artwork is square and the panel is not,
  // so cover would slice the top and bottom off the phone. The panel is
  // painted the colour sampled from the artwork, so the letterboxing on the
  // sides is invisible.
  return (
    <Image
      src={asset("/assets/pcos-mockup.png")}
      alt="Kapiva PCOSolve doctor-led landing page shown on a phone"
      fill
      sizes="(max-width: 1024px) 100vw, 460px"
      className="object-contain object-center"
    />
  );
}

function DiaFreeMedia({ bleed }: { bleed?: boolean }) {
  if (bleed) return <PcosFeatureMedia />;

  return (
    <Tile tone="violet">
      {/* Back handset — its bitmap is nudged left inside a clipping window. */}
      <div className="absolute top-[11.45%] left-[49.47%] h-[103.55%] w-[33.6%] overflow-hidden">
        <Image
          src={asset("/assets/dia-mock-back.png")}
          alt=""
          width={1958}
          height={3840}
          sizes="160px"
          className="absolute top-0 left-[-3.45%] h-full w-[108.96%] max-w-none"
        />
      </div>
      <div className="absolute top-[6.51%] left-[16.96%] h-[109.42%] w-[38.97%] overflow-hidden">
        <Image
          src={asset("/assets/dia-mock-front.png")}
          alt="Dia Free product detail page on mobile"
          width={1958}
          height={3840}
          sizes="180px"
          className="absolute top-0 left-[-0.03%] h-[101.41%] w-[100.06%] max-w-none"
        />
      </div>
    </Tile>
  );
}

function SubscriptionsMedia() {
  return (
    <Tile tone="mint">
      <div className="absolute top-[9.74%] left-[-4.688%] h-[130.52%] w-[109.375%] shadow-[0px_4px_16.9px_0px_rgba(20,20,20,0.2)]">
        <Image
          src={asset("/assets/subscriptions.png")}
          alt="Smart Subscriptions screens"
          fill
          sizes="(max-width: 768px) 100vw, 490px"
          className="object-cover"
        />
      </div>
    </Tile>
  );
}

function TrustSignalsMedia() {
  return (
    <Tile tone="sky">
      {/* Tilted handset: Figma stores the rotated bounding box, so this is the
          leaf re-centred on that box and rotated about its own centre. */}
      <div className="absolute top-[15.72%] left-[25.02%] h-[125.04%] w-[43.59%] -rotate-[13.45deg]">
        <Image
          src={asset("/assets/trust-back.png")}
          alt=""
          fill
          sizes="200px"
          className="object-cover"
        />
      </div>
      <div className="absolute top-[12.99%] left-[40.67%] h-[115.91%] w-[43.53%]">
        <Image
          src={asset("/assets/trust-front.png")}
          alt="Trust signals shown on a product page"
          fill
          sizes="200px"
          className="object-cover"
        />
      </div>
    </Tile>
  );
}

function ReturnsMedia() {
  return (
    <Tile tone="rose">
      <div className="absolute top-[-61.69%] left-[52.68%] h-[124.35%] w-[42.63%] overflow-hidden">
        <Image
          src={asset("/assets/returns.png")}
          alt=""
          width={636}
          height={1280}
          sizes="200px"
          className="absolute top-0 left-[-0.09%] h-[100.4%] w-[100.18%] max-w-none"
        />
      </div>
      <div className="absolute top-[20.45%] left-[7.59%] h-[124.35%] w-[42.41%] overflow-hidden">
        <Image
          src={asset("/assets/returns.png")}
          alt="Returns flow on mobile"
          width={636}
          height={1280}
          sizes="200px"
          className="absolute top-0 left-[-0.09%] h-[100.4%] w-[100.18%] max-w-none"
        />
      </div>
    </Tile>
  );
}

const media: Record<string, (props: { bleed?: boolean }) => React.JSX.Element> = {
  "pcos-funnel": DiaFreeMedia,
  "smart-subscriptions": SubscriptionsMedia,
  "trust-signals": TrustSignalsMedia,
  "returns-made-easy": ReturnsMedia,
};

export function ProjectMedia({ id, bleed }: { id: string; bleed?: boolean }) {
  const Media = media[id];
  return Media ? <Media bleed={bleed} /> : null;
}
