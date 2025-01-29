"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Squash as Hamburger } from "hamburger-react";
import NavItems from "./nav-items";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { IconUser } from "@tabler/icons-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [isOpen, setOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number

    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      console.log({ direction });

      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
        setOpen(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 0,
          y: 0,
          borderRadius: 9999,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
          borderRadius: isOpen ? 24 : 9999,
        }}
        transition={{
          default: { duration: 0.5 },
          borderRadius: { duration: 0 },
        }}
        className={cn(
          "max-w-full space-y-4  fixed top-2 inset-x-6 md:inset-x-10 mx-auto border border-transparent dark:border-white/[0.2]  dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  pr-2 pl-4 xl:pl-8 py-0 xl:py-2",
          className
        )}
      >
        <div className=" flex items-center justify-between w-full">
          <Link href={"/"}>
            <span>LOGO</span>
          </Link>

          <div className="hidden xl:flex justify-center items-center space-x-4">
            <NavItems items={navItems} />
          </div>

          <div className="hidden xl:flex divide-x-2 items-center">
            <div className="pr-4">
              <Link
                href={"/login"}
                className={` flex gap-1 !rounded-full capitalize`}
              >
                <IconUser className="h-5 w-5" />
                mon compte
              </Link>
            </div>

            <div className="pl-4">
              <Link
                href={"/contact"}
                className={`${buttonVariants({
                  variant: "default",
                })} !rounded-full capitalize`}
              >
                nous contacter
              </Link>
            </div>
          </div>

          <div className="block xl:hidden">
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col space-y-4 pb-4">
            <NavItems items={navItems} />
            <div className=" divide-y-2 items-center">
              <div className="py-4">
                <Link
                  href={"/login"}
                  className={` flex gap-1 !rounded-full capitalize`}
                >
                  <IconUser className="h-5 w-5" />
                  mon compte
                </Link>
              </div>

              <div className="pt-4">
                <Link
                  href={"/contact"}
                  className={`${buttonVariants({
                    variant: "default",
                  })} !rounded-full capitalize`}
                >
                  nous contacter
                </Link>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </AnimatePresence>
  );
};
