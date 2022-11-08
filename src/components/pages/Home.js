import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <article>
        <section className={styles.sectionCI}>
          <div>
            <h3>Sobre mim</h3>
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

            <p></p>
          </div>
        </section>
      </article>
    </main>
  );
}
