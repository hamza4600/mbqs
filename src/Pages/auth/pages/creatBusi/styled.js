import styled from "styled-components";

export const Grid = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    grid-gap: 8px;
    align-items: center;
    padding: 10px;
    position: relative;

    h1 {
        font-size: 20px;
        font-weight: 200;
        font-family: 'Montserrat', sans-serif;
        color: #00243D;
        margin-bottom: 20px;
    }

    #sub {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: start;
        gap: 5px;
        align-items: start;
    }

    #save {
        position: absolute;
        right: 10rem;
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

    @media (min-width: 1550px) {
        grid-template-columns: 1fr 1fr .3fr;
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

    @media (max-width: 720px) {
        flex-direction: column;
        
        div {
            min-width: 0;
        }
        input {
            width: 0;
        }
    }

    `;