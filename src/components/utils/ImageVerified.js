import { MdVerified } from 'react-icons/md';
import styles from './ImageVerified.module.css';

export default function ImageVerified({ src, alt }) {
    return (
        <div className={styles.imageVerified}>
            <img src={src} alt={alt || 'null'} />
            <MdVerified />
        </div>
    );
}