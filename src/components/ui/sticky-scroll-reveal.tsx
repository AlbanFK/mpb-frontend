"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  className,
}: {
  content: {
    title: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
  className?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const { scrollY, scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      className={cn(
        " flex flex-col-reverse lg:flex-row justify-between relative lg:space-x-10 rounded-[var(--radius)] p-2 lg:p-10",
        className
      )}
      ref={ref}
    >
      <div className="relative flex justify-center items-start px-2 lg:px-4 lg:basis-6/12">
        <div className="w-full lg:max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className={cn(
                "my-32  transition-[visibility] delay-150 duration-200 ease-in-out",
                `${index < activeCard ? "invisible" : "visible"}`,
                `${index + 1 === cardLength ? "pt-10" : "pt-0"}`,
                `${index === 0 ? "mt-0" : "mt-32"}`,
                "lg:visible lg:my-40"
              )}
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={cn(
                  "block lg:hidden  h-[calc(70vmin+5rem)] overflow-hidden",
                  contentClassName
                )}
              >
                {content[activeCard].content ?? null}
              </motion.div>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold "
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className=" lg:max-w-sm mt-6 lg:mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className=" lg:h-32" />
        </div>
      </div>
      <div
        className={cn(
          "lg:basis-6/12 hidden lg:block w-full h-[calc(70vmin+5rem)] sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
