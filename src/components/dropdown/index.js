import React, { forwardRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    width: 300px;
    background: #fff;
`;

const Dropdown = forwardRef(
    function Dropdown(props, ref) {
        const {
            options = ['One', 'two', 'three'],
            placeholder = "Select an option",
            type = "addData",
            onBlur = true,
            onFocus = true,
            icon,
            selectItem,
            selected
        } = props;
        console.log(selected, '====');
        const [isToggeled, setIsToggeled] = React.useState(false);

        const handleBlur = (e) => {
            if (onBlur) {
                setIsToggeled(false);
            }
        }

        const handleFocus = (e) => {
            if (onFocus) {
                setIsToggeled(true);
            }
        }

        const handleSelectItem = (option, index) => {
            console.log(option, index);
            selectItem(option, index);
            setIsToggeled(false);
        }

        return (
            <>
                <Wrapper
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    tabIndex="0"
                    id="dropdown"
                >
                    <div>
                        {selected ? selected : placeholder}
                        <span>▼</span>
                        <i>{icon && icon}</i>
                    </div>
                    {
                        type === "addData" && isToggeled && (
                            <ul>
                                {options.map((option, index) => (
                                    <li key={index || Math.random()}
                                        onClick={() => handleSelectItem(option, index)}
                                    >
                                        {option}
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