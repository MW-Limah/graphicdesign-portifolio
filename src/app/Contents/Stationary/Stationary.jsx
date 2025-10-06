import styles from "./Stationary.module.css";
import Image from "next/image";
import OnGoing from "../../On_going/On_going";

export default function Stationary() {
  return (
    <div className={styles.container} id="stationary">
      <article className={styles.presentation}>
        <h1>Projects: Print Design and Stationary</h1>
        <p>
          I began my career in graphic design, working with clients on projects
          such as business cards, flyers, banners, and resumes. Besides design,
          I also managed the printing and finishing stages, ensuring
          professional results from concept to final product.
        </p>
      </article>
      <div className={styles.projects}>
        {/* Project 1 */}
        <section className={styles.project}>
          <aside className={styles.leftside}>
            <h2>Project 1 - Business card for Nail Designer</h2>
            <p>
              This was my first project where I managed the entire process end
              to end — from acquiring the client and understanding their needs,
              to defining the visual style and overseeing the production of the
              final material.
            </p>
          </aside>
          <aside className={styles.rightside}>
            <div className={styles.grid}>
              <div className={styles.item1}>
                <Image
                  src={"/print-design/1.png"}
                  fill
                  alt="Card 1"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.item2}>
                <Image
                  src={"/print-design/1b.png"}
                  fill
                  alt="Card 1"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </aside>
        </section>

        {/* Project 2 */}
        <section className={styles.project}>
          <aside className={styles.rightside}>
            <div className={styles.grid2}>
              <div className={styles.portrait}>
                <Image src={"/print-design/2.png"} fill alt="Flyer" />
              </div>
            </div>
          </aside>
          <aside className={styles.leftside}>
            <h2>Project 2 - Guitar Lessons </h2>
            <p>
              Personal project where I designed a flyer to promote guitar
              lessons. The challenge was to create eye-catching visual elements
              that conveyed the purpose of the ad even before the viewer read
              the text.
            </p>
          </aside>
        </section>

        {/* Project 3 */}
        <section className={styles.project}>
          <aside className={styles.leftside}>
            <h2>Project 3 - Business card for Salesperson</h2>
            <p>
              Project developed in close collaboration with the client, whose
              concept guided the work except for the back design. My role was to
              refine the idea and translate it into visuals that accurately
              captured the client’s vision.
            </p>
          </aside>
          <aside className={styles.rightside}>
            <div className={styles.grid}>
              <div className={styles.item1}>
                <Image
                  src={"/print-design/3.png"}
                  fill
                  alt="Card 1"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.item2}>
                <Image
                  src={"/print-design/3b.png"}
                  fill
                  alt="Card 1"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
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
