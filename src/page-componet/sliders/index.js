import Sidebar from "components/sidebar"
import Tooltip from "components/tooltip"
import useHover from "Hooks/useHover"
import Anchor from "components/a";

import { useState } from "react"
import { useSelector } from "react-redux"

import { Span, SubMenu, Wrapper } from "./style"
import { sidebarData } from "./varibel";
import { BsChevronDown } from "react-icons/bs";

function Icon(props) {
    const {
        icon, hover, id, select,
    } = props
    const [ref, isHovering] = useHover()

    return (
        <>
            <Span
                ref={ref}
                key={id}
                role='tab'
                aria-selected={id === select}
                aria-controls={`panel-id-${id}`}
                aria-expanded={isHovering}
            >
                <i>{icon}</i>
                {isHovering && (
                    <Tooltip
                        isShown={true}
                        content={hover}
                        type="sidebar" />
                )}
            </Span>
        </>
    )
}

const SubDropdownMenu = (props) => {
    const { array } = props;

    const [showSub2, setShowSub2] = useState(false);
    const [subselt, setSubselt] = useState();

    const subhandel = (e) => {
        if (e === subselt) return setSubselt();
        setSubselt(e);
        setShowSub2(true);
    }

    return (
        <>
            <SubMenu
                id={'subMenu'}
                onClick={(e) => {
                    e.stopPropagation();
                    subhandel(array?.id)
                }}
                role='tab'
                aria-selected={array.title === subselt}
                aria-controls={`panel-id-${array.title}`}
                aria-expanded={showSub2}
                color={array?.id !== subselt}
            >
                {array?.title}
                <i className="subico" >
                    <BsChevronDown size={12} />
                </i>
            </SubMenu>
            {
                showSub2 && array.id === subselt && // only one sub menu show at a time 
                (
                    <div
                        id='subdrop'
                        role='tabpanel'
                        aria-labelledby={`panel-id-${array.title}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {
                            array.subMenu.map((item, index) => (
                                <div
                                    key={item.id}
                                >
                                    <Anchor
                                        color={window.location.pathname === "/auth" + item.route}
                                        href={`/auth${item.route || "#"}`}
                                    >   

                                        {item.title}
                                    </Anchor>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

const PageSide = () => {
    const [width, setWidth] = useState(55)
    const [select, setSelect] = useState();
    const [showSub, setShowSub] = useState(false);

    const handeWidth = () => setWidth((prev) => prev === 210 ? 55 : 210)

    const subhandel = (e) => {
        if (e === select) return setSelect();
        setSelect(e);
        setShowSub(true);
    }
    const handelOutSide = () => {
        setShowSub(false);
        setSelect()
        setWidth(60);
    }

    return (
        <>
            <Sidebar
                left={true}
                width={width}
                height={'100%'}
                handelClick={handeWidth}
                outSideClick={handelOutSide}
                trigger={width === 210 ? true : false}
            >
                <Wrapper
                    width={width}
                >
                    {
                        width === 210 ? (<>
                            {
                                Array.isArray(sidebarData) && sidebarData.map((item, index) => (
                                    <div
                                        key={item.id}
                                        id={item.title}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            subhandel(item.id)
                                        }}
                                        className="list"
                                        role='tab'
                                        aria-selected={item.id === select}
                                        aria-controls={`panel-id-${item.id}`}
                                    >
                                        <Span
                                            select={
                                                item.id === select ||
                                                window.location.pathname === "/auth" + item.route
                                            }
                                        >
                                            <i>{item.icon}</i>
                                            {item.title}
                                        </Span>
                                        {
                                            showSub && item.id === select &&
                                            <div
                                                id="drop"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {
                                                    Array.isArray(item.drop) && item.drop.map((drop, index) => {
                                                        if (drop.subMenu) {
                                                            return (
                                                                <SubDropdownMenu
                                                                    key={index}
                                                                    array={drop}
                                                                />
                                                            )
                                                        }
                                                        return (
                                                            <>
                                                                <Anchor
                                                                    key={index}
                                                                    href={`/auth${drop.route}`}
                                                                    color={window.location.pathname === "/auth" + drop.route.trim() && "#4CCDF9"}
                                                                >
                                                                    {drop.title}
                                                                </Anchor>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </>) : (
                            <>
                                {
                                    Array.isArray(sidebarData) && sidebarData.map((item, index) => (
                                        <Icon
                        
                                            key={item.id}
                                            icon={item.icon}
                                            hover={item.title}
                                            id={item.id}
                                            select={select}
                                        />
                                    ))
                                }
                            </>
                        )
                    }
                </Wrapper>
            </Sidebar>
        </>
    )
};

const PageSideBar = () => {
    const state = useSelector(state => state.sidebar)
    return (
        <>
            {state.dongal ? <PageSide /> : null}    
        </>
    )
}

export default PageSideBar