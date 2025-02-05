import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { TextGenerateEffect } from "../text-generate-effect";
import testimonials from "@/lib/constants/testimonials";

export function Testimonials() {
  return (
    <section className="my-20 mx-6 md:mx-10 xl:mx-32">
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
