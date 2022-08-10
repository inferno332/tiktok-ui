import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import { Wrapper as PopperWrapper } from '~/components/Popper/';
import MenuItems from './MenuItems';
import Header from './Header';
import styles from './Menu.module.scss';

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            // Có children trả về true
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
        visible
            interactive
            interactiveDebounce={500}
            placement="bottom-end"
            render={(attrs) => (
                <div className={clsx(styles['menu-list'])} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={styles['menu-popper']}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0,1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
