import React, { forwardRef } from 'react';
import styled from 'styled-components';


const Outer = styled.div`
    max-width: 3200px;
    margin: 0 auto;
`;

const Page = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.page};
    color: ${({ theme }) => theme.color};  
    font-family: ${({ theme }) => theme.font} !important;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    main {
        position: relative;
        flex: 1;
        width: 100%;
    }

    .main-page {
        padding-left: 75px;
        flex: 1;
        width: 100%;
        color: ${({ theme }) => theme.pageText} !important;
    }

    @media (max-width: 768px) {
        .main-page {
            padding-left: 62px;
        }
    }

    `;

const MakePage = forwardRef(
    function MakePage(props, ref) {
        return (
            <>
                <Outer>
                    <Page tabIndex={-1} ref={ref} id="main_page">
                        {props.children}
                    </Page>
                </Outer>
            </>
        )
    }
)

export default MakePage;