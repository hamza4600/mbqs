import Sidebar from "components/sidebar"
import Tooltip from "components/tooltip"
import useHover from "Hooks/useHover"
import { useState } from "react"
import { Span, Wrapper } from "./style"
import { sidebarData } from "./varibel";
import Anchor from "components/a";
import { useSelector } from "react-redux"


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

const PageSide = () => {
    const [width, setWidth] = useState(55)
    const [select, setSelect] = useState();
    const [showSub, setShowSub] = useState(false);

    const handeWidth = () => {
        setWidth((prev) => prev === 210 ? 55 : 210)
    }

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
                                    <li
                                        key={item.id}
                                        id={item.title}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            subhandel(item.id)
                                        }}
                                        role='tab'
                                        aria-selected={item.id === select}
                                        aria-controls={`panel-id-${item.id}`}
                                    >
                                        <Span select={
                                            item.id === select ||
                                            window.location.pathname === "/auth" + item.route
                                        }>
                                            <i>{item.icon}</i>
                                            {width === 210 && item.title}
                                        </Span>
                                        {
                                            showSub && item.id === select &&
                                            <div id="drop">
                                                {
                                                    Array.isArray(item.drop) && item.drop.map((drop, index) => (
                                                        <Anchor
                                                            id={drop.title}
                                                            key={index}
                                                            href={"/auth" + drop.route}
                                                            onClick={
                                                                handeWidth
                                                            }
                                                            color={
                                                                window.location.pathname === "/auth" + drop.route ? "#00BFFF" : " "
                                                            }
                                                        >
                                                            {drop.title}
                                                        </Anchor>
                                                    ))
                                                }
                                            </div>
                                        }
                                    </li>
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