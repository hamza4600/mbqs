import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr
    }

    #left {
        background-color: #DDE5EC;
        flex: 1;
        display: flex;
        height: 94vh;
    }

    #right {
        display: flex;
        flex: 1;
        height: 94vh;
        background-color: #F0F8FF;
        font-family: 'Poppins', sans-serif;
        font-size: 14px; 
        font-weight: 400;
        line-height: 17px;
    }

    .margin {
        margin-top: 20px;
        margin-right: 40px;
        width: 100%;
    }

    .inlineflex {
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        height: 40px;
        align-items: start;
    }

    .inlineflex img {
        width: 30px;
    }

    .inline {
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        gap: 20px;
    }
`;