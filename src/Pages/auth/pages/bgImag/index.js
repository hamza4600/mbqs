import {  EditPageHeader, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage"
import React, { useState } from "react"
import { FileInput, Grid } from "./styled"
import { Container, InputContainer } from "page-componet/layout/style"

const RightSection = ({ inputImage, setInputImage }) => {

    const handleAddFields = () => {

        if (inputImage.length <= 9) {
            const values = [...inputImage];
            values.push({
                id: values.length + 1,
                name: `Drop  Image ${values.length + 1} Here`,
            });
            setInputImage(values);
        }
    }

    const handleRemoveFields = () => {
        if (inputImage.length > 3) {
            const values = [...inputImage];
            values.splice(values.length - 1, 1);
            setInputImage(values);
        }
    }

    const handleInputChange = (id, event) => {
        console.log(id, event.target.id, "=====")
        const newInputFields = inputImage.map(i => {
            if (id === i.id) {

                i.url = URL.createObjectURL(event.target.files[0])
                i.name = event.target.files[0].name

                // push image object in array 
                setInputImage([
                    ...inputImage,
                    {
                        id: id,
                        url: URL.createObjectURL(event.target.files[0]),
                        name: event.target.files[0].name
                    }
                ])
            }
            return i;
        })
        setInputImage(newInputFields);
    }

    console.log(inputImage)

    return (
        <>
            <EditPageHeader
                title="Background Image"
                handelAddIcon={handleAddFields}
                handelRemoveIcon={handleRemoveFields}
            >
                <InputContainer>
                    {
                        inputImage.map((inputField, index) => (
                            <FileInput key={inputField.id}>
                                <label
                                    htmlFor={inputField.id}
                                >
                                    {inputField.name}
                                </label>
                                <input
                                    id={index + 1}
                                    onChange={event => handleInputChange(inputField.id, event)}
                                    accept="image/*"
                                    type="file"
                                />
                            </FileInput>
                        ))
                    }
                </InputContainer>

                <ListItem />

            </EditPageHeader>
        </>
    )
}

const LeftSection = ({ inputImage }) => {
    const nextPage = () => {
        window.location.href = "/auth/header-img"
    }
    return (
        <>
            <PreviewSectionHeader>
                <Grid>
                    {
                        Array.isArray(inputImage) &&
                        inputImage.map((item, index) => {
                            if (item?.url?.includes("http") || item?.url?.includes("https")) {
                                return (
                                    <div key={index}>
                                        <img
                                            src={item?.url}
                                            alt={item?.name}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </Grid>
                <PreviewBtnGroup nextPage={nextPage} />
            </PreviewSectionHeader>
        </>
    )
}

let initaValue = [
    { id: 1, name: 'Drop  Image 1 Here', url: '' },
    { id: 2, name: 'Drop  Image 2 Here', url: '' },
    { id: 3, name: 'Drop  Image 3 Here', url: '' },
]

const BackgroundImage = () => {
    const [inputImage, setInputImage] = useState(initaValue);

    return (
        <>
            <Container>
                <RightSection
                    inputImage={inputImage}
                    setInputImage={setInputImage}
                />
                <LeftSection
                    inputImage={inputImage}
                    setInputImage={setInputImage}
                />
            </Container>
        </>
    )
}

export default BackgroundImage