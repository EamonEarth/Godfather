import React, { useState, useRef, useEffect } from 'react'
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

    const projectRefs = useRef<(HTMLDivElement | null)[]>([])

    // Effect to handle scrolling
    useEffect(() => {
        if (showMore !== -1 && projectRefs.current[showMore]) {
            projectRefs.current[showMore]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [showMore])

    const handleShowMore = (index: number) => {
        if (index === showMore) {
            setShowMore(-1)
            setTimeout(()=>{
                const projectsDiv = document.getElementById('projects')
                if (projectsDiv) projectsDiv.scrollIntoView({behavior: "smooth", block: "center"})
            }, 5)
        } else {
            setShowMore(index)
        }
    }

    // Create a new sorted list of projects with the selected one at the top
    const sortedProjects = showMore !== -1
        ? [PROJECTS[showMore], ...PROJECTS.filter((_, i) => i !== showMore)]
        : PROJECTS

    return (
        <div id="projects" className="w-full h-auto flex flex-col justify-center items-center gap-y-4 py-12 my-12">
            <h2 className="font-bold text-2xl text-white">Projects</h2>
            <FullscreenImageModal />

            <div className="w-full h-auto grid grid-cols-2 gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-4 relative">
                {sortedProjects.map((project, index) => {
                    // Adjust the correct index after sorting
                    const actualIndex = PROJECTS.indexOf(project)

                    return (
                        <div 
                            key={project.name} 
                            ref={(el) => { projectRefs.current[actualIndex] = el }} 
                            className={cn("flex flex-col", actualIndex === showMore ? "col-span-2" : "col-span-1")}
                            id={project.name}
                        >
                            <div  
                                style={{ transition: "background 0.5s ease-in-out, background-color 0.5s ease-in-out" }}
                                className={cn(" z-50 flex flex-col items-center justify-center border-[#5C5E7B] border-8 rounded-[2rem] p-2- overflow-clip relative")}
                            >
                                <div className="w-full object-contain cursor-pointer relative">
                                {project.name === "Phasmic" ? 
                                    // <div>
                                    <video 
                                    onClick={()=>openImage(project.mobileImage!)}
                                    
                                    
                                    
                                    autoPlay loop muted playsInline className="h-full w-full aspect-square" preload="auto" id="videoElement">
                                    <source src="/portfolio/phasmicThumbnail.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                    </video>
                                    // </div>
                                    :
                                
                                    <Image 
                                        className=""
                                        onClick={() => openImage(project.mobileImage)}
                                        src={project.thumbnail} 
                                        height={500} 
                                        width={768} 
                                        alt={`image for ${project.name}`}
                                    />
                                }

                                    <div className="flex flex-col gap-y-2 items-center w-full pb-2 text-white absolute bottom-[1%]">
                                        <h2 className=" font-bold text-center uppercase tracking-wider bg-teal-800 mt-2 px-4 py-1 rounded ">
                                            {project.name}
                                        </h2>

                                        <Button 
                                            className={cn("border-teal-500 !bg-teal-800 border text-xs h-8 p-2")} 
                                            onClick={() => handleShowMore(actualIndex)}
                                        >
                                            {actualIndex === showMore ? "Close" : "Show More"}
                                        </Button>
                                    </div>   
                                </div>

                                <div 
                                    style={{ transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in" }}
                                    className={cn("z-0", actualIndex === showMore ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}
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

                                        <div className="flex gap-x-3 justify-center items-center border-teal-500/50 border-t pt-2">
                                            <a href={project.link} target="_blank" className="text-blue-400 hover:text-blue-200 transition-all text-base">
                                                {project.linkTitle}
                                            </a>
                                            <Link href={project.githubLink}>
                                                <Github className="size-10 z-40" />
                                            </Link>
                                        </div>

                                        <div className="flex flex-wrap gap-x-2 gap-y-2 mt-1 items-end justify-end">
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
                    )
                })}
            </div>
        </div>
    )
}

export default MobileProjects
