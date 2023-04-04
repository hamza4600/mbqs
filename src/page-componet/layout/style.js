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
        min-width: 90%;
    }

    #right {
        position: relative;
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
        width: 100%;
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

    @media (max-width: 768px) {
        .inlineflex {
            h1 {
                font-size: 18px;
            }
        }

        #left {
            min-height: 50vh;
            margin-top: 20px;
            right: 1rem;
        }
        .flex {
            min-height: auto;
        }
        .italic {
            display: none;
        }
    }
`;


export const SequienceContainer = styled.div`

    position: relative;
    display: flex;
    align-items: start;    
    flex-direction: column;
    justify-content: start;
    margin-top: 20px;

    .oip {
        width: 100%;
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

    @media (max-width: 768px) {
        right: 0px;
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
    /* margin: 10px 0px; */
    gap: 10px;
    margin-top: ${props => props.marginTop && props.marginTop};

    // if have  children  width
    & > * {
        flex-basis: ${props => props.full ? '100%' : 'calc(50% - 5px) ! important'};
    }
}
`;
// use in all application
export const BoxTwo = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
    gap: 10px;
    margin-top: ${props => props.marginTop && props.marginTop};

    // if have  children  width
    & > * {
        flex-basis: ${props => props.full ? '57%' : 'calc(50% - 5px) ! important'};
    }
    @media (min-width:1400px) and (max-width:2600px){
        max-width: 75%;
    }
}
`;


// for file input 
export const FileInput = styled.div`
    border: 1px solid #C2BEBE !important;
    background-color: transparent;
    height: ${props => props.large ? '90px' : props.box ? '150px' : '40px' };
    margin-top: ${props => props.large && '10px'}; 
    width :  ${props => props.box ? ' ' : '100%'}; 
    padding: 0px 5px;
    // min-width: 300px !important;
    font-size: 13px;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden !important;

    input {
        position: absolute;
        top: 0%;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
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