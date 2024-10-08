import { Dices, Hourglass } from "lucide-react";
import React, { useState, useEffect } from "react";
import { cn, dayOfTheWeek } from "@/lib/utils";

interface HaikuProps {
  // carouselExpansionBlur: boolean;
  // projectsOnScreen: boolean;
}

const Haiku = ({  }: HaikuProps) => {
  const [trigger, setTrigger] = useState(0);
  const [ipAddress, setIpAddress] = useState("");
  const [city, setCity] = useState("");
  const [lines, setLines] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch("/api/get-ip");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("ip fetch erroridoo - you live in Berlin now", error);
        setIpAddress("24.48.0.1");
      }
    };

    fetchIpAddress();
  }, []);

  useEffect(() => {
    if (!ipAddress || ipAddress === "undefined") {
      return;
    }
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          `/api/get-location?ip=${encodeURIComponent(ipAddress)}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const city = data.data.city;
        setCity(city);
      } catch (error) {
        console.log("Moving you to Berlin for poetry purposes", error)
        setCity("Berlin")
      }
    };
    fetchLocation();
  }, [ipAddress]);

  useEffect(() => {
    if (!city || city === "undefined") {
      return;
    }
    const newHaiku = async () => {
      setLoading(true);
      const date = new Date();
      const dayString = dayOfTheWeek(date);

      try {
        const response = await fetch(
          `/api/create-haiku?city=${city}&day=${dayString}`
        );

        if (!response.ok) {
          setLoading(false);
          throw new Error("Haiku Error");
        }

        const haiku = await response.json();
        const lines = haiku.final.split("\n");
        setLines(lines);
        setLoading(false);
      } catch (error) {
        console.error("Haiku end error", error);
      }
    };
    newHaiku();
  }, [city, trigger]);

  const throttle = (cb: () => void, delay: number) => {
    let inThrottle = false;

    return () => {
      if (inThrottle) {
        return;
      }
      cb();
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, delay);
    };
  };
  const throttledSetTrigger = throttle(() => {
    setTrigger((trigger) => trigger + 1);
  }, 1000);

  const handleNextHaikuClick = () => {
    throttledSetTrigger();
  };

  return (
    <span className="absolute w-full bottom-1 md:right-[10%] flex items-center justify-center">

    <div
      style={{ transition: "filter 0.5s ease-in-out" }}
      className={cn(
        "z-40 max-w-fit md:relative pt-2 min-w-[256px]"
       
      )}
    >
      {lines ? (
        <div className="text-primary-foreground font-extralight text-sm px-14 pt-1  md:py-5 pb-5 opacity-80 gap-y-0.5 justify-end h-auto w-[320px] md:w-[350px] flex flex-col bg-green-500/10 rounded ">
          <p className="relative text-xs text-primary-foreground opacity-80 uppercase font-bold flex items-center gap-x-1 pt-2">
            <span className="absolute uppercase text-[7px] bottom-3.5 -left-2 opacity-40 ">
              (questionable)
            </span>
            Bonus GPT haiku:
            <span
              onClick={handleNextHaikuClick}
              className={cn(
                "animate-bounce",
                loading
                  ? "cursor-not-allowed"
                  : "hover:cursor-pointer shake-animate"
              )}
            >
              <Dices 
              className="w-6 h-6 " />
            </span>
            {!!loading && (
              <Hourglass className="w-5 h-5 text-primary-foreground hourglass-rotate opacity-50" />
            )}
          </p>
          {lines.map((line, index) => (
            <p key={index}>
              <i>{line}</i>
            </p>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    </span>

  );
};

export default Haiku;
