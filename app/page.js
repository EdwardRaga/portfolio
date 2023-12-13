import Image from "next/image";
import styles from "./ui/page.module.css";
import Navbar from "./ui/nav-link";

import Header from "../components/Header";
import About from "../components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default async function Home() {
  return (
    <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          {/* ABOUT SECTION  */}
          <About />

          {/* EXPERIENCE SECTION */}
          <Experience />

          {/* PROJECTS SECTION */}
          <Projects />
        </main>
    </div>
  );
}
