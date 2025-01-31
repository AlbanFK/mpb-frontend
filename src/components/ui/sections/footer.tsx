"use client";
import React from "react";
import NavItems from "../navigation/nav-items";
import menu from "@/lib/constants/menu";

const Footer = () => {
  const date = new Date();
  return (
    <footer className=" flex flex-col mt-16 pt-4 min-h-24  gap-4 bg-red-700 text-white">
      <div className=" px-6 md:px-10 flex flex-col md:flex-row items-center  justify-evenly  gap-8">
        <div className="space-y-2 text-center md:text-start">
          <span className="text-5xl">BIG LOGO</span>
          <p className="max-w-sm">
            Transformez vos rêves immobiliers en réalité, même à distance !
          </p>
        </div>
        <div className="grid grid-rows-3 grid-flow-col items-center gap-y-3 gap-x-6">
          <NavItems
            items={menu}
            itemsClass="text-white hover:text-white hover:underline underline-offset-8"
          />
        </div>
      </div>

      <div className="text-center py-2 border-t">
        Copyright © {date.getFullYear()}, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
