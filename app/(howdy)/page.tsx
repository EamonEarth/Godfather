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
import { PROJECTS } from "./components/ProjectsGrid";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [navPosition, setNavPosition] = useState(0);

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

  const aboutRef = useRef<HTMLHeadingElement>(null);
  const experienceRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const HeaderDiv = document.getElementById("header");
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            HeaderDiv?.classList.add("active");
          } else {
            HeaderDiv?.classList.remove("active");
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

  useEffect(() => console.log("navPos", navPosition), [navPosition, aboutRef]);

  return (
    <div className="h-full relative">
      <div className="flex flex-col lg:gap-y-6 justify-center px-2 lg:mx-16 ">
        <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center relative lg:-inset-x10 mt-24 mx-8 lg:mx-12  ">
          <div className="flex flex-col ">
            <div
              className={cn(
                "lg:fixed  md:flex lg:flex-col  lg:top-[15%] justify-between",
                showModal ? "lg:absolute" : "lg:fixed"
              )}
            >
              <div
                id="header"
                className={cn(
                  "observer-slide relative",
                  showModal && "lg:hidden"
                )}
                style={{
                  transition:
                    "blur 1s ease-in, right 0.8s ease-in-out, opacity 0.8s ease-in-out",
                }}
              >
                <div className="flex flex-col md:flex-row lg:flex-col gap-x-12 md:items-center lg:items-baseline">
                  <Header
                    showModal={showModal}
                    setShowModal={() => setShowModal(!showModal)}
                    className=""
                    carouselExpansionBlur={
                      expandedStates[0] || expandedStates[1]
                    }
                    projectsOnScreen={projectsOnScreen}
                  />
                  <Haiku
                    carouselExpansionBlur={
                      expandedStates[0] || expandedStates[1]
                    }
                    projectsOnScreen={projectsOnScreen}
                  />
                </div>
                <Sidebar
                  aboutRef={aboutRef}
                  experienceRef={experienceRef}
                  projectsRef={projectsRef}
                />
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
          <div className="flex lg:ml-16">
            <div className="w-[350px] hidden lg:flex pt-[400px]"></div>
            <About
              navRef={aboutRef}
              className=""
              navPosition={navPosition}
              setNavPosition={setNavPosition}
              showModal={showModal}
            />
          </div>
        </div>

        {/* 
          
          */}

        <div className="flex flex-col ">
          <div className="flex flex-col lg:flex-row justify-around pt-24 lg:items-center  mx-4">
            <div className="w-[350px] hidden lg:flex"></div>
            <Experience navRef={experienceRef} showModal={showModal} />
          </div>
          <div className="flex justify-around mx-8 lg:mx-0 md:pt-8 lg:pt-24 carousel-hover-boundary">
            <div className="w-[350px] hidden lg:flex"></div>
            <ProjectsGrid
              navRef={projectsRef}
              expandedStates={expandedStates}
              setExpandedStates={setExpandedStates}
              projectsOnScreen={projectsOnScreen}
              setProjectsOnScreen={setProjectsOnScreen}
            />
          </div>
        </div>

        <div className="h-[150px]"></div>
      </div>
    </div>
  );
}
