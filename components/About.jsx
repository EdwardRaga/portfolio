import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2>Acerca</h2>
      </div>
      <div className={styles.paragraphs}>
        <p>
          En 2018, durante mis estudios de ingeniería en informática, descubrí
          el fascinante mundo de la codificación y el desarrollo de
          aplicaciones. Esta experiencia me llevó a profundizar aún más en el
          campo, lo que me llevó a inscribirme en un bootcamp de desarrollo web.
        </p>
        <p>
          Hoy en día, tengo la fortuna de aplicar mis habilidades y
          conocimientos en diversos proyectos, creando soluciones innovadoras y
          eficientes.
        </p>

        <p>
          Cuando no estoy frente a la computadora, generalmente me encontrarás
          escalando montañas, disfrutando de la naturaleza.
        </p>
      </div>
    </section>
  );
}
