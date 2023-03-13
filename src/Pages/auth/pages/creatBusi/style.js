import styled from "styled-components";

export const ReferWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
    width: 100%;
    margin-bottom: 1rem;

    input {
        color: inherit;
        border: 1px solid #C2BEBE !important;
        background-color: transparent;
        height: 28px;
        padding: 0px 5px;
        text-transform: capitalize;
        font-size: 13px;
        width: 100%;

        &:focus {
            border: 1px solid #80C1F9 !important;
            outline: none;
        }

        &::placeholder {
            color: #B0C4DE;
            letter-spacing: 0.5px;
            font-weight: lighter;
        }

    }
`;

// Preview Image 
export const PreviewImage = styled.div`

    .img-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.5rem;
        width: 100%;
        margin-bottom: 1rem;
    }

    img {
        max-width: 150px;
        max-height: 150px;
        object-fit: cover;
    }
`;