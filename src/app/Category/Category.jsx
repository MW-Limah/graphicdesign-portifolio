import Link from "next/link";
import styles from "./Category.module.css";

export default function Category() {
  return (
    <div className={styles.container} id="categories">
      <div className={styles.cards}>
        <Link href={"#webdesign"}>Web Design</Link>
        <Link href={"#logoandicons"}>Logo and Icons</Link>
        <Link href={"#stationary"}>Stationarry Desing</Link>
      </div>
      <div className={styles.texts}>
        <h2>Design Categories</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          ipsum unde tenetur. Nostrum doloribus autem ex, ad quos repellendus,
          quidem reiciendis, possimus officiis error numquam? Ratione ullam quos
          mollitia ex. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quidem ipsam consequuntur tempore nisi reiciendis. Rem molestias
          facilis sed eum, facere consequuntur, sint blanditiis tenetur nisi
          expedita veritatis qui magni libero.
        </p>
      </div>
    </div>
  );
}
