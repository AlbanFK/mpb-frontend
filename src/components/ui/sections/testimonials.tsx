import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { TextGenerateEffect } from "../text-generate-effect";
import testimonials from "@/lib/constants/testimonials";

export function Testimonials() {
  return (
    <section className="pt-10 pb-20 mt-10 px-6 md:px-10 xl:px-32 bg-purple-50">
      <h3 className="text-2xl md:text-3xl font-medium text-primary text-center">
        <TextGenerateEffect
          filter={false}
          words={"Ils nous ont fait confiance"}
        />
      </h3>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </section>
  );
}
