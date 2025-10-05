"use client";
import styles from "./On_going.module.css";

/* import { useEffect, useState } from "react";

const frames = ["/on_going/1.png", "/on_going/2.png"];
 */
export default function FrameAnimation() {
  /*   const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frames.length);
    }, 400);
    return () => clearInterval(interval);
  }, []);
 */
  return (
    <div className={styles.ongoing}>
      <h1>More content coming soon!</h1>
      {/*  <img src={frames[index]} alt="animation frame" width={100} height={100} /> */}
    </div>
  );
}
