import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

function SuggestedAccounts({ label }) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.label}>{label}</p>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
            <p className={styles['more-btn']}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
