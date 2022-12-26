import Navbar from "components/navbar"
import styled from "styled-components"

import logo from "../../assits/Group.svg"
import flag from "../../assits/uk-flag.svg"

import { BiSearch } from "react-icons/bi";
import { SlMenu } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import useHover from "Hooks/useHover";
import Tooltip from "components/tooltip";
import { useState } from "react";
import outisdeClick from "functions/outside";
import Searchbar from "./serachbar";

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

const Ico = styled.i`
    margin: 0 auto;
    color: ${(props) => props.color ? '#00BFFF' : '#C2BEBE'};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex : 1;
    position: relative;

    &:hover{
        color: ${({ theme }) => theme.navhoverIcon};
    }

    @media screen and (max-width: 768px) {
        margin: 0 0.5rem;
        scale: 0.8;
    }

`;

const Icon = (props) => {
    const { hover, Click, icon, color } = props;
    const [ref, istrue] = useHover();
    // console.log(props);
    return (
        <>
            <Ico
                ref={ref}
                onClick={Click}
                color={color}
            >
                {icon}

                <Tooltip
                    content={hover}
                    isShown={istrue}
                    type='navbar'
                />

            </Ico>
        </>
    )
};
// outside of the component
const Icons = outisdeClick(Icon);

const RightSide = () => {

    const [searh, setSearh] = useState(false);
    const [menu, setMenu] = useState(false);
    const [user, setUser] = useState(false);

    const search = () => {
        console.log("search");
        setSearh(!searh);
    };
    const handelMenu = () => {
        console.log("menu");
        setMenu(!menu);
    };
    const handelUser = () => {
        console.log("user");
        setUser(!user);
    }

    return (
        <>
            <Wrapper>
                <Icons
                    hover="Search"
                    icon={<BiSearch size={20} />}
                    Click={search}
                    color={searh}
                    // outSide={() => setSearh(false)}
                />
                <Icons
                    hover="Menu"
                    icon={<SlMenu size={20} />}
                    Click={handelMenu}
                    color={menu}
                    outSide = {() => setMenu(false)}
                />
                <Icons
                    hover="User"
                    icon={<FaRegUser size={20} />}
                    Click={handelUser}
                    color={user}
                    outSide = {() => setUser(false)}
                />
                <Icons
                    hover="Language"
                    icon={<img src={flag} id="flag" alt="flag" />}
                />
            </Wrapper>
            {
                searh && <Searchbar />  
            }
        </>
    )
}

const PageNavbar = (props) => {
    return (
        <>
            <Navbar
                blure = {props.blure || false}
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
// start next 
export default PageNavbar