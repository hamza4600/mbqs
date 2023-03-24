import { memo, forwardRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

const Button = memo(
    forwardRef(
        function Button(props, ref) {
            const {
                children,
                leftIcon,
                rightIcon,
                isDisabled = false,
                type,
                onClick,
                className,
            } = props;
            return (
                <>
                    <div>
                        <button
                            ref={ref}
                            type={type}
                            disabled={isDisabled}
                            onClickCapture={(e) => { e.preventDefault(); }}
                            className={clsx(styles.button, className, {
                                [styles.disabled]: isDisabled,
                                [styles.model]: type === 'login-model',
                                [styles.addData]: type === 'addData',
                                [styles.usermodel]: type === 'usermodel',
                                [styles.view]: type === 'view',
                                [styles.showicon]: type === 'showicon',
                                [styles.viewedit]: type === 'viewedit',
                            })}
                            onClick={onClick}
                            {...props}
                        >   
                            {(leftIcon) && (
                                <i className={styles.leftIcon}>{leftIcon}</i>
                            )}
                            {children}
                            {(rightIcon) && (
                                <i className={styles.rightIcon}>{rightIcon}</i>
                            )}
                        </button>
                    </div>
                </>
            )
        }
    )
)

export default Button