import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import Image from '../Image';
import { Wrapper as PopperWrapper } from '~/components/Popper/';
import AccountPreview from './AccountPreview/AccountPreview';

function AccountItem() {
    const renderResult = (attrs) => (
        <div className={styles.preview} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive placement="bottom" delay={[800, 0]} offset={[-20, -5]} render={renderResult}>
                <div className={styles['account-item']}>
                    <Image
                        className={styles.avatar}
                        alt=""
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/38774e13dadbaddc9b887b7c995071b5~c5_100x100.jpeg?x-expires=1662508800&x-signature=ThaLZ1%2BesMq6cZDpAkJ9vNrYT2o%3D"
                    />
                    <div className={styles['item-info']}>
                        <p className={styles.nickname}>
                            <strong>theanh28</strong>
                            <FontAwesomeIcon className={styles.check} icon={faCheckCircle} />
                        </p>
                        <p className={styles.name}>thế anh</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
