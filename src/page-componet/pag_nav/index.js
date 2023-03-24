import React, { Suspense, useState } from "react";

import Navbar from "components/navbar"
import styled from "styled-components"
import useHover from "Hooks/useHover";

import logo from "../../assits/MLogo.png"
import flag from "../../assits/uk-flag.svg"
import { BiSearch } from "react-icons/bi";
import { SlMenu } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";

import Tooltip from "components/tooltip";
import Searchbar from "./serachbar";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggelSidebar } from "store/sidebar";
// HOC
import outisdeClick from "functions/outside";
import Spinner from "components/spinner/spinner";

const UserMenu = React.lazy(() => import("./usermenu"));

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
    color: ${(props) => props.color ? '#4CCDF9' : '#C8CACB'};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex : 1;
    position: relative;

    svg:hover{
        color: ${({ theme }) => theme.navhoverIcon};
        scale: 1.5;
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        margin: 0 0.5rem;
        scale: 0.8;
    }

`;

const userData = {
    name: "John Doe",
    time: "12:00 PM",
    avatar: "https://avatars.githubusercontent.com/u/112898030?v=4",
    logout: "Logout",
    grouplogin: "Sign Up",
    otherUser: [
        {
            id: 1,
            name: "Micheal",
            avatar: "https://avatars.githubusercontent.com/u/78164997?v=4",
            logtime: "12:00 PM"
        },
        {
            id: 2,
            name: "Andrew",
            avatar: "https://avatars.githubusercontent.com/u/78164997?v=4",
            logtime: "10:30 PM"
        }
    ]
}

const Icon = (props) => {
    const { hover, Click, icon, color } = props;
    const [ref, istrue] = useHover();
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
    const [user, setUser] = useState(false);

    const dispatch = useDispatch();
    const state = useSelector(state => state.sidebar)

    const search = () => {
        console.log("search");
        setSearh(!searh);
    };

    const handelMenu = () => {
        dispatch(toggelSidebar())
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
                    outSide={() => setSearh(false)}
                />
                <Icons
                    hover="Menu"
                    icon={<SlMenu size={20} />}
                    Click={handelMenu}
                    color={state?.dongal}
                />
                <Icons
                    hover="User"
                    icon={<FaRegUser size={20} />}
                    Click={handelUser}
                    color={user}
                    outSide={() => setUser(false)}
                />
                <Icons
                    hover="Language"
                    icon={<img src={flag} id="flag" alt="flag" />}
                />
            </Wrapper>
            {
                searh && <Suspense fallback={<Spinner sizeKey="small" color="#fff" isVisable={true}/>}>
                    <Searchbar />
                </Suspense>
            }
            {
                user && <Suspense fallback={<Spinner sizeKey="small" color="#fff" isVisable={true}/>}>
                    <UserMenu data={userData} />
                </Suspense>
            }

        </>
    )
}

const PageNavbar = (props) => {

    return (
        <>
            <Navbar
                blure={props.blure || false}
                Left={
                    <>
                        <a
                            href={!props.blure && "/auth/panel"
                                // route.pathname === "/auth/panel" ? "#" : "/auth/panel"
                            }  // can also pass on base of auth
                        >
                            <img src={logo} alt="logo" />
                        </a>
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