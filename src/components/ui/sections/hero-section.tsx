"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../button";
import Image from "next/image";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  showRadialGradient?: boolean;
}

export const HeroSection = ({
  className,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <section>
      <div
        className={cn(
          "relative flex flex-col  portrait:h-fit landscape:h-[100vh] min-h-[500px]  items-center justify-center  text-slate-950 transition-bg px-6 md:px-10 pt-10",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start justify-center px-4"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl  xl:text-7xl font-bold dark:text-white text-center md:text-start md:pt-0 text-primary">
              Vos projets immobiliers à distance !
            </h1>
            <h3 className="font-extralight text-base md:text-2xl xl:text-3xl xl:text-4xl dark:text-neutral-200 py-4 text-center md:text-start w-full">
              Et avec garantie d&apos;achevement.
            </h3>
            <Link
              href={"/contact"}
              className={`${buttonVariants({
                variant: "default",
                size: "lg",
              })} !rounded-full capitalize`}
            >
              nous contacter
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="relative w-full md:w-1/2 h-[50vh]"
          >
            <Image
              src={
                "https://i.pinimg.com/736x/ce/69/a6/ce69a61205a95a2aa632e4bc8799733d.jpg"
              }
              alt="hero image"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
