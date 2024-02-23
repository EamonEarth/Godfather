"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightSquare, Github, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import lowding0 from "../../../public/portfolio/lowding-wide0.png";
import lowding1 from "../../../public/portfolio/lowding-wide1.png";
import lowding2 from "../../../public/portfolio/lowding-wide2.png";
import port0 from "../../../public/portfolio/port-wide0.png";
import port1 from "../../../public/portfolio/port-wide1.png";
import port2 from "../../../public/portfolio/port-wide2.png";

export const PROJECTS = [
  {
    id: 0,
    name: "Project Lowding",
    link: "https://github.com/EamonEarth/Lowding",
    images: [lowding0, lowding1, lowding2],

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
    name: "Personal Site",
    link: "https://github.com/EamonEarth/Lowding",
    images: [port0, port1, port2],
    shortDescription: "Every detail counts on this sleek portfolio homepage.",
    longDescription: {
      text: "Built with NextJS & site skeleton inspired by Brittany Chiang's beautiful site.",
      listTitle: "Some details you might have missed:",
      listPoints: [
        "Integration with RESTful APIs to populate the Haiku generation with user info (no user information is saved).",
        "LocalStorage used to persist contact form drafts, with state and storage being reset upon completion/deletion.",
        "Intersection Observers and complex state-management enable a confident and smooth UX.",
      ],
    },

    technologies: [
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

const IMAGE_COUNTER = 2;

interface ProjectsProps {
  expandedStates: boolean[];
  setExpandedStates: React.Dispatch<React.SetStateAction<boolean[]>>;
  projectsOnScreen: boolean;
  setProjectsOnScreen: (value: boolean) => void;
}

const Projectscopy = ({
  expandedStates,
  setExpandedStates,
  projectsOnScreen,
  setProjectsOnScreen,
}: ProjectsProps) => {
  const [showMore, setShowMore] = useState(-1);

  const [imageSrcIndex, setImageSrcIndex] = useState(
    Array(PROJECTS.length).fill(0)
  );
  const [imageSrcRatio, setImageSrcRatio] = useState([
    [372, 372],
    [372, 372],
  ]);
  //   const [imageSrcRatio, setImageSrcRatio] = useState([
  //     [60, 250],
  //     [180, 750],
  //   ]);

  const handleNextImage = (index: number) => {
    console.log(imageSrcIndex);
    const updatedIndices = [...imageSrcIndex];
    const updatedOpacity = [...opacity];
    updatedOpacity[index] = 0.5;
    setOpacity(updatedOpacity);
    setTimeout(() => {
      if (imageSrcIndex[index] < IMAGE_COUNTER) {
        updatedIndices[index] += 1;
        setImageSrcIndex(updatedIndices);
      } else {
        updatedIndices[index] = 0;
        setImageSrcIndex(updatedIndices);
      }
      // Start fade-in effect
      updatedOpacity[index] = 1;
      setOpacity(updatedOpacity);
    }, 300); // Adjust the delay to match your fade-out transition duration
  };
  const handlePrevImage = (index: number) => {
    console.log(imageSrcIndex);
    const updatedIndices = [...imageSrcIndex];
    const updatedOpacity = [...opacity];
    updatedOpacity[index] = 0.5;
    setOpacity(updatedOpacity);
    setTimeout(() => {
      if (imageSrcIndex[index] > 0) {
        updatedIndices[index] -= 1;
        setImageSrcIndex(updatedIndices);
      } else {
        updatedIndices[index] = 2;
        setImageSrcIndex(updatedIndices);
      }
      // Start fade-in effect
      updatedOpacity[index] = 1;
      setOpacity(updatedOpacity);
    }, 300); // Adjust the delay to match your fade-out transition duration
  };

  // if (imageSrcIndex[index] < IMAGE_COUNTER) {
  //   updatedIndices[index] += 1;
  //   setImageSrcIndex(updatedIndices);
  // } else {
  //   updatedIndices[index] = 0;
  //   setImageSrcIndex(updatedIndices);
  // }

  useEffect(() => {
    const updatedRatios = [...imageSrcRatio];

    PROJECTS.forEach((_, index) => {
      let imgRatioVar;
      if (expandedStates[index]) {
        imgRatioVar =
          imageSrcIndex[index] === 0
            ? [350, 350]
            : imageSrcIndex[index] === 1
            ? [175, 700]
            : [150, 225];
      } else {
        imgRatioVar =
          imageSrcIndex[index] === 0
            ? [270, 270]
            : imageSrcIndex[index] === 1
            ? [270, 270]
            : [150, 225];
      }
      updatedRatios[index] = imgRatioVar;
    });

    setImageSrcRatio(updatedRatios);
  }, [imageSrcIndex, expandedStates]);

  const [opacity, setOpacity] = useState(Array(PROJECTS.length).fill(1));

  const handleExpandImage = (index: number) => {
    const updatedStates = [...expandedStates];
    const updatedOpacity = [...opacity];
    updatedOpacity[index] = 0.5;
    setOpacity(updatedOpacity);
    setTimeout(() => {
      updatedStates[index] = !updatedStates[index];
      setExpandedStates(updatedStates);

      // Start fade-in effect
      updatedOpacity[index] = 1;
      setOpacity(updatedOpacity);
    }, 500); // Adjust the delay to match your fade-out transition duration
  };

  const handleShowMore = (index: number) => {
    if (index === showMore) {
      setShowMore(-1);
    } else {
      setShowMore(index);
    }
    if (expandedStates[index]) {
      return;
    }
    if (!expandedStates[index] && showMore) {
      const currStates = [...expandedStates];
      currStates[index] = !currStates[index];
      setExpandedStates(currStates);
    }
  };

  //    if index=1, and the imageSrcIndex=1, set the

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
    // <div className=" max-w-full grid gap-y-12 mt-12 main-project ">
    <div className="xl:max-w-[50%] lg:max-w-[50%] max-w-[95%] h-auto grid gap-y-12 mt-12 main-project ">
      <h1
        className={cn(
          "text-primary-foreground font-sans text-right font-bold text-2xl md:relative uppercase spread-font-spacing "
        )}
      >
        Some recent work
      </h1>
      {PROJECTS.map((project, index: number) => {
        const imageSrc = project.images[imageSrcIndex[index]];
        const imageSizesArray = imageSrcRatio[index];
        const imageDivHeight = imageSizesArray[1];

        return (
          <div
            id="BOUNDING DIV FOR EACH PROJECT"
            key={project.id}
            className={cn(
              "overflow-scroll md:overflow-visible project flex flex-col w-auto gap-y-5 md:flex-row max-h-screen gap-x-2 text-white justify-center bg-teal-500/5 items-center py-6 px-4 hover:bg-teal-400/20 border-teal-400/50 border-4 rounded-2xl transition-all relative right-0",
              expandedStates[index] &&
                "!items-left lg:right-12 hover:!bg-teal-500/5 ",
              { "!bg-teal-500/5": index === 0 && imageSrcIndex[index] === 1 }
            )}
            style={{
              transition:
                "background-color 0.3s ease-in, right 0.5s ease-in-out",
            }}
          >
            {/* IMG DIV START */}
            <div
              className={cn(
                "shrink-0 h-[350px] flex flex-col justify-center items-center relative",
                {
                  "lg:relative lg:right-[55%] lg:-mr-[55%]":
                    expandedStates[index] && imageSrcIndex[index] === 1,
                }
              )}
            >
              <p className="font-light text-italic opacity-50 text-xs uppercase text-right relative left-[28%] ">
                <i>
                  {imageSrcIndex[index] === 0
                    ? "Tablet view"
                    : imageSrcIndex[index] === 1
                    ? "Desktop view"
                    : "Mobile view"}
                </i>
              </p>
              <Image
                src={imageSrc}
                alt={project.name}
                // height={500}
                // width={500}
                height={imageSizesArray[0]}
                width={imageSizesArray[1]}
                onClick={() => handleExpandImage(index)}
                style={{
                  opacity: opacity[index],
                  transition: "opacity 0.5s ease-in-out",
                }}
                className={cn(
                  "border-[2.5px] border-teal-500/20 relative rounded-2xl mr-2 z-40 cursor-pointer object-contain ",
                  expandedStates[index] && "shadow-2xl"
                )}
              ></Image>
              {!expandedStates[index] && (
                <ZoomIn
                  className="size-9 relative bottom-[50px] left-[40%] z-50 fade-in-out"
                  color="white"
                />
              )}
            </div>
            {/* IMAGE DIV END */}

            <div
              className={cn(
                "flex flex-col gap-y-1 md:gap-y- text-end text-xs ",
                expandedStates[index] && "!text-start"
              )}
            >
              {showMore !== index && (
                <div className="flex flex-col justify-center">
                  <span className="w-full h-[0.5px] bg-teal-500 ml-auto "></span>
                  <h2
                    // style={{ fontSize: "14px" }}
                    className="text-lg text-end uppercase font-semibold z-50  text-teal-500 name-text-outline tracking-widest"
                  >
                    <i>{project.name}</i>
                  </h2>
                  <span className="w-full ml-auto h-[0.5px] bg-teal-500"></span>
                </div>
              )}

              {/* CARD TEXT CONTENT */}
              <div
                style={{ transition: "background-color 0.2s ease-in-out" }}
                className={cn(
                  "bg-black/90 rounded-2xl p-4 flex flex-col gap-y-2 text-xs shadow-2xl  ml-auto",

                  {
                    "!bg-teal-900/40":
                      index === 0 && imageSrcIndex[index] === 1,
                  }
                )}
              >
                {showMore === index ? (
                  <div className="flex flex-col description-transition expanded-description pl-4 max-w-[95%] h-[250px]">
                    <p className=" text-end font-semibold tracking-wide flex flex-col ">
                      {project.longDescription.text}
                      <span className="w-full h-[0.5px] bg-teal-500 ml-auto my-4"></span>
                    </p>
                    <p className="text-start font-semibold tracking-wide">
                      {project.longDescription.listTitle}
                    </p>
                    <ul className=" text-start ">
                      {project.longDescription.listPoints.map((point) => (
                        <li className="py-2" key={point}>
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="description-transition max-w-[95%]  text-left font-semibold tracking-wide text-sm">
                    {project.shortDescription}
                  </div>
                )}
                <div className="flex ml-auto gap-x-1 items-center ">
                  {/* <div className=" flex  z-50 opacity-70 p-6 sm:hidden md:flex"> */}

                  <Button
                    variant="ghost"
                    className="rounded-full hover:bg-transparent hover:scale-125 hover:text-teal-500 !px-0 "
                    style={{ transition: "transform 0.4s" }}
                    onClick={() => handlePrevImage(index)}
                  >
                    <ArrowRightSquare
                      strokeWidth={2}
                      className="size-7 rotate-180"
                    />
                  </Button>

                  <Button
                    variant="ghost"
                    className="rounded-full hover:bg-transparent hover:scale-125 hover:text-teal-500 !px-0"
                    style={{ transition: "transform 0.4s" }}
                    onClick={() => handleNextImage(index)}
                  >
                    <ArrowRightSquare strokeWidth={2} className="size-7 " />
                  </Button>
                  {/* </div> */}
                  <span className="w-[0.5px] h-6  mx-1" />
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "button-shake text-xs border-[3px] hover:bg-teal-500 rounded-full relative transition-all duration-500 right-0 max-w-[50%] px-4 hover:border-teal-500 "
                    )}
                    onClick={() => handleShowMore(index)}
                  >
                    {showMore === index ? "show less" : "read more"}
                  </Button>
                  <Link href="https://github.com/EamonEarth/Godfather">
                    <Github className="size-7 z-50" />
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
              <span className="w-[100%] h-[0.5px] bg-teal-500 ml-auto"></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projectscopy;
