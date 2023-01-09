import { useEffect } from "react";
import styled from "styled-components"

const Wrapper = styled.div`

    position: absolute;
    right: 240px;

    input {
        font-size: 14px !important;
        position: relative;
        width: 450px;
        background-color: transparent;
        border: 1px solid #B0C4DE;
        color: #1E1E1E !important;
        font-size: 18px;
        height: 28px;
        outline: none;
        padding-left: 10px;
        width: 300px;
    }

    @media screen and (max-width: 768px) {
        right: 180px;
        
        input {
            width: 220px;
        }
    }

`;
const Searchbar = (props) => {
    const {
        autofocus = true,
        placeholder = "Search",
        id = "searchbar",
    } = props;

    useEffect(() => {
        if (autofocus) {
            document.getElementById(id).focus();
        }

    }, [autofocus, id])

    return (
        <>
            <Wrapper>
                <input
                    id={id}
                    type="text"
                    placeholder={placeholder}
                    max-length= "100"
                />
            </Wrapper>
        </>
    )
}

export default Searchbar