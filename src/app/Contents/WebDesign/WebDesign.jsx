import styles from "./WebDesign.module.css";

export default function WebDesign() {
  return (
    <div className={styles.container} id="webdesign">
      <article className={styles.presentation}>
        <h1>Projects: Web Design</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          ducimus doloremque alias provident et, quidem doloribus odit ipsa
          cupiditate, dignissimos minima rerum hic vero, sed facere eius natus
          aliquid corporis!
        </p>
      </article>
      <div className={styles.projects}>
        {/* Project 1 */}
        <section className={styles.project}>
          <aside className={styles.leftside}>
            <h2>Project 1 - EducaMap</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic
              numquam, facere quibusdam suscipit et dolor debitis laboriosam
              deserunt ipsa sunt dolorem quia fugit adipisci! Repudiandae nihil
              quis voluptates sequi?
            </p>
            <div className={styles.imglands}></div>
          </aside>
          <aside className={styles.rightside}>
            <div className={styles.grid}>
              <div className={styles.item1}></div>
              <div className={styles.item2}></div>
              <div className={styles.portrait}></div>
            </div>
          </aside>
        </section>

        {/* Project 2 */}
        <section className={styles.project}>
          <aside className={styles.rightside}>
            <div className={styles.grid}>
              <div className={styles.item1}></div>
              <div className={styles.item2}></div>
              <div className={styles.portrait}></div>
            </div>
          </aside>
          <aside className={styles.leftside}>
            <h2>Project 2 - E-Commerce </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic
              numquam, facere quibusdam suscipit et dolor debitis laboriosam
              deserunt ipsa sunt dolorem quia fugit adipisci! Repudiandae nihil
              quis voluptates sequi?
            </p>
            <div className={styles.imglands}></div>
          </aside>
        </section>

        {/* Project 3 */}
        <section className={styles.project}>
          <aside className={styles.leftside}>
            <h2>Project 3 - Party invitation</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              obcaecati aut impedit? Necessitatibus, facere. Soluta explicabo
              tempora magnam officia id, incidunt, labore expedita, optio non
              consequatur eius dolore dicta ducimus.
            </p>
          </aside>
          <aside className={styles.rightside}>
            <div className={styles.grid2}>
              <div className={styles.item1}></div>
              <div className={styles.item2}></div>
              <div className={styles.item3}></div>
              <div className={styles.item4}></div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
