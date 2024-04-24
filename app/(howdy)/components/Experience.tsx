"use client";

import { cn, debounce } from "../../../lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { MouseEventHandler, useEffect } from "react";

const experience = [
  {
    title: "Frontend Developer •",
    employer: "Freelance",
    subtitle: "Full-stack Web Development",
    times: "2023 - present",
    description:
      "Full-stack solutions for personal and corporate clients, predominantly built with React. Design, coding, backend set-up and deployment. See Projects below for more info. ",
    link: "https://eamontravers.dev/#projects",
  },
  {
    title: "MBA/EMBA Programme Coordinator •",
    employer: "Freelance / AUSTRAL TRAVEL",
    subtitle: "Programme coordination and delivery.",
    times: "2021 - present",
    description:
      "Being the person on the ground who has to bring all the threads of a programme together, and deliver it. With some universities, I'm essentially a glorified tour guide. For others, an active member of sessions with organisations like DIHK, Silicon Allee, Google & Bayer. I've been lucky enough to work with some great schools like the Cambridge Judge Business School, the Jones Graduate School at Rice and London Business School.",
    link: "https://australgroup.com/",
  },
  {
    title: "Digital Audio Engineer •",
    employer: "Petersburg Art Space",
    subtitle: "Concert & Exhibition Spaces",
    times: "2020 - present",
    description:
      "In-house live-audio and mixing engineer in a bustling Berlin art space and event venue. The only constant here is the expectation that the work is at a high enough level to represent the venue. Shows vary from single night touring intl artists to government funded installation art.",
    link: "https://pas-berlin.org/pas-eng/",
  },
  {
    title: "Vice-Chair/Prod Manager/Co-Founder •",
    employer: "Common Grounds Collective",
    subtitle: "Artists' collective",
    times: "2016 - 2019",
    description:
      "Founder and vice-chair of a successful Artists' collective. Creative and Technical director for core events, including slots at all major Irish festivals & flying 8200km to put on a festival in Parkfield, California.",
    link: "https://www.facebook.com/feileparkfield",
  },
  {
    title: "Musical director, composer & performer",
    employer: "Freelance",
    subtitle: "Piano, drums, electronics & guitar",
    times: "2013 - present",
    description:
      "I've been lucky enough to tour internationally with some original projects as well as commercial productions. I also occasionally compose for radio/indie-films. ",
    link: "https://open.spotify.com/track/7vKPf1pOrAFmgq4Rp9JSa2?si=03c4d9e006ea43e4",
  },
];

interface ExperienceProps {
  showModal: boolean;
  navRef: React.Ref<HTMLHeadingElement>;
}

const Experience = ({ showModal, navRef }: ExperienceProps) => {
  const preventClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

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
      <div className="pb-5 ">
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
 duration-500 lg:duration-1000 lg:delay-200 hover:z-50"
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
                    className="pt-2 text-md text-white/70 font-semibold"
                  >
                    {job.description}
                  </p>
                  <Link href={job.link} target="_blank">
                    <ArrowUpRight className="cursor-pointer z-50" />
                  </Link>
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
