import React, { forwardRef, useCallback } from "react";
import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";


const Wrapper = styled.div`
    position: relative;
    // if type is addMotion then width is 100%  
    width: ${({ type }) => {
        switch (type) {
            case 'addMotion':
                return '100%';
            default:
                return '300px';
        }
    }};
    background: transparent;
    font-size: 14px;
    font-weight: 200;
    height: 28px;
    text-transform: capitalize;
    line-height: 18px;
    cursor: pointer;

    ul {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #F0F8FF;
        border: 1px solid #ccc;
        border-top: none;
        z-index: 9999;
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
        border : 1px solid ${(props) => (props.isOpen ? '#4CCDF9' : '#ccc')};} 
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

    #addMotion {
        justify-content: space-between;
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
                typeof toggel === 'function' &&
                    isOpen && close()
            }
        }

        const handleFocus = (e) => {
            if (onFocus) {
                typeof toggel === 'function' && toggel()
            }
        }

        const handleSelectItem = useCallback((option, index) => {
            updateValue && typeof updateValue === 'function' && updateValue(option, index)
            onChange && typeof onChange === 'function' && onChange()
            close()
        }, [updateValue, onChange, close])


        const handelType = (type) => {
            switch (type) {
                case 'form':
                    return 'form'
                case 'editData':
                    return 'editData'
                case 'addMotion':
                    return 'addMotion'
                case 'addDataMenu':
                    return 'addDataMenu'
                default:
                    return 'addData'
            }
        }

        return (
            <>
                <Wrapper
                    onBlur={handleBlur}
                    onClick={handleFocus}
                    tabIndex="0"
                    id={`dropdown${id}`}
                    ref={ref}
                    type={type}
                    isOpen={isOpen}
                >
                    <div
                        id={handelType(type)}
                    >
                        <p> {value ? value : placeholder} </p>
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