"use client";

import React, { createContext, useContext, useCallback } from "react";

type ScrollContextType = {
  scrollToSection: (sectionId: string) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      if (section.id === "about") {
        section.scrollIntoView({ behavior: "smooth", block: "end" });
      } else {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
