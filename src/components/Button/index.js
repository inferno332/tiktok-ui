import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

function Button({ primary = false, outline = false, small = false, large = false, to, href, children, ...passProps }) {
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
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
