import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/#">Categories</Link>
      <Link href="/#">Contact</Link>
    </nav>
  );
}
