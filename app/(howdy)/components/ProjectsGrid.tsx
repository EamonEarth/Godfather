"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRightCircle,
  ArrowRightSquare,
  Github,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import lowdingMobile from "../../../public/portfolio/lowding-wide0-comp.jpg";
import lowdingDesktop from "../../../public/portfolio/lowding-wide1-comp.jpg";
import lowding2 from "../../../public/portfolio/lowding-wide2.png";
import phasmicMobile from "../../../public/portfolio/phasmic-wide0.png";
import phasmicDesktop from "../../../public/portfolio/phasmic-wide1.png";
import portMobile from "../../../public/portfolio/port-wide0.png";
import portDesktop from "../../../public/portfolio/port-wide1.png";
import port2 from "../../../public/portfolio/port-wide2.png";
import FullscreenImage from "./FullscreenImage";

export const PROJECTS = [
  {
    id: 0,
    name: "Project Lowding",
    link: "https://github.com/EamonEarth/Lowding",
    images: [lowdingDesktop, lowdingMobile],

    shortDescription:
      "Neat little design thesis project advocating for lower impact design choices. ",
    longDescription: {
      text: "A fun challenge to reinforce the theme/brand of the website with web development choices. As well as building the site I refined the UX.",
      listTitle: "Worth a mention:",
      listPoints: [
        "Pixel-perfect fidelity with the designer's mock-up, achieved with Figma and silky communication.",
        "Performant/efficient development choices were a must, at the risk of hypocrisy! Achieved both with general best practices and framework specific resources.",
      ],
    },
    technologies: ["figma", "html", "css", "typescript", "prisma", "tailwind"],
  },
  {
    id: 1,
    name: "Phasmic",
    link: "https://github.com/EamonEarth/phasmic",
    images: [phasmicDesktop, phasmicMobile],
    shortDescription: "Weird meets wonderful for quirky company site",
    longDescription: {
      text: "Wacky but convincing. This site has to both appeal to the out-crowd and convince funders.",
      listTitle: "Worth a mention:",
      listPoints: [
        "Custom randomiser to select from fontArray for the Header element.",
        "Constant design balance between quirky and respectable",
        "Nodemailer implementation",
      ],
    },

    technologies: [
      "UX",
      "Nodemailer",
      "Node",
      "html",
      "css",
      "typescript",
      "tailwind",
      "figma",
    ],
  },
  {
    id: 2,
    name: "Portfolio Site",
    link: "https://github.com/EamonEarth/Lowding",
    images: [portDesktop, portMobile],
    shortDescription: "Every detail counts on this sleek portfolio homepage.",
    longDescription: {
      text: "Built with NextJS. Site skeleton inspired by Brittany Chiang's beautiful site.",
      listTitle: "Some details you might have missed:",
      listPoints: [
        "Integration with RESTful APIs to populate the Haiku generation with user info (no user information is saved).",
        "LocalStorage used to persist contact form drafts, with state and storage being reset upon completion/deletion.",
        "Intersection Observers and complex state-management enable a confident and smooth UX.",
      ],
    },

    technologies: [
      "ChatGPT",
      "nextjs",
      "APIs",
      "html",
      "css",
      "typescript",
      "tailwind",
      "figma",
    ],
  },
];

interface ProjectsProps {
  expandedStates: boolean[];
  setExpandedStates: React.Dispatch<React.SetStateAction<boolean[]>>;
  projectsOnScreen: boolean;
  setProjectsOnScreen: (value: boolean) => void;
  navRef: React.Ref<HTMLHeadingElement>;
  showModal: boolean;
}

