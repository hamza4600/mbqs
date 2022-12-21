import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%;
    grid-gap: 8px;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        align-items: center;
    }
    `;

export const Lwrap = styled.div`
        margin: 0 auto;
        `;

export const Rwrap = styled.div`
    width: 300px;
    position: relative;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 20px;
    }

`;

export const Item = styled.div`
    text-transform: capitalize;
    font-size: 14px;

    &:hover {
        cursor: pointer;
        color: #fff;
        background: #1b6ca8;
    }
    `;



export const LoginModelWrapper = styled.div`
    
    #row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        width: 100%;
    }
    `;