import Input from "components/input";
import { EditPageHeader, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage";
import { Box, Container, FileInput, InputContainer } from "page-componet/layout/style";
import { memo, useReducer, useState } from "react";


const SliderInput = ({ images, setImages }) => {
    return (
        <>
            <EditPageHeader
                title="Brand Slider"
            >

                <InputContainer>
                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Insert list header"
                        // value={data.textHeader}
                        // onChange={event => setData({ field: "textHeader", value: event.target.value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Insert list header"
                        // value={data.textHeader}
                        // onChange={event => setData({ field: "textHeader", value: event.target.value })}
                        />
                    </Box>
                    <FileInput >
                        <label
                            htmlFor="file"
                        >
                            {/* {data.viedo.name ? data.viedo.name : "Drop Viedo Here"} */}
                        </label>
                        <input
                            accept="video/*"
                            type="file"
                            id="file"
                            name="file"
                            // onChange={event => setData(
                            //     {
                            //         field: "viedo", value: {
                            //             name: event.target.files[0].name,
                            //             url: URL.createObjectURL(event.target.files[0])
                            //         }
                            //     })}
                        />
                    </FileInput>


                </InputContainer>

                <ListItem />
            </EditPageHeader>
        </>
    )
}

const SliderPreview = ({ images }) => {
    return (
        <>
            <PreviewSectionHeader>


                <PreviewBtnGroup
                    showEditorBtn={true}
                // nextPage = {"/auth/brandSlider"}
                />
            </PreviewSectionHeader>
        </>
    )
}

const BrandSlider = () => {

    const [images, setImages] = useState([])

    return (
        <>
            <Container>
                <SliderInput
                    images={images}
                    setImages={setImages}
                />
                <SliderPreview
                    images={images}
                />

            </Container>
        </>
    )
}

export default memo(BrandSlider)