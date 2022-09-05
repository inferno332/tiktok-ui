import clsx from 'clsx';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { FollowingIcon, HomeIcon, LiveIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

function Sidebar() {
    return (
        <aside className={clsx(styles.wrapper)}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
            <SuggestedAccounts label='Suggested Accounts'/>
            <SuggestedAccounts label='Following Accounts'/>
        </aside>
    );
}

export default Sidebar;
