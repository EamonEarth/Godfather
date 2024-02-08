"use client";

import { useEffect, useState } from "react";
import MouseTracker from "./MouseTracker";

const TrackerProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return;
  }

  return (
    <>
      <MouseTracker />
    </>
  );
};

export default TrackerProvider;
