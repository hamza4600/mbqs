import React, { forwardRef } from 'react';
import { Nav, NavWrapper } from './structure';

const Navbar = forwardRef(
    function Navbar(props, ref) {
        return (
            <>
                <Nav    
                    ref={ref}
                    aria-label="navbar"
                    blure = {props.blure}
                    role='tab'
                >
                    <NavWrapper>
                        {props.Left}
                        {props.children}
                        {props.Center}
                        {!props.blure && props.Right}
                    </NavWrapper>
                </Nav>
            </>

        )
    }
)

export default Navbar;