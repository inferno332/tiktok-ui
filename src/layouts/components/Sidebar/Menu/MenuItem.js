import clsx from 'clsx';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function MenuItem({ title, to, icon }) {
    return (
        <NavLink to={to} className={(nav) => clsx(styles['menu-items'], { [styles.active]: nav.isActive })}>
            {icon}
            <span className={styles.title}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default MenuItem;
