import styled from "styled-components"
export const GridDetails = styled.div`
   display: grid;
   grid-template-columns: repeat(2,1fr);
   .both{
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    width: 85%;
   }
   @media (max-width:768px){
    .both{
        flex-direction: column;
    }
   }
   .left-sideBar{
    padding-top: 10px;
   }
   .top{
    padding-top: 30px;
   }
  
   @media (max-width:768px){
    grid-template-columns: 1fr;
   }
   @media (min-width:1500px) and (max-width:2500px){
    .both{
        width: 60%;
    }
    
    .extraClass{
        width: 60%;
    }

   }
`;
export const DetailsWrapper = styled.div`
   display: flex;
   justify-content: start;
   align-items: center;
`;

export const BoxDetails = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 6px;
    gap: 10px;

    // if have  children  width
    & > * {
        flex-basis: ${props => props.full ? '83%' : 'calc(50% - 5px) ! important'};
    }
    @media (min-width:1300px) and (max-width:2500px){
        /* border: 2px solid yellow; */
        & > * {
        flex-basis: ${props => props.full ? '55%' : 'calc(50% - 5px) ! important'};
    }
    width: 75%;
    }

}

`;