import styles from "./nav-link.module.css";
import Link from "next/link";

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLink}>
        <li>
          <Link href="#about">Acerca</Link>
        </li>
        <li>
          <Link href="#experience">Experiencia</Link>
        </li>
        <li>
          <Link href="#projects">Proyectos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
