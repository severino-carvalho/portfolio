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

export default function Home() {
  return (
    <Container styles={"bgDarkContainer"}>
      <main className={styles.main + ` ${styles["bgDark"]}`}>
        <article>
          <section className={styles.sectionCI}>
            <div className={styles.about}>
              <h2 className="text-2xl text-center">Sobre mim</h2>
              <p>
                Olá, sou Severino Carvalho e tenho 21 anos. Sou técnico de nível
                médio em informática pelo Instituto Federal de Educação Ciência
                e Tecnologia do Rio Grande do Norte <i> Campus </i> João Câmara{" "}
                <a
                  className="hover:no-underline hover:decoration-blue-400 hover:text-blue-500"
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
                  className="hover:no-underline hover:decoration-blue-400 hover:text-blue-500"
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
                  className="hover:no-underline hover:decoration-blue-400 hover:text-blue-500"
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
                Spring, NodeJS com o framework ExpressJS, Typescript, MySQL e
                PostgreSQL. Na área do desenvolvimento para dispositivos móveis
                desenvolvo aplicações utilizando React Native. E para o
                versionamento de projetos utilizo Git e GitHub. Sou uma pessoa
                autodidata, apaixonado pela programação, vejo o trabalho em
                grupo como algo fundamental para o desenvolvimento das
                atividades.
              </p>
            </div>
          </section>

          <section className={styles.habilidades + " pt-12"}>
            <h2 className="text-2xl text-center">Habilidades</h2>

            <div className="grid grid-cols-8 gap-4 pt-4">
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["html"]}>
                  <SiHtml5 />
                </span>
                <span className={styles["skill-title"] + " " + styles["html"]}>
                  Html 5
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["css"]}>
                  <SiCss3 />
                </span>
                <span className={styles["skill-title"] + " " + styles["css"]}>
                  Css 3
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["js"]}>
                  <SiJavascript />
                </span>
                <span className={styles["skill-title"] + " " + styles["js"]}>
                  Javascript
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["ts"]}>
                  <SiTypescript />
                </span>
                <span className={styles["skill-title"] + " " + styles["ts"]}>
                  Typescript
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["node"]}>
                  <SiNodedotjs />
                </span>
                <span className={styles["skill-title"] + " " + styles["node"]}>
                  NodeJS
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["java"]}>
                  <SiJava />
                </span>
                <span className={styles["skill-title"] + " " + styles["java"]}>
                  Java
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["spring"]}>
                  <SiSpring />
                </span>
                <span
                  className={styles["skill-title"] + " " + styles["spring"]}
                >
                  Spring
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["mysql"]}>
                  <SiMysql />
                </span>
                <span className={styles["skill-title"] + " " + styles["mysql"]}>
                  MySQL
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["react"]}>
                  <SiReact />
                </span>
                <span className={styles["skill-title"] + " " + styles["react"]}>
                  React
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span
                  className={
                    styles["skill-icon"] + " " + styles["react-native"]
                  }
                >
                  <TbBrandReactNative />
                </span>
                <span
                  className={
                    styles["skill-title"] + " " + styles["react-native"]
                  }
                >
                  React Native
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["git"]}>
                  <SiGit />
                </span>
                <span className={styles["skill-title"] + " " + styles["git"]}>
                  Git
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["github"]}>
                  <SiGithub />
                </span>
                <span
                  className={styles["skill-title"] + " " + styles["github"]}
                >
                  Github
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span
                  className={styles["skill-icon"] + " " + styles["bootstrap"]}
                >
                  <SiBootstrap />
                </span>
                <span
                  className={styles["skill-title"] + " " + styles["bootstrap"]}
                >
                  Bootstrap
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["jquery"]}>
                  <SiJquery />
                </span>
                <span
                  className={styles["skill-title"] + " " + styles["jquery"]}
                >
                  Jquery
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["yarn"]}>
                  <SiYarn />
                </span>
                <span className={styles["skill-title"] + " " + styles["yarn"]}>
                  Yarn
                </span>
              </div>
              <div className={styles["skill-item"]}>
                <span className={styles["skill-icon"] + " " + styles["npm"]}>
                  <SiNpm />
                </span>
                <span className={styles["skill-title"] + " " + styles["npm"]}>
                  NPM
                </span>
              </div>
            </div>
          </section>

          <section className={styles.projects + " pt-12"}>
            <h2 className="text-2xl text-center">Projetos</h2>

            <div className="flex flex-row flex-wrap gap-5 justify-center items-start pt-4">
              <div className={styles["card-project"]}>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Site IFSol</div>
                  <p className="text-gray-300 text-base">
                    Projeto em equipe que serviu como TCC do curso técnico em
                    informática.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className={styles["tag-project"]}>#Java</span>
                  <span className={styles["tag-project"]}>#Spring</span>
                  <span className={styles["tag-project"]}>#MySQL</span>
                  <div>
                    <a
                      className={styles["link-project"]}
                      href="https://github.com/severino-carvalho/site_ifsol"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Acessar
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles["card-project"]}>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Portfólio</div>
                  <p className="text-gray-300 text-base">
                    Projeto pessoal desenvolvido para mostrar minhas habilidades
                    como desenvolvedor full-stack.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className={styles["tag-project"]}>#React</span>
                  <span className={styles["tag-project"]}>#Javascript</span>
                  <span className={styles["tag-project"]}>#Tailwind</span>
                  <div>
                    <a
                      className={styles["link-project"]}
                      href="https://github.com/severino-carvalho/portfolio"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </Container>
  );
}
