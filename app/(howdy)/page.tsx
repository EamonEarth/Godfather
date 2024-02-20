"use client";
import { useState, useRef, useEffect, ReactComponentElement } from "react";
import ContactModal from "./components/ContactModal";
import Header from "./components/Header";
import Experience from "./components/Experience";
import About from "./components/About";
import Haiku from "./components/Haiku";
import { cn } from "../../lib/utils";
import Projects, { PROJECTS } from "./components/Projects";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const [expandedStates, setExpandedStates] = useState(
    Array(PROJECTS.length).fill(false)
  );
  const [projectsOnScreen, setProjectsOnScreen] = useState(false);

  useEffect(() => {
    if (showModal) {
      modalRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showModal]);

  const shouldHeaderDivBlur =
    projectsOnScreen && (expandedStates[0] || expandedStates[1]);

  return (
    <main>
      <div className="w-screen h-full   ">
        <div className="flex flex-col lg:gap-y-6 justify-center px-2 lg:mx-16 ">
          <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center relative lg:-inset-x-10 mt-24 mx-4 ">
            <div className="flex flex-col ">
              <div
                className={cn(
                  "lg:fixed top-[60px] md:flex lg:flex-col  lg:top-[20%] justify-between",
                  showModal ? "lg:absolute" : "lg:fixed"
                )}
              >
                <div
                  className={cn("", showModal && "lg:hidden", {
                    "blur-[2px]":
                      projectsOnScreen &&
                      (expandedStates[0] || expandedStates[1]),
                  })}
                  style={{ transition: "blur 1s ease-in" }}
                >
                  <Header
                    showModal={showModal}
                    setShowModal={() => setShowModal(!showModal)}
                    className=""
                    carouselExpansionBlur={
                      expandedStates[0] || expandedStates[1]
                    }
                    projectsOnScreen={projectsOnScreen}
                  />
                  <Haiku />
                </div>
              </div>
              {showModal && (
                <ContactModal
                  ref={modalRef}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              )}
            </div>
            <div id="about" ref={aboutRef} className="flex row ">
              <div className="w-[350px] hidden lg:flex"></div>
              <About className="" showModal={showModal} />
            </div>
          </div>

          {/* 
          
          */}

          <div ref={experienceRef} className="flex flex-col">
            <div
              id="experience"
              className="flex flex-col lg:flex-row justify-around lg:items-center mx-4"
            >
              <div className="w-[350px] hidden lg:flex"></div>
              <Experience showModal={showModal} />
            </div>
            <div className="flex justify-around mx-8 lg:mx-0 md:pt-8 lg:pt-24 carousel-hover-boundary">
              <div className="w-[350px] hidden lg:flex"></div>
              <Projects
                expandedStates={expandedStates}
                setExpandedStates={setExpandedStates}
                projectsOnScreen={projectsOnScreen}
                setProjectsOnScreen={setProjectsOnScreen}
              />
            </div>
          </div>

          <div
            id="Contact&Experience"
            className="flex flex-col lg:flex-row  justify-around lg:items-center mx-4"
          ></div>

          <div className="h-[150px]"></div>
        </div>
      </div>
    </main>
  );
}
