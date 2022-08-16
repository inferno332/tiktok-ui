import clsx from 'clsx';
import styles from './Sidebar.module.scss';

function Sidebar() {
    return (
        <aside className={clsx(styles.wrapper)}>
            <h2>sidebar</h2>
        </aside>
    );
}

export default Sidebar;
