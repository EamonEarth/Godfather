import { cn } from "../../../lib/utils";
import React from "react";

interface AboutProps {
  showModal: boolean;
}

const About = ({ showModal }: AboutProps) => {
  return (
    <section
      id="about"
      className={cn(
        "tracking-wider font-light pt-10  md:relative z-50",
        showModal && "modal-bg-blur"
      )}
      // style={{ transform: "translateX(110px)" }}
    >
      <div className="  lg:max-w-[450px] md:max-w-[75%] flex flex-col opacity-60 hover:!opacity-100 transition-all ">
        <h1
          className={cn(
            "text-primary-foreground font-sans text-left  text-2xl md:relative uppercase spread-font-spacing "
          )}
        >
          About
        </h1>
        <div className=" text-primary-foreground text-md text-left opacity-90 ">
          <p className="mb-4 flex flex-col ">
            Born in &apos;95 on the edge of the world{" "}
            <span className="uppercase text-xs  flex items-center gap-x-2">
              (Donegal, Ireland
              <img src="/portfolio/irish-flag.svg" className="w-5 h-3 -mr-1" />)
            </span>
          </p>
          <p>
            My &quot;first job&quot; 15 years ago was as a QA tester paid in
            in-game currency for{" "}
            <a
              target="_blank"
              className="font-semibold  link-text"
              href="http://www.uberstrike.com/"
            >
              a (now sunsetted) online FPS
            </a>
            . I knew nothing about coding, but realised rather quickly that the
            world isn&apos;t as rigid or as finished as it seems and curiousity
            and persistance are the only things needed to have an effect.
          </p>
          <p className="mt-2 ">
            Since then I&apos;ve been working at the intersection of logic and
            creativity. Working with smart people towards a shared goal makes me
            happy and, as a teamplayer or as a leader, I&apos;m always ready to
            try to create quality (and tackle challenges gleefully!)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
