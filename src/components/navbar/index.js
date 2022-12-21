import React, { forwardRef } from 'react';
import { Nav, NavWrapper } from './structure';

const Navbar = forwardRef(
    function Navbar(props, ref) {
        return (
            <>
                <Nav ref={ref}>
                    <NavWrapper>
                        {props.Left}
                        {props.children}
                        {props.Center}
                        {props.Right}
                    </NavWrapper>
                </Nav>
            </>

        )
    }
)

export default Navbar;