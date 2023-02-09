import styled from "styled-components";

export const GridHAF = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    .rightSide{
        padding-left: 7vw;
    }
    .leftSide{
        /* padding-right: 10px; */
        padding-right:10px ;
    }
`;
export const WrapperHAF = styled.div`
    /* display: flex;
    flex-direction: row;
    height: ${(props) => props.height ? props.height : "100%"};
    
    justify-content: start;
    gap: 5px;
    border: 1px solid blue;
    position: relative;

    align-items: center; */
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 10px;
    margin: 8px 0px;
    
`;