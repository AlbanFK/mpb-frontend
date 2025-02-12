import React from "react";
import Image from "next/image";
import ContactForm from "@/components/ui/form/contact-form";
import { IconAt, IconMapPin, IconPhone } from "@tabler/icons-react";

function Contact() {
  return (
    <div className="w-full flex flex-col min-h-fit  md:h-screen max-h-[700px]">
      <div className="flex-none h-16 md:h-20 "></div>
      <div className="grow flex flex-col md:flex-row gap-y-4 md:gap-y-0 mx-6 md:mx-10 mb-2 rounded-[var(--radius)]  md:shadow-lg">
        <div className="p-10 basis-full md:basis-2/5 rounded-r-[var(--radius)] md:rounded-r-none  rounded-l-[var(--radius)] relative flex flex-col bg-primary">
          <Image
            src={
              "https://i.pinimg.com/1200x/a2/67/97/a267974f3df6579e85be32ccc59b3bc6.jpg"
            }
            alt="contact image"
            fill
            className="object-cover object-center rounded-r-[var(--radius)] md:rounded-r-none rounded-l-[var(--radius)] brightness-50 z-0"
          />

          <div className="z-10 w-full h-full flex flex-col text-white justify-between">
            <div className="space-y-4 hidden md:block">
              <p className=" text-2xl md:text-4xl font-medium">
                Vous avez un projet en tête ?
              </p>

              <p>
                Prenez contact avec nous. Nous pouvons faire quelque chose de
                génial ensemble.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2 items-center">
                <IconMapPin size={32} className="text-white" />
                <div className="flex flex-col">
                  <span className="text-sm font-extralight uppercase">
                    ADRESSE
                  </span>
                  <span>Paris</span>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <IconAt size={32} className="text-white" />
                <div className="flex flex-col">
                  <span className="text-sm font-extralight uppercase">
                    EMAIL
                  </span>
                  <span>conttact@mpb.com</span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <IconPhone size={32} className="text-white" />
                <div className="flex flex-col">
                  <span className="text-sm font-extralight uppercase">
                    Télephone
                  </span>
                  <span>067878787878</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" basis-full  md:basis-3/5 bg- rounded-l-[var(--radius)] md:rounded-l-none rounded-r-[var(--radius)] py-10 px-8 md:px-16 bg-purple-50 h-full flex-none flex flex-col items-center md:items-start">
          <p className=" text-2xl md:text-4xl font-medium capitalize text-primary">
            Nous contacter
          </p>

          <div className="w-full mt-10 max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
