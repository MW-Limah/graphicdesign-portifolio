"use client";
import { useState, useEffect } from "react";
import styles from "./ButtonBack.module.css";

export default function BackButton() {
  const [isVisible, setIsVisible] = useState();
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="#categories"
      className={styles.returnTop}
      aria-label="Back to categories"
    >
      Select another category.
    </a>
  );
}
