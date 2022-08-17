import styles from './Button.module.scss';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import clsx from 'clsx';


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

Button.propTypes = {
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    upload: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Button;
