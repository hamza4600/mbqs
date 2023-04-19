import React, { Suspense, useState } from "react";
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
import { resertModel } from "store/loginModel";
// HOC
import outisdeClick from "functions/outside";

import Spinner from "components/spinner/spinner";
import UserMenu from "./usermenu";
import LanguageMenu from "./languagemenu";
import DialogBox from "components/dialog";

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

    // using differnt approch for toggle the sea uer and lang
    const [active, setActive] = useState("");
    const [model, setModel] = useState(false);
    
    // array on which outside should not work

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
    };

    const handelLang = () => {
        console.log("lang");
        setLang(!lang);
        setActive("lang");
    };

    const handelLogout = () => {
        console.log("logout");
        // show Modal
        setModel(true);
        // if conform then LogOut
    };

    const logout = () => {
        // remove the data from redux
        dispatch(resertModel());
    };

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
                    <UserMenu data={userData} logoutClick={handelLogout} />
                )
            }
            {lang && <LanguageMenu />}

            {model && (
                <>
                    <DialogBox
                        open={model}
                        title="Are You Sure you want to logout ? ?"
                        onClose={logout}
                        onConfirm={() => setModel(false)}
                        type="logout"
                        conformText= "No"
                        cancelText="Yes"
                        closeOutside = {false}
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
                        <a
                            href={
                                !props.blure && "/auth/panel"
                                // route.pathname === "/auth/panel" ? "#" : "/auth/panel"
                            } // can also pass on base of auth
                        >
                            <img src={logo} alt="logo" />
                        </a>
                    </>
                }
                Right={<RightSide />}
            ></Navbar>
        </>
    );
};
// start next
export default PageNavbar;

// import React, { useRef, useEffect } from "react";

// function MyComponent() {
//   const ref = useRef(null);
//   const childRefs = useRef([]);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         // check if the clicked element is one of the child refs
//         for (let i = 0; i < childRefs.current.length; i++) {
//           if (childRefs.current[i].current && childRefs.current[i].current.contains(event.target)) {
//             // user clicked inside a child component, don't close the component
//             return;
//           }
//         }
//         // user clicked outside the component and its children, close it
//         // you can close the component using a state variable or a prop
//       }
//     }

//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on cleanup
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref, childRefs]);

//   function registerChildRef(childRef) {
//     childRefs.current.push(childRef);
//   }

//   return (
//     <div ref={ref}>
//       {/* your component's content */}
//       <ChildComponent ref={registerChildRef} />
//       <AnotherChildComponent ref={registerChildRef} />
//       {/* other child components */}
//     </div>
//   );
// }

// const ChildComponent = React.forwardRef((props, ref) => {
//   const childRef = useRef(null);

//   useEffect(() => {
//     ref.current.push(childRef);
//   }, [childRef, ref]);

//   return (
//     <div ref={childRef}>
//       {/* your child component's content */}
//     </div>
//   );
// });

// const AnotherChildComponent = React.forwardRef((props, ref) => {
//   const childRef = useRef(null);

//   useEffect(() => {
//     ref.current.push(childRef);
//   }, [childRef, ref]);

//   return (
//     <div ref={childRef}>
//       {/* your another child component's content */}
//     </div>
//   );
// });

