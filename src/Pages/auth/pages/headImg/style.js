import styled from "styled-components";

export const FileContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    height : ${props => props.height ? props.height : '90px'};
    width: 100%;
    border: 1px solid #C8CACB;
    border-radius: 2px;
    margin-bottom: 10px;
    margin-top: 10px;
    `;

export const PrevieContainer = styled.div`

    padding: 0px 14px 0px 0px;
    height: 500px;

    iframe {
        width: 300px;
        height: 300px;
    }
`;
