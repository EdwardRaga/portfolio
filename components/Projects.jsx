import React from "react";
import styles from "../styles/Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import projects from "../app/data/projects.json";

export default async function Projects() {

  return (
    <section className={styles.container} id="projects">
      <div className={styles.heading}>
        <h2>Proyectos</h2>
      </div>
      <div className={styles["projects-container"]}>
        <ul>
          {projects.map(({ name, description, image, url }, index) => (
            <li key={index}>
              <div className={styles.project}>
                <a href={url} target="_blank">
                  <h3>
                    {name}
                    <Image
                      src="/top-arrow.svg"
                      width={20}
                      height={20}
                      alt="top_arrow_image"
                    />
                  </h3>
                </a>
                <p>{description}</p>
              </div>
              <div className={styles.image}>
                <Image src={image} width={500} height={500} alt="image_project" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className={styles.allprojects}>
        <Link href={"#"}>
          <span>Ver Archivo de Todos los Proyectos</span>
          <Image
            src="/right-arrow.svg"
            width={15}
            height={15}
            alt="right_arrow_image"
          />
        </Link>
      </div> */}
    </section>
  );
}
