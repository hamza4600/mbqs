import clsx from "clsx";
import uuId from "Hooks/uuId";
import styles from './style.module.css';

import { memo, forwardRef, useMemo } from "react";

const DefaultStyle = {
    display: "inline-flex",
    alignItems: "center",
    outline: "none",
    MozAppearance: "none",
    overFlow: "hidden",
}

const TextArea = memo(forwardRef(
    function TextArea(props, ref) {
        const {
            value,
            onChange,
            onBlur,
            hasError,
            errorMessage,
            placeholder,
            required,
            autoFocus,
            autoComplete = "on",
            disabled,
            readOnly,
            spellCheck = true,
            icon,
            type,
            styleType,
            id,
            maxLength = 500,
        } = props;

        const IdTA = useMemo(() => uuId(), []);

        return (
            <>
                <div
                    className={clsx(
                        styleType === "login" && styles.loginArea,
                    )}
                >
                    <textarea
                        ref={ref}
                        style={DefaultStyle}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        required={required}
                        autoFocus={autoFocus}
                        autoComplete={autoComplete}
                        disabled={disabled}
                        readOnly={readOnly}
                        spellCheck={spellCheck}
                        type={type}
                        arial-label={placeholder}
                        id={id || IdTA}
                        className={clsx(
                            styleType === "login" && styles.textArealogin,
                            styleType === "noramal" && styles.textAreaNormal,
                            styleType === "addData" && styles.textAreaAddData,
                        )}
                        maxLength={maxLength}
                    />
                    {icon && <span id={id || IdTA} className="icon">{icon}</span>}
                    {hasError && <span id={id || IdTA} className="error">{errorMessage}</span>}
                </div>
            </>
        )
    }
))

export default TextArea;
