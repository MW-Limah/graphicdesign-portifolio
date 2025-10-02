import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="#home">Home</Link>
      <Link href="#categories">Categories</Link>
      <Link href="/#">Contact</Link>
    </nav>
  );
}
