import { forwardRef, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import uuId from "Hooks/uuId";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
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
            errorMessage = "Please type in the correct credentials",
            maxLength = 200,
            accept,
            readOnly = false,
        } = props;

        const idx = useMemo(() => { return uuId() }, [])
        id = id || idx;
        
        const [passIcon , setPassIcon] = useState(false);

        useEffect(() => {
            if (autoFocus) {
                document.getElementById(id).focus();
                //  can also used Ref
            }
        }, [id, autoFocus])

        const showPassword = () => {
            const password = document.getElementById(id);
            if (password.type === "password") {
                password.type = "text";
                setPassIcon(true);
            } else {
                password.type = "password";
                setPassIcon(false);
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
                            [styles.addDataMenu]: type === "addDataMenu",
                            [styles.addDataform]: type === "addDataform",
                            [styles.addDataDetails]: type === "addDataDetails",
                            [styles.addDataSmall]: type === "addDataSmall",


                        })}
                        onFocusCapture={onFocus}
                        maxLength={maxLength}
                        accept={accept}
                        readOnly={readOnly}  
                    />
                    {icon && <i>{icon}</i>}
                    {type === "model-password" && (
                        passIcon ? 
                        <i className={styles.passIcon} onClick={showPassword}><AiOutlineEye size={22} /></i> :
                        <i className={styles.passIcon} onClick={showPassword}><AiOutlineEyeInvisible size={22} /></i> 
                    
                    )}
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
