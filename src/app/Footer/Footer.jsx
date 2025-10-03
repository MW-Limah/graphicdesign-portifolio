import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <h2>Well, thanks for making it this far.</h2>
      <p>
        Don't forget that you can always contact me using the contact details
        provided here. I'm always ready to help!
      </p>
      <div className={styles.icons}>
        <ul>
          <li>
            <a href="">
              <Image
                width={40}
                height={40}
                alt="LinkedIn"
                src={"/linkedin.png"}
              ></Image>
            </a>
          </li>
          <li>
            <a href="">
              <Image
                width={40}
                height={40}
                alt="Whatsapp"
                src={"/whatsapp.png"}
              ></Image>
            </a>
          </li>
          <li>
            <a href="">
              <Image
                width={40}
                height={40}
                alt="Instagram"
                src={"/instagram.png"}
              ></Image>
            </a>
          </li>
          <li>
            <a href="">
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
