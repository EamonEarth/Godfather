"use client"
import { Home } from "lucide-react"
import Skills from "../components/Skills"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Haiku from "../components/Haiku"

const SkillsPage = () => {
    const CV = "/portfolio/CV.pdf"
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
            <Button 
            style={{transition: "transform 0.5s ease-in-out"}}
            className="hover:scale-110"
            variant="ghost">

            <a className="text-primary-foreground uppercase font-bold text-lg  border-[0.5px] border-white rounded-lg px-4 py-2" href={CV} download="Eamon Travers - CV (eng)">Download CV</a>
            </Button>
            <Haiku />

        </div>
    )
}

export default SkillsPage