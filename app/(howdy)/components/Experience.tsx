"use client";

import { cn } from "../../../lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

// "Live coordinator for MBA/EMBA travel programmes run with Austral. Solo on-site management of flagship programmes from universities like the Cambridge Judge Business School, the Jones Graduate School at Rice, LBS in London, and more. Working directly with university programme heads and support staff to ensure across the board excellence.",

const experience = [
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
      "Founder and vice-chair of a succesful Artists' collective. Creative and Technical director for core events, including slots at all major Irish festivals & flying 8200km to put on a festival in Parkfield, California.",
    link: "https://www.facebook.com/feileparkfield",
  },
  {
    title: "Classical Piano Teacher •",
    employer: "Maynooth Music Academy",
    subtitle: `"Yes I'd love for you to play Für Elise. Again."`,
    times: "2014 - 2017",
    description:
      "Responsible for all advanced piano students, covering material for conservatory auditions and personal studies. 30+ students a week, each covering different material.",
    link: "https://www.facebook.com/maynoothmusic",
  },
  {
    title: "Jazz~ composer & performer",
    employer: "Freelance",
    subtitle: "International",
    times: "2013 - present",
    description:
      "I've been lucky enough to tour internationally with commercial productions as well as some original projects. I also occasionally compose for radio/indie-films. ",
    link: "https://open.spotify.com/track/7vKPf1pOrAFmgq4Rp9JSa2?si=03c4d9e006ea43e4",
  },
];

interface ExperienceProps {
  showModal: boolean;
}

const Experience = ({ showModal }: ExperienceProps) => {
  return (
    <div className={cn("lg:max-w-[450px] ", showModal && "modal-bg-blur")}>
      <div id="ANIMATION-TITLE-DIV" onClick={() => {}} className="pb-5 ">
        <h1
          className={cn(
            "exper-animation text-primary-foreground font-bold text-2xl leading-tight md:relative  tracking-widest uppercase spread-font-spacing "
          )}
        >
          Expe<span className="rrr">r</span>
        </h1>
        <h1
          className={cn(
            "combined-animation text-primary-foreground font-bold text-2xl  md:relative tracking-widest uppercase spread-font-spacing overscroll-x-hidden max-w-fit"
          )}
        >
          <span className="iii">i</span>
          <span className="eee">e</span>nce
        </h1>
      </div>
      <ol className="text-primary-foreground lg:max-w-md flex flex-col gap-y-10">
        {experience.map((job) => (
          <div
            key={job.title}
            // bg color : bg-[#111c2c]
            className="rounded-xl   w-auto h-auto opacity-40 hover:!opacity-100  hover:bg-green-600/20 transition-all hover:outline outline-1 wide-outline py-2 px-[30px] relative md:right-[30px] md:hover:right-0 lg:hover:right-[150px] duration-1000 delay-50 hover:z-50"
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
                  <p className="font-semibold grow-tag-line">{job.subtitle}</p>
                  <p
                    style={{ fontSize: 16 }}
                    className="pt-2 text-md font-semibold"
                  >
                    {job.description}
                  </p>
                  <Link href={job.link} target="_blank">
                    <ArrowUpRight className="cursor-pointer " />
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
