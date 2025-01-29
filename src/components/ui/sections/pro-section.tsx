import React from "react";
import { TextGenerateEffect } from "../text-generate-effect";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../button";

const ProSection = () => {
  return (
    <section className="flex flex-col lg:flex-row rounded-[var(--radius)] mx-6 md:mx-10 xl:mx-32 gap-8 mt-20 bg-primary-foreground p-4">
      <div className="basis-1/2 p-2 space-y-6">
        <h3 className="text-center md:text-start">
          <TextGenerateEffect
            className="text-2xl md:text-4xl font-medium text-primary"
            filter={false}
            words={"Vous etes professionnel ? Construisons l'Avenir Ensemble !"}
          />
        </h3>

        <div className="lg:hidden">
          <ProImage />
        </div>

        <p>
          Chez Mapiolaubled, nous croyons en la puissance de la collaboration
          pour réaliser des projets immobiliers exceptionnels. Nous recherchons
          des professionnels du bâtiment passionnés et talentueux pour rejoindre
          notre réseau et contribuer à la réalisation de projets ambitieux pour
          nos clients expatriés.
        </p>

        <Link
          href={"/contact"}
          className={`${buttonVariants({
            variant: "default",
          })} !rounded-full capitalize`}
        >
          nous contacter
        </Link>
      </div>

      <div className="basis-1/2 hidden lg:flex justify-center lg:justify-end">
        <ProImage />
      </div>
    </section>
  );
};

const ProImage = () => {
  return (
    <div className=" h-full min-h-[400px] lg:w-4/5  max-w-sm md:max-w-full lg:max-w-screen-lg relative mt-8 lg:mt-0">
      <Image
        alt="why"
        src={
          "https://i.pinimg.com/736x/bf/d6/84/bfd684463e02b19ee0885b0626f15ea4.jpg"
        }
        fill
        className="object-cover object-center rounded-[var(--radius)]"
      />
    </div>
  );
};

export default ProSection;
