import React, { forwardRef, memo } from "react";
import styled from "styled-components";

const BoxInner = styled.div`

    flex : ${({ flex }) => flex};
    display : ${({ display }) => display};
    flex-direction : ${({ flexDirection }) => flexDirection};
    justify-content : ${({ justifyContent }) => justifyContent};
    align-items : ${({ alignItems }) => alignItems};
    align-content : ${({ alignContent }) => alignContent};
    flex-wrap : ${({ flexWrap }) => flexWrap};
    padding : ${({ padding }) => padding};
    margin : ${({ margin }) => margin};
    width : ${({ width }) => width};
    height : ${({ height }) => height};
    background : ${({ background }) => background};

`;

const Box = memo(forwardRef(
    function Box(props, ref) {
        return (
            <>
                <BoxInner ref={ref} {...props} >
                    {props.children}
                </BoxInner>
            </>
        )
    }
))

export default Box;