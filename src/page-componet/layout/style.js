import styled from 'styled-components';

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
        padding: 0px 0px 0px 20px; 
        background-color: #DDE5EC;
        position: relative;
    }

    .flex {
        display: flex;
        flex: 1;
        min-height: 94vh;
        flex-direction: column;
    }

    #right {
        background-color: #F0F8FF;
        font-size: 14px; 
        font-weight: 400;
        line-height: 17px;
    }

    .margin {
        margin-top: 20px;
        width: 93%;
    }

    .inlineflex {
        width: 90%;
        display: inline-flex;
        justify-content: space-between;
        height: 40px;
        align-items: start;
    }

    .italic {
        font-style: italic;
        font-size: 10px;
        line-height: 10px;
        color: #00243D;
    }
 
    .line {
        display: inline-flex;
        align-items: center;
    }

    .line > p {
        margin-right: 10px;
    }
`;


export const SequienceContainer = styled.div`

    position: relative;
    display: flex;
    align-items: center;    
    flex-direction: column;
    justify-content: start;
    width: 100%;
    margin-top: 20px;


    .oip {
        width: 80%;
    }

    .oip > .item:last-child {
        border-bottom: 1px solid #B0C4DE;
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 6px 0px;
        border-top: 1px solid #B0C4DE;
    }

    .inner {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
    }
     
    i {
        cursor: pointer;
    }

`;

export const InputContainer = styled.div`
    margin: 0 auto;
    position: relative;
    width: 90%;
`;

export const BtnContainer = styled.div`
 
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0px 14px 0px 0px;
    position: absolute;
    bottom: 10px;
    right: 10px;

    & > div:first-child {
        margin-right: 10px !important;
    }

`;