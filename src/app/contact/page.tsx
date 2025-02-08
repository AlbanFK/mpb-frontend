import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="w-full flex flex-col h-screen max-h-[700px]">
      <div className="flex-none h-16 md:h-20 "></div>
      <div className="grow flex mx-6 md:mx-10 mb-2 rounded-[var(--radius)]  shadow-lg">
        <div className="p-10  basis-2/5 rounded-l-[var(--radius)] relative flex flex-col">
          <Image
            src={
              "https://i.pinimg.com/1200x/a2/67/97/a267974f3df6579e85be32ccc59b3bc6.jpg"
            }
            alt="contact image"
            fill
            className="object-cover object-center rounded-l-[var(--radius)] brightness-50 z-0"
          />

          <div className="z-10 w-full h-full flex flex-col text-white justify-between">
            <div className="space-y-4">
              <p className=" text-2xl md:text-4xl font-medium">
                Vous avez un projet en tête ?
              </p>

              <p>
                Prenez contact avec nous. Nous pouvons faire quelque chose de
                génial ensemble.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-sm font-extralight uppercase">
                  ADRESSE
                </span>
                <span>Paris</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extralight uppercase">EMAIL</span>
                <span>conttact@mpb.com</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extralight uppercase">
                  Télephone
                </span>
                <span>067878787878</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full basis-3/5 bg-background rounded-r-[var(--radius)] py-10 px-16 bg-purple-50">
          <p className=" text-2xl md:text-4xl font-medium capitalize text-primary">
            Nous contacter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
