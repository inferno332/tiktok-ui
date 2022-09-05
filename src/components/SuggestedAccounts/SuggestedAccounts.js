import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import * as userService from '~/services/userService';

const PER_PAGE = 5;

function SuggestedAccounts({ label }) {
    const [suggestedAccounts, setSuggestedAccounts] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.getSuggested({ page: 1, perPage: PER_PAGE });
            // console.log(result);
            setSuggestedAccounts((prevUsers) => [...prevUsers, ...result]);
        };
        fetchApi();
    }, []);

    // const handleSeeAll = () => {
    //     setIsSeeAll
    //     if (isSeeAll) {
    //         setPage(page + 1);
    //     } else {
    //     }
    // };

    return (
        <div className={styles.wrapper}>
            <p className={styles.label}>{label}</p>
            {suggestedAccounts.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <p className={styles['more-btn']}>
                See all    
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
