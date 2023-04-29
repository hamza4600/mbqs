import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    margin-top: 20px;
    width: 100%;
    height: 100%;
    gap: 6rem;
    max-width: 1100px;

    h2 {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 2.5rem;
    }

    #lft {
        flex : 1 1 70%;
        display: flex;
        flex-direction: column;

        & > * {
            margin-bottom: 1rem;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    #rgt {
        flex : 1 1 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & > * {
            margin-bottom: 1rem;
        
            &:last-child {
                margin-bottom: 0;
            }
        }

        img {
            width: 293px;
            height: 295px;
            object-fit: cover;
            border-radius: 50%;
        }

        button {
            margin-left: 1rem;
        }
    }

    #inpbtn {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 1rem;

        input {
            width: 73%;
        }

    }

    #cont {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 0.5rem;

        input {
            width: 35%;
        }

    }

    button {
        padding : 5px 25px;
        background: #D8E6F1;
        border: 1px solid #000000;
        border-radius: 1px;
        text-align: center;
        font-size: 12px;
        line-height: 16px;
        color: #003153;
        cursor: pointer;
        min-width: 180px;
    }

    input {
        border: 0.5px solid #C8CACB;
        padding: 2px;
        padding-left: 6px;
        color: #00243D;
        background: none;
        font-size: 15px;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #B0C4DE;
        }

        &:focus::placeholder {
            color: transparent;
        }
    }


    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 1rem;
        gap: 2rem;
        margin-bottom: 2rem;

        h2 {
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 2rem;
        }
        
        #lft {
            flex : 1 1 100%;
            width: 100%;
        }

        #rgt {
            flex : 1 1 100%;
            width: 100%;

        }

        #inpbtn {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 1rem;
        }

        #cont {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.5rem;
        }

        input {
            min-width: 100%;
        }

    }
`;