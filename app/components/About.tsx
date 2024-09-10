"use client";
import { Button } from "@/components/ui/button";
import { cn } from "../../lib/utils";
import React, { SetStateAction, useEffect } from "react";


interface AboutProps {
  showModal: boolean;
  className: string;
  navRef: React.Ref<HTMLHeadingElement>;
}

const About = ({ showModal, className, navRef }: AboutProps) => {
  const CV = "/portfolio/CV.pdf"

  return (
    <section
      
      className={cn(
        "tracking-wider font-light pt-10  md:relative lg:top-5 z-50 max-w-[95%]",
        showModal && "modal-bg-blur hover:blur-0 transition-all duration-400",
        className
      )}
    >
      <div
        id="opac-observer"
        className="lg:max-w-[450px] md:max-w-[75%] flex flex-col "
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
              I&apos;m a generalist/polymath who loves making things work! With 
              a degree in Mathemathics and development & UI/UX specializations from IBM and Google, I&apos;m happy
              making web apps, frontends, custom algorithms or new things. I love coding intuitive and engaging frontend
              interfaces, leveraging up-to-date technologies and getting excited
              about new projects.
            </p>
            <p className="mt-2">
              From my developer specializations, I bring real world developer know-how. From my maths degree, I bring logical thinking.
              From my logistical work, attention to detail and pragmatic focus on deliverables,
              and from my music career, consumer-centric creation and plenty of soft skills. 
        
            </p>
            <div className="flex justify-end">

            <Button className="ml-auto border-teal-500 border hover:scale-110 transition-all hover:bg-teal-800">
              <a className="uppercase   px-4 py-2" href={CV} download="CV - Eamon Travers">Download CV</a>
            </Button>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
