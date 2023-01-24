import styled from "styled-components";

const Anchor = styled.div`
    color : ${(props) => props.color ? props.color : 'white'};
    text-decoration: none;
    font-size: 12px !important;
    font-weight: lighter;
    cursor: pointer;
    padding: 2px 0px;
    `;

export default Anchor;

export const H1 = styled.h1` // in All pages Header
    font-size: 20px;
    font-weight: 200 !important;
    color: ${({ theme }) => theme.pageText};
    margin-bottom: 20px;
    `;