import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import testimonials from "@/lib/constants/testimonials";
import React from "react";
// import Image from "next/image";
import Carousel from "@/components/ui/carousel";

function References() {
  const content = testimonials.map(({ quote, name, designation, src }) => {
    return {
      title: `${name} ${designation}`,
      description: quote,
      content: <Carousel slides={[{ src }, { src }]} />,
    };
  });
  return (
    // <div className="pt-16 md:pt-28">
    <StickyScroll
      content={content}
      className="mt-16  md:mt-20 mx-6 md:mx-10 "
    />
    // {/* </div> */}
  );
}

export default References;
