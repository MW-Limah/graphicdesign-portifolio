import styles from "./WebDesign.module.css";

export default function WebDesign() {
  return (
    <div className={styles.container}>
      <article className={styles.container}>
        <h1>Projects: Web Design</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          ducimus doloremque alias provident et, quidem doloribus odit ipsa
          cupiditate, dignissimos minima rerum hic vero, sed facere eius natus
          aliquid corporis!
        </p>
      </article>
      {/* Project 1 */}
      <section>
        <aside>
          <h2>Project 1 - EducaMap</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic
            numquam, facere quibusdam suscipit et dolor debitis laboriosam
            deserunt ipsa sunt dolorem quia fugit adipisci! Repudiandae nihil
            quis voluptates sequi?
          </p>
          <div>{/* Imagem em landscape */}</div>
        </aside>
        <aside>
          <div>
            {/* Grid 1 */}
            <div></div>
            <div></div>
            <div></div>
          </div>
        </aside>
      </section>
      {/* Project 2 */}
      <section>
        <article></article>
      </section>
    </div>
  );
}