const ProjectsGrid = ({
  expandedStates,
  setExpandedStates,
  setProjectsOnScreen,
  navRef,
  showModal,
}: ProjectsProps) => {
  const [showMore, setShowMore] = useState(-1);
  const [opacity, setOpacity] = useState(Array(PROJECTS.length).fill(1));

  const [imageSrcIndex, setImageSrcIndex] = useState(
    Array(PROJECTS.length).fill(0)
  );
  const [imageSrcRatio, setImageSrcRatio] = useState(
    Array(PROJECTS.length).fill([175, 750])
  );
  const [fsImage, setFsImage] = useState(false);
  const [fsImageSrc, setFsImageSrc] = useState([0, 0]);

  const handleNextImage = (index: number) => {
    const updatedIndices = [...imageSrcIndex];
    const updatedOpacity = [...opacity];
    updatedOpacity[index] = 0.5;
    setOpacity(updatedOpacity);
    setTimeout(() => {
      if (imageSrcIndex[index] < 1) {
        updatedIndices[index] += 1;
        setImageSrcIndex(updatedIndices);
      } else {
        updatedIndices[index] = 0;
        setImageSrcIndex(updatedIndices);
      }
      updatedOpacity[index] = 1;
      setOpacity(updatedOpacity);
    }, 300);
  };
  const handlePrevImage = (index: number) => {
    const updatedIndices = [...imageSrcIndex];
    const updatedOpacity = [...opacity];
    updatedOpacity[index] = 0.5;
    setOpacity(updatedOpacity);
    setTimeout(() => {
      if (imageSrcIndex[index] === 0) {
        updatedIndices[index] = 1;
        setImageSrcIndex(updatedIndices);
      } else {
        updatedIndices[index] = 0;
        setImageSrcIndex(updatedIndices);
      }
      updatedOpacity[index] = 1;
      setOpacity(updatedOpacity);
    }, 300);
  };

  useEffect(() => {
    const updatedRatios = [...imageSrcRatio];

    PROJECTS.forEach((_, index) => {
      let imgRatioVar;
      imgRatioVar = imageSrcIndex[index] === 1 ? [350, 350] : [175, 700];
      updatedRatios[index] = imgRatioVar;
    });

    setImageSrcRatio(updatedRatios);
  }, [imageSrcIndex, expandedStates]);

  const handleExpandImage = (index: number, imageSrc: number) => {
    if (window.innerWidth < 768) {
      setFsImage(true);
      setFsImageSrc([index, imageSrc]);
      return;
    }

    const updatedStates = [...expandedStates];
    const updatedOpacity = [...opacity];
    updatedOpacity[index] = 0.5;
    setOpacity(updatedOpacity);
    setTimeout(() => {
      updatedStates[index] = !updatedStates[index];
      setExpandedStates(updatedStates);
      updatedOpacity[index] = 1;
      setOpacity(updatedOpacity);
    }, 500);
  };

  const handleShowMore = (index: number) => {
    if (index === showMore) {
      setShowMore(-1);
      const currStates = [...expandedStates];
      currStates[index] = false;
      setExpandedStates(currStates);
      return;
    } else {
      setShowMore(index);
    }

    if (!expandedStates[index] && showMore === index) {
      return;
    }
    if (!expandedStates[index]) {
      const currStates = [...expandedStates];
      currStates[index] = true;
      setExpandedStates(currStates);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProjectsOnScreen(true);
          } else {
            setProjectsOnScreen(false);
          }
        });
      },
      { threshold: 0.5 }
    );
    const mainDiv = document.querySelector(".main-project")!;
    observer.observe(mainDiv);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="projects-container"
      style={{ transition: "filter 0.5s ease-in-out" }}
      className={cn(
        "md:max-w-[75%] lg:max-w-[50%] max-w-[95%] h-auto grid gap-y-8 md:gap-y-2 mt-12 lg:mr-12 main-project",
        showModal && "blur-[2px]"
      )}
    >
      {fsImage && (
        <FullscreenImage setFsImage={setFsImage} fsImageSrc={fsImageSrc} />
      )}
      <h1
        id="projects"
        ref={navRef}
        className={cn(
          "text-primary-foreground font-sans text-right font-bold text-2xl md:relative uppercase spread-font-spacing "
        )}
      >
        Some recent work
      </h1>
      {PROJECTS.map((project, index: number) => {
        const imageSrc = project.images[imageSrcIndex[index]];
        const imageSizesArray = imageSrcRatio[index];
        const longDescriptionStyle = {
          maxHeight: showMore === index ? "250px" : "0px",
          opacity: showMore === index ? 1 : 0,
          transition:
            "max-height 0.5s 0.5s ease-in-out, opacity 0.5s ease-in-out 0.5s",
        };
        const shortDescriptionStyle = {
          maxHeight: showMore === index ? "0px" : "80px",
          opacity: showMore === index ? 0 : 1,
          transition:
            "max-height 0.5s ease-in-out 0.5s, opacity 0.5s ease-in-out 0.5s",
        };

        return (
          <div
            id="BOUNDING DIV FOR EACH PROJECT"
            key={project.id + index * 2}
            className={cn(
              "overflow-scroll md:overflow-visible md:bg-transparent py-4 lg:py-6 project flex flex-col gap-y-1 md:flex-row max-h-screen -mx-3 md:mx-0 gap-x-2 text-white justify-center items-center md:px-4 rounded-3xl relative right-0",
              expandedStates[index] && "!items-left lg:right-24"
            )}
            style={{
              transition:
                "background-color 0.3s ease-in, right 0.5s ease-in-out",
            }}
          >
            {/* IMG DIV START */}
            <div
              className={cn(
                "shrink-0 bg-gradient-to-l via-transparent backdrop-blur-md rounded-3xl border border-teal-800/50 image-container",
                index === 1
                  ? "from-teal-500/10 to-teal-500/10"
                  : " from-teal-500/20 to-teal-500/20",
                {
                  "": expandedStates[index] && imageSrcIndex[index] === 1,
                }
              )}
            >
              <Image
                src={imageSrc}
                alt={project.name}
                height={imageSizesArray[0]}
                width={imageSizesArray[1]}
                onClick={() => handleExpandImage(index, imageSrcIndex[index])}
                style={{
                  opacity: opacity[index],
                  transition: "opacity 0.5s ease-in-out ",
                }}
                className={cn(
                  "image rounded-3xl cursor-pointer w-auto h-auto",
                  expandedStates[index] && "shadow-2xl "
                )}
              ></Image>

              <div className="absolute bottom-[45%] flex justify-between px-4 z-40 w-full  pointer-events-none ">
                <Button
                  variant="ghost"
                  className=" hover:bg-transparent  hover:scale-125 text-white hover:text-teal-500 opacity-40 hover:opacity-100  pointer-events-auto"
                  style={{ transition: "transform 0.4s" }}
                  onClick={() => handlePrevImage(index)}
                >
                  <ArrowRightCircle
                    strokeWidth={2}
                    className="size-7 rotate-180"
                  />
                </Button>

                <Button
                  variant="ghost"
                  className="rounded-full hover:bg-transparent hover:scale-125 hover:text-teal-500 opacity-40 hover:opacity-80 pointer-events-auto"
                  style={{ transition: "transform 0.4s" }}
                  onClick={() => handleNextImage(index)}
                >
                  <ArrowRightCircle strokeWidth={2} className="size-7 " />
                </Button>
              </div>
            </div>
            {/* IMAGE DIV END */}

            <div
              className={cn(
                "flex flex-col text-end text-xs  bg-teal-500/10 md:bg-transparent rounded-3xl p-2 -mt-1 max-w-[85%] md:max-w-[100%]",
                expandedStates[index] && "!text-start"
              )}
            >
              {/* {showMore !== index && ( */}
              <div
                style={{ transition: "opacity 0.5s ease-in-out" }}
                className={cn(
                  "flex flex-col justify-center",
                  showMore === index ? "opacity-0" : "opacity-100"
                )}
              >
                <span className="hidden md:block w-full h-[0.5px] bg-teal-500 ml-auto "></span>
                <h2
                  className={cn(
                    // "text-2xl text-end uppercase font-bold z-40 bg-gradient-to-r from-transparent to-orange-800/40 text-teal-400 name-text-outline tracking-wider relative"
                    "text-2xl text-end uppercase font-bold z-40 text-teal-500 name-text-outline tracking-wider relative"
                  )}
                >
                  {/* <span className="hidden lg:block absolute -right-[6%] z-[-1] bg-gradient-to-r from-transparent to-orange-700/30 h-[85%] bottom-[5px] w-[105%] rounded-tr-full " />
                  <span className="hidden lg:block absolute -right-[6%] z-[-1] bg-gradient-to-r from-transparent to-orange-700/30 h-[22%] opacity-80 bottom-0 w-[105%] rounded-br-full rotate-[-0.5deg] " /> */}
                  <i>{project.name}</i>
                </h2>
                <span className="w-full ml-auto h-[0.5px] bg-teal-500"></span>
              </div>
              {/* )} */}

              {/* CARD TEXT CONTENT */}
              <div
                style={{ transition: "background-color 0.5s ease-in-out" }}
                className={cn(
                  "md:bg-teal-500/10 rounded-2xl p-4 flex flex-col gap-y-2 text-xs shadow-2xl -ml-auto",

                  {
                    "!bg-teal-900/40":
                      index === 0 && imageSrcIndex[index] === 1,
                  }
                )}
              >
                {/* {showMore === index ? ( */}
                <div
                  style={longDescriptionStyle}
                  className="flex flex-col description-transition expanded-description pl-4 max-w-[95%] md:h-[250px]"
                >
                  <p className=" text-end font-light tracking-wide flex flex-col ">
                    {project.longDescription.text}
                    <span className="w-full h-[0.5px] bg-teal-500 ml-auto my-4"></span>
                  </p>
                  <p className="text-start font-semibold tracking-wide">
                    {project.longDescription.listTitle}
                  </p>
                  <ul className=" text-start">
                    {project.longDescription.listPoints.map((point) => (
                      <li className="py-2" key={point}>
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
                {/*  */}
                <div
                  style={shortDescriptionStyle}
                  className="description-transition max-w-[95%]  text-left font-semibold tracking-wide text-sm"
                >
                  {project.shortDescription}
                </div>

                <div className="flex ml-12 mt-2 gap-x-3 justify-end items-center ">
                  <span className="w-[0.5px] h-7  mx-1" />
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "button-shake text-xs border-[3px] hover:bg-black hover:border-black/80 hover:text-white rounded-full relative transition-all duration-500 right-0 max-w-[50%] px-6 "
                    )}
                    onClick={() => handleShowMore(index)}
                  >
                    {showMore === index ? "show less" : "read more"}
                  </Button>
                  <Link href={project.link}>
                    <Github className="size-7 z-40" />
                  </Link>
                </div>

                <div className="flex flex-wrap gap-x-2 gap-y-2 mt-3 items-end justify-end">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology}
                      className="flex w-auto items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
              <span className=" hidden md:block w-[100%] h-[0.5px] bg-teal-500 ml-auto"></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsGrid;
