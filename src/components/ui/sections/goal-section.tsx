"use client";
import React from "react";
import goals from "@/lib/constants/goals";
import { IconCheckupList, IconEye, IconHomeRibbon } from "@tabler/icons-react";
import { TextGenerateEffect } from "../text-generate-effect";
import Image from "next/image";

const GoalImage = () => {
  return (
    <div className=" h-full min-h-[400px] lg:w-4/5  max-w-sm md:max-w-full lg:max-w-screen-lg relative mt-8 lg:mt-0">
      <Image
        alt="why"
        src={
          "https://i.pinimg.com/736x/47/01/36/4701361776eba2db514225c0a0f352a7.jpg"
        }
        fill
        className="object-cover object-center rounded-[var(--radius)]"
      />
    </div>
  );
};

const GoalSection = () => {
  return (
    <section className="flex flex-col lg:flex-row rounded-[var(--radius)] mx-6 md:mx-10 xl:mx-32 gap-8 mt-20">
      <div className="basis-1/2">
        <h3 className="text-center md:text-start">
          <TextGenerateEffect
            className="text-2xl md:text-4xl font-medium text-primary"
            filter={false}
            words={"Pourquoi nous choisir ?"}
          />
        </h3>
        <div className="lg:hidden">
          <GoalImage />
        </div>

        <div className="flex flex-col justify-evenly  gap-10 w-full py-10">
          {goals.map((goal) => (
            <div
              key={goal.key}
              className="gap-6 md:gap-8  flex flex-col md:flex-row items-center"
            >
              <span className="flex justify-center items-center bg-primary-foreground p-3.5 rounded-full">
                {goal.key === "achievement" && (
                  <IconHomeRibbon size={32} className="text-primary" />
                )}
                {goal.key === "suivi" && (
                  <IconCheckupList size={32} className="text-primary" />
                )}
                {goal.key === "transparence" && (
                  <IconEye size={32} className="text-primary" />
                )}
              </span>
              <p className=" flex flex-col gap-2 text-center md:text-start">
                <span className="capitalize text-lg xl:text-xl font-medium">
                  {goal.title}
                </span>
                <span className="text-sm md:text-base">{goal.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="basis-1/2 hidden lg:flex justify-center lg:justify-end">
        <GoalImage />
      </div>
    </section>
  );
};

export default GoalSection;
