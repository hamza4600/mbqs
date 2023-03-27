import styled from "styled-components";

export const PreviewImage = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #grid {
        position: relative;
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }

    .item {
        position: relative;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 2px;
        display: flex;
        flex-direction: row;
        align-items: self-start;
        justify-content: center;
        cursor: pointer;
        margin-bottom: 20px;
        background: #fff;
    }
    .item > *:first-child {
        width: 100%;
        color: #000;
        flex: 1;

    }

    img {
        width: 350px;
        object-fit: cover;
        right: 5px;
        top: 20px;
    }

    #txt {
        text-align: center;
    }

    @media (max-width: 768px) {
        .item {
            flex-direction: column;
        }
        img {
            width: 100%;
        }
        
    }
`;