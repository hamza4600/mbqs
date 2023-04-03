import React from 'react'
import Dropdown from 'components/dropdown'
import { EditPageHeader, EditPageLayout, ListItem, PreviewBtnGroup, PreviewSectionHeader } from 'page-componet/layout/editPage'
import { InputContainer } from 'page-componet/layout/style'
import { PrevieContainer, FileContainer } from './style'
import Button from 'components/button'

const motions = [
    { id: 1, name: "Motion 1" },
    { id: 2, name: "Motion 2" },
    { id: 3, name: "Motion 3" },
    { id: 4, name: "Motion 4" },
    { id: 5, name: "Motion 5" },
];

const ImageSliderSection = () => {

    const [data, setData] = React.useState("")

    const [fields, setFields] = React.useState([])

    React.useEffect(() => {
        let values = [];
        for (let i = 0; i < 2; i++) {
            values.push({
                id: Math.floor(Math.random() * 1000),
                name: i === 0 ? `Drop  image` : `Drop  Viedo`
            })
        }
        setFields(values);
    }, [])


    const handleAddFields = () => {
        if (fields.length <= 9) {
            const values = [...fields];
            for (let i = 0; i < 2; i++) {
                values.push({
                    id: Math.floor(Math.random() * 1000),
                    name: i === 0 ? `Drop  image` : `Drop  Viedo`
                })
            }
            setFields(values);
        }
    }

    const handleRemoveFields = () => {
        if (fields.length > 2) {
            const values = [...fields];
            values.splice(values.length - 2, 2);
            setFields(values);
        }
    }

    return (
        <>
            <EditPageHeader
                title="Header Image Slider"
                handelAddIcon={handleAddFields}
                handelRemoveIcon={handleRemoveFields}
                iconText="All Images should be of same sizes"
            >
                <InputContainer>
                    <Dropdown
                        placeholder="Select Motion"
                        options={motions}
                        value={data.name}
                        updateValue={(value) => setData(value)}
                        type="addMotion"
                    />

                    {
                        fields.map((item, index) => (
                            <div key={item.id}>
                                {/* is a dummp orignal have input field */}
                                <FileContainer id={item.name} >
                                    <span>{item.name}</span>
                                </FileContainer>
                            </div>
                        ))
                    }
                    <ListItem />
                </InputContainer>
                <Button
                        type='showicon'
                    >Show Media Icons</Button>
            </EditPageHeader>
        </>
    )
}

const ImagePreviewSection = () => {

    const nextPage = () => window.location.href = "/auth/text-img";

    return (
        <>
            <PreviewSectionHeader>
                <PrevieContainer>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2g811Eo7K8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </PrevieContainer>

                <PreviewBtnGroup nextPage={nextPage} />
            </PreviewSectionHeader>
        </>
    )
}

const HeaderImage = () => {
    return (
        <>
            <EditPageLayout id='conainer'>
                <ImageSliderSection />
                <ImagePreviewSection />
            </EditPageLayout>
        </>
    )
}

export default HeaderImage;