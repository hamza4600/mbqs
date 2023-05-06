import { memo, useCallback, useMemo, useReducer } from "react"

import Button from "components/button"
import Dropdown from "components/dropdown"
import Input from "components/input"
import { EditPageHeader, EditPageLayout, HeaderTitleIcons, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage"
import { Box, InputContainer } from "page-componet/layout/style"

const dData = [
    { id: 1, name: "Variation 1" },
    { id: 2, name: "Variation 2" },
    { id: 3, name: "Variation 3" },
];

const InputSection = ({ data, setData, type }) => {

    const addInputField = () => {
        setData({
            field: "textAray",
            value: [
                ...data.textAray,
                {
                    id: data.textAray.length + 1,
                    field: "input",
                    value: "",
                    placeholder: "Insert text header",
                },
                {
                    id: data.textAray.length + 2,
                    field: "textarea",
                    value: "",
                    placeholder: "Enter Your Text Here",
                }
            ]
        })
    }

    const removeField = () => {

        if (data.textAray.length > 2) {
            console.log("removeField", data.textAray)
            setData({
                field: "textAray",
                value: data.textAray.slice(0, -2)
            })
        }
    }

    const updateNestedValue = (event, id, field) => {
        setData({
            field: "textAray",
            value: data.textAray.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        [field]: event.target.value
                    }
                }
                return item
            })
        })
    }

    const title = useMemo(() => {
        switch (type) {
            case "business":
                return "Over Lapping Text";
            case "news":
                return "Add News Page";
            case "event":
                return "Over Lapping Text";
            case "about":
                return "Add Contact Page";
            case "privacy":
                return "Over Lapping Text";
            case "terms":
                return "Over Lapping Text";
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
                handelAddIcon={addInputField}
                handelRemoveIcon={removeField}
                hideIcon={(type === 'news' || type === "about" || type === "contact") ? true : false}
            >
                <InputContainer>
                    {
                        (type === 'news' || type === "about" || type === "contact" ) && (
                            <>
                                <Box>
                                    <Dropdown
                                        placeholder="Select News Category"
                                        options={dData}
                                        type="addDataform"
                                        value={data.category?.name}
                                        updateValue={(value) => setData({ field: "category", value: value })}
                                    />
                                    <Input
                                        inputype="text"
                                        type="addDataform"
                                        placeholder="Section Name"
                                        value={data.category?.name || " Select News Category"}
                                        readOnly={true}
                                    />
                                </Box>
                            </>
                        )
                    }

                    {
                        type === 'about' && (
                            <>
                                <Box>
                                    <Dropdown
                                        placeholder="Select News Category"
                                        options={dData}
                                        type="addDataform"
                                        value={data.category?.name}
                                        updateValue={(value) => setData({ field: "category", value: value })}
                                    />
                                    <Input
                                        inputype="text"
                                        type="addDataform"
                                        placeholder="Section Name"
                                        value={data.category?.name || " Select News Category"}
                                        readOnly={true}
                                    />
                                </Box>
                            </>
                        )
                    }

                    {
                        (type === 'news' || type === "about" || type === "contact") && (
                            <>
                                <Box full marginTop='2rem'>
                                    <HeaderTitleIcons
                                        title="Over Lapping Text"
                                        handelAddIcon={addInputField}
                                        handelRemoveIcon={removeField}
                                    />
                                </Box>
                            </>
                        )
                    }
                    {
                        Array.isArray(data.textAray) &&
                        data.textAray.map((item, index) => {
                            if (item.field === "input") {
                                return (
                                    <Box full key={item.id}>
                                        <Input
                                            inputype="text"
                                            type="addDataform"
                                            placeholder={item.placeholder}
                                            value={item.value}
                                            onChange={(event) => updateNestedValue(event, item.id, "value")}
                                        />
                                    </Box>
                                )
                            }
                            if (item.field === "textarea") {
                                return (
                                    <Box full key={item.id}>
                                        <Input.TextArea
                                            type="text"
                                            styleType="addDataArea"
                                            placeholder={item.placeholder}
                                            value={item.value}
                                            onChange={(event) => updateNestedValue(event, item.id, "value")}
                                        />
                                    </Box>
                                )
                            }
                        })
                    }

                    <Box>
                        <Dropdown
                            placeholder="Select Variation"
                            options={dData}
                            type="addDataform"
                            value={data.variation?.name}
                            updateValue={(value) => setData({ field: "variation", value: value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Sub Variation"
                            value={data.variation?.name}
                        />
                    </Box>

                    <Box>
                        <Dropdown
                            placeholder="Select Position"
                            options={dData}
                            type="addDataform"
                            value={data.position?.name}
                            updateValue={(value) => setData({ field: "position", value: value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Select Position"
                            value={data.position?.name}
                        />
                    </Box>

                    <ListItem />
                </InputContainer>
                <Button
                    type='showicon'
                >Show Media Icons</Button>
            </EditPageHeader>
        </>
    )
}

const PreviewSection = ({ data, type }) => {

    const nextPage = useCallback(() => {
        switch (type) {
            case "news":
                window.location.href = "/auth/news-detail";
                break;
            case "image":
                window.location.href = "/auth/image-list";
                break;
            case "event":
                window.location.href = "/auth/event-details";
                break;
            case "about":
                window.location.href = "/auth/text-img-about";
                break;
            case "contact":
                window.location.href = "/auth/faq";
                break;
            default:
                window.location.href = "/auth/viedo-list";
                break;
        }
    }, [type])

    return (
        <>
            <PreviewSectionHeader>

                <div
                    style={{
                        color: 'black',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(1, 2fr)',
                        girTemplateRows: 'repeat(2, 1fr)',
                        gridGap: '15px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    {
                        Array.isArray(data.textAray) &&
                        data.textAray.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.field === "input" && <h1>{item.value}</h1>}
                                    {item.field === "textarea" && <p>{item.value}</p>}
                                </div>
                            )
                        })
                    }
                    <br />

                </div>
                <PreviewBtnGroup
                    showEditorBtn={true}
                    nextPage={nextPage}
                />
            </PreviewSectionHeader>

        </>
    )
}

const initaValue = {
    textAray: [
        {
            id: 1,
            field: "input",
            value: "",
            placeholder: "Insert text header",
        },
        {
            id: 2,
            field: "textarea",
            value: "",
            placeholder: "Enter Your Text Here",
        }
    ],
    variation: "",
    subVariation: "",
    position: "",
    category: "",
}

const OverLapppinText = ({ type }) => {
    console.log(type);

    const reducer = (state, { field, value }) => {
        return {
            ...state,
            [field]: value
        }
    }

    const [data, setData] = useReducer(reducer, initaValue)

    return (
        <>
            <EditPageLayout>
                <InputSection
                    data={data}
                    setData={setData}
                    type={type.type}
                />
                <PreviewSection
                    data={data}
                    type={type.type}
                />
            </EditPageLayout>
        </>
    )
}

export default memo(OverLapppinText)