import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  const logoSrc = isDarkTheme
    ? "/lowding/logo-full-white.png"
    : "/lowding/logo-full-black.png";
  const mobileLogoSrc = isDarkTheme
    ? "/lowding/pl-white.png"
    : "/lowding/pl-dark.png";

  return (
    <div className="flex">
      <Link href="/lowding/about">
        <div className="hidden md:flex md:items-center">
          <Image src={logoSrc} alt="logo" width={100} height={40} />
        </div>
        <div className="flex items-center md:hidden">
          <Image src={mobileLogoSrc} alt="logo" width={20} height={20} />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
