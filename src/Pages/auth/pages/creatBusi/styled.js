import styled from "styled-components";

export const Grid = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%;
    flex: 1;
    grid-gap: 8px;
    align-items: center;
    padding: 10px;
    // overflow: hidden;
    position: relative;

    h1 {
        font-size: 20px;
        font-weight: 400;
    }

    #sub {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: start;
        gap: 10px;
        align-items: start;
    }

    #save {
        background-color: #003153 !important;
        color: #fff !important;
        font-weight: 500 !important;
        padding: 10px 20px !important;
        position: absolute;
        right: 20rem;
        bottom: -18rem;
        width: 200px;
    }
    
    @media (max-width: 1350px) {
        grid-template-columns: 1fr;
    
        #sub {
            align-items: center;
        }

        #save {
            position: relative;
            right: 0;
            bottom: 0;
        }
    }

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: start;
    gap: 20px;

    div {
        min-width: ${props => props.full && "620px"};
    }
    input {
        width: ${props => props.full && "620px"};
    }

    @media (max-width: 1350px) {
        align-items: center;
        justify-content: center;
    }

    `;