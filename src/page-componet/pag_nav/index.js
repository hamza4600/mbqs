import Navbar from "components/navbar"
import styled from "styled-components"

import logo from "../../assits/Group.svg"
import flag from "../../assits/uk-flag.svg"

import { BiSearch } from "react-icons/bi";
import { SlMenu } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 12rem;
    max-width: auto;

    #flag{
        width: 32px;
        height: 20px;
    }

    @media screen and (max-width: 768px) {
        min-width: 8rem;
    }

    `;

const Icon = styled.i`
    margin: 0 auto;
    color: ${({ theme }) => theme.navbarIconColor};
    color: #C2BEBE ;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex : 1;

    &:hover{
        color: ${({ theme }) => theme.navbarIconHoverColor};
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        margin: 0 0.5rem;
        scale: 0.8;
    }

`;

const RightSide = () => {
    return (
        <>
            <Wrapper>
                <Icon>
                    <BiSearch size={20}/>
                </Icon>
                <Icon>
                    <SlMenu size={20}/>
                </Icon>
                <Icon>
                    <FaRegUser size={20}/>
                </Icon>
                <Icon>
                    <img src={flag} id="flag" alt="flag" />
                </Icon>
            </Wrapper>
        </>
    )
}

const PageNavbar = () => {
    return (
        <>
            <Navbar
                Left={
                    <>
                        <img src={logo} alt="logo" />
                    </>
                }
                Right={<RightSide />}
            >
            </Navbar>
        </>
    )
}

export default PageNavbar