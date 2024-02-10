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
              window.history.pushState({}, "", `#${id}`);
            }
          }
        });
      },
      { rootMargin: "0px", threshold: 0.5 } // Adjust rootMargin and threshold as needed
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
          <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center mt-24 mx-4 ">
            <div className="flex flex-col ">
              <div
                className={cn(
                  "lg:fixed top-[60px] md:flex lg:flex-col  lg:top-[20%] justify-between",
                  showModal ? "lg:absolute" : "lg:fixed"
                )}
              >
                <Header
                  showModal={showModal}
                  setShowModal={() => setShowModal(!showModal)}
                />
                {/* <Haiku /> */}
                {showModal && (
                  <ContactModal
                    ref={modalRef}
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                )}
              </div>
            </div>
            <div className="flex row">
              <div
                id="About"
                ref={aboutRef}
                className="w-[350px] hidden lg:flex"
              ></div>
              <About showModal={showModal} />
            </div>
          </div>

          {/* 
          
          */}

          <div className="flex flex-col">
            <div
              id="Experience"
              ref={experienceRef}
              className="flex flex-col lg:flex-row justify-around lg:items-center mx-4"
            >
              <div className="w-[350px] hidden md:flex"></div>
              <Experience showModal={showModal} />
            </div>
            <div className="flex justify-around">
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
