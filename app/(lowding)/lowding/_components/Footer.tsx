import { bungeeHairline } from "../styles/fonts/fonts";
import { cn } from "../../../../lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative bottom-0 h-[70px] w-full bg-navgrey dark:bg-black z-40 flex items-center justify-center">
      <div className="flex justify-center items-center relative top-3">
        <div
          className={cn(
            "flex justify-around inset-x-1/3 gap-x-16 ",
            bungeeHairline.className
          )}
        >
          <p className="text-white text-booster-1-anon text-xs">
            Berlin, Germany
          </p>
          <Link href="/about">
            <Image
              src="/lowding/pl-white.png"
              alt="PL"
              height={30}
              width={37}
              className="relative bottom-2"
            />
          </Link>
          <Link
            href="/privacy"
            className="text-white text-booster-1-anon text-xs tracking-tight hover:underline"
          >
            <p>privacy policy</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
