"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "./_components/Header";
import About from "./_components/About";

const Page = () => {
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollToAbout) {
      aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setScrollToAbout(false);
    }
  }, [scrollToAbout]);

  return (
    <main className="w-full min-h-screen">
      <div className="flex flex-col">
        <Header setScrollToAbout={setScrollToAbout} />
        <div ref={aboutRef}>
          <About />
        </div>
      </div>
    </main>
  );
};

export default Page;
