import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const NAV_ITEMS = ["Top", "XP", "PROJECTS"];

interface NavbarProps {
  shift: number;
  content: string;
}

const Navbar = ({ shift, content }: NavbarProps) => {
  return (
    <div className="sticky top-0 h-[18px] w-full flex  items-center text-teal-500 bg-teal-500/20 border-b border-teal-500">
      <div
        className="relative text-xs"
        style={{ transform: `translate(${shift * 1.618}px) ` }}
      >
        {content}
      </div>
    </div>
  );
};

export default Navbar;
