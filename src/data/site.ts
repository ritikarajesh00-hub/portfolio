/**
 * All page copy lives here so content edits never require touching layout code.
 * Strings are transcribed verbatim from the Figma frame (node 342:508).
 */

export const nav = {
  wordmark: "Rithika.",
  links: [
    { label: "Work", href: "#work" },
    { label: "About me", href: "#about" },
  ],
  resume: { label: "Resume", href: "#resume" },
};

/**
 * A headline renders inline. `accent` paints a segment brand blue; `wordmark`
 * swaps in the logo treatment of the name, whose final letter becomes a
 * comment-bubble mark.
 */
type HeadlineSegment = { text: string; accent?: boolean; wordmark?: boolean };

const heroHeadline: HeadlineSegment[] = [
  { text: "Hey, I am " },
  { text: "Rithika", wordmark: true },
  { text: "!\n" },
  { text: "Designing with " },
  { text: "pixels", accent: true },
  { text: ". Building with " },
  { text: "prompts", accent: true },
  { text: "." },
];

export const hero = {
  headline: heroHeadline,
  bio: {
    before:
      "I’ve done post graduation in Interaction Designing from Pearl Academy, Bangalore. I have ",
    strong: "3 years of experience",
    after: " in UI/UX designing and a strong interest in storytelling.",
  },
  cta: { label: "Best Work", href: "#work" },
  portraitAlt: "Portrait of Rithika",
  /** Rotated sticker labels floating over the portrait. */
  stickers: [
    { label: "Traveller", className: "top-[40px] -right-[10px] -rotate-[7.92deg]" },
    { label: "3+ years experience", className: "top-[165px] left-[-40px] rotate-[9.27deg]" },
    { label: "Fashion Designer", className: "top-[305px] right-[-24px] rotate-[7deg]" },
  ],
};

export type Project = {
  id: string;
  layout: "wide" | "tall";
  tags: { label: string; tone: "violet" | "blue" | "rose" }[];
  title: string;
  description: string;
  cta?: { label: string; href: string };
  media: { tone: "violet" | "mint" | "sky" | "rose" };
};

export const projects: Project[] = [
  {
    id: "dia-free-pdp",
    layout: "wide",
    tags: [
      { label: "Website", tone: "violet" },
      { label: "D2C E-commerce", tone: "violet" },
    ],
    title: "Dia Free PDP Revamp",
    description:
      "Redesigned the Dia Free PDP using research and behavioral insights, increasing RPS by 20% and conversion by 21.69%.",
    media: { tone: "violet" },
  },
  {
    id: "smart-subscriptions",
    layout: "tall",
    tags: [{ label: "Retention", tone: "blue" }],
    title: "Smart Subscriptions",
    description: "Simplifying repeat purchases to increase monthly retention",
    media: { tone: "mint" },
  },
  {
    id: "trust-signals",
    layout: "tall",
    tags: [
      { label: "UX", tone: "blue" },
      { label: "Trust", tone: "blue" },
    ],
    title: "Trust Signals",
    description: "Improving product credibility to reduce purchase hesitation",
    media: { tone: "sky" },
  },
  {
    id: "returns-made-easy",
    layout: "wide",
    tags: [{ label: "Post-Purchase", tone: "rose" }],
    title: "Returns Made Easy",
    description: "Streamlining returns flow to reduce support dependency",
    cta: { label: "Case Study", href: "#returns-made-easy" },
    media: { tone: "rose" },
  },
];

export const skills = [
  "User Experience Design",
  "Graphic Design",
  "User Research",
  "Framer Development",
  "Product Design",
  "Visual Design",
  "Design System",
  "Branding",
  "User Interface Design",
];

export const about = {
  eyebrow: "A little",
  heading: "about me",
  statement: {
    before: "As a ",
    accent: "product designer",
    after: " that’s a visual storyteller at heart, I blend artistry with strategy. ",
  },
  body: {
    before:
      "I’ve done post graduation in Interaction Designing from Pearl Academy, Bangalore. I have ",
    strong: "3 years of experience",
    after: " in UI/UX designing and a strong interest in storytelling.",
  },
  cta: { label: "More about me", href: "#about" },
  portraitAlt: "Rithika smiling, seated outdoors",
};

export const testimonials = {
  heading: "What People say",
  subheading: "…bribed all of them with pizzas",
  items: [
    {
      id: "pulkit-1",
      quote:
        "Rithika brings in high energy and enthusiasm and partners effectively to create extraordinary experiences",
      name: "Pulkit Sharma",
      role: "UX Designer Manager",
    },
    {
      id: "pulkit-2",
      quote:
        "Rithika brings in high energy and enthusiasm and partners effectively to create extraordinary experiences",
      name: "Pulkit Sharma",
      role: "UX Designer Manager",
    },
    {
      id: "pulkit-3",
      quote:
        "Rithika brings in high energy and enthusiasm and partners effectively to create extraordinary experiences",
      name: "Pulkit Sharma",
      role: "UX Designer Manager",
    },
  ],
};

export const footer = {
  headline: { line1: "Let’s Design", line2: "incredible work together." },
  // NOTE: this address is what the Figma frame reads; it looks like leftover
  // template copy for this portfolio. Swap it before shipping.
  columns: [
    { label: "Email", value: "Aditya2.3tanwar@gmail.com", href: "mailto:Aditya2.3tanwar@gmail.com" },
    { label: "Resume", value: "Download", href: "#resume" },
    { label: "Socials", value: "Instagram, LInkedin, yourubte", href: "#socials" },
  ],
  location: { before: "Based in ", city: "Bengaluru" },
  copyright: "2026 Rithika",
  wordmark: "Get in Touch",
};
