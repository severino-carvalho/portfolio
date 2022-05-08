import { Link } from 'react-router-dom';
import ImageVerified from '../utils/ImageVerified';
import ImageSeverino from '../../img/Severino.jpg';
import styles from './Navbar.module.css';

export default function Navbar({ props }) {
    return (
        <nav className={styles.navbar}>
            <div>
                <ImageVerified src={ImageSeverino} />
            </div>

            <div>
                <Link to='/'> Home </Link>
                <Link to='/projects'> Projects </Link>
            </div>
        </nav>
    );
}