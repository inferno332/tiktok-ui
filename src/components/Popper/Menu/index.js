import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import { Wrapper as PopperWrapper } from '~/components/Popper/';
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            interactiveDebounce={500}
            placement="bottom-end"
            render={(attrs) => (
                <div className={clsx(styles['menu-list'])} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={styles['menu-popper']}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
