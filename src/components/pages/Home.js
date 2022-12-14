import Container from "../layout/Container";
import styles from "./Home.module.css";

import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiYarn,
  SiNpm,
  SiMysql,
  SiSpring,
  SiJquery,
  SiTypescript,
  SiJavascript,
  SiJava,
  SiNodedotjs,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

import LogoIFSol from "../../img/logoifsol.png";

export default function Home() {
  return (
    <Container styles={"bgDarkContainer"}>
      <main className={styles.main + ` ${styles["bgDark"]}`}>
        <article>
          <section className={styles.sectionCI}>
            <div className={styles.about}>
              <h2>Sobre mim</h2>
              <p>
                Olá, sou Severino Carvalho e tenho 20 anos. Sou técnico de nível
                médio em informática pelo Instituto Federal de Educação Ciência
                e Tecnologia do Rio Grande do Norte <i> Campus </i> João Câmara{" "}
                <a
                  href="https://portal.ifrn.edu.br/campus/joaocamara"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  (IFRN-JC)
                </a>
                {", "}
                técnico em programação para internet pelo Instituto Metrópole
                Digital da Universidade Federal do Rio Grande do Norte{" "}
                <a
                  href="https://www.metropoledigital.ufrn.br/portal/ensino/tecnico"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  (IMD/UFRN)
                </a>{" "}
                e no ensino superior, estou cursando o primeiro semestre no
                bacharelado em Ciências e Tecnologia na Escola de Ciências e
                Tecnologia{" "}
                <a
                  href="https://www.ect.ufrn.br/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  (ECT/UFRN)
                </a>
              </p>

              <p className={styles.about}>
                Com o conhecimento adquirido, consigo desenvolver atividades
                front-end utilizando HTML, CSS, Javascript, Bootstrap e ReactJS.
                Para o back-end desenvolvo utilizando Java com o framework
                Spring, NodeJS com o framework ExpressJS e MySQL como banco de
                dados. Na área do desenvolvimento para dispositivos móveis
                desenvolvo aplicações utilizando React Native. E para o
                versionamento de projetos utilizo Git e GitHub. Sou uma pessoa
                autodidata, apaixonado pela programação, vejo o trabalho em
                grupo como algo fundamental para o desenvolvimento das
                atividades.
              </p>
            </div>
          </section>

          <section className={styles.habilidades + " " + styles.pt3}>
            <h2>Habilidades</h2>

            <div className={styles.boxDefault}>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiHtml5 />
                </span>
                <span>Html 5</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiCss3 />
                </span>
                <span>Css 3</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiJavascript />
                </span>
                <span>Javascript</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiTypescript />
                </span>
                <span>Typescript</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiNodedotjs />
                </span>
                <span>NodeJS</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiJava />
                </span>
                <span>Java</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiSpring />
                </span>
                <span>Spring</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiMysql />
                </span>
                <span>MySQL</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiReact />
                </span>
                <span>React</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <TbBrandReactNative />
                </span>
                <span>React Native</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiGit />
                </span>
                <span>Git</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiGithub />
                </span>
                <span>Github</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiBootstrap />
                </span>
                <span>Bootstrap</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiYarn />
                </span>
                <span>Yarn</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiNpm />
                </span>
                <span>NPM</span>
              </div>
              <div className={styles.cardDefault}>
                <span className={styles.iconDefault}>
                  <SiJquery />
                </span>
                <span>Jquery</span>
              </div>
            </div>
          </section>

          <section className={styles.projects + " " + styles.pt3}>
            <h2>Projetos</h2>

            <div className={styles.boxDefault}>
              <div className={styles.cardDefault}>
                <img src={LogoIFSol} alt="logo_ifsol" />
                <span>Site IFSol</span>
              </div>
            </div>
          </section>
        </article>
      </main>
    </Container>
  );
}
