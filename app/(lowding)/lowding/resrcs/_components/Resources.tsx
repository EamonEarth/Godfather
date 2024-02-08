import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { consola } from "../../styles/fonts/fonts";
import { cn } from "@/lib/utils";

const RESOURCES = [
  "Fonts",
  "Images",
  "Videos and Sound",
  "Colours",
  "Animations & Interactions",
  "Content Management System (CMS)",
];

interface ResourcesProps {
  darkTheme: boolean | null;
}

const Resources = ({ darkTheme }: ResourcesProps) => {
  return (
    <div
      className={cn(
        "w-auto h-auto  border-2 border-on-foreground text-booster-1 dark:text-booster-2-light",
        consola.className,
        darkTheme ? "text-booster-1-light" : "text-booster-1"
      )}
    >
      <Accordion type="single" collapsible className="">
        {RESOURCES.map((resource) => (
          <AccordionItem key={resource} value={resource}>
            <AccordionTrigger className="text-black dark:text-on-foreground">
              {resource}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row gap-y-12 relative justify-around px-12">
                <div className="flex flex-col">
                  <ul className="list-disc dark:text-on-foreground ">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      Lorem ipsum dolor sit amet, consectetur.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      Lorem ipsum dolor sit amet, consectetur.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col md:my-12 max-w-[75%] dark:text-on-foreground">
                  <span className="gap-x-2">
                    •
                    <a href="" className="hover:underline transition">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </a>
                  </span>
                  <span className="gap-x-2">
                    •
                    <a href="" className="hover:underline transition">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </a>
                  </span>
                  <span className="gap-x-2">
                    •
                    <a href="" className="hover:underline transition">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </a>
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Resources;

{
  /* </Accordion>
      <div className="flex flex-col">
        {RESOURCES.map((resource) => (
          <div key={resource} className="p-5 border border-black">
            <h2>{resource}</h2>
          </div>
        ))}
      </div> */
}
