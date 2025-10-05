import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header} id="home">
      <div className={styles.asideleft}>
        <h2>Hi, my name is</h2>
        <h1>Williams de Lima.</h1>
        <h3>Graphic Designer | I.T. Technician</h3>
      </div>
      <div className={styles.asideright}>
        <Image
          src="/divisoria.png"
          alt="Divisoria"
          fill
          className={styles.divisoria}
        />
      </div>
    </header>
  );
}
