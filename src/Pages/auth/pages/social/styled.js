import styled from "styled-components";

export const Span = styled.div`
  margin-bottom: ${({ width }) => (width === 210 ? "5px" : "3px")};
`;
export const BoxTwo=styled.div`
  
`
export const IconsContainer = styled.div`
  width: 50%;
 

  .toppings-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width:768px){
    .toppings-list{
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  .toppings-list li {
    margin-bottom: 0.5rem;
  }

  .toppings-list-item {
    display: flex;
    padding: 5px;
  }



`;
