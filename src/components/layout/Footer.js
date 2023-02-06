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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className="pt-2 sm:pt-0">
            <div className={styles["img-severino"]}>
              {/**  Imagem via CSS */}
            </div>
            <div className="pt-3">
              <h2 className="text-lg">Técnico em Informática</h2>
              <p className="text-sm md:text-md pt-2 text-center opacity-70">
                Instituto Federal de Educação Ciência e Tecnologia do Rio Grande
                do Norte - IFRN <i>Campus</i> João Câmara
              </p>
              <h2 className="text-lg">Pragramação para Internet</h2>
              <p className="text-sm md:text-md pt-2 text-center opacity-70">
                Instituto Metrópole Digital - IMD
              </p>
            </div>
          </div>

          <hr className="sm:hidden opacity-25" />

          <div className={styles.comunication}>
            <ContactList title={"Contact"} list={contacts} />
            <ContactList title={"Social"} list={social} />
            <ContactList title={"Dev"} list={dev} />
          </div>
        </div>
      </Container>

      <div className={styles.developed}>
        <p>
          Developed by
          <span className="font-bold">{" Severino Carvalho"}</span>
        </p>
      </div>
    </footer>
  );
}
