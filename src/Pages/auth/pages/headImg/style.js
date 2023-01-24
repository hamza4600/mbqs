import styled from "styled-components";

export const Divider = styled.div`

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
        font-weight: 200;
        line-height: 17px;
    }
    
    .inline {
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        // gap: 20px;
    }

    .line {
        display: inline-flex;
        justify-content: space-between;
        width: 10 rem;
    }

    .italic {
        font-style: italic;
    }
    `;

export const InputWrapper = styled.div`

`;

export const PreviewWrapper = styled.div`

`;