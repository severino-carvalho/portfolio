import { MdEmail, MdFacebook, MdPhone } from 'react-icons/md';
import { FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Container from './Container';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container >
                <div className={styles.content}>
                    <div>
                        <h1>Contact</h1>
                        <ul>
                            <li>
                                <a href="mailto:severinocarvalho14@gmail.com" target="_blank" rel='noreferrer'>
                                    <MdEmail /> severinocarvalho14@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+5584994650540">
                                    <MdPhone /> +55 (84) 99465-0540
                                </a>

                            </li>
                        </ul>

                    </div>
                    <div>
                        <h1>Social</h1>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/severino-carvalho-019899175/" target="_blank" rel='noreferrer'>
                                    <FaDiscord /> Discord
                                </a>
                            </li>
                            <li>
                                <a href="https://web.facebook.com/Netollyno/" target="_blank" rel='noreferrer'>
                                    <MdFacebook /> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/oh_netin/" target="_blank" rel='noreferrer'>
                                    <FaInstagram /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/severino-carvalho-019899175/" target="_blank" rel='noreferrer'>
                                    <FaLinkedin /> Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer >
    );
}