import { forwardRef, memo, useCallback, useEffect, useRef } from "react";
import { Aside, Wrapper } from "./structure";

const Sidebar = memo(forwardRef(
    function Sidebar(props, ref) {

        const { children, width, right, height, handelClick, outSideClick, trigger = false } = props;

        const innerRef = useRef(null);

        const outsideClic = useCallback((e) => {
            if (trigger === false) return;
            if (trigger && innerRef.current && !innerRef.current.contains(e.target)) {
                outSideClick();
            }
        }, [outSideClick, trigger]);

        useEffect(() => {
            document.addEventListener("mousedown", outsideClic);
            return () => {
                document.removeEventListener("mousedown", outsideClic);
            };
        }, [outsideClic]);

        return (
            <>
                <Aside
                    ref={ref}
                    aria-label="sidebar"
                    id="sidebar"
                    width={width}
                    right={right}
                    height={height}
                    onClick={handelClick}
                >
                    <Wrapper
                        aria-label="sidebar"
                        aria-haspopup="true"
                    >
                        {children}
                    </Wrapper>
                </Aside>
            </>
        )
    }
))

export default Sidebar;