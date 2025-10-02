import styles from "./Header.module.css";
/* import Image from "next/image"; */

export default function Header() {
  return (
    <header className={styles.header} id="home">
      <div className={styles.asideleft}>
        <h2>Hi, my name is</h2>
        <h1>Williams de Lima.</h1>
        <h3>Graphic Designer | I.T. Technician</h3>
      </div>
      <span className={styles.divisoria}>
        <span className={styles.halfquad}></span>
        <span className={styles.halfquad2}></span>
      </span>
      <div className={styles.asideright}></div>
    </header>
  );
}
