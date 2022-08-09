import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Button({
    primary = false,
    outline = false,
    upload = false,
    disabled = false,
    rounded = false,

    small = false,
    large = false,

    to,
    href,

    children,
    ...passProps
}) {
    let Comp = 'button';
    const props = { ...passProps };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = clsx(styles.wrapper, {
        [styles.primary]: primary,
        [styles.outline]: outline,
        [styles.small]: small,
        [styles.large]: large,
        [styles.upload]: upload,
        [styles.disabled]: disabled,
        [styles.rounded]: rounded,
    });
    return (
        <Comp className={classes} {...props}>
            {upload && <FontAwesomeIcon style={{marginRight: '8px'}} icon={faPlus}></FontAwesomeIcon>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
