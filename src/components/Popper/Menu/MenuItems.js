import styles from './Menu.module.scss';
import Button from '~/components/Button';

function MenuItems({ data }) {
    return (
        <Button className={styles['menu-item']} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
