import Container from "../layout/Container";
import styles from "./Home.module.css";
import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaJs,
  FaReact,
  FaGit,
  FaGithub,
  FaNodeJs,
  FaBootstrap,
  FaYarn,
  FaNpm,
} from "react-icons/fa";

import { SiMysql, SiSpring, SiJquery } from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

export default function Home() {
  return (
    <Container styles={"bgDarkContainer"}>
      <main className={styles.main + ` ${styles["bgDark"]}`}>
        <article>
          <section className={styles.sectionCI}>
            <div>
              <h2>Sobre mim</h2>
              <p>
                {`Olá, sou Severino Carvalho e tenho 20 anos. Sou técnico de nível médio em informátiva pelo Instituto Federal de Educação Ciência e Tecnologia do Rio Grande do Norte `}
                <i>Campus</i>
                {` João Câmara `}
                <a
                  href="https://portal.ifrn.edu.br/campus/joaocamara"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {`(IFRN-JC)`}
                </a>
                {` e técnico em programação para internet pelo Instituto Metrópole Digital da Universidade Federal do Rio Grande do Norte. `}
                <a
                  href="https://www.metropoledigital.ufrn.br/portal/ensino/tecnico"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {`(IMD/UFRN). `}
                </a>
                {`No ensino superior, estou cursando o primeiro semestre na Escola de Ciências e Tecnologia `}
                <a
                  href="https://www.ect.ufrn.br/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {`(ECT/UFRN)`}
                </a>
              </p>

              <p>
                Com o conhecimento adquirido, consigo desenvolver atividades
                front-end com: Bootstrap, CSS, HTML, Javascript e ReactJS;
                Back-end com: Java com Spring, MySQL, e NodeJS e ExpressJS;
                Desenvolvimento para dispositivos móveis com: React Native; E
                para o versionamento de projetos: Git e GitHub. Sou uma pessoa
                autodidata, apaixonado pela programação, vejo o trabalho em
                grupo como algo fundamental para o desenvolvimento das
                atividades.
              </p>
            </div>
          </section>

          <section className={styles.tecnologias}>
            <h2>Tecnologias:</h2>

            <div className={styles.boxTecnologia}>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <FaHtml5 />
                </span>
                <span>Html 5</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <FaCss3 />
                </span>
                <span>Css 3</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <FaJs />
                </span>
                <span>Javascript</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <FaNodeJs />
                </span>
                <span>NodeJS</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <FaJava />
                </span>
                <span>Java</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <SiSpring />
                </span>
                <span>Spring</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <SiMysql />
                </span>
                <span>MySQL</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <FaReact />
                </span>
                <span>React</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <TbBrandReactNative />
                </span>
                <span>React Native</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <FaGit />
                </span>
                <span>Git</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <FaGithub />
                </span>
                <span>Github</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <FaBootstrap />
                </span>
                <span>Bootstrap</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <FaYarn />
                </span>
                <span>Yarn</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <FaNpm />
                </span>
                <span>NPM</span>
              </div>
              <div href="/" className={styles.cardTecnologia}>
                <span className={styles.iconTecnologia}>
                  <SiJquery />
                </span>
                <span>Jquery</span>
              </div>
            </div>
          </section>
        </article>
      </main>
    </Container>
  );
}
