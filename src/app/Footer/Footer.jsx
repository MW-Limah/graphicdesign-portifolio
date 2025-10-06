import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <h2>Hey, thank you for coming here.</h2>
      <p>This is still a somewhat experimental and very basic design.</p>
      <p>
        Don't forget that you can always contact me using the contact details
        provided here. I'm always ready to help!
      </p>
      <div className={styles.icons}>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mauricio-de-lima-b20251347/?locale=en_US"
            >
              <Image
                width={40}
                height={40}
                alt="LinkedIn"
                src={"/linkedin.png"}
              ></Image>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wa.me/+447386797717">
              <Image
                width={40}
                height={40}
                alt="Whatsapp"
                src={"/whatsapp.png"}
              ></Image>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/mwlima.dev/">
              <Image
                width={40}
                height={40}
                alt="Instagram"
                src={"/instagram.png"}
              ></Image>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/MW-Limah">
              <Image
                width={40}
                height={40}
                alt="Github"
                src={"/github.png"}
              ></Image>
            </a>
          </li>
        </ul>
      </div>
      <span className={styles.linha}></span>
      <p className={styles.rights}>
        © 2025 - Williams de Lima, All rights reserved.
      </p>
    </footer>
  );
}
