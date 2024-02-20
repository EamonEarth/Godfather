// "use client";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../../../components/ui/carousel";
// import useEmblaCarousel from "embla-carousel-react";
// import { EmblaCarouselType } from "embla-carousel";

// import Image from "next/image";
// import { useCallback, useEffect, useState } from "react";
// import { cn } from "../../../lib/utils";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// const PROJECTS = [
//   {
//     name: "Portfolio Site",
//     link: "https://github.com/EamonEarth/Lowding",
//     img: "/portfolio/port-thumb.png",
//     shortDescription:
//       "Built with NextJS, design inspired by Brittany Chiang's beautiful site.",
//     longDescription: {
//       text: "A meticulously responsive site, with lots of care given to every little detail.",
//       listTitle: "Some details you might have missed:",
//       listPoints: [
//         "Integration with RESTful APIs to use user-info to populate the Haiku generation (no user information is saved).",
//         "LocalStorage used to persist contact form drafts, with state and storage being reset upon completion/deletion.",
//         "Intersection Observers to avoid clogging the main-thread with scroll observers (you've got to love async UX improvements!)",
//       ],
//     },

//     technologies: [
//       "nextjs",
//       "APIs",
//       "html",
//       "css",
//       "typescript",
//       "tailwind",
//       "figma",
//     ],
//   },
//   {
//     name: "Project Lowding",
//     link: "https://github.com/EamonEarth/Lowding",
//     img: "/portfolio/lowding-thumb.png",
//     shortDescription:
//       "Neat little design thesis project advocating for lower impact design choices. As well as building the site I refined the UX.",
//     longDescription: {
//       text: "A meticulously responsive site, with lots of care given to every little detail.",
//       listTitle: "Some details you might have missed:",
//       listPoints: [
//         "Integration with RESTful APIs to use user-info to populate the Haiku generation (no user information is saved).",
//         "LocalStorage used to persist contact form drafts, with state and storage being reset upon completion/deletion.",
//         "Intersection Observers to avoid clogging the main-thread with scroll observers (you've got to love async UX improvements!)",
//       ],
//     },
//     technologies: ["html", "css", "typescript", "prisma", "tailwind", "figma"],
//   },
// ];

// interface ProjectCarouselProps {
//   className: string;
// }

// export function ProjectCarousel({ className }: ProjectCarouselProps) {
//   const [isMounted, setIsMounted] = useState(false);
//   const [showMore, setShowMore] = useState(false);
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [emblaRef, emblaApi] = useEmblaCarousel();

//   const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
//     console.log(emblaApi.slidesInView());
//   }, []);

//   useEffect(() => {
//     if (emblaApi) emblaApi.on("slidesInView", logSlidesInView);
//   }, [emblaApi, logSlidesInView]);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return;
//   }

//   return (
//     <div
//       className={cn(
//         "pt-12 flex flex-col md:w-full  max-w-[450px] snap-center relative hover-boundary"
//       )}
//     >
//       <h1
//         className={cn(
//           "text-primary-foreground font-sans text-left font-bold text-2xl md:relative uppercase spread-font-spacing"
//         )}
//       >
//         Past Work
//       </h1>
//       <span className="w-full h-[1px] bg-white lg:mb-8 mb-4" />
//       {/* <div className=" rounded-xl   w-auto h-auto  hover:bg-[#111c2c] hover:outline outline-1  py-2 px-[30px] relative md:right-[30px] md:hover:right-0 lg:hover:right-[150px] duration-1000 delay-50 hover:z-50"> */}
//       <div
//         className={cn(
//           "carousel-hover-boundary rounded-xl w-auto h-auto flex justify-center items-center hover:bg-black hover:outline outline-1  py-6 px-[50px] relative right-0 lg:hover:right-[150px] duration-1000 delay-50 hover:z-40"
//         )}
//       >
//         <Carousel
//           opts={{
//             align: "center",
//             loop: true,
//             axis: "y",
//           }}
//           className="w-full md:w-auto relative right-0"
//         >
//           <CarouselContent className="text-white text-center flex">
//             {PROJECTS.map((project, index) => (
//               <CarouselItem
//                 key={project.name}
//                 className={cn("flex rounded-xl")}
//                 // style={{ transition: "opacity 500ms ease-out" }}
//               >
//                 {/* <Link href={project.link}> */}
//                 <div>
//                   <div className="p-1 flex flex-col aspect-square font-light pb-1 text-left relative">
//                     <h2 className="py-2 text-md font-semibold font-italic uppercase font-sans">
//                       {project.name}
//                     </h2>
//                     <img
//                       src={project.img}
//                       alt={project.name}
//                       className="rounded  border-white border-[0.1px] mb-4"
//                     />
//                     <span className="w-full h-[0.5px] bg-white" />
//                     <div
//                       className={cn(
//                         "flex relative items-center border-b-[0.5px] transition-all duration-500",
//                         showMore && "expanded"
//                       )}
//                     >
//                       <div
//                         className={cn(
//                           "text-xs mx-2 rounded-xl py-3 project-description"
//                         )}
//                       >
//                         <p>
//                           {showMore ? (
//                             <div className="flex flex-col gap-y-2">
//                               <p className="font-bold">
//                                 {project.longDescription.text}
//                               </p>
//                               <ul className="font-light gap-y-5 flex flex-col">
//                                 <h2>{project.longDescription.listTitle}</h2>
//                                 {project.longDescription.listPoints.map(
//                                   (point) => (
//                                     <li>• {point}</li>
//                                   )
//                                 )}
//                               </ul>
//                             </div>
//                           ) : (
//                             project.shortDescription
//                           )}
//                         </p>
//                       </div>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         className={cn(
//                           "text-xs border-[0.5px] rounded-full relative  transition-all duration-500 right-0",
//                           showMore && "rotate-90 right-[-20px]"
//                         )}
//                         onClick={() => setShowMore(!showMore)}
//                       >
//                         {!showMore ? "read more" : "show less"}
//                       </Button>
//                       {/* <span className="w-full h-[0.5px] bg-white"/> */}
//                     </div>
//                     <div className="flex flex-wrap gap-x-2 gap-y-2 mt-3">
//                       {project.technologies.map((technology) => (
//                         <div className="flex w-auto items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
//                           {technology}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 {/* </Link> */}
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// }
