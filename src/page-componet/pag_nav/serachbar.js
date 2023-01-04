import { useEffect } from "react";
import styled from "styled-components"

const Wrapper = styled.div`

    position: absolute;
    right: 240px;

    input {
        font-size: 14px !important;
        position: relative;
        width: 450px;
        background-color: #F0F8FF;
        border: 1px solid #555;
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

    }, [autofocus , id])

    return (
        <>
            <Wrapper>
                <input id={id} type="text" placeholder={placeholder} />
            </Wrapper>
        </>
    )
}

export default Searchbar