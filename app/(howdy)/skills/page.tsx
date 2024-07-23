"use client"
import { Home } from "lucide-react"
import Skills from "../components/Skills"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Haiku from "../components/Haiku"

const SkillsPage = () => {
    const CV_ENG = "/portfolio/CV.pdf"
    const CV_DE = "/portfolio/CV_DE.pdf"
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
            <div className="relative flex justify-center items-center top-0 w-full h-24 z-50 text-primary-foreground">
                <Link href="/">
                <Home 
                style={{transition: "transform 0.5s ease-in-out"}}
                size="32" className="cursor-pointer hover:scale-125"/>
                </Link>

            </div>
            <Skills />
            <div className="flex flex-col items-center justify-center text-primary-foreground pb-4">
            <h1
          className=
            " font-sans text-center font-bold text-2xl md:relative uppercase tracking-tighter pb-4 "
        >
          CV
        </h1>
                <div className="flex flex-col md:flex-row gap-y-2 gap-x-2 items-center justify-between">
                    
            <Button 
            style={{transition: "transform 0.5s ease-in-out"}}
            className="hover:scale-110 "
            >

            <a className="uppercase   px-4 py-2" href={CV_ENG} download="Eamon Travers - CV (eng)">English</a>
            </Button>
            <Button 
            style={{transition: "transform 0.5s ease-in-out"}}
            className="hover:scale-110 "
            >

            <a className="uppercase   px-4 py-2" href={CV_DE} download="Eamon Travers - Lebenslauf">Deutsch</a>
            </Button>
                </div>
                </div>
            <Haiku />

        </div>
    )
}

export default SkillsPage