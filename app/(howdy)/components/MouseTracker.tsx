import useMousePosition from "@/hooks/useMousePosition";

const MouseTracker = () => {
  const mousePos = useMousePosition();

  return (
    <div
      style={{
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 70%)`,
      }}
      className="w-full h-full pointer-events-none fixed "
    ></div>
  );
};

export default MouseTracker;
