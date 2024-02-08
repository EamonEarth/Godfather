"use client";
import { Orbit, Plane } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/lowding/about");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-y-16 justify-center items-center min-h-screen bg-on-foreground dark:bg-on-background dark:text-on-foreground underline-offset-2">
        This page hasn&apos;t been completed yet.
        <span className="flex gap-x-2 items-center">
          Redirecting you home
          <Orbit className="size-4 orbit" />
          <Plane className="size-5 plane-right" />
        </span>
      </div>
    </div>
  );
};

export default Page;
