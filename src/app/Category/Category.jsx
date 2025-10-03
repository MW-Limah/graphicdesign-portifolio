import styles from "./Category.module.css";

export default function Category({ onSelectCategory }) {
  const handleClick = (category) => {
    // troca a categoria
    onSelectCategory(category);

    // aguarda renderizar e faz scroll suave
    setTimeout(() => {
      const el = document.getElementById(category);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };
  return (
    <div className={styles.container} id="categories">
      <div className={styles.cards}>
        <button onClick={() => handleClick("webdesign")}>Web Design</button>
        <button onClick={() => handleClick("logoandicons")}>
          Logo and Icons
        </button>
        <button onClick={() => handleClick("stationary")}>
          Stationary Design
        </button>
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
