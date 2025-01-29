"use client";
import React from "react";
import NavItems from "../navigation/nav-items";
import menu from "@/lib/constants/menu";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex flex-col mt-20 min-h-24 mx-6 md:mx-10 xl:mx-auto gap-4 max-w-[1500px]">
      <div className="flex flex-col md:flex-row items-center  justify-between  gap-8">
        <div className="space-y-2 text-center md:text-start">
          <span className="text-5xl">BIG LOGO</span>
          <p className="max-w-sm">
            Transformez vos rêves immobiliers en réalité, même à distance !
          </p>
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-3">
          <NavItems items={menu} />
        </div>
      </div>

      <div className="text-center py-4 border-t">
        Copyright © {date.getFullYear()}, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
