import styled from "styled-components";

const Anchor = styled.div`
    color : ${(props) => props.color ? props.color : 'white'};
    text-decoration: none;
    font-size: 11px !important;
    font-weight: lighter;
    cursor: pointer;
    padding: 2px 0px;
    `;

export default Anchor;

export const H1 = styled.h1` // in All pages Header
    font-size: 20px;
    font-weight: 200 !important;
    font-family: 'Montserrat', sans-serif;
    color: #00243D;
    margin-bottom: 20px;
`;
