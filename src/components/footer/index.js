import styled from "styled-components";

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
    
    @media (max-width: 750px) {
        max-height: 50px;

        p {
            padding: 10px 0px;
            text-align: center;
        }
    }
    `;

const text = '© Copyright by MBIQS (Pvt.) Limited, Since 2012. All Rights Reserved';

const Footer = () => (
    <>
        <PageFoot aria-label="footer">
            <p>{text} </p>
        </PageFoot>
    </>
);

export default Footer;