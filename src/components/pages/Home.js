import styles from './Home.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <article>
                <section>
                    <h1>Who am I??</h1>

                    <div>
                        <div>
                            <p>
                                {`Hello, I'm Severino Carvalho, I have 20 years old. I'm Computer Technician by `}
                                <a href="https://portal.ifrn.edu.br/campus/joaocamara" target={'_blank'} rel={'noreferrer'}>
                                    {`IFRN-JC`}
                                </a>
                                {` (Instituto Federal de Educação Ciência e Tecnologia do Rio Grande do Norte - IFRN `}
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
                        </div>
                        <div className={styles.sectionImage}>
                        </div>
                    </div>
                </section>
            </article>
        </main >
    );
}