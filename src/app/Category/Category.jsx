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
          Over the years, as I developed my interest in Graphic Design and
          worked to establish myself in the field, I explored a variety of
          styles and disciplines. Among these, the areas I specialize in are
          stationery design, logo, icon and brand identity design, and, more
          recently, web design. <br />
          Selecione ao lado o que mais te interessa ver.
        </p>
      </div>
    </div>
  );
}
