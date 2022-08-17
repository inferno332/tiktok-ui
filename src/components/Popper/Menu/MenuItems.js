import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import clsx from 'clsx';
import Button from '~/components/Button';

function MenuItems({ data, onClick }) {
    const classes = clsx(styles['menu-item'], {
        [styles.separate]: data.separate,
    });
    return (
        <Button onClick={onClick} className={classes} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItems;
