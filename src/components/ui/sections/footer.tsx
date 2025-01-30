"use client";
import React from "react";
import NavItems from "../navigation/nav-items";
import menu from "@/lib/constants/menu";

const Footer = () => {
  const date = new Date();
  return (
    <footer className=" flex flex-col mt-16 pt-4 min-h-24 px-6 md:px-10  gap-4">
      <div className="flex flex-col md:flex-row items-center  justify-evenly  gap-8">
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
