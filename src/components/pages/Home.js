import styles from './Home.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <article>
                <section className={styles.grid}>
                    <div>
                        <h1>Who am I??</h1>
                        <p>
                            {`Hello, I'm Severino Carvalho, I have 20 years old. I'm Computer Technician by `}
                            <a href="https://portal.ifrn.edu.br/campus/joaocamara" target={'_blank'} rel={'noreferrer'}>
                                {`IFRN-JC`}
                            </a>
                            {` (Instituto Federal de Educação Ciência e Tecnologia do Rio Grande do Norte - `}
                            <i>Campus</i>
                            {` João Câmara) and Internet Programming by `}
                            <a href="https://www.metropoledigital.ufrn.br/portal/ensino/tecnico" target={'_blank'} rel={'noreferrer'}>
                                IMD
                            </a>
                            {` (Instituto Metrópole Digital - IMD/UFRN).`}
                        </p>

                        <p>
                            {`I am currently waiting for the second semester to start my degree in `}
                            <a href="https://www.ect.ufrn.br/" target={'_blank'} rel={'noreferrer'}>
                                {`CeT`}
                            </a>
                            {` (Escola de Ciencias e Tecnologia) at `}
                            <a href="https://www.ufrn.br/" target={'_blank'} rel={'noreferrer'}>
                                {`UFRN`}
                            </a>
                            {` (Universidade Federal do Rio Grande do Norte).`}
                        </p>

                        <p>
                            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                        </p>
                    </div>

                    <div className={styles.sectionImage}>
                    </div>
                </section>
            </article>
        </main >
    );
}