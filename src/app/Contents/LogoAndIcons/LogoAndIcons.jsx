import styles from "./LogoAndIcons.module.css";
import Image from "next/image";
import OnGoing from "../../On_going/On_going";

export default function LogoAndIcons() {
  return (
    <div className={styles.container} id="logoandicons">
      <article className={styles.presentation}>
        <h1>Projects: Brand Identity, Logo and Icons</h1>
        <p>
          Studying Grid Layout and Visual Identity was an important step for me.
          I discovered that you can convey a lot with just a few well-placed
          images.
        </p>
      </article>
      <div className={styles.projects}>
        {/* Project 1 */}
        <section className={styles.project}>
          <aside className={styles.leftside}>
            <h2>EducaMap Logo</h2>
            <p>
              This project consisted of creating a logo to visually represent my
              initiative. The concept was a "book on a computer screen,"
              symbolizing the project’s mission of enhancing academic learning
              through digital teaching materials.
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
              <div className={styles.item1}>
                <Image
                  src={"/icons/1.png"}
                  width={100}
                  height={100}
                  alt="Icon"
                />
              </div>
              <div className={styles.item2}>
                <Image
                  src={"/icons/2.png"}
                  width={100}
                  height={100}
                  alt="Icon"
                />
              </div>
              <div className={styles.itemI}></div>
              <div className={styles.item4}>
                <Image
                  src={"/icons/3.png"}
                  width={100}
                  height={100}
                  alt="Icon"
                />
              </div>
              <div className={styles.item5}>
                <Image
                  src={"/icons/4.png"}
                  width={100}
                  height={100}
                  alt="Icon"
                />
              </div>
              <div className={styles.itemI}></div>
              <div className={styles.itemI}></div>
              <div className={styles.itemI}></div>
              <div className={styles.item9}>
                <Image
                  src={"/icons/5.png"}
                  width={100}
                  height={100}
                  alt="Icon"
                />
              </div>
            </div>
          </aside>
          <aside className={styles.leftside}>
            <h2>Icons</h2>
            <p>
              For my projects, I always strive to create my own icons, which
              allows me to practice and deepen my understanding of visual
              identity design. This set of icons was developed in Adobe
              Illustrator, as part of the process of building a unique identity
              for the project.
            </p>
          </aside>
        </section>

        <section className={styles.project}>
          <aside className={styles.leftside}>
            <h2> Experimental project.</h2>
            <p>
              The goal was to apply a style that was different from what I'm
              used to and challenge myself. I used a more organic style, with
              vectorized lines and colors.
            </p>
          </aside>
          <aside className={styles.rightside}>
            <div className={styles.grid2}>
              <div className={styles.item1b}>
                <Image
                  src={"/style_fashion/1.png"}
                  width={500}
                  height={400}
                  alt="1"
                  style={{
                    objectFit: "contain",
                  }}
                ></Image>
              </div>
            </div>
          </aside>
        </section>
        {/* Project 3 */}
        <section className={styles.project}>
          <div className={styles.ongoing}>
            <OnGoing />
          </div>
        </section>
      </div>
    </div>
  );
}
