import { H1 } from 'components/a';
import { AddIcon, RemoveIcon } from 'page-componet/iconbutton';
import styled from 'styled-components';

const Container = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr
    }

    #left {
        padding: 0px 0px 0px 20px; 
        background-color: #DDE5EC;
    }

    .flex {
        display: flex;
        flex: 1;
        height: 94vh;
        flex-direction: column;
    }

    #right {
        background-color: #F0F8FF;
        font-size: 14px; 
        font-weight: 400;
        line-height: 17px;
    }

    .margin {
        margin-top: 20px;
        width: 100%;
    }

    .inlineflex {
        width: 90%;
        display: inline-flex;
        justify-content: space-between;
        height: 40px;
        align-items: start;
    }
 
`;

const RightSection = (props) => {
    const {
        children,
        rightTitle,
        showIcon = true,
    } = props;

    return (
        <div id="right" className='flex'>

            <div className="margin">
                <div className="inlineflex">
                    <H1>{rightTitle}</H1>
                    {
                        showIcon && (
                            <div>
                                <AddIcon />
                                <RemoveIcon />
                            </div>
                        )
                    }
                </div>
            </div>

            <div>
                {children}
            </div>
        </div>
    );
}

const LeftSection = (props) => {
    const {
        children,
        leftTitle = "Preview",
    } = props;
    return (
        <div id="left" className='flex'>
            <div className="margin" >
                <H1>{leftTitle}</H1>
            </div>

            {children}
        </div>
    );
}

const EditPageLayout = (
    { rightChildren, rightTitle, leftChildren, leftTitle }
) => (
    <>
        <Container>
            <RightSection
                rightTitle={rightTitle}
            >
                {rightChildren}
            </RightSection>
            <LeftSection
                leftTitle={leftTitle}
            >
                {leftChildren}
            </LeftSection>
        </Container>
    </>
);

export default EditPageLayout;
