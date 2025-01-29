import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import services from "@/lib/constants/services";
import Image from "next/image";

export function BentoGridServices() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {services.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          header={<Header src={item.img ?? null} />}
          className={i === 2 ? "md:col-span-2 lg:col-span-1" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Header = ({ src }: { src: string | null }) => (
  <>
    {src ? (
      <div className="relative flex flex-1 w-full h-full min-h-48 rounded-xl">
        <Image
          src={src}
          alt="hero image"
          fill
          className="object-cover object-center rounded-xl"
        />
      </div>
    ) : (
      <Skeleton />
    )}
  </>
);
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
