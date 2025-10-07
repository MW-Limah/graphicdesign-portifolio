import styles from "./WebDesign.module.css";
import Image from "next/image";
import OnGoing from "../../On_going/On_going";

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
            <h2>Project 1 - EducaMap</h2>
            <p>
              EducaMap is a student-focused project with a more direct, compact,
              and functional design that unites research and writing areas.
              <br />
              The visual identity is based on blue—a color associated with
              tranquility, wisdom, and credibility—reinforcing the brand's
              educational and inspirational purpose
            </p>

            <div className={styles.imglands}>
              <Image
                src="/educamap/interface-landscape.png"
                alt="EducaMap Landscape"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </aside>
          <aside className={styles.rightside}>
            <div className={styles.grid}>
              <div className={styles.item1}>
                <Image
                  src="/educamap/educamap-logo.png"
                  alt="EducaMap Logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.item2}>
                <Image
                  src="/educamap/research-area.png"
                  alt="EducaMap Research Area"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.portrait}>
                <Image
                  src="/educamap/interface-portrait.png"
                  alt="EducaMap Portrait"
                  fill
                  style={{ objectFit: "contain" }}
                />
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
                  src="/e-invite/1.png"
                  alt="Invite 1"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.item2}>
                <Image
                  src="/e-invite/2.png"
                  alt="Invite 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.item3}>
                <Image
                  src="/e-invite/3.png"
                  alt="Invite 3"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.item4}>
                <Image
                  src="/e-invite/4.png"
                  alt="Invite 4"
                  fill
                  style={{ objectFit: "contain" }}
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
                  src="/ecommerce/ecommerce-logo.png"
                  alt="Ecommerce Logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.item2}>
                <Image
                  src="/ecommerce/selected-items.png"
                  alt="Selected Items"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.portrait}>
                <Image
                  src="/ecommerce/ecommerce-portrait.png"
                  alt="Ecommerce Portrait"
                  fill
                  style={{ objectFit: "contain" }}
                />
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
                src="/ecommerce/ecommerce-landscape.png"
                alt="Ecommerce Landscape"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.visit}>
              <a href="https://lojaheloisa.vercel.app/" target="_blank">
                Visit here
              </a>
            </div>
          </aside>
        </section>
        <section className={styles.project}>
          <OnGoing />
        </section>
      </div>
    </div>
  );
}
