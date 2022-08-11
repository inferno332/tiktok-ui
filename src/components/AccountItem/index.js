import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={styles.wrapper}>
            <Image className={styles.avatar} src={data.avatar} alt={data.full_name}></Image>
            <div className={styles.info}>
                <h4 className={styles.name}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={styles.check} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={styles.username}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
