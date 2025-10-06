"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true); // novo estado
  const lastScrollY = useRef(0); // armazena a posição anterior do scroll
  const activeRef = useRef(activeSection);

  useEffect(() => {
    activeRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const ids = [
      "home",
      "categories",
      "webdesign",
      "logoandicons",
      "stationary",
      "contact",
    ];
    let ticking = false;

    const updateActive = () => {
      if (window.scrollY === 0) {
        if (activeRef.current !== "home") setActiveSection("home");
        return;
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        if (activeRef.current !== "contact") setActiveSection("contact");
        return;
      }

      const centerY = window.innerHeight / 2;
      let foundId = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= centerY && rect.bottom >= centerY) {
          foundId = id;
          break;
        }
      }

      if (!foundId) return;

      if (
        ["categories", "webdesign", "logoandicons", "stationary"].includes(
          foundId
        )
      ) {
        if (activeRef.current !== "categories" && window.scrollY > 0) {
          setActiveSection("categories");
        }
      } else if (foundId === "home") {
        if (activeRef.current !== "home") setActiveSection("home");
      } else if (foundId === "contact") {
        if (activeRef.current !== "contact") setActiveSection("contact");
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive();

          // Navbar retrátil (aparece/ some)
          if (window.innerWidth <= 768) {
            // só para celular
            if (window.scrollY > lastScrollY.current) {
              // scroll para baixo → esconder
              setShowNavbar(false);
            } else {
              // scroll para cima → mostrar
              setShowNavbar(true);
            }
            lastScrollY.current = window.scrollY;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActive();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${!showNavbar ? styles.hidden : ""}`}>
      <Link
        href="#home"
        className={activeSection === "home" ? styles.active : ""}
      >
        Home
      </Link>
      <Link
        href="#categories"
        className={activeSection === "categories" ? styles.active : ""}
      >
        Categories
      </Link>
      <Link
        href="#contact"
        className={activeSection === "contact" ? styles.active : ""}
      >
        Contact
      </Link>
    </nav>
  );
}
