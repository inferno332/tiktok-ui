import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';

function Header() {
    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <img src={images.logo} alt="Tiktok"></img>
                <div className={clsx(styles.search)}>
                    <input placeholder="Search account and videos"></input>
                    <button className={clsx(styles.clear)}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner} className={clsx(styles.loading)} />
                    <button className={clsx(styles['search-btn'])}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={clsx(styles.actions)}></div>
            </div>
        </header>
    );
}

export default Header;
