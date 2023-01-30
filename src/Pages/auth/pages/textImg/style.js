import styled from "styled-components";

export const TextWrapper = styled.div`

    margin-bottom: 10px;

    #details {
        min-height: 150px;
        width: 100%;
        border: 1px solid #C2BEBE !important;
        background-color: transparent;
        padding: 0px 5px;
        min-width: 300px !important;
        font-size: 13px;
        resize: none;
    }
`;
// use in all application
export const Box = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    gap: 10px;

    // if have 2 children  have 50% width
    & > * {
        flex-basis: calc(50% - 5px) !important;
    }

    if have 1 children  have 100% width
    & > *:first-child {
        flex-basis: 100%;
    }


`;