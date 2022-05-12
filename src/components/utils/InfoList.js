import styles from './InfoList.module.css';

export default function InfoList({ title, list }) {
    return (
        <div className={styles.infoList}>
            <h3>{title}</h3>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={styles[item.class]} href={item.href}
                                    target={item.target} rel={'noreferrer'} title={item.title}>
                                    {item.icon} <span>{item.text}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}