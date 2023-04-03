import { memo, useCallback, useMemo, useReducer } from "react"

import Dropdown from "components/dropdown"
import Input from "components/input"
import { EditPageHeader, EditPageLayout, HeaderTitleIcons, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage"
import { Box, FileInput, InputContainer } from "page-componet/layout/style"
import Button from "components/button"

const dData = [
    { id: 1, name: "News Category 1" },
    { id: 2, name: "News Category 2" },
    { id: 3, name: "News Category 3" },
    { id: 4, name: "News Category 4" },
]

const EditSection = ({ state, setState, type }) => {

    console.log(state);

    const addNewSection = () => {
        const { array } = state;
        for (let i = 0; i < 2; i++) {
            array.push({
                id: array.length + 1,
                type: i === 0 ? "image" : "viedo",
                url: "",
                name: "",
            })
        }
        setState({ field: "array", value: array })
    }

    const removeSection = () => {
        const { array } = state;
        if (array.length > 2) {
            array.splice(array.length - 2, 2)
            setState({ field: "array", value: array })
        }
    }

    const updateValue = (value, index) => {
        const { array } = state;
        setState(
            {
                field: "array",
                value: array.map((item, i) => i === index ? { ...item, ...value } : item)
            })
    }

    const typee = useMemo(() => {
        switch (type) {
            case "events":
                return "Header Image Slider"
            case "about":
                return "Add About Page"
            case "terms":
                return "Add Terms Page"
            case "contact":
                return "Add Contact Page"
            default:
                return "Add New Page"
        }
    }, [type])

    return (
        <>
            <EditPageHeader
                title={typee}
                hideIcon={type === "events" ? false : true}
                iconText="All Images should be of same sizes"
                handelAddIcon={addNewSection}
                handelRemoveIcon={removeSection}
            >
                <InputContainer>
                    {
                        type === "events" ? null : (
                            <>
                                <Box>
                                    <Dropdown
                                        placeholder="Select Business"
                                        options={dData}
                                        type="addDataform"
                                        value={state.selectPage?.name}
                                        updateValue={(value) => setState({ field: "selectPage", value })}
                                    />
                                    <Input
                                        inputype="text"
                                        type="addDataform"
                                        placeholder="Section Name"
                                        value={state.selectPage?.name || " Select Page Category"}
                                        readOnly={true}
                                    />
                                </Box>
                            </>
                        )
                    }

                    {
                        (type === "about" || type === "terms") && (
                            <>
                                <Box>
                                    <Dropdown
                                        placeholder="Select Page"
                                        options={dData}
                                        type="addDataform"
                                        value={state.selectCategory?.name}
                                        updateValue={(value) => setState({ field: "selectCategory", value })}
                                    />
                                    <Input
                                        inputype="text"
                                        type="addDataform"
                                        placeholder="Section Name"
                                        value={state.selectCategory?.name}
                                        readOnly={true}
                                    />
                                </Box>
                            </>
                        )
                    }

                    {
                        type === "events" ? null : (
                            <>
                                <Box full marginTop="2rem" >
                                    <HeaderTitleIcons
                                        title="Header Image Slider"
                                        iconText="All Images should be of same sizes "
                                        handelAddIcon={addNewSection}
                                        handelRemoveIcon={removeSection}
                                        hideIcon={type === "events" && true}
                                    />
                                </Box>
                            </>
                        )
                    }

                    <Dropdown
                        placeholder="Select Motion"
                        options={dData}
                        value={state.selectMotion?.name}
                        updateValue={(value) => setState({ field: "selectMotion", value })}
                        type="addMotion"
                    />
                    {
                        state.array.map((item, index) => (
                            <FileInput large key={index}>
                                <label
                                    htmlFor={item.id}
                                >
                                    {item.name ? item.name : `Drop ${item.type} Here`}
                                </label>
                                <input
                                    accept={item.type === "image" ? "image/*" : "video/*"}
                                    type="file"
                                    id={item.id}
                                    name="file"
                                    onInput={event =>
                                        updateValue(
                                            {
                                                name: event.target.files[0].name,
                                                url: URL.createObjectURL(event.target.files[0])
                                            }, index
                                        )
                                    }
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

    const nextPage = useCallback(() => {
        if (type === "news") {
            window.location.href = "/auth/news-bg"
        } else if (type === "events") {
            window.location.href = "/auth/event-bg"
        } else if (type === "about") {
            window.location.href = "/auth/about-bg"
        } else if (type === "privacy") {
            window.location.href = "/auth/privacy-bg"
        } else if (type === "terms") {
            window.location.href = "/auth/terms-bg"
        } else if (type === "contact") {
            window.location.href = "/auth/contact-bg"
        }

        return null
    }, [type])

    return (
        <>
            <PreviewSectionHeader>
                <div>
                    {
                        state.array.map((item, index) => (
                            <div key={index}>
                                {
                                    item.type === "image" ? (
                                        <img
                                            style={{ maxWidth: '50%' }}
                                            src={item.url}
                                            alt={item.name}
                                        />
                                    ) : (
                                        item.url !== "" &&
                                        (<video
                                            style={{ maxWidth: '50%' }}
                                            src={item.url}
                                            controls
                                        />)
                                    )
                                }
                            </div>
                        ))
                    }
                </div>

                <PreviewBtnGroup
                    nextPage={nextPage}
                />
            </PreviewSectionHeader>
        </>
    )
}

const initaiValue = {
    selectCategory: "",
    selectMotion: "",
    array: [
        {
            id: 1,
            type: 'image',
            url: '',
            name: ''
        },
        {
            id: 2,
            type: 'viedo',
            url: '',
            name: ''
        }
    ],
    selectPage: ""
}

const CreatnewPage = ({ type }) => {
    console.log(type)
    const reducer = (state, { field, value }) => {

        return {
            ...state,
            [field]: value
        }
    }


    const [state, setState] = useReducer(reducer, initaiValue)

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

export default memo(CreatnewPage)