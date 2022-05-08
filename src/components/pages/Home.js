import styles from './Home.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Maçãs</h1>
            <p>A maçã é a fruta pomácea da macieira.</p>

            <article>
                <h2>Vermelho delicioso</h2>
                <p>Estas maçãs vermelhas brilhantes são as mais comumente encontradas em muitos supermercados.</p>
                <p>... </p>
                <p>... </p>
            </article>

            <article>
                <h2>Granny Smith</h2>
                <p>Essas suculentas maçãs verdes, são um ótimo recheio para torta de maçã.</p>
                <p>... </p>
                <p>... </p>
            </article>
        </main>
    );
}