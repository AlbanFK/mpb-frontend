import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="w-full flex flex-col min-h-screen ">
      <div className="flex-none h-16 md:h-20 "></div>
      <div className="grow flex mx-6 md:mx-10 mb-2 rounded-[var(--radius)]  border">
        <div className=" basis-2/5 rounded-l-[var(--radius)] relative">
          <Image
            src={
              "https://i.pinimg.com/1200x/a2/67/97/a267974f3df6579e85be32ccc59b3bc6.jpg"
            }
            alt="contact image"
            fill
            className="object-cover object-center rounded-l-[var(--radius)]  z-0 brightness-75"
          />
        </div>
        <div className="h-full basis-3/5 "></div>
      </div>
    </div>
  );
}

export default Contact;
