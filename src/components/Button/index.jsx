import classNames from "classnames";
import styles from "./index.module.scss";

const Button = ({ children, wide, className, ...props }) => {
    const buttonClassnames = classNames(styles.button, className, {
        [styles.wide]: wide
    });

    return (
        <button className={buttonClassnames} {...props}>
            {children}
        </button>
    );
};

export default Button;
