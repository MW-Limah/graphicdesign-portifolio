"use client";

import { useEffect, useState } from "react";

const frames = ["/on_going/1.png", "/on_going/2.png"];

export default function FrameAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frames.length);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <img src={frames[index]} alt="animation frame" width={100} height={100} />
  );
}
