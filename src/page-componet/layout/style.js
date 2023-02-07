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

    .flex {
        display: flex;
        flex: 1;
        min-height: 94vh;
        flex-direction: column;
        min-width: 90%;
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
    width: 85%;
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
    position: relative;
    max-width: 85%;
 
    overflow-y: ${props => props.show ? 'auto' : ''};
    min-height: ${props => props.show ? '400px' : ' '} !important;
    max-height: ${props => props.show ? '400px' : ' '} !important;
    transition: all 0.5s ease-in-out;
    padding : 0px 6px 0px 0px;

    &::-webkit-scrollbar {
        width: 5px;
    }

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

    & > div:nth-child(2) {
        margin-right: 10px !important;
    }

`;

// use in all application
export const Box = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    gap: 10px;
    margin-top: ${props => props.marginTop && props.marginTop};

    // if have  children  width
    & > * {
        flex-basis: ${props => props.full ? '100%' : 'calc(50% - 5px) ! important'};
    }

}

`;

// for file input 
export const FileInput = styled.div`
    border: 1px solid #C2BEBE !important;
    background-color: transparent;
    height: ${props => props.large ? '90px' : '40px'};
    margin-top: ${props => props.large && '10px'}; 
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