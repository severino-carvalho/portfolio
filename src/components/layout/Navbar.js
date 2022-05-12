import { Link } from 'react-router-dom';
import ImageVerified from '../utils/ImageVerified';
import ImageSeverino from '../../img/Severino.jpg';
import styles from './Navbar.module.css';
import Container from './Container';
//import { useState } from 'react';

export default function Navbar({ props }) {
    //const [selectItem, setSelectItem] = useState('home');

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
                    <li key={'home'}>
                        <Link to='/'> Home </Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}