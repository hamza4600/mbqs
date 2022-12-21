import React, { forwardRef, memo, useMemo } from "react";
import styled from "styled-components";
import clsx from "clsx";
import styles from './style.module.css';

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
  }

  :checked {
    background: ${(props) => (props.bg ? props.bg : "#275482")};
    border: 1px solid ${(props) => (props.bg ? props.bg : "#275482")};
  }

  :focus {
    outline: none;
    border: 1px solid #275482;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;


const Radio = memo(
    forwardRef(function (props, ref) {
        const {
            rounded,
            id,
            value,
            checked,
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
                    checked={checked}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    style={style}
                    {...props}
                />
                <label style={{ color: typeOf?.color || "inherit" }} htmlFor={id}>{label}</label>
                {hasError && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
        );
    }));

export default Radio;


