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
                                < b >
                                    <a href="https://portal.ifrn.edu.br/campus/joaocamara" target={'_blank'} rel={'noreferrer'}>
                                        {`IFRN-JC`}
                                    </a>
                                </b>
                                {` (Instituto Federal de Educação Ciência e Tecnologia do Rio Grande do Norte - IFRN `}
                                <i>Campus</i>
                                {` João Câmara) and Internet Programming by `}
                                <b>
                                    <a href="https://www.metropoledigital.ufrn.br/portal/ensino/tecnico" target={'_blank'} rel={'noreferrer'}>
                                        IMD
                                    </a>
                                </b>
                                {` (Instituto Metrópole Digital - IMD/UFRN).`}
                            </p>
                        </div>
                        <div className={styles.sectionImage}>
                        </div>
                    </div>
                </section>

                <section>
                    <p>
                        {`Hello World...`}
                    </p>
                </section>
            </article>
        </main >
    );
}