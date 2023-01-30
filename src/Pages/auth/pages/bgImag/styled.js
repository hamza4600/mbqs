import styled from "styled-components";

export const FileInput = styled.div`
    border: 1px solid #C2BEBE !important;
    background-color: transparent;
    height: 40px;
    width: 100%;   
    padding: 0px 5px;
    min-width: 300px !important;
    font-size: 13px;
    margin-bottom: 10px;

    input {
        display: none;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        cursor: pointer;
        text-align: center;
        line-height: 280px;
    }

`;


export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-gap: 10px;

    img {
        width: 120px;
        height: auto;
        object-fit: contain;        
    }

`;

