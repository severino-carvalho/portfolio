import styles from './Home.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Poema</h1>
            <p>Rosas vermelhas florensem todo ano, se não pagar seu telefone vai entrar pelo cano.</p>
            <hr/>
            <br />
            <article>
                <h2>Ei cara...</h2>
                <p>Ei cara, você gosta de pipoca?</p>
                <p>Você falou em pipoca?</p>
                <p>Hurrum!</p>
                <p>Que tipo?</p>
                <p>Pipoca quente e na manteiga.</p>
                <p>Falou quente e na manteiga?</p>
            </article>
            <hr />
            <br />
            <article>
                <h2>Gato a jato</h2>
                <p>Asas batendo</p>
                <p>Macha de decolagem</p>
                <p>Turbina e JÁ!</p>
            </article>

            <br />
        </main>
    );
}