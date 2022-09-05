import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import Image from '../Image';
import { Wrapper as PopperWrapper } from '~/components/Popper/';
import AccountPreview from './AccountPreview/AccountPreview';

function AccountItem({ data }) {
    const renderResult = (attrs) => (
        <div className={styles.preview} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview data={data} />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive placement="bottom" delay={[800, 0]} offset={[-20, -5]} render={renderResult}>
                <div className={styles['account-item']}>
                    <Image className={styles.avatar} alt={data.nickname} src={data.avatar} />
                    <div className={styles['item-info']}>
                        <p className={styles.nickname}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={styles.check} icon={faCheckCircle} />}
                        </p>
                        <p className={styles.name}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
