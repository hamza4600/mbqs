import React from "react";
import styled from "styled-components";
import logo from '../../assits/footer.svg';

const PageFoot = styled.footer`
    max-height: 25px;
    color: ${({ theme }) => theme.footerColor};  
    background: ${({ theme }) => theme.footer};  
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    `;

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    grid-auto-flow: column;
    position: absolute;
    left: 15px;
    
    img {
        height: 22px;
        margin-right: 6px;
    }
`;

const text = '© Copyright by MBIQS (Pvt.) Limited, Since 2012. All Rights Reserved';

const Left = () => {
    return (
        <>
            <Wrapper>
                <img src={logo} alt="logo" />
                <p>Mian Builder</p>
            </Wrapper>
        </>
    )
}

const Footer = () => {
    return (
        <>
            <PageFoot aria-label="footer">
                <Left />
                <p>{text} </p>
            </PageFoot>
        </>
    )
};

export default Footer;