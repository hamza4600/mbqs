import styled from "styled-components"

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    text-transform: capitalize;
    list-style: none;
    user-select: none;

    li  {
        margin-bottom: 3px;
        cursor: pointer;
        font-size: 15px;
        display: flex;
        font-weight: lighter;
        flex-direction: column;
        margin-left: 10px;
    }
    i {
        margin-right: 15px;
    }

    span {
        margin-bottom : ${({ width }) => width === 210 ? '5px' : '3px'};
    }

    #drop {
        font-size: 13px;
        font-weight: lighter;
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        margin-left: 45px;
        transition: all 0.3s ease-in-out;
    }

    #drop a {
        margin-bottom: 2px;
        padding: 1px;
    }

    #drop a:hover {
        color: #00BFFF;
    }

    #subdrop {
        margin-left: 15px;
    }

    #subdrop div:hover {
        border-bottom: 0.5px solid #00BFFA;
    }
    `;

export const Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    color: ${({ select }) => select ? '#4CCDF9' : ' '}; 
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out;
    margin-left: 8px;
    
    &:hover {
        color: #00BFFF;
    }
    
    i:hover {
        transition: all 0.1s ease-in-out;
        scale: 1.5;
        color: #00BFFF;
    }
`;

export const SubMenu = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    color: ${(props) => props.color && "silver"};
    font-size: 13px;

    .subico {
        margin-left: 15px !important;
        margin-right: 5px !important;
        transform : ${(props) => props.color ? 'rotate(0deg)' : 'rotate(180deg)'};
    }
    `;