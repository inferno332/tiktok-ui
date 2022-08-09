import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    leftIcon,
    rightIcon,
    className,
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

    const classes = clsx(styles.wrapper, className, {
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
            {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            <span className={styles.label}>{children}</span>
            {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
