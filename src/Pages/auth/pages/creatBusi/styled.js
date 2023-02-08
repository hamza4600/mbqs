import styled from "styled-components";

export const Grid = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    grid-gap: 8px;
    align-items: start;
    padding: 10px;
    position: relative;

    #sub {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: start;
        gap: 5px;
        align-items: start;
    }

    #subTwo{
        display: flex;
        flex-direction: column;
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

    #show-img {
        position: absolute;
        left: 2px;
        top: 1px;
        z-index: 1;
        width: 100px;
        height: 100px;
        
        img {
            width: 100px;
            height: 100px;
            object-fit: cover;
        }
    }
    
    @media (max-width: 1350px) {
        grid-template-columns: 1fr;
    
        #sub {
            align-items: center;
        }

        #save {
            position: relative;
            left: 110px;
            bottom: 0;
            margin-top: 20px;
        }

        #show-img {
            left: 20rem;
        }
    }

    @media (min-width: 1550px) {
        grid-template-columns: 1fr 1fr .3fr;
    }

`;
export const GridSettings=styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    flex-wrap: wrap;
    /* div {
        min-width: ${props => props.full && "50px"};
    }
    input {
        width: ${props => props.full && "220px"};
    } */
    .dropDownSettings{
    border: 1px solid #ccc;
    margin-left: -250px;
  }
    
    @media (max-width:570px){
            translate: scale(0.7) !important;
            justify-content: flex-start;
            align-items: start;
            width:100%;
    }

`


export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: ${(props) => props.height ? props.height : "100%"};
    width: 100%;
    justify-content: start;
    gap: 20px;
    position: relative;

    div {
        min-width: ${props => props.full && "620px"};
    }
    input {
        width: ${props => props.full && "620px"};
    }
    .btngrp {
        position: relative;
        right: 0;
        left: 35.5rem;
        top: 6px;
    }

    @media (max-width: 1350px) {
        align-items: center;
        justify-content: center;

        .btngrp {
            left: 18rem;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 720px) {
        flex-direction: column;
        
        div {
            min-width: 0;
        }
        input {
            width: 0;
        }
        .btngrp {
            display: none;
        }
    }

`;