import { Service } from "@/lib/interfaces";
import React from "react";
import Image from "next/image";
import { buttonVariants } from "./button";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const ServiceDetail = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  return (
    <div
      id={`service${service.id}`}
      className="flex flex-col-reverse lg:flex-row lg:divide-x divide-primary w-full"
    >
      <div className="py-10   lg:basis-4/5 flex gap-8 px-0 md:px-8">
        <div className="flex flex-col gap-8 lg:basis-4/5">
          <span className="text-3xl md:text-4xl text-primary">
            {service.title}
          </span>
          <div className="md:hidden flex justify-center">
            <div className="relative  w-full h-44">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover object-center rounded-xl z-0 brightness-75"
              />
            </div>
          </div>
          <span className="w-full">{service.description}</span>
          <Link
            href={"/contact"}
            className={`${buttonVariants({
              variant: "link",
            })} w-fit flex gap-2 hover:gap-4 !px-0`}
          >
            <span>Prendre contact</span>
            <IconArrowRight />
          </Link>
        </div>
        <div className=" basis-1/5 hidden md:flex  justify-center items-center lg:items-start">
          <div className="relative  w-44 h-44">
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="object-cover object-center rounded-xl z-0 brightness-75"
            />
          </div>
        </div>
      </div>
      <div className="basis-1/5 flex lg:justify-center items-center text-8xl lg:text-9xl font-semibold text-primary-foreground">
        {index < 10 ? `0${index}` : index}
      </div>
    </div>
  );
};

export default ServiceDetail;
