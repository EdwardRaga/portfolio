import React from "react";
import styles from "../styles/Experience.module.css";
import Image from "next/image";
import experience from "../app/data/experience.json";

export default async function Experience() {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.heading}>
        <h2>Experiencia</h2>
      </div>
      <div className={styles["projects-container"]}>
        <ol>
          {experience.map(
            ({ date, company, responsibility, technologies }, index) => (
              <li key={index}>
                <div className={styles.date}>{date}</div>
                <div className={styles.details}>
                  <h3>{company}</h3>
                  <p>{responsibility}</p>

                  {/* technologies */}
                  <ul className={styles.tech}>
                    {technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          )}
        </ol>
      </div>
      <div className={styles.cv}>
        <a href="cv-edwardraga-ES.pdf" target={"_blank"}>
          <span>Ver Resumen completo</span>
          <Image
            src="/right-arrow.svg"
            width={15}
            height={15}
            alt="right-row"
          />
        </a>
      </div>
    </section>
  );
}
