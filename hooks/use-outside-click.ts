import React, { useEffect } from "react";


export const useOutsideClick = (callback:any ) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event:any) => {

      const projectsDiv = document.getElementById("projects-container")
      if (ref.current && !ref.current.contains(event.target) && !(projectsDiv && projectsDiv.contains(event.target as Node)) ) {
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


