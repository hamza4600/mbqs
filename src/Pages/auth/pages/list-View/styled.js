import styled from "styled-components";

export const Container = styled.div`

    font-weight: 200 !important;

    #inline {
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
        padding: 0 30px 0 0;
    }

    #left {
        display: inline-flex;
        justify-content: space-between;
        gap: 20px;
    }

    #inline-head {
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 30px 0 0;    
        margin-top: 20px;
    }
`;


export const Left = styled.div`

    #search {
        width: 250px !important;
        max-width: 250px !important;
        height: 28px !important;
        border: 1px solid #ccc !important;
        outline: none !important;
        padding: 0 10px !important;
        background: #F0F8FF !important;
    }

    #dropdown {
        width: 140px !important;

    }

`;

export const Right = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 8rem;
    gap: 20px;

    #dropdown {
        width: 80px !important;
    }

    i {
        margin-top: 5px;
    }
`;