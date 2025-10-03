"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const activeRef = useRef(activeSection);
  useEffect(() => {
    activeRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    // IDs que queremos checar
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
      // manter Home ativo enquanto scrollY === 0
      if (window.scrollY === 0) {
        if (activeRef.current !== "home") setActiveSection("home");
        return;
      }

      // marcar Contact quando estiver no final da página
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        if (activeRef.current !== "contact") setActiveSection("contact");
        return;
      }

      // ponto central da viewport (você pode trocar para outro ponto se preferir)
      const centerY = window.innerHeight / 2;

      let foundId = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue; // elemento pode não existir por causa do AnimatePresence
        const rect = el.getBoundingClientRect();
        // se o centro da viewport estiver dentro do elemento, consideramos ele ativo
        if (rect.top <= centerY && rect.bottom >= centerY) {
          foundId = id;
          break;
        }
      }

      if (!foundId) return; // nada encontrado (ex: seções muito pequenas)

      // mapear as IDs dos conteúdos para a aba "categories"
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
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // roda uma vez na montagem para setar o estado inicial corretamente
    updateActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
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
