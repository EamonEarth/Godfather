import React, { useState, useRef } from 'react'
import { PROJECTS } from '@/lib/data'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import FullscreenImageModal from './FullscreenImageModal'
import { useFullscreenImageStore } from '@/hooks/use-fullscreen-image'
import Link from 'next/link'
import { Github } from 'lucide-react'

const MobileProjects = () => {
    const [showMore, setShowMore] = useState(-1)
    const { openImage } = useFullscreenImageStore()

    // Refs for each project container (HTMLDivElement or null)
    const projectRefs = useRef<(HTMLDivElement | null)[]>([])

    const handleShowMore = (index: number) => {
        if (index === showMore) {
            setShowMore(-1)
        } else {
            setShowMore(index)

            // Scroll to the project container with a slight offset
            if (projectRefs.current[index]) {
                projectRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                // window.scrollBy(0, -100) // Adjust this value for the offset
            }
        }
    }

    return (
        <div className="w-full h-auto flex flex-col justify-center items-center gap-y-4 py-12 my-12">
            <h2 className="font-bold text-2xl text-white">Projects</h2>
            <FullscreenImageModal />

            <div className="w-full h-auto flex- flex-col items-center justify-center gap-y-4 grid grid-cols-2 gap-x-2">
                {PROJECTS.map((project, index) => (
                    <div 
                        key={project.name} 
                        ref={(el) => {projectRefs.current[index] = el}} // Set the ref for each project div
                        className={cn("flex flex-col", showMore === index ? "col-span-2" : "col-span-1")}
                    >
                        <div  
                            style={{ transition: "background 0.5s ease-in-out, background-color 0.5s ease-in-out" }}
                            className={cn(" z-50 flex flex-col items-center justify-center border-[#5C5E7B] border-8 rounded-[2rem] p-2- overflow-clip relative")}
                        >
                            <div className="w-full object-contain cursor-pointer relative">
                                <Image 
                                    className=""
                                    onClick={() => openImage(project.mobileImage)}
                                    src={project.thumbnail} 
                                    height={500} 
                                    width={768} 
                                    alt={`image for ${project.name}`}
                                />

                                <div className="flex flex-col gap-y-2 items-center w-full pb-2 text-white absolute bottom-[5%]">
                                    <h2 className="font-bold text-center uppercase tracking-wider bg-teal-800 mt-2 px-4 py-1 rounded ">
                                        {project.name}
                                    </h2>

                                    <Button 
                                        className={cn("border-teal-500 !bg-teal-800 border text-xs h-8 p-2")} 
                                        onClick={() => handleShowMore(index)}
                                        >
                                        {showMore === index ? "Close" : "Show More"}
                                    </Button>
                                </div>   
                                      </div>

                            <div 
                                style={{ transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in" }}
                                className={cn("z-0", showMore === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}
                            >
                                <div
                                    style={{ transition: "background-color 0.5s ease-in-out" }}
                                    className={cn("rounded-2xl flex flex-col justify-around gap-y-4 text-xs shadow-2xl text-white px-4 pt-2 py-4")}
                                >
                                    <div className="description-transition font-semibold tracking-wide text-sm">
                                        {project.shortDescription}
                                    </div>

                                    <div className="flex flex-col gap-y-2 description-transition expanded-description">
                                        <p>{project.longDescription.text}</p>

                                        {project.longDescription.listTitle && (
                                            <>
                                                <p className="w-full text-sm tracking-wide border-teal-500/50 border-t pt-4">
                                                    {project.longDescription.listTitle}
                                                </p>
                                                <ul className="flex flex-col gap-y-2">
                                                    {project.longDescription.listPoints.map((point) => (
                                                        <li className="py-2-" key={point}>
                                                            • {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>

                                    <div className="flex gap-x-3 justify-center items-center border-teal-500/50 border-t pt-4">
                                        <a href={project.link} target="_blank" className="text-blue-400 hover:text-blue-200 transition-all text-base">
                                            {project.linkTitle}
                                        </a>
                                        <Link href={project.githubLink}>
                                            <Github className="size-10 z-40" />
                                        </Link>
                                    </div>

                                    <div className="flex flex-wrap gap-x-2 gap-y-2 mt-3 items-end justify-end">
                                        {project.technologies.map((technology) => (
                                            <div
                                                key={technology}
                                                className="flex w-auto items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                                            >
                                                {technology}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileProjects
