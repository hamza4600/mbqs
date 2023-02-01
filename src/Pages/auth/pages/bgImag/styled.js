import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-gap: 10px;

    img {
        width: 120px;
        height: auto;
        object-fit: contain;        
    }

`;

