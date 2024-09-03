"use client";

import { cn } from "@/lib/utils";
import {
  Github,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PROJECTS } from "@/lib/data";


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
  // const [imageSrcRatio, setImageSrcRatio] = useState(
  //   Array(PROJECTS.length).fill([175, 750])
  // );
  const [fsImage, setFsImage] = useState(false);
  const [fsImageSrc, setFsImageSrc] = useState([0, 0]);

  // const handleNextImage = (index: number) => {
  //   const updatedIndices = [...imageSrcIndex];
  //   const updatedOpacity = [...opacity];
  //   updatedOpacity[index] = 0.5;
  //   setOpacity(updatedOpacity);
  //   setTimeout(() => {
  //     if (imageSrcIndex[index] < 1) {
  //       updatedIndices[index] += 1;
  //       setImageSrcIndex(updatedIndices);
  //     } else {
  //       updatedIndices[index] = 0;
  //       setImageSrcIndex(updatedIndices);
  //     }
  //     updatedOpacity[index] = 1;
  //     setOpacity(updatedOpacity);
  //   }, 300);
  // };
  // const handlePrevImage = (index: number) => {
  //   const updatedIndices = [...imageSrcIndex];
  //   const updatedOpacity = [...opacity];
  //   updatedOpacity[index] = 0.5;
  //   setOpacity(updatedOpacity);
  //   setTimeout(() => {
  //     if (imageSrcIndex[index] === 0) {
  //       updatedIndices[index] = 1;
  //       setImageSrcIndex(updatedIndices);
  //     } else {
  //       updatedIndices[index] = 0;
  //       setImageSrcIndex(updatedIndices);
  //     }
  //     updatedOpacity[index] = 1;
  //     setOpacity(updatedOpacity);
  //   }, 300);
  // };

  // useEffect(() => {
  //   const updatedRatios = [...imageSrcRatio];
  //   PROJECTS.forEach((_, index) => {
  //     let imgRatioVar;
  //     imgRatioVar = imageSrcIndex[index] === 1 ? [350, 350] : [175, 700];
  //     updatedRatios[index] = imgRatioVar;
  //   });

  //   setImageSrcRatio(updatedRatios);
  // }, [imageSrcIndex, expandedStates]);

  // const handleShowMore = (index: number) => {
  //   const currStates = new Array(expandedStates.length).fill(false);
  //   if (index === showMore) {
  //     setShowMore(-1);
  //     currStates[index] = false;
  //     setExpandedStates(currStates);
  //     return;
  //   } else {
  //     setShowMore(index);
  //   }

  //   if (!expandedStates[index] && showMore === index) {
  //     return;
  //   }
  //   if (!expandedStates[index]) {
  //     currStates[index] = true;
  //     setExpandedStates(currStates);
  //   }
  // };

  // const handleSetFullScreenImage = (index: number, imageSrc: number) => {
  //   setFsImage(true);
  //   setFsImageSrc([index, imageSrc]);
  // };

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
      { threshold: 0.1 }
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
        "md:max-w-[75%]- max-w-[95%] h-auto grid gap-y-8 md:gap-y-2 mt-12 main-project",
        showModal && "blur-[2px] hover:!blur-0"
      )}
    >
      {/* {fsImage && (
        <FullscreenImage
          setFsImage={setFsImage}
          setFsImageSrc={setFsImageSrc}
          fsImageSrc={fsImageSrc}
        />
      )} */}
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
        // const longDescriptionStyle = {
        //   maxHeight: showMore === index ? "300px" : "0px",
        //   opacity: showMore === index ? 1 : 0,
        //   transition:
        //     "max-height 0.5s 0.5s ease-in-out, opacity 0.5s ease-in-out 0.5s",
        // };
        // const shortDescriptionStyle = {
        //   maxHeight: showMore === index ? "0px" : "80px",
        //   opacity: showMore === index ? 0 : 1,
        //   transition:
        //     "max-height 0.5s ease-in-out 0.5s, opacity 0.5s ease-in-out 0.5s",
        // };

        return (
          <div
            id="BOUNDING DIV FOR EACH PROJECT"
            key={project.id + index * 2}
            className={cn(
              "relative overflow-auto md:overflow-visible md:bg-transparent py-4 lg:py-6 project flex flex-col justify-center items-center gap-y-1 lg:flex-row -mx-3 md:mx-0 gap-x-2 text-white  md:px-4- h-full",
              expandedStates[index] && "!items-left",
              fsImage && "blur-[1px]"
            )}
            style={{
              transition:
                "background-color 0.3s ease-in, right 0.4s ease-in-out",
            }}
          >
            {/* IMG DIV START */}
  
            <div
              className={cn(
                `lg:w-3/4 w-full h-fit image-container- aspect-[16/9] object-contain relative 
                bg-gradient-to-l via-transparent backdrop-blur-md rounded md:rounded-3xl border border-teal-800/50 
                md:py-[5%]`,
                index === 1
                  ? "from-teal-500/10 to-teal-500/10"
                  : " from-teal-500/20 to-teal-500/20",
                {
                  "": expandedStates[index] && imageSrcIndex[index] === 1,
                }
              )}
            >
              {project.name === "Phasmic" ? 
              <video autoPlay loop muted playsInline className="video" preload="auto" id="videoElement">
              <source src="/portfolio/phasmic.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
              :
              <Image
              src={imageSrc}
              alt={project.name}
              fill
              style={{
                opacity: opacity[index],
                transition: "opacity 0.5s ease-in-out ",
              }}
              className={cn(
                "w-auto h-auto md:p-8 p-2 object-contain",
                expandedStates[index] && "shadow-2xl "
              )}
              ></Image>
            }
              {/* {!showModal && (
                <Maximize2
                  className={cn(
                    "size-8 p-2 md:hover:scale-110 md:hidden z-50 opacity-40 hover:opacity-80 absolute right-7 bottom-7 bg-black rounded-full cursor-pointer"
                  )}
                  style={{ transition: "transform 0.2s" }}
                  onClick={() =>
                    handleSetFullScreenImage(index, imageSrcIndex[index])
                  }
                />
              )}

              <div className={cn("absolute bottom-[45%] flex justify-between px-4 z-40 w-full  pointer-events-none", project.images.length < 2 && "hidden")}>
                <Button
                  variant="ghost"
                  className="rounded-full md:hover:bg-transparent  md:hover:scale-125 text-white opacity-40 md:hover:opacity-90  pointer-events-auto"
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
                  className="rounded-full md:hover:bg-transparent md:hover:scale-125 opacity-40 md:hover:opacity-90 pointer-events-auto"
                  style={{ transition: "transform 0.4s" }}
                  onClick={() => handleNextImage(index)}
                >
                  <ArrowRightCircle strokeWidth={2} className="size-7 " />
                </Button>
              </div> */}
            </div>
            {/* IMAGE DIV END */}

                  <div
                    className={cn(
                      "flex flex-col text-end text-xs  bg-teal-500/10 md:bg-transparent rounded-3xl p-2 -mt-1 lg:w-1/4 w-full min-w-[300px] md:max-w-[100%]",
                      expandedStates[index] && "!text-start"
                    )}
                  >
                    <div
                      style={{
                        transition:
                          "opacity 0.5s ease-in-out, max-height 1s ease-in-out 0.5s",
                        overflow: "hidden",
                      }}
                      className={cn( 
                        "flex flex-col justify-center",
                        // showMore === index
                        //   ? "opacity-0 max-h-0"
                        //   : "opacity-100 max-h-100 "
                      )}
                    >
                      <span className="hidden md:block w-full h-[0.5px] bg-teal-500 ml-auto opacity-70"></span>
                      <h2
                        className={cn(
                          "text-2xl text-center uppercase font-bold z-40 text-teal-500 name-text-outline tracking-wider relative"
                        )}
                      >
                        <i>{project.name}</i>
                      </h2>
                      <span className="w-full ml-auto h-[0.5px] bg-teal-500 opacity-70 mb-1"></span>
                    </div>
      
                    {/* CARD TEXT CONTENT */}
                    <div
                      style={{ transition: "background-color 0.5s ease-in-out" }}
                      className={cn(
                        "md:bg-teal-500/10 rounded-2xl p-4 flex flex-col justify-around gap-y-4 text-xs shadow-2xl -ml-auto h-full",
      
                        {
                          "!bg-teal-900/40":
                            index === 0 && imageSrcIndex[index] === 1,
                        }
                      )}
                    >
                      <div
                        // style={shortDescriptionStyle}
                        className="description-transition  text-end font-semibold tracking-wide text-sm overflow-auto bg-orange-400-/50"
                      >
                        {project.shortDescription}
                      </div>

                      <div
                      // style={longDescriptionStyle}
                      className="flex flex-col gap-y-2 description-transition expanded-description text-end bg-yellow-400-/50"
                      >
                        <p className="text-sm  md:text-xs text-end  tracking-wide flex flex-col overflow-auto bg-green-400-/50">
                          {project.longDescription.text}
                        </p>
                      {project.longDescription.listTitle &&
                      <>
                        <p className="w-full font-semibold tracking-wide border-teal-500/50 border-t pt-4">
                          {project.longDescription.listTitle}
                        </p>
                        <ul className="flex flex-col gap-y-2  overflow-auto">
                          {project.longDescription.listPoints.map((point) => (
                            <li className="py-2-" key={point}>
                              • {point}
                            </li>
                          ))}
                        </ul>
                      </>
                        }
                      </div>
                      {/*  */}
      
                      <div className="flex gap-x-3 justify-center items-center border-teal-500/50 border-t pt-4">
                        
                        <a href={project.link} target="_blank" className="text-blue-400 hover:text-blue-200 transition-all text-base">{project.linkTitle}</a>
                        <Link href={project.githubLink}>
                          <Github className="size-10 z-40" />
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
                    <span className=" hidden md:block relative right-[5%] w-[60%] h-[0.5px] bg-teal-500 opacity-70 ml-auto"></span>
                  </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsGrid;
