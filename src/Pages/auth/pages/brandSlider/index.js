import React, { memo, useEffect, useMemo, useState } from "react";

import Input from "components/input";
import { EditPageHeader, EditPageLayout, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage";
import { Box, FileInput, InputContainer } from "page-componet/layout/style";
import { PreviewWrapper } from "./style";


const SliderInput = ({ images, setImages }) => {

    useEffect(() => {
        setImages([
            {
                id: Math.floor(Math.random() * 1000),
                field: "row",
                row: [
                    {
                        id: Math.floor(Math.random() * 1000),
                        value: "",
                        placeholder: "Insert brand name",
                    },
                    {
                        id: Math.floor(Math.random() * 1000),
                        value: "",
                        placeholder: "Insert list header",
                    }
                ]
            },
            {
                id: Math.floor(Math.random() * 1000),
                field: "image",
                image: {
                    name: "",
                    url: ""
                }
            }
        ])
    }, [])

    const addImages = () => {
        if (images.length > 10) return;
        setImages([...images,
        {
            id: Math.floor(Math.random() * 1000),
            field: "row",
            row: [
                {
                    id: Math.floor(Math.random() * 1000),
                    value: "",
                    placeholder: "Insert brand URL",
                },
                {
                    id: Math.floor(Math.random() * 1000),
                    value: "",
                    placeholder: "Insert brand name",
                }
            ]
        },
        {
            id: Math.floor(Math.random() * 1000),
            field: "image",
            image: {
                name: "",
                url: ""
            }
        }])
    }

    const removeImages = () => {
        if (images.length > 2) {
            setImages(images.slice(0, -2))
        }
    }

    const updateInput = (event, itemId, rowItemId) => {
        const { value } = event.target;
        setImages(preImage => {
            return preImage.map(item => {
                if (item.id === itemId && item.field === "row") {
                    const updateRow = item.row.map(rowItem => {
                        if (rowItem.id === rowItemId) {
                            return {
                                ...rowItem,
                                value: value
                            }
                        }
                        return rowItem;
                    })
                    return {
                        ...item,
                        row: updateRow
                    }
                }
                return item;
            })
        })
    }

    const addImage = (event, id) => {
        const list = [...images];
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            list.map((item) => {
                if (item.id === id) {
                    item.image = {
                        name: file.name,
                        url: reader.result
                    }
                }
            })
            setImages(list);
        }
        reader.readAsDataURL(file);
    }
    console.log(images, "====")

    return (
        <>
            <EditPageHeader
                title="Brand Slider"
                handelAddIcon={addImages}
                handelRemoveIcon={removeImages}
            >
                <InputContainer>
                    {
                        Array.isArray(images) &&
                        images.map((item, index) => {
                            if (item.field === "row") {
                                return (
                                    <Box key={item.id}>
                                        {
                                            item.row.map((rowItem, rowIndex) => {
                                                return (
                                                    <Input
                                                        key={rowItem.id}
                                                        id={rowItem.id}
                                                        inputype="text"
                                                        type="addDataform"
                                                        placeholder={rowItem.placeholder}
                                                        value={rowItem.value}
                                                        onChange={(event) => updateInput(event, item.id, rowItem.id)}
                                                    />
                                                )
                                            })
                                        }
                                    </Box>
                                )
                            } else if (item.field === "image") {
                                return (
                                    <FileInput key={item.id}>
                                        <label
                                            htmlFor="file"
                                        >
                                            {item.image.name || "Drop Image Here"}
                                        </label>
                                        <input
                                            accept="image/*"
                                            id="file"
                                            type="file"
                                            className={index}
                                            onInput={(event) => addImage(event, item.id)}
                                            onClick={(e) => e.target.value = null}
                                        />
                                    </FileInput>
                                )
                            }
                        })
                    }
                    <ListItem />
                </InputContainer>
            </EditPageHeader>
        </>
    )
}

const SliderPreview = ({ images }) => {
 
    const newArray = useMemo(() => {
        const newArray = [];
        for (let i = 0; i < images.length; i++) {
            if (i % 2 === 0) {
                let arr = [];
                arr.push(images[i], images[i + 1])
                newArray.push(arr)
            }
        }
        return newArray;
    }, [images])

    return (
        <>
            <PreviewSectionHeader>
                <h1>Brand Slider</h1>
                <PreviewWrapper>
                    {
                        newArray.map((item, index) => {
                            return (
                                <div id="box">
                                    {
                                        item.map((field, index) => {
                                            if (field.field === "image" && field.image?.url !== "") {
                                                return (
                                                    <picture key={field.id}>
                                                        <img src={field.image?.url} alt={item.image?.name} />
                                                    </picture>
                                                )
                                            } else if (field.field === "row") {
                                                return (
                                                    <>
                                                        {field.row.map((field, index) => (
                                                            <>
                                                                <h3  id='txt' key={field.id}>{field.value}</h3>
                                                            </>
                                                        ))}
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            )
                        })
                    }

                </PreviewWrapper>

                <PreviewBtnGroup
                    showEditorBtn={true}
                    nextPage={() => window.location.href = '/auth/business-profile'}
                />
            </PreviewSectionHeader>
        </>
    )
}

const BrandSlider = () => {
    const [images, setImages] = useState([])
    return (
        <>
            <EditPageLayout>
                <SliderInput
                    images={images}
                    setImages={setImages}
                />
                <SliderPreview
                    images={images}
                />

            </EditPageLayout>
        </>
    )
}

export default memo(BrandSlider)