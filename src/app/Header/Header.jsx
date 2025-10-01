import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.asideleft}>
        <h2>Hi, my name is</h2>
        <h1>Williams de Lima.</h1>
        <h3>Graphic Designer | I.T. Technician</h3>
      </div>
      <span className={styles.divisoria}>
        <Image
          src="/divisoria.png"
          alt="Header divider"
          width={200}
          height={200}
        />
      </span>
      <div className={styles.asideright}></div>
    </header>
  );
}
