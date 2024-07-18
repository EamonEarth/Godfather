"use client";
import { useState, useRef, useEffect, ReactComponentElement } from "react";
import ContactModal from "./components/ContactModal";
import Header from "./components/Header";
import Experience from "./components/Experience";
import About from "./components/About";
import Haiku from "./components/Haiku";
import { cn } from "../../lib/utils";
import ProjectsGrid from "./components/ProjectsGrid";
import Sidebar from "./components/Sidebar";
import { PROJECTS } from "@/lib/data";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [expandedStates, setExpandedStates] = useState(
    Array(PROJECTS.length).fill(false)
  );
  const [projectsOnScreen, setProjectsOnScreen] = useState(false);

  let n = 0;
  useEffect(() => {
    if (n % 2 == 0) {
      console.log(
        " ⫷Hi! Get in touch via the contact form or directly at eamon.trav@gmail.com⫸"
      );
    }
    n += 1;
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      if (showModal) {
        modalRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [showModal]);

  const aboutRef = useRef<HTMLHeadingElement>(null);
  const experienceRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const HeaderDiv = document.getElementById("header");
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            HeaderDiv?.classList.remove("active");
          } else {
            HeaderDiv?.classList.add("active");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    const aboutDiv = document.getElementById("about");
    if (aboutDiv) observer.observe(aboutDiv);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-full relative">
      <div className="flex flex-col lg:gap-y-6 justify-center px-2 lg:mx-16 ">
        {/* HEADER, NAV AND ABOUT */}
        <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center relative mt-24 mx-8 lg:mx-12  ">
          {/* HEADER AND NAV START */}
          <div className="flex flex-col ">
            <div
              className={cn(
                "lg:fixed  md:flex lg:flex-col  lg:top-[15%] justify-between ",
                showModal && "!opacity-0"
              )}
              style={{ transition: "opacity 0.4s ease-in-out" }}
            >
              <div
                id="header"
                className={cn(
                  "observer-slide relative flex flex-col items-center w-full",
                  showModal && "lg:hidden"
                )}
                style={{
                  transition:
                    "blur 1s ease-in, right 0.8s ease-in-out, opacity 0.8s ease-in-out",
                }}
              >
                <div
                  className={cn(
                    "flex flex-col  gap-x-12 "
                    // projectsOnScreen && "opacity-10"
                  )}
                >
                  <span
                    className={cn(
                      "hover:!opacity-100",
                      projectsOnScreen && "opacity-10"
                    )}
                    style={{ transition: "opacity 0.8s ease-in-out" }}
                  >
                    <Header
                      showModal={showModal}
                      setShowModal={() => setShowModal(!showModal)}
                      className=""
                      
                      projectsOnScreen={projectsOnScreen}
                    />
                  </span>
                  <span
                    className={cn(
                      "hover:!opacity-100",
                      projectsOnScreen && "opacity-50"
                    )}
                    style={{ transition: "opacity 0.4s ease-in-out" }}
                  >
                    <Sidebar
                      aboutRef={aboutRef}
                      experienceRef={experienceRef}
                      projectsRef={projectsRef}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* END OF HEADER NAV */}
          {/* ABOUT  */}
          <div className="flex lg:ml-16">
            <div className="w-[350px] hidden lg:flex pt-[400px]"></div>
            <About navRef={aboutRef} className="" showModal={showModal} />
          </div>
          {/* END OF ABOUT */}
        </div>
        {/* END OF HEADER NAV ABOUT */}

        <div className="flex flex-col ">
          {showModal && (
            <ContactModal
              ref={modalRef}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
          <div className="flex flex-col lg:flex-row justify-around pt-16 lg:items-center  mx-4">
            <div className="w-[350px] hidden lg:flex"></div>
            <Experience navRef={experienceRef} showModal={showModal}  />
          </div>
          <div className="flex justify-around md:mx-8 lg:mx-0 md:pt-8 lg:pt-24 carousel-hover-boundary">
            {/* <div className="w-[350px] hidden lg:flex"></div> */}

            <ProjectsGrid
              navRef={projectsRef}
              expandedStates={expandedStates}
              setExpandedStates={setExpandedStates}
              projectsOnScreen={projectsOnScreen}
              setProjectsOnScreen={setProjectsOnScreen}
              showModal={showModal}
            />
          </div>
        </div>

        <div className="h-[150px]"></div>
        <span className="absolute bottom-1 right-[10%] flex items-center justify-center ">
          <Haiku
            // carouselExpansionBlur={expandedStates[0] || expandedStates[1]}
            // projectsOnScreen={projectsOnScreen}
          />
        </span>
      </div>
    </div>
  );
}
