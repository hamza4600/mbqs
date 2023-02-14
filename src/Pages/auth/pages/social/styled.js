import styled from "styled-components";

export const Span = styled.div`
  margin-bottom: ${({ width }) => (width === 210 ? "5px" : "3px")};
`;
export const IconsContainer = styled.div`
  width: 50%;
  .toppings-list {
    display: flex;
  }

  .toppings-list li {
    margin-bottom: 0.5rem;
  }

  .toppings-list-item {
    display: flex;
    padding: 5px;
  }



`;
