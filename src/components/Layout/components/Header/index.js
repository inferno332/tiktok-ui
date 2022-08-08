import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    });

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <img src={images.logo} alt="Tiktok"></img>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={clsx(styles['search-result'])} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={clsx(styles['search-title'])}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={clsx(styles.actions)}>
                    <Button primary>
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
