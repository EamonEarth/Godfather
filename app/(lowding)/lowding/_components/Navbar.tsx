"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "../../../../lib/utils";
import { Instagram, Menu, Youtube } from "lucide-react";
import EcoSwitch from "./EcoSwitch";
import Logo from "../about/Logo";
import { useTheme } from "next-themes";
import MobileNavbar from "./MobileNavbar";

// about resources inspiration contact
export const NAV_LINKS = [
  {
    title: "about",
    href: "/lowding/about",
  },
  {
    title: "resources",
    href: "/lowding/resrcs",
  },
  {
    title: "inspiration",
    href: "/lowding/inspiration",
  },
  {
    title: "contact",
    href: "/lowding/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="w-full h-[80px] absolute top-0  bg-navgrey dark:bg-black text-black dark:text-on-foreground transition flex items-center px-2 z-50">
      <div className="absolute right-0 top-0">
        <MobileNavbar
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
      </div>
      <div id="logo" className="w-1/3  uppercase font-bold flex ml-4">
        <Logo />
      </div>
      <div id="nav" className="flex justify-around md:w-1/2">
        <div className="hidden md:flex">
          {NAV_LINKS.map((item, index) => (
            <Link href={item.href} key={index}>
              <Button
                variant="nav"
                className={cn(
                  "uppercase  ",
                  pathname === item.href && "underline",
                  isDarkTheme ? "text-booster-2-light" : "text-booster-2"
                )}
              >
                {item.title}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className="absolute right-1/2 md:hidden"
      >
        <Menu />
      </div>

      <div
        id="icons"
        className="absolute hidden lg:flex right-10  items-center gap-x-2 "
      >
        <Instagram className="w-6 h-6" />
        <Youtube className="w-6 h-6" />
      </div>
      <div className="absolute md:top-28 right-0 md:right-6">
        <EcoSwitch />
      </div>
    </div>
  );
};

export default Navbar;
