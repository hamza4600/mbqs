import { forwardRef, useMemo } from "react";
import styled from "styled-components";

const P = styled.p`
    padding: 5px 10px;
    margin: auto;
    font-size: 14px;
    text-transform: capitalize;
`;

const Container = styled.div`
    background-color: ${({ theme }) => theme.toolbar};
    color: ${({ theme }) => theme.toolipText};
    z-index: 100 !important;
    white-space: nowrap;
    transition: 0.3ms ease-in-out;

`;

const Tooltip = forwardRef(
    function Tooltip(props, ref) {

        const {
            children,
            content,
            title,
            position,
            className,
            isShown,
            id,
            mouseEnter,
            mouseLeave,
            type,
            ...rest
        } = props;
        //  styles and Position of Tooltip

        const typeObject = useMemo(() => {
            switch (type) {
                case "icon":
                    return {
                        position: "absolute",
                        top: "2.1rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                    };
                case "sidebar":
                    return {
                        position: "absolute",
                        left: "42px",
                        transform: "translateY(-100%)",
                        zIndex: "100",
                        marginTop: "55px",
                    };
                default:
                    return {
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                    };
            }
        }, [type]);

        return (
            <>
                {isShown && (
                    <Container
                        ref={ref}
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                        id={id}
                        className={className}
                        {...rest}
                        style={typeObject}
                    >
                        <P>{children || content}</P>
                    </Container>
                )}

            </>
        )
    }
)

export default Tooltip;