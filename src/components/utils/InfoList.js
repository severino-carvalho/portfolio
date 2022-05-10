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
                                {
                                    item
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}