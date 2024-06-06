"use client";
import { cn } from "../../../lib/utils";
import React, { SetStateAction, useEffect } from "react";

interface AboutProps {
  showModal: boolean;
  className: string;
  navRef: React.Ref<HTMLHeadingElement>;
}

const About = ({ showModal, className, navRef }: AboutProps) => {
  return (
    <section
      id="about"
      className={cn(
        "tracking-wider font-light pt-10  md:relative lg:top-5 lg:pb-20- z-50 max-w-[95%]",
        showModal && "modal-bg-blur hover:blur-0 transition-all duration-400",
        className
      )}
    >
      {/* <div id="home" className="absolute top-0 bg-white"></div> */}
      <div
        id="opac-observer"
        className="  lg:max-w-[450px] md:max-w-[75%] flex flex-col "
      >
        <h1
          ref={navRef}
          className={cn(
            "text-primary-foreground font-sans text-left font-bold text-2xl md:relative uppercase spread-font-spacing lg:pb-5 nav-ocus "
          )}
        >
          About
        </h1>
        <div
          className="flex flex-col md:opacity-40  !opacity-80 hover:opacity-100 opac-observer"
          style={{ transition: "opacity 0.5s ease-in-out" }}
        >
          <div className=" text-primary-foreground text-md text-left  ">
            <p className="mb-4 flex flex-col ">
              Born in &apos;95 on the edge of the world{" "}
              <span className="uppercase text-xs  flex items-center gap-x-2">
                (Donegal, Ireland
                <img
                  src="/portfolio/irish-flag.svg"
                  alt="irish flag"
                  className="w-5 h-3 -mr-1"
                />
                )
              </span>
            </p>
            <p className="">
              I&apos;m a generalist/polymath who loves making things work! Happy
              writing unit tests, modern software, differential equations or
              to-do lists. Specialised in coding intuitive and engaging frontend
              interfaces, leveraging up-to-date technologies and getting excited
              about new projects.
            </p>
            <p className="mt-2">
              From my maths degree, I can bring logical thinking, from my music
              career, consumer-centric creation, and from my logistical work,
              attention to detail and pragmatic focus on deliverables. I&apos;m
              also fun to work with!
            </p>
            {/* <p>
              My &quot;first job&quot; 15 years ago was as a QA tester paid in
              in-game currency for{" "}
              <a
                target="_blank"
                className="font-semibold  link-text "
                href="http://www.uberstrike.com/"
                style={{ fontSize: 14 }}
              >
                a (now sunsetted) online FPS
              </a>
              . I knew nothing about coding, but realised rather quickly that
              the on-screen world (and the real deal) aren&apos;t as rigid or as
              finished as they seem, and curiousity and persistance are the only
              things needed to have an effect.
            </p>
            <p className="mt-2 ">
              Since then I&apos;ve been working at different intersections of
              structure and creativity. Working with smart people towards a
              shared goal makes me happy and, for my money at least, I think the
              satisfaction of creating quality is one of the true joys of the
              world! And it&apos;s cool!
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
