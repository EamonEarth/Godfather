"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../../../lib/utils";
import Link from "next/link";

const PROJECTS = [
  {
    name: "Project Lowding",
    link: "https://github.com/EamonEarth/Lowding",
    img: "/portfolio/portfolio-thumb.png",
    description:
      "Neat little design thesis project advocating for lower impact design choices. As well as building the site I refined the UX.",
  },
  {
    name: "Portfolio Site",
    link: "https://github.com/EamonEarth/Lowding",
    img: "/portfolio/portfolio-thumb.png",
    description:
      "Built with NextJS, design inspired by Brittany Chiang's beautiful site, but any and all mistakes (and successes) are my own!",
  },
  {
    name: "",
    link: "https://github.com/EamonEarth/Lowding",
    img: "/portfolio/portfolio-thumb.png",
    description:
      "I built and helped design this website advocating for low-impact design choices.",
  },
];

export function ProjectCarousel() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    console.log(emblaApi.slidesInView());
  }, []);

  useEffect(() => {
    if (emblaApi) emblaApi.on("slidesInView", logSlidesInView);
  }, [emblaApi, logSlidesInView]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return;
  }

  return (
    <div className="pt-12 flex flex-col md:w-full  max-w-[450px] snap-center  relative ">
      <h1
        className={cn(
          "text-primary-foreground font-sans text-left font-bold text-2xl md:relative uppercase spread-font-spacing"
        )}
      >
        Past Work
      </h1>
      <span className="w-full h-[1px] bg-white lg:mb-8" />
      <Carousel
        opts={{
          align: "center",
          loop: true,
          axis: "y",
        }}
        className="w-full md:w-auto"
      >
        <CarouselContent className="text-white text-center flex ">
          {PROJECTS.map((project, index) => (
            <CarouselItem
              key={project.name}
              className={cn("flex  rounded-xl", index === 0 && "!opacity-90")}
              style={{ transition: "opacity 500ms ease-out" }}
            >
              <Link href={project.link}>
                <div className="p-1 flex flex-col aspect-square font-light pb-3">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="rounded"
                  />
                  <h2 className="pt-4 text-lg font-bold uppercase">
                    {project.name}
                  </h2>
                  <p className="text-sm pt-1 mx-2 line-clamp-3 ">
                    {project.description}
                  </p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
