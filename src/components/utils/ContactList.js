import styles from "./ContactList.module.css";

export default function ContactList({ title, list }) {
  return (
    <div className={styles.infoList}>
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className={styles.list_contact}>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <a
                className={styles.link_contact}
                href={item.href}
                target={item.target}
                rel={"noreferrer"}
                title={item.title}
              >
                <span className="icon_contact">{item.icon}</span>{" "}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
