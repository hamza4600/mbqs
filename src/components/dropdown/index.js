import React, { forwardRef } from "react";
import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";


const Wrapper = styled.div`
    position: relative;
    width: 300px;
    background: transparent;
    font-size: 14px;
    height: 28px;
    text-transform: capitalize;
    color : #00243D;
    line-height: 18px;
    cursor: pointer;

    ul {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #F0F8FF;
        border: 1px solid #ccc;
        z-index: 1;
    }

    li {
        padding: ${({ type }) => {
        switch (type) {
            case 'form':
                return '5px';
            case 'addData':
                return '0 5px';
            default:
                return '0 5px';
        }
    }};
        cursor: pointer;
        &:hover {
            background: #204D70;
            color: #fff;
        }
    }

    div {
        padding: 0px 5px;
        display: flex;
        align-items: center;
        justify-content: start;
        height: 100%;
        border: 1px solid #ccc;
    }

    #form {
        flex-direction: row-reverse !important;
        justify-content: start !important;
        border: none !important;
    }

    #down_addData {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-40%);
    }

`;

const option = [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' },
    { id: 4, name: 'Four' }
];

const Dropdown = forwardRef(
    function Dropdown(props, ref) {
        const {
            options = option,
            placeholder = "Select an option",
            type = "addData",
            onBlur = true,
            onFocus = true,
            icon = <BsChevronDown size={16} />,
            toggel,
            isOpen,
            close,
            onChange,
            value,
            updateValue,
            id = ""
        } = props;

        const handleBlur = (e) => {
            if (onBlur) {
                close()
            }
        }

        const handleFocus = (e) => {
            if (onFocus) {
                toggel();
            }
        }

        const handleSelectItem = (option, index) => {
            updateValue && typeof updateValue === 'function' && updateValue(option, index)
            onChange && typeof onChange === 'function' && onChange()
            close()
        }

        const handelType = (type) => {
            switch (type) {
                case 'form':
                    return 'form'
                case 'editData':
                    return 'editData'
                default:
                    return 'addData'
            }
        }


        return (
            <>
                <Wrapper
                    onBlur={handleBlur}
                    // onFocus={handleFocus}
                    onClick={handleFocus}
                    tabIndex="0"
                    id={`dropdown${id}`}
                    ref={ref}
                    type={type}
                >
                    <div
                        id={handelType(type)}
                    >
                        <p> {value ? value.name : placeholder} </p>
                        <i
                            id={`down_${handelType(type)}`}
                        >
                            {icon && icon}</i>
                    </div>
                    {
                        isOpen && (
                            <ul>
                                {options.map((option, index) => (
                                    <li key={option.id || Math.random()}
                                        onClick={() => handleSelectItem(option, index)}
                                    >
                                        {option.name}
                                    </li>
                                ))}
                            </ul>
                        )
                    }

                </Wrapper>
            </>
        )
    }
)

export default Dropdown;