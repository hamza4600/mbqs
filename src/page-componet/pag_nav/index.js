import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";

import useHover from "Hooks/useHover";
import Navbar from "components/navbar";

import logo from "../../assits/MLogo.png";
import flag from "../../assits/uk-flag.svg";
import { BiSearch } from "react-icons/bi";
import { SlMenu } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";

import Tooltip from "components/tooltip";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggelSidebar } from "store/sidebar";
// HOC
import outisdeClick from "functions/outside";

import Spinner from "components/spinner/spinner";
import UserMenu from "./usermenu";
import LanguageMenu from "./languagemenu";
import DialogBox from "components/dialog";
import { logoutSuccess } from "store/session";

const Searchbar = React.lazy(() => import("./serachbar"));

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 12rem;
    max-width: auto;

    #flag {
        width: 32px;
        height: 20px;
    }

    @media screen and (max-width: 768px) {
        min-width: 8rem;
    }
`;

const Ico = styled.i`
    margin: 0 auto;
    color: ${(props) => (props.color ? "#4CCDF9" : "#C8CACB")};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex: 1;
    position: relative;
    -webkit-tap-highlight-color: transparent;

    svg:hover {
        color: ${({ theme }) => theme.navhoverIcon};
        scale: 1.5;
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        margin: 0 0.5rem;
        scale: 0.8;
    }
`;

const NavLogo = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    p {
        margin: 0 1.1rem;
        font-size: 23px;
        font-weight: 400;
        color: #fff;
        text-shadow: 0px 4px 4px #151010;
    }
`;

const userData = {
    name: "Sara Svensson",
    time: "12:00 PM",
    avatar: "https://avatars.githubusercontent.com/u/129557364?v=4",
    logout: "Logout",
    grouplogin: "Sign Up",
    otherUser: [
        {
            id: 1,
            name: "Sara Svensson",
            avatar: "https://avatars.githubusercontent.com/u/129557364?v=4",
            logtime: "12:00 PM",
        },
        {
            id: 10,
            name: " Svensson",
            avatar: "https://avatars.githubusercontent.com/u/129557364?v=4",
            logtime: "2:30 PM",
        },
        {
            id: 2,
            name: "Magdalena Strömberg",
            avatar: "https://avatars.githubusercontent.com/u/78164997?v=4",
            logtime: "12:00 PM",
        },
        {
            id: 3,
            name: "Jessica Andersson",
            avatar: "https://avatars.githubusercontent.com/u/78164997?v=4",
            logtime: "10:30 PM",
        },
    ],
};

const Icon = (props) => {
    const { hover, Click, icon, color } = props;
    const [ref, istrue] = useHover();
    return (
        <>
            <Ico
                ref={ref}
                onClick={Click}
                color={color}
                // should be access by tab key
                tabIndex="0"
                onKeyPress={Click}
            >
                {icon}

                <Tooltip content={hover} isShown={istrue} type="navbar" />
            </Ico>
        </>
    );
};
// outside of the component
const Icons = outisdeClick(Icon);

const RightSide = () => {
    const [searh, setSearh] = useState(false);
    const [user, setUser] = useState(false);
    const [lang, setLang] = useState(false);

    // ref for input
    const inputRef = React.useRef(null);
    const userRef = React.useRef(null);


    // using differnt approch for toggle the sea uer and lang
    const [active, setActive] = useState("");
    const [model, setModel] = useState(false);

    const dispatch = useDispatch();
    const state = useSelector((state) => state.sidebar);
    
    const search = () => {
        console.log("search");
        setSearh(!searh);
        setActive("search");
    };

    const handelMenu = () => {
        dispatch(toggelSidebar());
    };

    const handelUser = () => {
        console.log("user");
        setUser(!user);
        setActive("user");
        // get by id
        // if click outside useBox then null the active
    };

    const handelLang = () => {
        console.log("lang");
        setLang(!lang);
        setActive("lang");
    };

    const handelLogout = () => {
        // open modal
        setModel(true);
    };

    const logout = () => {
        // remove the data from redux
        // dispatch(logoutSuccess());
        // close modal post data and redirect to login page
        setModel(false);
        console.log(inputRef.current.value);

    };

    useEffect(() => {
        
        const handelUserModal = (event) => {
            if (userRef.current && !userRef.current.contains(event.target)) {
                setUser(false);
                setActive("");

                // if click outside the user box then set the active to null
            } 
        }
        if (active === "user") {
            // and clcik outside the user box then set the active to null
            console.log(userRef.current);
            document.addEventListener("mousedown", handelUserModal);
        }
        return () => {
            document.removeEventListener("mousedown", handelUserModal);
        };
    },[active])

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
                    // outSide={() => setUser(false)}
                />
                <Icons
                    hover="Language"
                    icon={<img src={flag} id="flag" alt="flag" />}
                    Click={handelLang}
                    color={lang}
                    outSide={() => setLang(false)}
                />
            </Wrapper>
            {searh && (
                <Suspense
                    fallback={
                        <Spinner
                            sizeKey="small"
                            color="#fff"
                            isVisable={true}
                        />
                    }
                >
                    <Searchbar />
                </Suspense>
            )}
            {
                // user && (<>
                //     <UserMenu data={userData} logoutClick={handelLogout} />
                //     </>)
                active === "user" && (
                    <UserMenu ref={userRef}  data={userData} logoutClick={handelLogout} />
                )
            }
            {lang && <LanguageMenu />}

            {model && (
                <>
                    <DialogBox
                        open={model}
                        title="Are You Sure you want to logout ?"
                        onClose={() => setModel(false)}
                        onConfirm={logout}
                        type="logout"
                        conformText= "Confirm"
                        cancelText = 'none'
                        children = {<textarea ref={inputRef} placeholder="Enter Your logout message here" />}
                    />
                </>
            )}
        </>
    );
};

const PageNavbar = (props) => {
    return (
        <>
            <Navbar
                blure={props.blure || false}
                Left={
                    <>
                        <NavLogo
                            href={
                                !props.blure && "/auth/panel"
                            } // can also pass on base of auth

                        >
                            <img src={logo} alt="logo" />
                            <p>Mbiqs</p>
                        </NavLogo>
                    </>
                }
                Right={<RightSide />}
            ></Navbar>
        </>
    );
};
// start next
export default PageNavbar;