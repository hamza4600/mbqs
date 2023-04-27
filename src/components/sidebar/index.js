import { forwardRef, memo, useCallback, useEffect, useRef } from "react";
import { Aside } from "./structure";

const Sidebar = memo(forwardRef(
    function Sidebar(props, ref) {

        const { children, width, right, left, height, handelClick, outSideClick, trigger = false } = props;

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
                    ref={ref || innerRef}
                    aria-label="sidebar"
                    id="sidebar"
                    width={width}
                    right={right}
                    left={left}
                    height={height}
                    onClick={handelClick}
                    role='tablist'
                    aria-orientation="horizontal"
                    opacity = "0.95"
                >
                    
                        {children}
                    
                </Aside>
            </>
        )
    }
))

export default Sidebar;