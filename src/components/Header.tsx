import styles from './Header.module.css';

import vfeedlogo from '../assets/v-feed-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={vfeedlogo} alt="V Feed Logo" />
        </header>
    );
}