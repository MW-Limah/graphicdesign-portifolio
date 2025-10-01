import styles from "./page.module.css";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Category from "./Category/Category";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Header />
        <section className={styles.section}>
          <p className={styles.titulo}>Profile</p>
          <p className={styles.paragraph}>
            I am a graphic designer with a passion for creating visually
            stunning designs that communicate effectively. With a strong eye for
            detail and a deep understanding of design principles, I strive to
            deliver high-quality work that exceeds client expectations. lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          </p>
        </section>
        <Category />
      </div>
    </div>
  );
}
