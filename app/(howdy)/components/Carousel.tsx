"use client";

import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Carousel = () => {
  const [currImage, setCurrImage] = useState(0);

  const nextCar = () => {
    if (currImage < 2) {
      setCurrImage(currImage + 1);
    } else {
      setCurrImage(0);
    }
  };

  const prevCar = () => {
    if (currImage === 0) {
      setCurrImage(2);
    } else {
      setCurrImage(currImage - 1);
    }
  };

  return (
    <div className="relative right-[30%]">
      <MoveLeft
        onClick={prevCar}
        className="absolute right-5 top-40 text-primary-foreground opacity-80 z-50"
      />
      <MoveLeft
        onClick={nextCar}
        className="absolute  left-[276px] top-40 text-primary-foreground opacity-80 z-50 rotate-180"
      />
      <div
        className={cn(
          "absolute hidden md:top-3 text-center w-[250px] h-[250px] ",
          currImage === 0 && "flex"
        )}
      >
        <Image
          src="/portfolio/screen1.png"
          alt="screen1"
          height={250}
          width={250}
          className="rounded-3xl"
        />
      </div>
      <div
        className={cn(
          "absolute hidden md:top-3 text-center w-[250px] h-[250px] ",
          currImage === 1 && "flex"
        )}
      >
        <Image
          src="/portfolio/screen2.png"
          alt="screen2"
          height={250}
          width={250}
          className="rounded-3xl"
        />
      </div>
      <div
        className={cn(
          "absolute hidden md:top-3 text-center w-[250px] h-[250px] ",
          currImage === 2 && "flex"
        )}
      >
        <Image
          src="/portfolio/screen3.png"
          alt="screen3"
          height={250}
          width={250}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Carousel;
