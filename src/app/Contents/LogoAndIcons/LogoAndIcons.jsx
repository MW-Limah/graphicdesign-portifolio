import styles from "./LogoAndIcons.module.css";
import Image from "next/image";

export default function LogoAndIcons() {
  return (
    <div className={styles.container} id="logoandicons">
      <article className={styles.presentation}>
        <h1>Projects: Brand Identity, Logo and Icons</h1>
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
          </aside>
          <aside className={styles.rightside}>
            <div className={styles.grid}>
              <div className={styles.item1}>
                <Image
                  src={"/educamap-logo/1.png"}
                  width={150}
                  height={150}
                  alt="1"
                />
              </div>
              <div className={styles.item4}>
                <Image
                  src={"/educamap-logo/2.png"}
                  width={150}
                  height={150}
                  alt="2"
                />
              </div>
              <div className={styles.item5}>
                <Image
                  src={"/educamap-logo/3.png"}
                  width={150}
                  height={150}
                  alt="3"
                />
              </div>
              <div className={styles.item6}>
                <Image
                  src={"/educamap-logo/4.png"}
                  width={150}
                  height={150}
                  alt="4"
                />
              </div>
              <div className={styles.item7}>
                <Image
                  src={"/educamap-logo/5.png"}
                  width={150}
                  height={150}
                  alt="5"
                />
              </div>
              <div className={styles.item8}>
                <Image
                  src={"/educamap-logo/6.png"}
                  width={150}
                  height={150}
                  alt="6"
                />
              </div>
              <div className={styles.itemI}></div>
              <div className={styles.itemI}></div>
              <div className={styles.item9}>
                <Image
                  src={"/educamap-logo/7.png"}
                  width={150}
                  height={150}
                  alt="7"
                />
              </div>
            </div>
          </aside>
        </section>

        {/* Project 2 */}
        <section className={styles.project}>
          <aside className={styles.rightside}>
            <div className={styles.grid}>
              <div className={styles.item1}></div>
              <div className={styles.item2}></div>
              <div className={styles.itemI}></div>
              <div className={styles.item4}></div>
              <div className={styles.item5}></div>
              <div className={styles.itemI}></div>
              <div className={styles.itemI}></div>
              <div className={styles.itemI}></div>
              <div className={styles.item9}></div>
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
            <div className={styles.grid}>
              <div className={styles.itemI}></div>
              <div className={styles.item2}></div>
              <div className={styles.item3}></div>
              <div className={styles.item4}></div>
              <div className={styles.item5}></div>
              <div className={styles.item6}></div>
              <div className={styles.item7}></div>
              <div className={styles.item8}></div>
              <div className={styles.itemI}></div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
