"use client";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Navbar from "@/app/ui/nav-link";

import  GithubIcon from "../app/ui/icons/github";
import LinkedInIcon from "../app/ui/icons/linkedin"

export default function Header() {
  return (
    <header className={`${styles.sticky} ${styles.container}`}>
      <div>
        <div className={styles.profile}>
          <h1>Edward Raga</h1>
          <h2>Desarrollador Fullstack</h2>
          <p>
            Construyo productos y experiencias accesibles e inclusivos
            para la web.
          </p>
        </div>
        <div>
          <Navbar />
        </div>
      </div>

      <div>
        <ul className={styles.socials}>
          <li>
            <a href="https://github.com/edwardraga" target="_blank">
              <GithubIcon className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/edwardraga/" target="_blank">
              <LinkedInIcon className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
