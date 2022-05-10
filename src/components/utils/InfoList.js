import styles from './InfoList.module.css';

export default function InfoList({ title, list }) {
    return (
        <div className={styles.infoList}>
            <h2>{title}</h2>
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