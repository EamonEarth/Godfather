"use client";

import React, { MouseEventHandler, useEffect, useState } from "react";
import Link from "next/link";
import { cn, debounce } from "@/lib/utils";
import { experience } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

interface ExperienceProps {
  showModal: boolean;
  navRef: React.Ref<HTMLHeadingElement>;
}

const Experience = ({ showModal, navRef }: ExperienceProps) => {
  const [isExpanded, setIsExpanded] = useState(0);
  const [isTruncated, setIsTruncated] = useState(true);
  

  // More reliable setting of active experience item
  useEffect(() => {
    let ticking = false;
    const items = Array.from(document.querySelectorAll(".experience-item"));

    const updateMeasurements = () => {
      return Array.from(document.querySelectorAll(".experience-item")).map(
        (elem) => {
          const rect = elem.getBoundingClientRect();
          return {
            elem,
            top: rect.top + window.scrollY,
            height: rect.height,
            center: rect.top + window.scrollY + rect.height / 2,
          };
        }
      );
    };

    let itemMeasurements = updateMeasurements();

    const findCenterMostElementAndUpdateClass = () => {
      const viewportCenter = window.innerHeight / 2 + window.scrollY;
      let centerMostElement = null;
      let minDistanceToCenter = Infinity;

      itemMeasurements.forEach(({ elem, top, center, height }, index) => {
        const distanceToCenter = Math.abs(viewportCenter - center);

        if (distanceToCenter - 30 < minDistanceToCenter) {
          centerMostElement = elem;
          minDistanceToCenter = distanceToCenter;
        }
      });

      items.forEach((elem) => elem.classList.remove("active"));
      const conv = centerMostElement as unknown;
      (conv as Element)?.classList.add("active");
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          findCenterMostElementAndUpdateClass();
          ticking = false;
        });
        ticking = true;
      }
    };

    const onResize = debounce(() => {
      itemMeasurements = updateMeasurements();
      findCenterMostElementAndUpdateClass();
    }, 250);

    findCenterMostElementAndUpdateClass();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  useEffect(() => {
    const updateTruncatedState = () => {
      if (window.innerWidth < 768) {
        setIsTruncated(false);
      } else {
        setIsTruncated(true);
      }
    };

    updateTruncatedState();

    const handleResize = debounce(() => {
      updateTruncatedState();
    }, 250);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDevClick = () => {
    const projectDiv = document.getElementById("projects-container"); 
    if (projectDiv){
      projectDiv.scrollIntoView({behavior: "smooth", block: "start"})
    } 

  }

  return (
    <div
      id="experience"
      style={{ transition: "filter 0.5s ease-in-out" }}
      className={cn(
        "lg:max-w-[450px] max-w-[90%] lg:relative lg:right-[40px] mx-3 md:mx-0",
        showModal && "blur-[2px] hover:!blur-0 "
      )}
    >
      {/* HEADING */}
      <div className="pb-5">
        <h1
          ref={navRef}
          className="exper-animation text-primary-foreground font-bold text-2xl leading-tight md:relative  tracking-widest uppercase spread-font-spacing nav-focus"
        >
          Expe<span className="rrr">r</span>
        </h1>
        <h1 className="combined-animation text-primary-foreground font-bold text-2xl  md:relative tracking-widest uppercase spread-font-spacing overscroll-x-hidden max-w-fit">
          <span className="iii">i</span>
          <span className="eee">e</span>nce
        </h1>
      </div>
      <ol className="text-primary-foreground lg:max-w-md flex flex-col gap-y-10">
        {experience.map((job) => (
          <div
            key={job.title}
            className="w-auto h-auto experience-item experience-item-opac hover-boundary rounded-xl opacity-60 md:opacity-40 hover:!opacity-100 md:py-8 pt-4 lg:py-4
            hover:bg-[#111c2c] 
transition-all   
wide-outline-sm   
lg:wide-outline-lg   
relative 
right-0
px-[30px]
 duration-500 lg:duration-1000 lg:delay-200 hover:z-50 cursor-pointer"
            onClick={() => {
              if (isExpanded === job.id) {
                setIsExpanded(-1);
              } else {
                setIsExpanded(job.id);
              }
            }}
          >
            <li className=" py-2 gap-y-10 " key={job.title}>
              <div className="md:flex lg:flex-col gap-x-24">
                <p className="font-light uppercase text-xs opacity-50 md:max-w-[20px] lg:max-w-96">
                  {job.times}
                </p>
                <div>
                  <h2 className="font-bold text-lg grow-head">{job.title}</h2>
                  <h2 className="font-bold text-[16px] shrink grow-employer">
                    {job.employer}
                  </h2>
                  <p className="font-semibold grow-tag-line text-white">
                    {job.subtitle}
                  </p>
                  <p
                    style={{ fontSize: 16, letterSpacing: "0.02rem" }}
                    className={cn(
                      "py-2 text-md text-white/70 font-semibold ",
                      !isTruncated || isExpanded === job.id ? "" : "truncated"
                    )}
                  >
                    {job.description}
                  </p>

                  {job.id === 1 ? 
                  <ArrowUpRight onClick={handleDevClick}className="cursor-pointer z-50 mt-1" />
                  :
                  <Link href={job.link} target="_blank">
                    <ArrowUpRight className="cursor-pointer z-50 mt-1" />
                  </Link>
                  }

                  <p></p>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
