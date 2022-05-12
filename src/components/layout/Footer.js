import { MdEmail, MdFacebook, MdPhone } from 'react-icons/md';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Container from './Container';
import styles from './Footer.module.css';
import InfoList from '../utils/InfoList';

export default function Footer() {
    const contacts = [
        {
            icon: <MdEmail />,
            href: 'mailto:severinocarvalho14@gmail.com',
            target: '_blank',
            title: 'Email',
            text: 'severinocarvalho14@gmail.com',
            class: 'email'
        },
        {
            icon: <MdPhone />,
            href: 'tel:+5584994650540',
            target: '_self',
            title: 'Phone',
            text: '+55 (84) 99465-0540',
            class: 'phone'
        }
    ];

    const social = [
        {
            icon: <FaDiscord />,
            href: 'https://discord.gg/89BGgpSA',
            target: '_blank',
            title: 'Discord',
            text: 'Discord',
            class: 'discord'
        },
        {
            icon: <MdFacebook />,
            href: 'https://web.facebook.com/Netollyno/',
            target: '_blank',
            title: 'Facebook',
            text: 'Facebook',
            class: 'facebook'
        },
        {
            icon: <FaInstagram />,
            href: 'https://www.instagram.com/oh_netin/',
            target: '_blank',
            title: 'Instagram',
            text: 'Instagram',
            class: 'instagram'
        },
        {
            icon: <FaLinkedin />,
            href: 'https://www.linkedin.com/in/severino-carvalho-019899175/',
            target: '_blank',
            title: 'LinkedIn',
            text: 'LinkedIn',
            class: 'linkedin'
        },
        {
            icon: <FaWhatsapp />,
            href: 'https://wa.me/5584994650540',
            target: '_blank',
            title: 'WhatsApp',
            text: 'WhatsApp',
            class: 'whatsapp'
        }
    ];

    const dev = [
        {
            icon: <FaGithub />,
            href: 'https://github.com/severino-carvalho',
            target: '_blank',
            title: 'GitHub',
            text: 'GitHub',
            class: 'github'
        }
    ]

    return (
        <footer className={styles.footer}>
            <Container >
                <div className={styles.content}>

                    <div className={styles.perfil}>
                        <div>
                            <div className={styles.ImgSeverino}>{ /**  Imagem via CSS */}</div >
                            <div>
                                <h2>Computer Technician</h2>
                                <p>Instituto Federal de Educação Ciência e Tecnologia do Rio Grande do Norte - IFRN</p>
                                <h2>Internet Programming</h2>
                                <p>Instituto Metrópole Digital - IMD</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.vr}>
                        <div></div>
                    </div>

                    <div className={styles.comunication}>
                        <hr />
                        <InfoList title={'Contact'} list={contacts} />
                        <hr />
                        <InfoList title={'Social'} list={social} />
                        <hr />
                        <InfoList title={'Dev'} list={dev} />
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