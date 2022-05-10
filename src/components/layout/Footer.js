import { MdEmail, MdFacebook, MdPhone } from 'react-icons/md';
import { FaDiscord, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Container from './Container';
import styles from './Footer.module.css';
import InfoList from '../utils/InfoList';

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
                    <div className={styles.comunication}>
                        <hr />
                        <InfoList title={'Contact'} list={contacts} />
                        <hr />
                        <InfoList title={'Social'} list={social} />
                    </div>

                    <div className={styles.perfil}>
                        <div>
                            <div className={styles.ImgSeverino}>{ /**  Imagem via CSS */}</div >
                            <div>
                                <h2>Computer Technician</h2>
                                <p>Instituto Federal de Educação Ciência e Tecnologia do Rio Grande do Norte - IFRN</p>
                                <h2>Internet Computing</h2>
                                <p>Instituto Metrópole Digital - IMD</p>
                            </div>
                        </div>
                    </div>

                </div>

            </Container>

            <div className={styles.developed}>
                <p>
                    {'Developed by '}
                    <span>
                        {' Severino Carvalho'}
                    </span>
                </p>
            </div>

        </footer >
    );
}