import styled from "styled-components";

export const Container = styled.div`

    margin-top: 1rem;

    #head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        flex-direction: row;
    }

    #lef12 {
        display: inline-flex;
        flex-direction: row;
        gap: 1rem;
    }
    // only the first child of the right side table
    #lef12 > div:first-child {
        width: 250px !important;
    }

    #addData {
        width: 250px !important;
    }
`;