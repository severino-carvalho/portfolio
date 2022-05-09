import { Link } from 'react-router-dom';
import { MdEmail, MdPhone } from 'react-icons/md';
import Container from './Container';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container >
                <div className={styles.content}>
                    <div>
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <Link to=''>
                                    <MdEmail /> severinocarvalho14@gmail.com
                                </Link>
                            </li>
                            <li>
                                <Link to=''>
                                    <MdPhone /> +55 (84) 99465-0540
                                </Link>
                            </li>
                            <li>
                                <Link to=''>

                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    );
}