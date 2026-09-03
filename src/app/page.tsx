import { Navbar } from "@/components/Navbar";
import { GridBackdrop, Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { SkillsBand } from "@/components/SkillsBand";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

// `overflow-x-clip` rather than `hidden`: `hidden` would compute overflow-y to
// `auto`, turning main into a scroll container and breaking every sticky
// descendant — the header and the testimonials heading.
export default function Home() {
  return (
    // Navbar is a direct child so its `sticky` spans the whole page. Nested in
    // a wrapper it would unstick as soon as that wrapper scrolled past.
    <main className="relative overflow-x-clip">
      {/* The grid backdrop bleeds behind both the navbar and the hero. */}
      <GridBackdrop />
      <Navbar />
      <Hero />

      <WorkSection />
      <SkillsBand />
      <AboutSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
