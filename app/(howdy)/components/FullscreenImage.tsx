"use client";
import Image from "next/image";
import React, { SetStateAction, useEffect, useState } from "react";
import lowdingMobile from "../../../public/portfolio/lowding-wide0.png";
import lowdingDesktop from "../../../public/portfolio/lowding-wide1.png";
import portMobile from "../../../public/portfolio/port-wide0.png";
import portDesktop from "../../../public/portfolio/port-wide1.png";
import phasmicMobile from "../../../public/portfolio/phasmic-wide0.png";
import phasmicDesktop from "../../../public/portfolio/phasmic-wide1.png";

interface FullscreenImageProps {
  setFsImage: React.Dispatch<SetStateAction<boolean>>;
  fsImageSrc: number[];
}

const projectsImages = [
  [lowdingDesktop, lowdingMobile],
  [phasmicDesktop, phasmicMobile],
  [portDesktop, portMobile],
];

const FullscreenImage = ({ fsImageSrc, setFsImage }: FullscreenImageProps) => {
  let imageSrc = projectsImages[fsImageSrc[0]][fsImageSrc[1]];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="w-screen h-screen fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        setFsImage(false);
      }}
    >
      <Image
        src={imageSrc}
        alt="Fullscreen Image"
        layout="fill"
        className="object-contain relative -mt-12 md:mt-0 p-4"
      />
    </div>
  );
};

export default FullscreenImage;
