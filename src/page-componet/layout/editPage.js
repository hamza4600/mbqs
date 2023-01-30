import { H1 } from 'components/a';
import { AddIcon, RemoveIcon } from 'page-componet/iconbutton';
import React from 'react';
import { BtnContainer, Container, SequienceContainer } from './style';
import Input from 'components/input';
import { RiDeleteBin4Line } from "react-icons/ri";
import Button from 'components/button'


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


// when all page are completed remove above code and use this code
// new componet 

// Dummy data
const dummyData = [
    { id: 1, name: "Slider" },
    { id: 2, name: "Text & Image 1" },
    { id: 3, name: "Brand Slider" },
    { id: 4, name: "Viedo List" },
    { id: 5, name: "Overlapping Text" },
]
/// will show list of item that have been added 

export const ListItem = ({ array = dummyData }) => {

    return (
        <>
            <SequienceContainer>
                <H1>Sequience List</H1>
                <div className="oip">
                    {
                        array.map((item, index) => (
                            <div key={item.id} className="item">
                                <div className="inner">
                                    <Input.Radio />
                                    <p>{item.name}</p>
                                </div>
                                <i>
                                    <RiDeleteBin4Line size={24} />
                                </i>
                            </div>
                        ))
                    }
                </div>
            </SequienceContainer>
        </>
    )
};

export const EditPageHeader = (props) => {
    const {
        title,
        handelAddIcon,
        handelRemoveIcon,
        iconText,
        children
    } = props;
    return (
        <>
            <div id="right" className="flex">
                <div className="margin">
                    <div className="inlineflex">
                        <H1>{title}</H1>
                        <div className='line'>
                            <p className="italic">{iconText}</p>
                            <AddIcon
                                onClick={handelAddIcon}
                            />
                            <RemoveIcon
                                onClick={handelRemoveIcon}
                            />
                        </div>
                    </div>
                </div>

                {React.Children.map(children, child => {
                    return child
                })}

            </div>
        </>
    )
}

export const PreviewSectionHeader = (props) => {
    const {
        title = "Preview",
        children
    } = props;

    return (
        <>
            <div id="left" className="flex">
                <div className="margin" >
                    <H1>{title}</H1>
                </div>

                {React.Children.map(children, child => {
                    return child
                })}

            </div>
        </>
    )

}

//  Btn Group 
export const PreviewBtnGroup = (props) => {
    const {
        nextPage,
        frontView,
        nextBtnText = 'Next',
        frontBtnText = 'Front Website View',
        editorBtnText = 'Open Editor'

    } = props;

    return (
        <BtnContainer>
            <Button
                type='view'
                id='save'
                onClick={frontView}
                leftIcon = {<RiDeleteBin4Line size={24} /> }
            >
                {editorBtnText}
            </Button>
            <Button
                type='view'
                id='save'
                onClick={frontView}
            >
                {frontBtnText}
            </Button>
            <Button
                type='addData'
                id='save'
                onClick={nextPage}
            >
                {nextBtnText}
            </Button>
        </BtnContainer>
    )
}
