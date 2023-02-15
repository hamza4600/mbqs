import styled from "styled-components";

export const GridHAF = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    .rightSide{
        padding-left: 7vw;
    }
    .leftSide{
        padding-right:10px;
    }
    @media (max-width:768px){
        .leftSide{
            margin-left: 40px;
        }
    }
    @media (max-width:1200px){
        grid-template-columns: 1fr;
        margin: 0 auto;
    }
    @media (max-width:2500px){
        .rightSide{
            width: 50%;
        }
        .leftSide{
            width: 50%;
            margin-right: 30px;
        }
    }
   
`;

export const WrapperHAF = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 5px;
    margin: 4px 0px;
    @media  (max-width:768px){
        grid-template-columns: 1fr;
        
    }  
`;