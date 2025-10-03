import styles from "./WebDesign.module.css";
import Image from "next/image";

export default function WebDesign() {
  return (
    <div className={styles.container} id="webdesign">
      <article className={styles.presentation}>
        <h1>Projects: Web Design</h1>
        <p>
          Web Design is my most recent area of focus. I aim to create visually
          engaging and user-friendly websites that capture attention, spark
          interest, and provide a comfortable browsing experience.
        </p>
      </article>
      <div className={styles.projects}>
        {/* Project 1 */}
        <section className={styles.project}>
          <aside className={styles.leftside}>
            <div className={styles.up}>
              <h2>Project 1 - EducaMap</h2>
              <p>
                <strong>EducaMap</strong> is an ongoing project that helps
                students conduct structured research. Originating from an
                academic paper, it addresses the challenge of finding reliable
                information and connecting ideas. With a writing area and AI
                tools, EducaMap will organize data, check accuracy, and improve
                the coherence of students' research. It will also have an
                interface that helps students focus without having to open
                multiple browser windows. It will also have a mobile version.
              </p>
            </div>
            <div className={styles.down}>
              <div className={styles.imglands}>
                <Image
                  src={"/educamap/interface-landscape.png"}
                  width={600}
                  height={250}
                  alt="EducaMap Landscape"
                ></Image>
              </div>
            </div>
          </aside>
          <aside className={styles.rightside}>
            <div className={styles.grid}>
              <div className={styles.item1}>
                <Image
                  src={"/educamap/educamap-logo.png"}
                  width={250}
                  height={250}
                  alt="EducaMap Logo"
                ></Image>
              </div>
              <div className={styles.item2}>
                {" "}
                <Image
                  src={"/educamap/research-area.png"}
                  width={250}
                  height={250}
                  alt="EducaMap Research Area"
                ></Image>
              </div>
              <div className={styles.portrait}>
                <Image
                  src={"/educamap/interface-portrait.png"}
                  width={250}
                  height={400}
                  alt="EducaMap Writter Area"
                ></Image>
              </div>
            </div>
          </aside>
        </section>

        {/* Project 2 */}

        <section className={styles.project}>
          <aside className={styles.leftside}>
            <h2>Project 2 - Party invitation</h2>
            <p>
              Created under a tight deadline, this project delivered a
              functional party invitation. I designed an invitation-style
              interface, added icons, made it fully responsive for desktop and
              mobile, and it was also the first project I created in{" "}
              <strong>Figma</strong>.
            </p>
            <div className={styles.itemI}></div>
          </aside>
          <aside className={styles.rightside}>
            <div className={styles.grid2}>
              <div className={styles.item1}>
                <Image
                  src={"/e-invite/1.png"}
                  width={250}
                  height={250}
                  alt="Invite 1"
                />
              </div>
              <div className={styles.item2}>
                <Image
                  src={"/e-invite/2.png"}
                  width={250}
                  height={250}
                  alt="Invite 2"
                />
              </div>
              <div className={styles.item3}>
                <Image
                  src={"/e-invite/3.png"}
                  width={250}
                  height={250}
                  alt="Invite 3"
                />
              </div>
              <div className={styles.item4}>
                <Image
                  src={"/e-invite/4.png"}
                  width={250}
                  height={250}
                  alt="Invite 4"
                />
              </div>
            </div>
          </aside>
        </section>
        {/* Project 3 */}

        <section className={styles.project}>
          <aside className={styles.rightside}>
            <div className={styles.grid}>
              <div className={styles.item1}>
                <Image
                  src={"/ecommerce/ecommerce-logo.png"}
                  width={250}
                  height={250}
                  alt="Ecommerce Logo"
                />
              </div>
              <div className={styles.item2}>
                <Image
                  src={"/ecommerce/selected-items.png"}
                  width={250}
                  height={250}
                  alt="Selected Items"
                />
              </div>
              <div className={styles.portrait}>
                <Image
                  src={"/ecommerce/ecommerce-portrait.png"}
                  width={300}
                  height={400}
                  alt="Ecommerce Portrait"
                ></Image>
              </div>
            </div>
          </aside>
          <aside className={styles.leftside}>
            <h2>Project 3 - E-Commerce </h2>
            <p>
              I designed my first online store for a local women’s product
              retailer. Although initially intended as a simple project, it
              evolved into a complex system that was fully implemented. The
              design was created in Canva, marking the beginning of my journey
              into web design.
            </p>
            <div className={styles.imglands}>
              <Image
                src={"/ecommerce/ecommerce-landscape.png"}
                width={800}
                height={250}
                alt="Ecommerce Landscape"
              ></Image>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
