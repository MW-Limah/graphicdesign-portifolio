"use client";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./page.module.css";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Category from "./Category/Category";
import WebDesign from "./Contents/WebDesign/WebDesign";
import LogoAndIcons from "./Contents/LogoAndIcons/LogoAndIcons";
import Stationary from "./Contents/Stationary/Stationary";
import Footer from "./Footer/Footer";
import BackButton from "./ButtonBack/ButtonBack";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("webdesign");
  const [isAnimating, setIsAnimating] = useState(false); // bloqueia cliques enquanto troca
  const pendingScrollRef = useRef(null); // armazena qual categoria queremos rolar depois da animação

  const handleSelectCategory = (category) => {
    // evita cliques durante animação
    if (isAnimating) return;

    // se clicar na mesma categoria, rola imediatamente (comportamento opcional)
    if (category === selectedCategory) {
      const el = document.getElementById(category);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // marca como animando e guarda a categoria que quer rolar
    setIsAnimating(true);
    pendingScrollRef.current = category;

    // muda a categoria (isso inicia a saída do atual, e com mode="wait"
    // o novo só monta depois da saída completa)
    setSelectedCategory(category);
  };

  const handleExitComplete = () => {
    // chamado quando todas as saídas terminaram
    const target = pendingScrollRef.current;
    if (!target) {
      setIsAnimating(false);
      return;
    }

    // garantir próximo frame (DOM pintado) antes do scroll
    requestAnimationFrame(() => {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback pequeno caso não tenha sido montado ainda
        setTimeout(() => {
          const e2 = document.getElementById(target);
          if (e2) e2.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }

      // liberar bloqueio após o tempo da animação + pequeno buffer
      // (ajuste 600ms se você usar outra duração)
      setTimeout(() => {
        setIsAnimating(false);
        pendingScrollRef.current = null;
      }, 600);
    });
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case "webdesign":
        return <WebDesign />;
      case "logoandicons":
        return <LogoAndIcons />;
      case "stationary":
        return <Stationary />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <div className={styles.content}>
        <BackButton />
        <section className={styles.section}>
          <p className={styles.titulo}>Profile</p>
          <p className={styles.paragraph}>
            Professional designer with over two years of experience in the
            field. Constantly exploring new horizons and discovering creative
            ways of seeing the world. <br /> Challenges are not obstacles — they
            are opportunities to grow, innovate, and exceed expectations.
          </p>
        </section>

        {/* passa handle e estado de bloqueio pro Category */}
        <Category
          onSelectCategory={handleSelectCategory}
          disabled={isAnimating}
        />

        <div className={styles.transitionWrapper}>
          <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
            <motion.div
              key={selectedCategory}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </div>
  );
}
