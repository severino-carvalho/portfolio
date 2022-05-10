import { MdEmail, MdFacebook, MdPhone } from 'react-icons/md';
import { FaDiscord, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Container from './Container';
import styles from './Footer.module.css';
import InfoList from './InfoList';

export default function Footer() {
    const contacts = [
        (
            <a href="mailto:severinocarvalho14@gmail.com" target={'_blank'} rel={'noreferrer'}>
                <MdEmail /> severinocarvalho14@gmail.com
            </a>
        ),
        (
            <a href="tel:+5584994650540">
                <MdPhone /> +55 (84) 99465-0540
            </a>
        )
    ];

    const social = [
        (
            <a href="https://discord.gg/89BGgpSA" target="_blank" rel='noreferrer'>
                <FaDiscord /> Discord
            </a>
        ),
        (
            <a href="https://web.facebook.com/Netollyno/" target="_blank" rel='noreferrer'>
                <MdFacebook /> Facebook
            </a>
        ),
        (
            <a href="https://www.instagram.com/oh_netin/" target="_blank" rel='noreferrer'>
                <FaInstagram /> Instagram
            </a>
        ),
        (
            <a href="https://www.linkedin.com/in/severino-carvalho-019899175/" target="_blank" rel='noreferrer'>
                <FaLinkedin /> Linkedin
            </a>
        ),
        (
            <a href="https://wa.me/5584994650540" target="_blank" rel='noreferrer'>
                <FaWhatsapp /> Whatsapp
            </a>
        )
    ]

    return (
        <footer className={styles.footer}>
            <Container >
                <div className={styles.content}>
                    <InfoList title={'Contact'} list={contacts} />
                    <InfoList title={'Social'} list={social} />
                    <InfoList title={'Contact'} list={contacts} />
                    <InfoList title={'Social'} list={social} />
                    <InfoList title={'Contact'} list={contacts} />
                    <InfoList title={'Social'} list={social} />
                </div>

                <div className={styles.developed}>
                    <p>
                        Developed by
                        <span>
                            <strong>
                                Severino Carvalho
                            </strong>
                        </span>
                    </p>
                </div>
            </Container>
        </footer >
    );
}