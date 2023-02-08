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
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;        
    @media (max-width:768px){
        display: none;
    }
    `;

export const Rwrap = styled.div`
    width: 300px;
    position: relative;
    margin-left: 20px;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 20px;
        bottom: 6rem;
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

    p{
        cursor: pointer;
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

export const Head  = styled.h1`
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #C2BEBE;

    @media (max-width: 768px) {
        margin-right: 60px;
    }
`;