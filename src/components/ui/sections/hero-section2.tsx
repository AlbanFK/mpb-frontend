"use client";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../button";
import { motion } from "framer-motion";
import { TextAnimate } from "../text-animate";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

const HeroSection2 = () => {
  return (
    <section className="w-full flex flex-col lg:h-screen lg:max-h-[700px] bg-purple-50 pb-6 ">
      <div className="flex-none h-16 md:h-20 "></div>
      <div className="grow grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-6 mx-6 md:mx-10 mb-2  ">
        <div className="md:col-span-3 rounded-3xl bg-cover min-h-[300px]  bg-bottom p-7 md:p-14 relative bg-[url('https://i.pinimg.com/1200x/0b/28/d2/0b28d2253c5fdfd857c4205913825787.jpg')]">
          {/* <div > */}
          <div className="text-white max-w-[600px] ">
            <TextAnimate
              animation="slideUp"
              duration={0.4}
              as="h1"
              by="text"
              className="text-[40px] md:text-[44px] lg:text-[52px] font-medium"
              segmentClassName="!whitespace-normal capitalize leading-tight"
            >
              Vos projets immobiliers à distance !
            </TextAnimate>
          </div>

          <div className="absolute bottom-0 right-0 rounded-ss-3xl p-3 md:p-6 pb-0 pr-0 bg-purple-50 before:content-[''] before:h-8 before:w-8  before:absolute before:rounded-ee-3xl before:-top-8 before:right-0 before:shadow-[5px_10px_0_0px_rgb(250,245,255)]  after:content-[''] after:h-8 after:w-8  after:absolute after:rounded-ee-3xl after:bottom-0 after:-left-8 after:shadow-[5px_10px_0_0px_rgb(250,245,255)]">
            <motion.div
              initial={{ opacity: 0.0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                scale: { type: "spring", visualDuration: 0.8, bounce: 0.8 },
              }}
            >
              <Link href={"/contact"} className="flex group">
                <span
                  className={`${buttonVariants({
                    variant: "default",
                  })} !rounded-full capitalize !text-primary-foreground hover:bg-primary`}
                >
                  nous contacter
                </span>
                <IconArrowRight
                  className={`${buttonVariants({
                    size: "icon",
                  })} text-primary-foreground !rounded-full !p-2.5 -ml-2 hover:bg-primary transition-transform group-hover:-rotate-45`}
                />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="md:col-span-2 md:max-h-[636px] grid grid-rows-3 lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 overflow-clip">
          <motion.div
            initial={{ y: "-110%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="lg:col-span-2 bg-primary rounded-3xl p-8 text-primary-foreground flex justify-center items-center"
          >
            <span className="text-sm lg:text-base">
              Explore our latest collection of premium properties and find your
              dream home today. From luxurious estates to trendy urban condos,
              we have something for every lifestyle and budget.
            </span>
          </motion.div>
          {/* <div className="grow grid grid-cols-1 grid-rows-2 lg:grid-cols-2 gap-6 overflow-clip"> */}
          <motion.div
            initial={{ opacity: 0, y: "101%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              // delay: 0.3,
              duration: 0.4,
              ease: "linear",
            }}
            className="bg-rose-100 rounded-3xl flex justify-center items-center p-8"
          >
            <div className="space-y-8 text-primary text-center">
              <span className="block text-5xl font-medium">5+</span>
              <span className="capitalize block">
                années de services dédiés
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: "101%" }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="bg-rose-600 rounded-3xl row-span-1"
          >
            <Link
              href={"/references"}
              className="group w-full h-full rounded-3xl p-4 lg:p-8 flex flex-col justify-between relative"
            >
              <Image
                src={
                  "https://i.pinimg.com/736x/65/f1/40/65f1400ee62aa7fc8f6b4997c3d1de65.jpg"
                }
                alt="hero image"
                fill
                className="object-cover object-center rounded-xl z-0 brightness-50"
              />
              <div className="space-y-4 lg:space-y-8 text-white z-10">
                <span className="block text-5xl font-medium">14+</span>
                <span className="capitalize block">Résidences construites</span>
              </div>

              <div className="w-full flex justify-end z-10">
                <span>
                  <IconArrowRight
                    className={`${buttonVariants({
                      size: "icon",
                    })} !text-primary !rounded-full !p-2.5 -ml-2 bg-white transition-transform group-hover:-rotate-45`}
                  />
                </span>
              </div>
            </Link>
          </motion.div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
