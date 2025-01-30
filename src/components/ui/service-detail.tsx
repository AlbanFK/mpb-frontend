import { Service } from "@/lib/interfaces";
import React from "react";
import Image from "next/image";
import { Button } from "./button";
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
    <div className="flex divide-x w-full">
      <div className="py-10  basis-4/5 flex gap-8 px-8">
        <div className="flex flex-col gap-8 basis-4/5">
          <span className="text-4xl text-primary">{service.title}</span>
          <span>{service.description}</span>
          <Button asChild>
            <Link href={"/contact"} className="w-fit flex gap-2">
              <span>Prendre contact</span>
              <IconArrowRight />
            </Link>
          </Button>
        </div>
        <div className=" basis-1/5 h-full flex flex-col justify-center">
          <div className="relative w-44 h-44">
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="object-cover object-center rounded-xl z-0 brightness-75"
            />
          </div>
        </div>
      </div>
      <div className="basis-1/5 flex justify-center items-center text-9xl font-semibold text-primary-foreground">
        {index < 10 ? `0${index}` : index}
      </div>
    </div>
  );
};

export default ServiceDetail;
