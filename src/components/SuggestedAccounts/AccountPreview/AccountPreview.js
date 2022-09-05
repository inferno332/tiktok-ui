import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

function AccountPreview() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/38774e13dadbaddc9b887b7c995071b5~c5_100x100.jpeg?x-expires=1662508800&x-signature=ThaLZ1%2BesMq6cZDpAkJ9vNrYT2o%3D"
                    alt=""
                    className={styles.avatar}
                ></img>
                <Button className={styles.btn} primary>Follow</Button>
            </header>
            <div className={styles.body}>
                <p className={styles.nickname}>
                    <strong>theanh28</strong>
                    <FontAwesomeIcon className={styles.check} icon={faCheckCircle} />
                </p>
                <p className={styles.name}>thế anh</p>
                <p className={styles['count-info']}>
                    <strong className={styles.number}>9.9M </strong>
                    <span className={styles.label}>Followers</span>
                    
                    <strong className={styles.number}>100M </strong>
                    <span className={styles.label}>Likes</span>

                    
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
