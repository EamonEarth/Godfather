import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const NAV_ITEMS = ["Top", "XP", "PROJECTS"];

interface NavbarProps {
  shift: number;
  content: string;
  navPosition: number;
}

const Navbar = ({ shift, content, navPosition }: NavbarProps) => {
  return (
    <div
      className={cn(
        `sticky top-0 h-[12px] w-full flex  items-center text-teal-500 bg-teal-500/20 border-b border-dashed border-teal-500 rotate-180 opacity-60`
      )}
    >
      <div
        className="text-xs"
        style={{
          transform: `translate(${shift * 1.618}px) `,
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Navbar;
