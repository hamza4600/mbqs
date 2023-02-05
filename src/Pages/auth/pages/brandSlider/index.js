import Input from "components/input";
import { EditPageHeader, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage";
import { Box, Container, FileInput, InputContainer } from "page-componet/layout/style";
import React, { memo, useEffect, useState } from "react";


const SliderInput = ({ images, setImages }) => {


    // not geting the id of the input field so we can used the 

    const inputRef = React.useRef(null);
    // const selectedRef = React.useRef(null);


    useEffect(() => {
        setImages([
            {
                id: 1,
                name: "",
                brandName: "",
                image: {
                    name: "",
                    url: ""
                }
            }
        ])
    }, [])

    const addImages = () => {
        if (images.length < 70) {
            setImages(
                [...images,
                {
                    id: images.length + 1,
                    name: "",
                    brandName: "",
                    image: {
                        name: "",
                        url: ""
                    }
                }])
            // const values = [...images];
            // values.push({
            //     id: images.length + 1,
            //     name:   "",
            //     brandName: "",
            //     image: {
            //         name: inputRef.current.value,
            //         url:    selectedRef.current.value
            //     }
            // })
            // setImages(values)
        }
    }

    const removeImages = () => {
        if (images.length > 1) {
            setImages(images.slice(0, -1))
        }
    }

    console.log(images)

    const updateInput = (value, index, field) => {
        const list = [...images];
        list[index][field] = value;
        setImages(list);
    }

    const updateImage = (data) => {
        console.log(inputRef.current)
        const list = [...images];
        // using ref to get the id of the input field
        const indexId = inputRef.current.className;
        if (indexId > list.length) {
            return;
        }
        console.log(indexId , "=====")
        // const indexId = list.findIndex(item => item.id === parseInt(id));
        list[indexId].image.name = data.name;
        list[indexId].image.url = data.url;
        setImages(list);
    }

    console.log(inputRef.current)

    const renderImages = () => {
        return React.Children.toArray(images.map((item, index) => (
            <div
                key={item.id + index}
                style={{ marginBottom: '10px' }}
            >
                <Box>
                    <Input
                        id={item.id}
                        inputype="text"
                        type="addDataform"
                        placeholder="Insert brand name"
                        value={item.name}
                        onChange={e => updateInput(e.target.value, index, "name")}
                    />
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Insert list header"
                        value={item.brandName}
                        onChange={e => updateInput(e.target.value, index, "brandName")}
                    />
                </Box>
                <FileInput>
                    <label
                        htmlFor="file"
                    >
                        {item.image.name ? item.image.name : "Drop Image Here"}
                    </label>
                    <input
                        ref={inputRef}
                        accept="image/*"
                        id="file"
                        type="file"
                        className={index}
                        onChange={e => updateImage(
                            {
                                name: e.target.files[0].name,
                                url: URL.createObjectURL(e.target.files[0])
                            }
                        )}
                    />
                </FileInput>
            </div>
        ))
        )
    }


    return (
        <>
            <EditPageHeader
                title="Brand Slider"
                handelAddIcon={addImages}
                handelRemoveIcon={removeImages}
            >

                <InputContainer
                    show={images.length > 3}
                >
                    {/* <RenderImages /> */}
                    {renderImages()}
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

                <h1>Brand Slider</h1>

                {
                    images.map((item, index) => (
                        <div key={item.id} style={{ marginBottom: '10px' }}>
                            <div>
                                <picture  >
                                    <img style={{ width: '50%' }} src={item.image.url} alt={item.image.name} />
                                </picture>
                                <h3>{item.name}</h3>
                                <h4>{item.brandName}</h4>
                            </div>
                        </div>
                    ))
                }

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