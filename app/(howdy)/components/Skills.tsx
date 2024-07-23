import { cn } from "@/lib/utils"

const skillList = {
    advanced: ["Typescript/Javascript", "Python", "React", "HTML5", "CSS", "Data Structures", "NextJS", "APIs", "Responsive Design", "Dynamic Programming", "Algorithms" ],
    intermediate: ["Zustand", "AWS", "SQL", "Git", "SCSS", "Testing", "SEO", "NodeJS", "Figma", "ORM", "UI/UX"],
    junior: ["Angular", "Redux", "Selenium", "Prompt Engineering", "Botpress", "Photoshop","Vue", "Java", "Go", "Jest", "WebSockets"]
}

const skillGroupings = {
    "Frontend": ["React","Typescript/Javascript", "HTML5", "CSS", "Responsive Design", "SCSS" , "UI/UX", "Selenium",  "Angular", "Vue"],
    "Backend": ["Python", "SQL", "AWS", "ORM", "Java" ],
    "Inbetween / General": ["Dynamic Programming", "Algorithms", "NodeJS", "Git", "SEO","Redux", "Photoshop", "Prompt Engineering"   ],
    "Design": ["Figma", "Photoshop"]
}

const Skills = () => {

    


    return (
        <div className="w-full md:w-[75%] flex flex-col items-center md:pt-32 py-12 text-primary-foreground">
        <h1
          className=
            " font-sans text-center font-bold text-2xl md:relative uppercase spread-font-spacing lg:pb-5 "
        >
          Skillset
        </h1>
            <div className=" w-full flex justify-center items-center">
                <div className="flex flex-col w-[90%] md:w-[60%]">
                    <div className="flex justify-between items-center text-xs md:text-sm px-4">
                        <p>Advanced</p>
                        <p>Intermediate</p>
                        <p>Junior</p>

                    </div>

                <div style={{ animation: "pulse 4s ease-in-out infinite"}} className="rounded-3xl w-full h-[30px] bg-gradient-to-r from-lime-500  via-yellow-500 to-amber-200 opacity-70"></div>
                </div>
            </div>

                <div className="flex flex-col md:flex-row gap-y-4 w-[80%] py-4 text-sm">
                    <div className="w-full flex flex-col">
                        <h1 className="text-lg font-semibold">Frontend</h1>
                        {skillGroupings.Frontend.map((skill)=> <div key={skill} className="flex justify-between items-center w-[1/3] bg- px-4 hover:scale-y-110"><span className="relative left-0 hover:left-1 transition-all">{skill} </span><span className={cn("rounded-full size-4 ", skillList.advanced.includes(skill) && "bg-lime-500", skillList.intermediate.includes(skill) && "bg-yellow-500", skillList.junior.includes(skill) && "bg-amber-200")}></span></div>)}
                    </div>
                    <div className="w-full flex flex-col">
                        <h1 className="text-lg font-semibold">Backend</h1>

                        {skillGroupings.Backend.map((skill)=> <div key={skill} className="flex justify-between items-center w-[1/3] px-4"><span className="relative left-0 hover:left-1 transition-all">{skill} </span><span className={cn("rounded-full size-4 bg-yellow-500", skillList.advanced.includes(skill) && "bg-lime-500", skillList.intermediate.includes(skill) && "bg-yellow-500", skillList.junior.includes(skill) && "bg-amber-200")}></span></div>)}
                    </div>
                    <div className="w-full flex flex-col">
                        <h1 className="text-lg font-semibold ">General / Mix</h1>

                        {skillGroupings["Inbetween / General"].map((skill)=> <div key={skill} className="flex justify-between items-center w-[1/3] px-4"><span className="relative left-0 hover:left-1 transition-all">{skill} </span><span className={cn("rounded-full size-4 bg-amber-200", skillList.advanced.includes(skill) && "bg-lime-500", skillList.intermediate.includes(skill) && "bg-yellow-500", skillList.junior.includes(skill) && "bg-amber-200")}></span></div>)}
                    </div>
                </div>
        </div>
    )
}

export default Skills