import { useEffect, useState } from "react";

const useMousePosition = () => {
  

  const [
    mousePosition,
    setMousePosition
  ] = useState({ x: 300, y: 400 });


  useEffect(() => {

    const updateMousePosition = (e:MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;