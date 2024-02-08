"use client";

import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";

const Folio = () => {
  return (
    <div className=" md:relative md:left-[20%]  md:-top-28 max-w-xl  pt-2 md:pt-4 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 opacity-30 md:opacity-90 ">
      <div
        id="folio-blur"
        className=" flex flex-col items-center justify-center h-[200px] w-[500px] gotta-blur "
      >
        <div className="text-primary-foreground font-bold uppercase  text-center md:pt-2">
          Have a looksie
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Folio;
