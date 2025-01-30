import React from "react";
import { BentoGrid } from "./bento-grid";
import services from "@/lib/constants/services";
import Image from "next/image";
import { buttonVariants } from "./button";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./text-generate-effect";

export function BentoGridServices() {
  return (
    <BentoGrid>
      <div className="flex p-4 flex-col min-h-48 justify-between items-start bg-primary-foreground rounded-[var(--radius)]">
        <h3 className="text-2xl md:text-3xl font-medium text-primary">
          <TextGenerateEffect
            filter={false}
            words={"Découvrer nos services exclusif"}
          />
        </h3>

        <Link
          href={"/services"}
          className={`${buttonVariants({
            variant: "link",
          })} flex gap-2 hover:gap-4`}
        >
          <span>En savoir plus</span>
          <IconArrowRight className="text-primary" />
        </Link>
      </div>
      {services.map((item, i) => (
        <ServiceCard key={i} src={item.img} title={item.title} sid={item.id} />
      ))}
    </BentoGrid>
  );
}

const ServiceCard = ({
  src,
  title,
  sid,
}: {
  src: string;
  title: string;
  sid: number;
}) => (
  <Link
    href={`/services#service${sid}`}
    className={cn(
      "relative flex flex-col justify-end w-full h-full min-h-48 rounded-xl"
    )}
  >
    <Image
      src={src}
      alt="hero image"
      fill
      className="object-cover object-center rounded-xl z-0 brightness-75"
    />
    <span className="z-10 p-4 text-white font-medium">{title}</span>
  </Link>
);
