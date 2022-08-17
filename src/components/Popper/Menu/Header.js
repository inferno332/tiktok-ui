import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';

function Header({ title, onBack }) {
    return (
        <header className={styles.header}>
            <button onClick={onBack} className={styles['back-btn']}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={styles['header-title']}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
