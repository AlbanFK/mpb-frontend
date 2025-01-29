"use client";
import { BentoGridServices } from "../services";

const ServicesSection = () => {
  return (
    <section className="mt-24">
      <h3 className="text-2xl md:text-4xl font-medium text-center mx-auto text-primary">
        Découvrez nos services exclusif
      </h3>

      <div className="mt-6 px-6 md:px-10">
        <BentoGridServices />
      </div>
    </section>
  );
};

export default ServicesSection;
