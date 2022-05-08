import { Link } from 'react-router-dom';
import ImageVerified from '../utils/ImageVerified';
import ImageSeverino from '../../img/Severino.jpg';
import styles from './Navbar.module.css';
import Container from './Container';

export default function Navbar({ props }) {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.logo}>
                    <div>
                        <ImageVerified src={ImageSeverino} />
                    </div>
                    <div>
                        <h2>Severino Carvalho</h2>
                    </div>
                </div>

                <ul>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='/contacts'> Contacts </Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}