"use client";
import { useEffect, useState } from "react";
import { Home, Dna, Hammer } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "../context/ScrollContext";

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

    sectionIds.forEach((id) => observer.observe(id));
  }, []);

  return (
    <div
      className={cn("relative bottom-0 lg:bottom-6  z-40 w-full")}
      style={{ transition: "left 0.5s ease-in-out" }}
    >
      <div className="flex flex-col  pl-4 py-8 gap-y-3 relative right-0 text-xs text-teal-500 uppercase cursor-pointer">
        {NAV_ITEMS.map((item, index) => (
          <div
            className={cn(
              "flex md:items-end- gap-x-2 md:justify-end- relative cursor-pointer"
            )}
            key={item.name}
          >
            <div className="flex flex-col  items-center relative nav-parent ">
              <div
                onClick={() => {
                  scrollToSection(item.name);
                  window.history.pushState(null, "", `#${item.name}`);
                  setActiveHash(`#${item.name}`);
                }}
                className="flex gap-x-2 cursor-pointer w-[230px] items-center justify-between"
              >
                <p
                  style={{ fontSize: "12px" }}
                  className={cn(
                    " text-teal-300/80 absolute- bottom-[23%] -left-[60px] cursor-pointer pointer-events-none md:text-end font-sans w-[80px] "
                  )}
                >
                  {item.name}
                </p>
                <span
                  style={{
                    transition: "width 0.5s ease-in-out",
                  }}
                  className={cn(
                    " bg-teal-500/70 h-[2px] nav-indicator mt-[2px] absolute- bottom-[50%] ",
                    activeHash === `#${item.name}` && "active"
                  )}
                />
                <item.Icon
                  className="nav-icon-child"
                  size="26"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
