import styled from "styled-components";

export const PreviewImage = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #grid {
        position: relative;
        margin-top: 20px;
        display: grid;
        grid-gap: 2px;
        width: 100%;
        background-color: #fff;    
        height: 250px;
    }

    img {
        position: absolute;
        width: 350px;
        object-fit: cover;
        right: 5px;
    }

`;