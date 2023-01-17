import styled from "styled-components";

const Anchor = styled.a`
    color : ${(props) => props.color ? props.color : null};
    text-decoration: none;
    font-size: 14px;
    font-weight: lighter;
    cursor: pointer;
    `;

export default Anchor;

export const H1 = styled.h1` // in All pages Header
    font-size: 20px;
    font-weight: 200 !important;
    font-family: 'Montserrat', sans-serif;
    color: #00243D;
    margin-bottom: 20px;
`;
