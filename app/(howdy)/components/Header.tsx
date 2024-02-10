import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";
import { Github, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

interface HeaderProps {
  showModal: boolean;
  setShowModal: () => void;
}

const Header = ({ showModal, setShowModal }: HeaderProps) => {
  const handleContactClick = () => {
    setShowModal();
    // const toBlur = ["header-blur", "folio-blur"];

    // toBlur.map((section) =>
    //   document!.getElementById(section)!.classList.toggle("gotta-blur")
    // );

    // console.log("Modal hjust got set. ", setShowModal);
  };

  return (
    <div className=" flex flex-col z-0 font-sans">
      <div
        id="header-blur"
        className=" flex flex-col  max-w-sm md:max-w-md gotta-blur relative "
      >
        <div
          className={cn(
            "",
            showModal &&
              "modal-bg-blur hover:!blur-0 transition-all duration-400"
          )}
        >
          <h1 className="text-5xl lg:text-6xl font-semibold text-primary-foreground lg:pb-4 row-name">
            Eamon Travers
          </h1>
          <div className="lg:max-w-sm lg:relative lg:left-2">
            <p className="text-xl lg:text-2xl font-thin text-primary-foreground ">
              Frontend Dev Einsteiger
            </p>
            <p className="text-primary-foreground font-thin lg:relative left-2 text-shiner ">
              <span className="grow-solver">Problem Solver</span>
              <br></br>
              <span className="font-light leading-normal mr-3 opacity-80 text-md text-primary-foreground">
                Graduated maths & music tech. work experience; Digital audio
                engineer, MBA/EMBA programme coordinator, composition &
                performance.
                <br></br>
                Speed chess fiend.
              </span>
            </p>
          </div>
        </div>
        <div className="flex  items-center text-white mt-3 md:relative left-4 gap-x-4">
          <span
            className={cn(
              "flex items-center text-white gap-x-4",
              showModal && "modal-bg-blur"
            )}
          >
            <a target="_blank" href="https://github.com/EamonEarth">
              <Github />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/eamonearth/?hl=en"
            >
              <Instagram />
            </a>
            <a
              target="_blank"
              href="https://www.lichess.org/EamonEarth"
              className="object-none"
            >
              <img
                src="/portfolio/lichess.svg"
                className="text-white lichess-invert h-7 w-7"
              />
            </a>
          </span>

          <span className="flex items-center gap-x-2 outline rounded-full px-2 py-1">
            <Button
              onClick={handleContactClick}
              className="bg-transparent hover:bg-transparent"
            >
              <Mail />
              <p className="font-semibold text-xs text-primary-foreground/90 ml-2">
                {showModal ? "scrap that" : "get in touch"}
              </p>
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
