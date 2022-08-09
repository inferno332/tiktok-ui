import styles from './Menu.module.scss';
import Button from '~/components/Button';

function MenuItems({ data, onClick }) {
    return (
        <Button onClick={onClick} className={styles['menu-item']} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
