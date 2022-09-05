import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

function AccountPreview({ data }) {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <img src={data.avatar} alt={data.nickname} className={styles.avatar}></img>
                <Button className={styles.btn} primary>
                    Follow
                </Button>
            </header>
            <div className={styles.body}>
                <p className={styles.nickname}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={styles.check} icon={faCheckCircle} />}
                </p>
                <p className={styles.name}>{`${data.first_name} ${data.last_name}`}</p>
                <p className={styles['count-info']}>
                    <strong className={styles.number}>{data.followers_count} </strong>
                    <span className={styles.label}>Followers</span>

                    <strong className={styles.number}>{data.likes_count} </strong>
                    <span className={styles.label}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
