import React, { forwardRef, useEffect } from "react";
import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";


const Wrapper = styled.div`
    position: relative;
    width: 300px;
    background: transparent;
    font-size: 12px;
    height: 28px;
    text-transform: capitalize;
    color : #00243D;
    line-height: 18px;

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
        padding: 0 5px;
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

    #down {
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
            selectItem,
            selected,
            toggel,
            isOpen,
            close,
            onChange
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
            // console.log(option, index);
            selectItem(option, index);
            close()
        }

        // componet should be unmounted
        useEffect(() => {

        }, [onChange])


        return (
            <>
                <Wrapper
                    onBlur={handleBlur}
                    // onFocus={handleFocus}
                    onClick={handleFocus}
                    tabIndex="0"
                    id="dropdown"
                >
                    <div>
                        {selected ? selected.name : placeholder}
                        <i id='down'>{icon && icon}</i>
                    </div>
                    {
                        isOpen && (
                            <ul>
                                {options.map((option, index) => (
                                    <li key={option.id || Math.random()}
                                        onClick={
                                            () => {
                                                handleSelectItem(option, index)
                                                onChange && typeof onChange === 'function' && onChange()
                                            }
                                        }
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