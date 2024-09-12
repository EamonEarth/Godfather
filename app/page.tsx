"use client";
import { useState, useRef, useEffect } from "react";
import ContactModal from "./components/ContactModal";
import Header from "./components/Header";
import Experience from "./components/Experience";
import About from "./components/About";
import Haiku from "./components/Haiku";
import { cn } from "../lib/utils";
import ProjectsGrid from "./components/ProjectsGrid";
import Sidebar from "./components/Sidebar";
import { PROJECTS } from "@/lib/data";
import { useFullscreenImageStore } from "@/hooks/use-fullscreen-image";
import HeaderAndNav from "./components/HeaderAndNav";
import MobileProjects from "./components/MobileProjects";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const experienceRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLHeadingElement>(null);


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

  useEffect(()=>{
    const checkIfMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  checkIfMobile()
  window.addEventListener("resize", checkIfMobile)
  return () => window.removeEventListener('resize', checkIfMobile)
},[])

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
      <div className="h-full relative flex flex-col lg:gap-y-6 justify-center px-2 lg:mx-16 ">

        <div className="flex flex-col lg:flex-row lg:justify-around relative mt-24 mx-8 lg:mx-12">
          <HeaderAndNav 
          showModal={showModal}
          setShowModal={setShowModal}
          projectsOnScreen={projectsOnScreen}
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
          />
          
          <About navRef={aboutRef} showModal={showModal} />
        </div>

        <div className="flex flex-col">
          {showModal && (
            <ContactModal
              ref={modalRef}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}

          <Experience navRef={experienceRef} showModal={showModal}  />

          {isMobile ? 
          <MobileProjects /> 
          :
          <ProjectsGrid
            navRef={projectsRef}
            projectsOnScreen={projectsOnScreen}
            setProjectsOnScreen={setProjectsOnScreen}
            showModal={showModal}
            />
          }
        </div>

        <div className="h-[150px]"/>
          <Haiku/>
      </div>
  );
}
