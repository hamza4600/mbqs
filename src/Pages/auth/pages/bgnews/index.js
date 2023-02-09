import { memo, useEffect, useState } from "react";
import Dropdown from "components/dropdown";
import useDropDown from "components/dropdown/useDropdown";
import Input from "components/input";
import { EditPageHeader, EditPageLayout, HeaderTitleIcons, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage";
import { Box, FileInput, InputContainer } from "page-componet/layout/style";
import styled from "styled-components";

const dData = [
    { id: 1, name: "News Category 1" },
    { id: 2, name: "News Category 2" },
    { id: 3, name: "News Category 3" },
    { id: 4, name: "News Category 4" },
]

const EditSection = ({ state, setState }) => {

    const { isOpen, toggle, close } = useDropDown();

    useEffect(() => {
        let images = [];
        for (let i = 0; i < 3; i++) {
            images.push({
                id: i,
                name: `Drop Image ${i + 1}`,
                url: ""
            })
        }

        setState({
            ...state,
            images
        })
    }, [])

    const addImages = () => {
        let images = state.images;
        images.push({
            id: images.length,
            name: `Drop Image ${images.length + 1}`,
            url: ""
        })
        setState({
            ...state,
            images
        })
    }

    const removeImages = () => {

        let images = state.images;
        if (images.length > 3) {
            images.pop();
            setState({
                ...state,
                images
            })
        }
    }
    // futuher use
    const updateImage = (id, url) => {
        let images = state.images;
        images = images.map((item) => {
            if (item.id === id) {
                item.url = url;
            }
            return item;
        })
        setState({
            ...state,
            images
        })
    }

    return (
        <>
            <EditPageHeader
                title="Background Image News"
                hideIcon={true}
            >
                <InputContainer
                    show={state.images?.length > 6}
                >
                    <Box>
                        <Dropdown
                            placeholder="Select News Category"
                            isOpen={isOpen}
                            toggel={toggle}
                            close={close}
                            options={dData}
                            type="addDataform"
                            value={state.selectCategory?.name}
                            updateValue={(value) => setState({ ...state, selectCategory: value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Section Name"
                            value={state.selectCategory?.name || " Select News Category"}
                            readOnly={true}
                        />
                    </Box>

                    <Box full marginTop='2rem'>
                        <HeaderTitleIcons
                            title="Background Image"
                            handelAddIcon={addImages}
                            handelRemoveIcon={removeImages}
                        />
                    </Box>

                    {
                        state.images.map((item, index) => (
                            <FileInput>
                                <label htmlFor={`file-${index}`}>
                                    {item.name}
                                </label>
                                <input
                                    accept="image/*"
                                    type="file"
                                    id={`file-${index}`}
                                    onInput={(e) => {
                                        let images = [...state.images];
                                        images[index].name = e.target.files[0].name;
                                        images[index].url = URL.createObjectURL(e.target.files[0]);
                                        setState({ ...state, images })
                                    }}
                                    onClick={(e) => e.target.value = null}
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

const PreviewSection = ({ state }) => (
    <>
        <PreviewSectionHeader>
            <Flex>
                {
                    state.images.length > 0 && state.images.map((item, index) => {
                        return item.url !== "" &&
                            <img
                                key={index}
                                src={item.url}
                                alt={item.name}
                            />
                    }
                    )
                }
            </Flex>
            <PreviewBtnGroup />
        </PreviewSectionHeader>
    </>
)

// hadel 4 different type of background 
const BackgroundNews = ({ type }) => {

    console.log(type);

    const [state, setState] = useState({
        selectCategory: null,
        images: [],
    })

    return (
        <>
            <EditPageLayout>
                <EditSection
                    state={state}
                    setState={setState}
                />
                <PreviewSection
                    state={state}
                />
            </EditPageLayout>
        </>
    )
}

export default memo(BackgroundNews);


// some style

const Flex = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    padding: 0 1rem;

    & > * {
        flex: 1;
    }

    & > img {
        max-width: 200px;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;