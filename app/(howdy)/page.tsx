"use client";
import { useState, useRef, useEffect, ReactComponentElement } from "react";
import ContactModal from "./components/ContactModal";
import Header from "./components/Header";
import Experience from "./components/Experience";
import About from "./components/About";
import Haiku from "./components/Haiku";
import { ProjectCarousel } from "./components/ProjectCarousel";
import { cn } from "../../lib/utils";
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showModal) {
      modalRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showModal]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              const newUrl = id;
              window.history.replaceState(
                { ...window.history.state, as: newUrl, url: newUrl },
                "",
                newUrl
              );
              // window.history.pushState({}, "", `#${id}`);
              // window.location.
            }
          }
        });
      },
      { rootMargin: "0px", threshold: 0.1 } // Adjust rootMargin and threshold as needed
    );

    const aboutEl = aboutRef.current;
    const experienceEl = experienceRef.current;

    if (aboutEl) observer.observe(aboutEl);
    if (experienceEl) observer.observe(experienceEl);

    return () => {
      if (aboutEl) observer.unobserve(aboutEl);
      if (experienceEl) observer.unobserve(experienceEl);
    };
  }, []);

  return (
    <main>
      <div className="w-screen h-full   ">
        <div className="flex flex-col lg:gap-y-6 justify-center px-2 ">
          <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center relative lg:-inset-x-10 mt-24 mx-4 ">
            <div className="flex flex-col ">
              <div
                className={cn(
                  "lg:fixed top-[60px] md:flex lg:flex-col  lg:top-[20%] justify-between",
                  showModal ? "lg:absolute" : "lg:fixed"
                )}
              >
                <div className={cn(showModal && "lg:hidden")}>
                  <Header
                    showModal={showModal}
                    setShowModal={() => setShowModal(!showModal)}
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
              <About showModal={showModal} />
            </div>
          </div>

          {/* 
          
          */}

          <div ref={experienceRef} className="flex flex-col">
            <div
              id="experience"
              className="flex flex-col lg:flex-row justify-around lg:items-center mx-4"
            >
              <div className="w-[350px] hidden md:flex"></div>
              <Experience showModal={showModal} />
            </div>
            <div className="flex justify-around md:pt-8 lg:pt-24">
              <div
                id="Projects"
                ref={projectsRef}
                className="w-[350px] hidden lg:flex"
              ></div>
              <ProjectCarousel />
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
