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
        border: 1px solid #C8CACB;
        color: #C8CACB !important;
        font-size: 18px;
        height: 28px;
        outline: none;
        padding-left: 10px;
        width: 300px;
    }

    input::placeholder {
        color: #C8CACB;
    }

    input:focus {
        border: 1px solid #00BFFF;
    }

    @media screen and (max-width: 768px) {
        right: 0;
        background: #204D70;
        top: 39px;
        width: 100%;

        input {
            position: relative;
            left: 4rem;
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