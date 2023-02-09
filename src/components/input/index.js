import { forwardRef, useEffect, useMemo } from "react";
import clsx from "clsx";
import uuId from "Hooks/uuId";
import { AiOutlineEye } from "react-icons/ai";
import styles from "./style.module.css";
import Radio from "./radio";
import { compose } from "redux";
// import validator from "./helper";
import TextArea from "./textarea";

const defaultStyle = {
    border: 'none',
    MozAppearance: 'none',
    outline: 'none',
    textDecoration: 'none',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased'
}

const Input = forwardRef(
    function Input(props, ref) {
        let {
            inputype,
            type,
            id,
            placeholder,
            value,
            onChange,
            autoFocus = false,
            label,
            disabled = false,
            icon,
            onFocus,
            error,
            errorMessage,
            maxLength = 200,
            accept,
            readOnly = false,
        } = props;

        const idx = useMemo(() => { return uuId() }, [])
        id = id || idx;

        useEffect(() => {
            if (autoFocus) {
                document.getElementById(id).focus();
                //  can also used Ref
            }
        }, [id, autoFocus])

        useEffect(() => {

        }, [value])

        const showPassword = () => {
            const password = document.getElementById(id);
            if (password.type === "password") {
                password.type = "text";
            } else {
                password.type = "password";
            }
        };

        return (
            <>
                <div
                    className={clsx({
                        [styles.login]: type === "login",
                        [styles.addDataFile]: type === "addDataFile",

                    })}
                >
                    {label ? <label htmlFor={id || idx}>{label}</label> : null}
                    <input
                        ref={ref}
                        style={defaultStyle}
                        type={inputype}
                        id={id || idx}
                        placeholder={placeholder}
                        value={value || ""}
                        onChange={onChange}
                        autoFocus={autoFocus}
                        className={clsx(styles.inputField, {
                            [styles.login]: type === "model" || type === "model-password",
                            [styles.disable]: disabled,
                            [styles.addData]: type === "addData",
                            [styles.addDataMenu]: type === "addDataMenu",
                            [styles.addDataform]: type === "addDataform",


                        })}
                        onFocusCapture={onFocus}
                        maxLength={maxLength}
                        accept={accept}
                        readOnly={readOnly}
                        
                    />
                    {icon && <i>{icon}</i>}
                    {type === "model-password" && <i className={styles.passIcon} onClick={showPassword}><AiOutlineEye size={22} /></i>}
                    {error && <p className={styles.error}>{errorMessage}</p>}
                </div>
            </>

        )
    }
)


export default compose(
    // validator
)(Input);

Input.Radio = Radio;
Input.TextArea = TextArea;
