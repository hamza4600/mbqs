import styled from "styled-components";

export const PreviewWrapper = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    width: 100%;
    position: relative;

    picture {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;

        img {
            width: 350px;
            height:  350px;
            object-fit: cover;
        }
    }

    #box {
        position: relative;
        width: 350px;
        height: 350px;
        background: rgba(255, 255, 255, 0.4);

        h3:first-child {
            bottom: 8px;
        }

        h3:nth-child(2) {
            bottom: 25px;
        }
    }

    #txt {
        position: absolute;
        width: 350px;
        background: rgba(255, 255, 255, 0.4);
        z-index: 1;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 10px;

        #box {
            width: 100%;
        }

        #txt {
            width: 100%;
        }

        picture {
            img {
                width: 100%;
            }
        }
    }

`;