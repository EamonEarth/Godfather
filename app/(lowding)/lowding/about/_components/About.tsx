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

        <div className="flex flex-col md:flex-row gap-x-12  mx-12 lg:mx-32 pt-14 md:max-w-[75%] justify-evenly items-center ">
          <div className="flex flex-col justify-center pb-12">
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
              A low impact website minimizes its environmental footprint by
              employing energy-efficient coding practices, optimizing file sizes
              and loading times, and using sustainable hosting solutions. It may
              utilize renewable energy sources, caching techniques, and
              technologies like lazy loading to reduce energy consumption and
              server requests. These sites prioritize sustainability while
              maintaining functionality and user experience, raising awareness
              about eco-friendly behaviors in the digital realm.
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
              Low impact websites are relevant due to the internet's significant
              ecological footprint, contributing to greenhouse gas emissions,
              energy consumption, and resource depletion. By prioritizing
              sustainability with efficient coding, optimized files, and
              sustainable hosting, they help mitigate these impacts. They
              promote eco-friendly practices and exemplify how the digital
              sphere can contribute to a sustainable future. In an increasingly
              digital world, low impact websites play a crucial role in
              minimizing online activities' environmental impact.
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
              As designers and developers, we play a vital role in integrating
              sustainability into our processes. By prioritizing
              energy-efficient coding, optimizing files, and educating
              stakeholders, we create websites that minimize environmental
              impact and drive positive change in the industry.
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
