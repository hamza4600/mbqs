import styled from "styled-components";

const Anchor = styled.a`
    color : ${(props) => props.color ? props.color : null};
    text-decoration: none;
    font-size: 14px;
    font-weight: lighter;
    cursor: pointer;
    `;

export default Anchor;
