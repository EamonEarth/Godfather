"use client";
import { cn } from "../../../lib/utils";
import React, { SetStateAction, useEffect } from "react";

interface AboutProps {
  showModal: boolean;
  className: string;
  navPosition: number;
  setNavPosition: React.Dispatch<SetStateAction<number>>;
  navRef: React.Ref<HTMLHeadingElement>;
}

const About = ({
  showModal,
  className,
  navPosition,
  setNavPosition,
  navRef,
}: AboutProps) => {
  // setNavPosition is set by the Intersection Observer.
  // The location of the h1 within 'aboutDiv' is determined.
  // The location of the <h1> is measured from the top of the window.
  // This number is used to move the nav's containing <div> to align with the <h1>
  // Is it possible to use the anchor as the locay the containing <div> is brought to?
  // Because then it's resize resistant.

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("active");
  //           // want to target the entry.target's h1
  //           const h1Element = entry.target.querySelector("h1");
  //           console.log("h1", h1Element);
  //           if (h1Element) {
  //             // Get the position of the h1 element
  //             const entryPos = h1Element.getBoundingClientRect();
  //             console.log("entry - THIS IS NOT FIRING", entryPos.top);
  //             // Use the top position of the h1 to set the navigation position
  //             setNavPosition(entryPos.top);
  //           }
  //         } else {
  //           entry.target.classList.remove("active");
  //         }
  //       });
  //     },

  //     { threshold: 0.9 }
  //   );
  //   const aboutDiv = document.getElementById("opac-observer");
  //   observer.observe(aboutDiv!);
  //   return () => observer.disconnect();
  // }, []);

  return (
    <section
      id="about"
      className={cn(
        "tracking-wider font-light pt-10  md:relative lg:top-20 lg:pb-20 z-50 max-w-[95%]",
        showModal && "modal-bg-blur hover:blur-0 transition-all duration-400",
        className
      )}
      // style={{ transform: "translateX(110px)" }}
    >
      <div id="home" className="absolute top-0 bg-white"></div>
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
            <p>
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
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
