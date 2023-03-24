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

    @media (max-width: 768px) {
        #inline {
            #addData {
                display: none;
            }
        }
    }
    @media (max-width: 868px) {
        #inline {
            #addData {
                width: 170px;
            }
        }
    }
`;


export const Left = styled.div`

    #search {
        width: 250px ;
        max-width: 250px !important;
        height: 28px !important;
        border: 1px solid #ccc !important;
        outline: none !important;
        padding: 0 10px !important;
        background: #F0F8FF !important;
        font-size: 14px !important;
        font-weight: 200 !important;
    }

    #search:focus {
        border: 1px solid #00BFFF !important;
    }

    #dropdown {
        width: 140px !important;
    }

    #dropdown svg {
        margin-top: 5px;
        padding-left: 2px;
    }

    #dropdown p {
        margin-left: 8px;
    }
    
    #dropdownshare {
        width: 140px !important;
    }

    #dropdownshare svg {
        margin-top: 5px;
        padding-left: 2px;
    }
    #dropdownshare p {
        margin-left: 15px;
    }

    @media (max-width: 868px) {
        #search {
            display: none;
        }
        #dropdown {
            width: unset !important;
        }
        #dropdownshare {
            width: unset !important;
        }
    }
   
`;

export const Right = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 8rem;
    gap: 20px;
    margin-right: 20px;

    #dropdown {
        width: 80px !important;
    }

    #dropdown p {
        margin-left: 8px;
    }

    i {
        margin-top: 5px;
        cursor: pointer;
    }

    @media (max-width: 868px) {
        display: none;
    }

`;