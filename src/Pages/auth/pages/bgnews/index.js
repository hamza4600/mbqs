import { memo, useEffect, useState, useCallback, useMemo } from "react";
import Dropdown from "components/dropdown";
import Input from "components/input";
import { EditPageHeader, EditPageLayout, HeaderTitleIcons, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage";
import { Box, FileInput, InputContainer } from "page-componet/layout/style";
import styled from "styled-components";
import Button from "components/button";

const dData = [
    { id: 1, name: "News Category 1" },
    { id: 2, name: "News Category 2" },
    { id: 3, name: "News Category 3" },
    { id: 4, name: "News Category 4" },
]

const EditSection = ({ state, setState, type }) => {

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

    const title = useMemo(() => {
        switch (type) {
            case "business":
                return "Background Image";
            case "news":
                return "Add News Page";
            case "event":
                return "Background Image";
            case "about":
                return "Add About Page";
            case "privacy":
                return "Add Privacy Page";
            case "terms":
                return "Add Terms Page";
            case "contact":
                return "Add Contact Page";
            default:
                break;
        }
    }, [type])

    return (
        <>
            <EditPageHeader
                title={title}
                hideIcon={(type === 'news' || type === 'about' || type === "privacy" || type === "terms") ? true : false}
                handelAddIcon={addImages}
                handelRemoveIcon={removeImages}
            >
                <InputContainer>
                    {
                        (type === 'news' || type === "about" || type === "terms" || type === "contact" ) &&
                        (<>
                            <Box>
                                <Dropdown
                                    placeholder={type === 'news' ? "Select News Category" : "Select Business"}
                                    options={dData}
                                    type="addDataform"
                                    value={state.selectCategory?.name}
                                    updateValue={(value) => setState({ ...state, selectCategory: value })}
                                />
                                <Input
                                    inputype="text"
                                    type="addDataform"
                                    placeholder="Section Name"
                                    value={state.selectCategory?.name || " Select Category"}
                                    readOnly={true}
                                />
                            </Box>
                        </>)
                    }
                    {
                        (type === 'about' || type === "privacy" || type === "terms" || type === "contact") && (
                            <>
                                <Box>
                                    <Dropdown
                                        placeholder={"Select Page"}
                                        options={dData}
                                        type="addDataform"
                                        value={state.selectPage?.name}
                                        updateValue={(value) => setState({ ...state, selectPage: value })}
                                    />
                                    <Input
                                        inputype="text"
                                        type="addDataform"
                                        placeholder="Section Name"
                                        value={state.selectPage?.name || " Select Category"}
                                        readOnly={true}
                                    />
                                </Box>
                            </>
                        )
                    }

                    {(type === 'news' || type === "about" || type === "privacy" || type === "terms" || type === "contact") && (
                        <>
                            <Box full marginTop='2rem'>
                                <HeaderTitleIcons
                                    title="Background Image"
                                    handelAddIcon={addImages}
                                    handelRemoveIcon={removeImages}
                                />
                            </Box>
                        </>
                    )}
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
                    <ListItem />
                </InputContainer>
                <Button
                    type='showicon'
                >Show Media Icons</Button>

            </EditPageHeader>
        </>
    )
}

const PreviewSection = ({ state, type }) => {

    const moveNextPage = useCallback(() => {
        console.log("next page");
        switch (type) {
            case "business":
                window.location.href = "/auth/header-img";
                break;
            case "news":
                window.location.href = "/auth/overlap-text-news";
                break;
            case "event":
                window.location.href = "/auth/overlap-text-event";
                break;
            case "about":
                window.location.href = "/auth/overlap-text-about";
                break;
            case "privacy":
                window.location.href = "/auth/privacy";
                break;
            case "terms":
                window.location.href = "/auth/terms";
                break;
            case "contact":
                window.location.href = "/auth/overlap-text-contact";
                break;
            default:
                break;
        }
    }, [type])

    return (
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
                        })
                    }
                </Flex>
                <PreviewBtnGroup
                    nextPage={moveNextPage}
                />
            </PreviewSectionHeader>
        </>
    )
}

// hadel 4 different type of background 
const BackgroundNews = ({ type }) => {

    console.log(type);

    const [state, setState] = useState({
        selectCategory: null,
        images: [],
        selectPage: ""
    })

    return (
        <>
            <EditPageLayout>
                <EditSection
                    state={state}
                    setState={setState}
                    type={type.type}
                />
                <PreviewSection
                    state={state}
                    type={type.type}
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