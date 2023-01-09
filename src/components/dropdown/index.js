import React, { forwardRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`

    select {
        width: 300px;
        height: 25px;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 0 10px;
        font-size: 12px;
        color: #333;
        outline: none;
        cursor: pointer;
        transition: all 0.3s ease;
        background-color: transparent;

        &:hover {
            border-color: #999;
        }

        &:focus {
            border-color: #666;
        }

        &:disabled {
            background-color: #eee;
            cursor: not-allowed;
        }
    }

    #option {
        background-color: #F0F8FF;
        font-size: 14px;
        color: #333;
        outline: none;
    }
`;



const Dropdown = forwardRef(
    function Dropdown(props, ref) {
        const {
            options = ['One', 'two', 'three'],
            value,
            onChange,
            placeholder = "Select an option",
            disabled = false
        } = props;

        return (
            <>
                <Wrapper>

                    <select
                        ref={ref}
                        role="button"
                        id="dropdown"
                        data-testid="dropdown"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        onChange={onChange}
                        disabled={disabled}
                    >
                        <option value="" id="option">{placeholder}</option>
                        {options.map((option, index) => (
                            <option
                                tabIndex={0}
                                key={index}
                                value={option}
                                id="option"
                            >
                                {option}
                            </option>
                        ))}

                    </select>

                </Wrapper>
            </>
        )
    }
)

export default Dropdown;
// creat a better version of this snippet!