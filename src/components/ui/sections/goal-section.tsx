"use client";
import React from "react";
import goals from "@/lib/constants/goals";
import { IconCheckupList, IconEye, IconHomeRibbon } from "@tabler/icons-react";
import { TextGenerateEffect } from "../text-generate-effect";
import Image from "next/image";

const GoalSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row rounded-[var(--radius)] mx-6 md:mx-10">
      {/* <TextGenerateEffect
        className="w-full text-center mb-4 mt-6 md:mt-0 "
        filter={false}
        words={"Nous vous garantissons"}
      />
      <div className="text-base md:text-lg xl:text-xl flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-0 text-center bg-primary-foreground w-full py-10 px-5 font-medium">
        {goals.map((goal) => (
          <p
            key={goal.key}
            className="capitalize space-y-4 flex flex-col items-center"
          >
            {goal.key === "achievement" && (
              <IconHomeRibbon size={48} className="text-primary" />
            )}
            {goal.key === "suivi" && (
              <IconCheckupList size={48} className="text-primary" />
            )}
            {goal.key === "transparence" && (
              <IconEye size={48} className="text-primary" />
            )}
            <span>{goal.text}</span>
          </p>
        ))}
      </div> */}

      <div className="basis-1/2">
        <h3>
          <TextGenerateEffect
            className="text-2xl md:text-4xl font-medium"
            filter={false}
            words={"Pourquoi nous choisir ?"}
          />
        </h3>

        <div className="flex flex-col justify-evenly  gap-10 w-full py-10">
          {goals.map((goal) => (
            <div key={goal.key} className="space-x-8 flex items-center">
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
              <p className=" flex flex-col gap-2">
                <span className="capitalize text-base md:text-lg xl:text-xl font-medium">
                  {goal.title}
                </span>
                <span className="">{goal.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="basis-1/2 ">
        <div className="w-full h-full relative !rounded-[var(--radius)]">
          <Image
            alt="why"
            src={
              "https://i.pinimg.com/736x/47/01/36/4701361776eba2db514225c0a0f352a7.jpg"
            }
            fill
            className="object-contain !rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
