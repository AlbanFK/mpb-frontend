import GoalSection from "@/components/ui/sections/goal-section";
import ServicesSection from "@/components/ui/sections/services-section";
import { Testimonials } from "@/components/ui/sections/testimonials";
import HeroSection2 from "@/components/ui/sections/hero-section2";
import ProSection from "@/components/ui/sections/pro-section";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <HeroSection2 />
      <GoalSection />
      <ServicesSection />
      <Testimonials />
      <ProSection />
    </div>
  );
}
