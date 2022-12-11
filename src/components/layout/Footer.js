import { MdEmail, MdFacebook, MdPhone } from "react-icons/md";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Container from "./Container";
import styles from "./Footer.module.css";
import ContactList from "../utils/ContactList";

export default function Footer() {
  const contacts = [
    {
      icon: <MdEmail />,
      href: "mailto:severinocarvalho14@gmail.com",
      target: "_blank",
      title: "Email",
      text: "E-mail",
      class: "email",
    },
    {
      icon: <MdPhone />,
      href: "tel:+5584994650540",
      target: "_self",
      title: "Phone",
      text: "Telefone",
      class: "phone",
    },
  ];

  const social = [
    {
      icon: <FaDiscord />,
      href: "https://discord.gg/89BGgpSA",
      target: "_blank",
      title: "Discord",
      text: "Discord",
      class: "discord",
    },
    {
      icon: <MdFacebook />,
      href: "https://www.facebook.com/devseverino/",
      target: "_blank",
      title: "Facebook",
      text: "Facebook",
      class: "facebook",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/seve_neto7/",
      target: "_blank",
      title: "Instagram",
      text: "Instagram",
      class: "instagram",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/dev-severino-carvalho/",
      target: "_blank",
      title: "LinkedIn",
      text: "LinkedIn",
      class: "linkedin",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/5584994650540",
      target: "_blank",
      title: "WhatsApp",
      text: "WhatsApp",
      class: "whatsapp",
    },
  ];

  const dev = [
    {
      icon: <FaGithub />,
      href: "https://github.com/severino-carvalho",
      target: "_blank",
      title: "GitHub",
      text: "GitHub",
      class: "github",
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container styles={styles.bgContainerFooter}>
        <div className={styles.content}>
          <div className={styles.perfil}>
            <div>
              <div className={styles.ImgSeverino}>{/**  Imagem via CSS */}</div>
              <div>
                <h2>Técnico em Informática</h2>
                <p>
                  Instituto Federal de Educação Ciência e Tecnologia do Rio
                  Grande do Norte - IFRN
                </p>
                <h2>Pragramação para Internet</h2>
                <p>Instituto Metrópole Digital - IMD</p>
              </div>
            </div>
          </div>

          <div className={styles.vr}>
            <div></div>
          </div>

          <div className={styles.comunication}>
            <hr />
            <ContactList title={"Contact"} list={contacts} />
            <hr />
            <ContactList title={"Social"} list={social} />
            <hr />
            <ContactList title={"Dev"} list={dev} />
          </div>
        </div>
      </Container>

      <div className={styles.developed}>
        <p>
          {"Developed by "}
          <span>{" Severino Carvalho"}</span>
        </p>
      </div>
    </footer>
  );
}
