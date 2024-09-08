"use client";

import { cn } from "@/lib/utils";
import {
  Github,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PROJECTS } from "@/lib/data";
import { useFullscreenImageStore } from "@/hooks/use-fullscreen-image";
import FullscreenImageModal from "./FullscreenImageModal";


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
  setProjectsOnScreen,
  navRef,
  showModal,
}: ProjectsProps) => {
  const [showMore, setShowMore] = useState(-1);
  const [opacity, setOpacity] = useState(Array(PROJECTS.length).fill(1));

  const [imageSrcIndex, setImageSrcIndex] = useState(
    Array(PROJECTS.length).fill(0)
  );

  const {toggleOpen, openImage} = useFullscreenImageStore()

  // const preloadImage = (src: string | StaticImageData) => {
  //   const img = new Image();
  //   img.src = typeof src === 'string' ? src : (src as StaticImageData).src;
  // };
  const handleSetFullScreenImage = (src: StaticImageData) => {
    if (window.innerWidth < 1000) {
      openImage(src)
    }
  }
  

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

      <FullscreenImageModal />
      
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
        const imageSrc = project.image!
    

        return (
          <div
            id="BOUNDING DIV FOR EACH PROJECT"
            key={project.id + index * 2}
            className={cn(
              "relative overflow-auto md:overflow-visible md:bg-transparent py-4 lg:py-6 project flex flex-col justify-center items-center gap-y-1 lg:flex-row -mx-3 md:mx-0 gap-x-2 text-white  h-full",
              expandedStates[index] && "!items-left",
              // fsImage && "blur-[1px]"
            )}
            style={{
              transition:
                "background-color 0.3s ease-in, right 0.4s ease-in-out",
            }}
          >
            {/* IMG DIV START */}
  
            <div
              className={cn(
                `lg:w-3/4 w-full h-fit aspect-[16/9] object-contain relative 
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
              <video 
              onClick={()=>handleSetFullScreenImage(project.mobileImage!)}

              autoPlay loop muted playsInline className="video" preload="auto" id="videoElement">
              <source src="/portfolio/phasmic.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
              :
              <Image
              onClick={()=>handleSetFullScreenImage(project.mobileImage!)}
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
                      className={cn("flex flex-col justify-center")}
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
                        "md:bg-teal-500/10 rounded-2xl p-4 flex flex-col justify-around gap-y-4 text-xs md:text-sm shadow-2xl -ml-auto h-full",
      
                        {
                          "!bg-teal-900/40":
                            index === 0 && imageSrcIndex[index] === 1,
                        }
                      )}
                    >
                      <div
                        className="description-transition text-end font-semibold tracking-wide text-sm md:text-base  overflow-auto bg-orange-400-/50"
                      >
                        {project.shortDescription}
                      </div>

                      <div
                      className="flex flex-col gap-y-2  description-transition expanded-description text-end bg-yellow-400-/50"
                      >
                        <p className=" text-end ml-auto w-[90%] tracking-wide flex flex-col overflow-auto bg-green-400-/50">
                          {project.longDescription.text}
                        </p>
                      {project.longDescription.listTitle &&
                      <>
                        <p className="w-full text-sm md:text-base font-semibold tracking-wide border-teal-500/50 border-t pt-4">
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
