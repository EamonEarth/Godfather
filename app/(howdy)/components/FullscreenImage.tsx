"use client";
import Image from "next/image";
import React, { SetStateAction, useEffect, useRef } from "react";
import lowdingMobile from "../../../public/portfolio/lowding-wide0.png";
import lowdingDesktop from "../../../public/portfolio/lowding-wide1.png";
import portMobile from "../../../public/portfolio/port-wide0.png";
import portDesktop from "../../../public/portfolio/port-wide1.png";
import phasmicMobile from "../../../public/portfolio/phasmic-wide0.png";
import phasmicDesktop from "../../../public/portfolio/phasmic-wide1.png";
import {
  ArrowRightCircle,
  Github,
  Home,
  Minimize,
  Minimize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "./ProjectsGrid";
import Link from "next/link";

interface FullscreenImageProps {
  setFsImage: React.Dispatch<SetStateAction<boolean>>;
  fsImageSrc: number[];
  setFsImageSrc: React.Dispatch<SetStateAction<number[]>>;
}

const projectsImages = [
  [lowdingDesktop, lowdingMobile],
  [phasmicDesktop, phasmicMobile],
  [portDesktop, portMobile],
];

const FullscreenImage = ({
  fsImageSrc,
  setFsImage,
  setFsImageSrc,
}: FullscreenImageProps) => {
  let imageSrc = projectsImages[fsImageSrc[0]][fsImageSrc[1]];
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Push a new state to the history stack when entering fullscreen mode
    window.history.pushState({ fullscreen: true }, "testing`!!!");

    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.fullscreen) {
        setFsImage(false);
        console.log("Back button pressed");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("popstate", handlePopState);
    };
  }, [setFsImage]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFsImage(false);
        console.log("esc");
      } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        handleNextImage();
        console.log("arrowed");
      } else if (event.key === "ArrowUp") {
        let newImgSrc = [...fsImageSrc];
        newImgSrc[0] -= 1;
        if (newImgSrc[0] < 0) {
          newImgSrc[0] = 2;
        }
        setFsImageSrc(newImgSrc);
      } else if (event.key === "ArrowDown") {
        let newImgSrc = [...fsImageSrc];
        newImgSrc[0] += 1;
        if (newImgSrc[0] > 2) {
          newImgSrc[0] = 0;
        }
        setFsImageSrc(newImgSrc);
      }
    };
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [setFsImage, fsImageSrc]);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      touchEndX.current = event.changedTouches[0].clientX;
      handleSwipeGesture();
      console.log("ended");
    };

    const handleSwipeGesture = () => {
      if (touchStartX.current !== null && touchEndX.current !== null) {
        const deltaX = touchStartX.current - touchEndX.current;
        if (deltaX > 50 || deltaX < -50) {
          handleNextImage();
          console.log("called handle next img");
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [fsImageSrc, setFsImageSrc]);

  const handleNextImage = () => {
    let newImgSrc = [...fsImageSrc];
    newImgSrc[1] += 1;
    if (newImgSrc[1] > 1) {
      newImgSrc[1] = 0;
    }
    setFsImageSrc(newImgSrc);
  };

  useEffect(() => {
    imageSrc = projectsImages[fsImageSrc[0]][fsImageSrc[1]];
  }, [fsImageSrc]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault();
      setFsImage(false);
      console.log("Back button pressed");
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [setFsImage]);

  const descriptions = PROJECTS[fsImageSrc[0]];

  return (
    <div className="w-screen h-screen fixed inset-0 flex flex-col md:flex-row z-50 bg-black bg-opacity-90">
      <div className="w-full md:w-3/4 h-[66%] md:h-full flex items-center justify-center relative bg-teal-300/10 -mt-3">
        <div className="absolute bottom-[47%] flex  justify-between  z-40 w-full  pointer-events-none ">
          <Button
            variant="ghost"
            className=" hover:bg-transparent  hover:scale-110 text-white opacity-40 hover:opacity-80  pointer-events-auto"
            style={{ transition: "transform 0.4s" }}
            onClick={() => handleNextImage()}
          >
            <ArrowRightCircle
              strokeWidth={2}
              className="size-6 md:size-10 rotate-180"
            />
          </Button>

          <Button
            variant="ghost"
            className="rounded-full hover:bg-transparent hover:scale-110 text-white opacity-40 hover:opacity-80 pointer-events-auto"
            style={{ transition: "transform 0.4s" }}
            onClick={() => handleNextImage()}
          >
            <ArrowRightCircle strokeWidth={2} className="size-6 md:size-10 " />
          </Button>
        </div>
        {/* <div
          className="w-full h-full z-50"
          > */}
        {/* </div> */}
        <Image
          src={imageSrc}
          alt="Fullscreen Image"
          layout="fill"
          objectFit="contain"
          className=""
        />
        <Minimize2
          className="size-10 p-2 rounded-full bg-black absolute right-8 bottom-[15%] z-50 hover:scale-110 opacity-40 hover:opacity-80 cursor-pointer"
          style={{ transition: "transform 0.2s ease-in-out" }}
          color="white"
          onClick={(e) => {
            e.stopPropagation();
            setFsImage(false);
          }}
        />
      </div>
      <div className="absolute md:relative bottom-0 flex flex-col w-full md:w-1/4 h-[40%] md:h-full items-center md:justify-center bg-black text-white md:p-4 md:pr-8 md:border-l-8 border-teal-500/50 overflow-scroll">
        <div className="flex flex-col items-center text-xs  h-[75%] max-h-[75%] overflow-scroll border-t-4 py-2 md:border-b-4 border-spacing-4  border-orange-400 px-4">
          <h1 className="text-2xl font-bold mb-4">{descriptions.name}</h1>
          <p className="text-md lg:text-lg">
            <p className="font-light tracking-wide flex flex-col ">
              {descriptions.longDescription.text}
              <span className="w-full h-[0.5px] bg-teal-500 ml-auto my-4"></span>
            </p>
            <p className="text-start font-semibold tracking-wide">
              {descriptions.longDescription.listTitle}
            </p>
            <ul className=" text-start">
              {descriptions.longDescription.listPoints.map((point) => (
                <li className="py-2" key={point}>
                  • {point}
                </li>
              ))}
            </ul>
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-wrap gap-x-2 gap-y-2 md:mt-3 items-center justify-center relative bottom-0">
            {descriptions.technologies.map((technology) => (
              <div
                key={technology}
                className="flex w-auto items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
              >
                {technology}
              </div>
            ))}
          </div>
          <span className="hidden md:flex md:pt-6 bottom-0 relative w-full items-center justify-center">
            <Link href={descriptions.link}>
              <Github className="size-7 z-40" />
            </Link>
          </span>
        </div>
        {/* <span className="w-full flex relative -top-4">
          <Link href={descriptions.link}>
            <Github className="size-7 z-40" />
          </Link>
        </span> */}
      </div>
    </div>
  );
};

export default FullscreenImage;
