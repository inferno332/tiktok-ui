import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';

function AccountItem() {
    return (
        <div className={styles.wrapper}>
            <img
                className={styles.avatar}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/908bbbfa40f82a4cc07b2d0215266997~c5_100x100.jpeg?x-expires=1660021200&x-signature=w6Or0VXFmngvyfVprCgj7Y7fIaY%3D"
                alt=""
            ></img>
            <div className={styles.info}>
                <h4 className={styles.name}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={styles.check} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={styles.username}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
