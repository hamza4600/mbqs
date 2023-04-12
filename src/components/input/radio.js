import React, { forwardRef, memo, useMemo } from "react";
import styled from "styled-components";
import clsx from "clsx";
import styles from './style.module.css';
// import { BsSquare, BsCheck2Square } from "react-icons/bs";

// Props for the check Box
const Check = styled.input`
   {
    -webkit-appearance: ${(props) => (props.rounded ? " " : "none")};
    -moz-appearance: ${(props) => (props.rounded ? " " : "none")};
    appearance: ${(props) => (props.rounded ? " " : "none")};
    display: inline-block;
    position: relative;
    width: 15px;
    height: 15px;
    background: #f0f8ff;
    border: 2px solid #b0c4de;
    cursor: pointer;
    margin-right: 0.5em;
    border-radius: ${(props) => (props.br ? props.br : "0")};
    background: none;
}

  :checked {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23fff' d='M6.3 11.7L1.6 7 0 8.6l6.3 6.3L16 4.6 14.4 3z'/%3E%3C/svg%3E");
    // use BsCheck2Square as a check icon
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-position-x: 2px;
    background-position-y: -2px;
    z-index: 1;
    border: 1px solid ${(props) => (props.bg ? props.bg : "#a1adb9")};
  }

  :focus {
    outline: none;
    border: 1px solid #a1adb9;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;


const Radio = memo(
    forwardRef(function (props, ref) {
        const {
            rounded = false,
            id,
            value,
            onChange,
            onBlur,
            hasError,
            disabled,
            label,
            errorMessage,
            br,
            bg,
            style,
            className,
            typePage,
        } = props;

        const typeOf = useMemo(() => {
            if (typePage === "layout") {
                return {
                    bg: "#0070BB",
                    br: "50%",
                    color: "#6082B6"
                }
            }
            return null;
        }, [typePage])

        return (
            <div style={{ display: "inline-flex", alignItems: "center" }}
                className={clsx(className,
                    { [styles.Checkbox]: typePage === "login" }
                )}

            >
                <Check
                    ref={ref}
                    br={br || typeOf?.br}
                    bg={bg || typeOf?.bg}
                    rounded={rounded}
                    id={id}
                    type="checkbox"
                    value={value}
                    // checked={checked}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    style={style}
                    // {...props}
                />

                <label style={{ color: typeOf?.color || "inherit" }} htmlFor={id}>{label}</label>
                {hasError && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
        );
    }));

export default Radio;


