"use client";
import React, { use } from "react";
import { bungeeHairline, consola } from "../../styles/fonts/fonts";
import { cn } from "../../../../../lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ArrowRight, DoorOpen } from "lucide-react";
import Link from "next/link";

const About = () => {
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";
  const topicHeaderSrc = isDarkTheme
    ? "/lowding/topic-black.svg"
    : "/lowding/topic-yellow.svg";
  return (
    <section className={cn("tracking-tight", consola.className)}>
      <div className="w-full h-auto flex flex-col justify-center items-center text-black dark:text-on-foreground relative py-24 bg-on-foreground  dark:bg-on-background">
        <Image
          src={topicHeaderSrc}
          alt="About the Topic"
          height={50}
          width={503}
          className="max-w-[66%] py-4 "
        />

        <div className="flex flex-col md:flex-row gap-x-12  mx-12 lg:mx-32 pt-14 md:max-w-[75%]">
          <div className="flex flex-col justify-center  pb-12">
            <Image
              src="/lowding/energy-icon.svg"
              alt="energy icon"
              height={53}
              width={53}
              className={cn(isDarkTheme && "svg-flip")}
            />
            <h3 className="text-xl font-semibold pb-12 md:pb-12">
              What is a low impact website?
            </h3>
            <p className="text-[15px]">
              blach blachacsas csaldnsblach blachacsas csaldns blach blachacsas
              csaldnsblach blachacsas csaldns blach blachacsas csaldns blach
              blachacsas csaldnsblach blachacsas csaldns blach blachacsas
              csaldnsblach blachacnsblach blachac nsblach blachacnsblach blachac
              nsblach blachacnsblach blachacnsblach blachac nsblach
              blachacnsblach blachacnsblach blachaca
            </p>
          </div>
          <div className="flex flex-col justify-center  pb-12 ">
            <Image
              src="/lowding/factory-icon.svg"
              alt="factory icon"
              height={53}
              width={53}
              className={cn(isDarkTheme && "svg-flip")}
            />
            <h3 className="text-xl font-semibold pb-8 md:pb-12">
              Why is it relevant?
            </h3>
            <p className="text-[15px]">
              blach blachacsas csaldnsblach blachacsas csaldns blach blachacsas
              csaldnsblach blachacsas csaldns blach blachacsas csaldns blach
              blachacsas csaldnsblach blachacsas csaldns blach blachacsas
              csaldnsblach blachacnsblach blachac nsblach blachacnsblach blachac
              nsblach blachacnsblach blachacnsblach blachac nsblach
              blachacnsblach blachacnsblach blachac blachacsas csaldnsa
            </p>
          </div>
          <div className="flex flex-col justify-center  pb-8 ">
            <Image
              src="/lowding/man-icon.svg"
              alt="man icon"
              height={52}
              width={52}
              className={cn(isDarkTheme && "svg-flip")}
            />
            <h3 className="text-xl font-semibold pb-8">
              What role do designers and developers play?
            </h3>
            <p className="text-[15px]">
              blach blachacsasblach blachacsas csaldnsblach blachacsas csaldns
              blach blachacsas csaldnsblach blachacsas csaldns blach blachacsas
              csaldns blach blachacsas csaldnsblach blachacsas csaldns blach
              blachacsas csaldnsblach blachacnsblach blachac nsblach
              blachacnsblach blachac nsblach blachacnsblach blachacnsblach
              blachac nsblach blachacnsblach blachacnsblach blachac csaldnsa
            </p>
          </div>
        </div>
        <Link href="/lowding/resrcs">
          <div
            className={cn(
              "absolute right-12 md:right-[15%] bottom-12 md:bottom-[10%] flex items-center text-sm uppercase border-[0.5px] border-black rounded dark:border-on-foreground  p-1 pr-2 hover:cursor-pointer opacity-90",
              consola.className
            )}
          >
            Resources
            <DoorOpen className="size-6" />
            <ArrowRight className="size-4" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default About;
