import styled from "styled-components"
export const WrapperMenu = styled.div`
    display: flex;
    flex-direction: row;
    height: ${(props) => props.height ? props.height : "100%"};
    
    justify-content: start;
    gap: 20px;
    position: relative;

    align-items: center;
    
`;
