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
    
    color: #C2BEBE;
    font-size: 12px;
    #row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
        width: 90%;
        font-size: 10px;
    }

    @media (max-width: 768px) {
        #row {
            width: 90%;
        }
    }
`;

export const RegesterWrapper = styled.div`

    font-size: 12px !important;

    input {
        margin: 5px 0 !important;
    }

    @media (max-width: 768px) {
        margin-top: -50px;
    }
`;