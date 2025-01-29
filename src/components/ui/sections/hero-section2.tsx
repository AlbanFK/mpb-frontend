"use client";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../button";
import { TextGenerateEffect } from "../text-generate-effect";
import { motion } from "framer-motion";

const HeroSection2 = () => {
  return (
    <section className="w-full flex flex-col h-screen max-h-[700px]">
      <div className="flex-none h-16 md:h-20 "></div>
      <div className="grow flex justify-center pt-10 bg-cover mx-6 md:mx-10 mb-2 rounded-[var(--radius)] bg-bottom relative bg-[url('https://i.pinimg.com/1200x/0b/28/d2/0b28d2253c5fdfd857c4205913825787.jpg')]">
        <div className="text-white max-w-[600px] text-center flex flex-col gap-4 xl:justify-between items-center pb-5">
          <div>
            <h1>
              <TextGenerateEffect
                className="text-3xl md:text-4xl lg:text-5xl  xl:text-5xl font-semibold px-2"
                filter={false}
                words={"Vos projets immobiliers à distance !"}
              />
            </h1>
            <h3 className="font-extralight text-base md:text-2xl   dark:text-neutral-200 py-4 w-full">
              Et avec garantie d&apos;achevement.
            </h3>
          </div>

          {/* <div className="bg-background  w-fit py-2 px-4 rounded-full"> */}
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Link
              href={"/contact"}
              className={`${buttonVariants({
                variant: "outline",
              })} !rounded-full capitalize !text-foreground `}
            >
              nous contacter
            </Link>
          </motion.div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
