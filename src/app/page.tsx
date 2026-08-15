import { Navbar } from "@/components/Navbar";
import { GridBackdrop, Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { SkillsBand } from "@/components/SkillsBand";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

// `overflow-x-clip` rather than `hidden`: `hidden` would compute overflow-y to
// `auto`, turning main into a scroll container and breaking the sticky heading
// in the testimonials section.
export default function Home() {
  return (
    <main className="overflow-x-clip">
      {/* The grid backdrop bleeds behind both the navbar and the hero. */}
      <div className="relative">
        <GridBackdrop />
        <Navbar />
        <Hero />
      </div>

      <WorkSection />
      <SkillsBand />
      <AboutSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
