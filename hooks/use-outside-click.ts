import React, { useEffect } from "react";


export const useOutsideClick = (callback:any ) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event:any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};


