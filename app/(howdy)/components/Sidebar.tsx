"use client";
import { useEffect, useState } from "react";
import { Home, Dna, Hammer } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "../context/ScrollContext";
import { Bungee_Inline } from "next/font/google";

export const NAV_ITEMS = [
  {
    name: "about",
    Icon: Home,
  },
  {
    name: "experience",
    Icon: Dna,
  },
  {
    name: "projects",
    Icon: Hammer,
  },
];

interface SidebarProps {
  aboutRef: React.Ref<HTMLDivElement | null>;
  experienceRef: React.Ref<HTMLDivElement | null>;
  projectsRef: React.Ref<HTMLDivElement | null>;
}

const Sidebar = ({ aboutRef, experienceRef, projectsRef }: SidebarProps) => {
  const { scrollToSection } = useScroll();
  const [expandSidebar, setExpandSidebar] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("now", entry.target.id);
            window.history.pushState(null, "", `#${entry.target.id}`);
            let newHash = `#${entry.target.id}`;
            setActiveHash(newHash);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionIds = document.querySelectorAll(
      "#about, #experience, #projects"
    );
    console.log(sectionIds);

    sectionIds.forEach((id) => observer.observe(id));
  }, []);

  useEffect(() => console.log("active Hash", activeHash), [activeHash]);
  return (
    <div
      className={cn("relative bottom-0 lg:bottom-6 left-0 z-40 w-[256px]")}
      style={{ transition: "left 0.5s ease-in-out" }}
    >
      <div className="flex flex-col   py-8 gap-y-3 relative text-xs text-teal-500 uppercase cursor-pointer">
        {NAV_ITEMS.map((item, index) => (
          <div
            className={cn(
              "flex items-end gap-x-2 justify-end relative cursor-pointer"
            )}
            key={item.name}
          >
            <div className="flex flex-col  items-center relative nav-parent">
              <div
                onClick={() => {
                  scrollToSection(item.name);
                  window.history.pushState(null, "", `#${item.name}`);
                  setActiveHash(`#${item.name}`);
                }}
                className="flex gap-x-2 cursor-pointer w-[150px] items-center justify-between"
              >
                <p></p>
                <item.Icon
                  className="nav-icon-child"
                  size="26"
                  strokeWidth={1.5}
                />
              </div>
              <p
                style={{ fontSize: "8px" }}
                className={cn(
                  "text-xs text-teal-300/80 absolute bottom-[23%] -left-5 cursor-pointer pointer-events-none text-center font-sans w-[60px] "
                )}
              >
                {item.name}
              </p>
              <span
                style={{
                  transition: "width 0.5s ease-in-out",
                }}
                className={cn(
                  " bg-teal-500/70 h-[2px] nav-indicator mt-[2px] absolute bottom-[50%] ",
                  activeHash === `#${item.name}` && "active"
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
