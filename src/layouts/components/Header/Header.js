import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus, faSignOut } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import config from '~/config/'
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import {
    CoinIcon,
    FeedBackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    MessageIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons';

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedBackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;
    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View Profile',
            to: '/user',
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coins',
            href: 'https://www.tiktok.com/coin?enter_from=web_main_nav&lang=en',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/setting',
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change
                break;
            default:
        }
    };

    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <Link to={config.routes.home} className={styles['logo-link']}>
                    <img src={images.logo} alt="Tiktok"></img>
                </Link>

                <Search />

                <div className={styles.actions}>
                    <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom" delay={200}>
                                <button className={styles['action-btn']}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={200}>
                                <button className={styles['action-btn']}>
                                    <span className={styles['action-inbox']}>13</span>
                                    <InboxIcon width="3.2rem" height="3.2rem" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={styles['user-avatar']}
                                alt="avatar"
                                src="https:/sss/scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/272875390_1776641729207776_1970868125261581740_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lqkk6rmXjjYAX8mBpl9&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_xRLb-BlBTDcNxrVFtTSZZF_vmB3N-RbxT9wSUK3dZ7A&oe=62F822A8"
                            />
                        ) : (
                            <button className={styles['action-menu']}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
