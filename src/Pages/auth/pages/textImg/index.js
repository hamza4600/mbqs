import { memo, useReducer, useMemo, useCallback } from "react"
import Dropdown from "components/dropdown"
import Input from "components/input"
import { EditPageHeader, EditPageLayout, HeaderTitleIcons, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage"
import { Box, FileInput, InputContainer } from "page-componet/layout/style"
import { AddIcon, RemoveIcon } from "page-componet/iconbutton"
import useDropDown from "components/dropdown/useDropdown"
import Button from "components/button"
import { ReferWrapper } from "../creatBusi/style"
import { PreviewImage } from "./style"

const initalState = {
    variation: "",
    refence: [],
    section: [
        {
            id: 1,
            text: "text",
            row: [
                {
                    id: 1,
                    value: "",
                    placeholder: "Insert text header"
                },
                {
                    id: 2,
                    value: "",
                    placeholder: "Insert text title"
                }
            ]
        },
        {
            id: 2,
            text: "area",
            value: "",
        },
        {
            id: 3,
            text: "image",
            value: "",
        }
    ],

};

// drop down menu
const dData = [
    { id: 1, name: "Variation 1" },
    { id: 2, name: "Variation 2" },
    { id: 3, name: "Variation 3" },
];


const TextInputSection = ({ data, setData, type }) => {

    const { isOpen, toggle, close } = useDropDown()
    const { isOpen: isOpen2, toggle: toggle2, close: close2 } = useDropDown()
    const { isOpen: isOpen3, toggle: toggle3, close: close3 } = useDropDown()

    const addNewField = () => {
        const field = [...data.refence]
        for (let i = 0; i < 2; i++) {
            field.push({
                id: Math.floor(Math.random() * 1000),
                value: "",
                placeholder: i === 0 ? "Reference Link Name" : "Insert Reference URL",
            })
        }
        setData({ field: "refence", value: field })
    }

    const removeNewField = () => {
        let field = [...data.refence]
        if (field.length > 0) {
            field.splice(-2, 2)
        }
        setData({ field: "refence", value: field })
    }

    const handelNestedInput = (event, id) => {
        const fied = data.refence.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    value: event.target.value
                }
            }
            return item
        })
        setData({ field: "refence", value: fied })
    }

    // add and remove section 
    const addNewSection = () => {
        if (data.section.length > 12) return
        const section = [...data.section]
        for (let i = 0; i < 3; i++) {
            section.push({
                id: Math.floor(Math.random() * 1000),
                text: i === 0 ? "text" : i === 1 ? "area" : "image",
                value: i === 0 ? null : "",
                // if text then row 
                row: i === 0 ? [
                    {
                        id: Math.floor(Math.random() * 1000),
                        value: "",
                        placeholder: "Insert text header"
                    },
                    {
                        id: Math.floor(Math.random() * 1000),
                        value: "",
                        placeholder: "Insert text title"
                    }
                ] : null
            })
        }
        setData({ field: "section", value: section })
    }

    const removeNewSection = () => {
        let section = [...data.section]
        if (section.length > 3) {
            section.splice(-3, 3)
        }
        setData({ field: "section", value: section })
    }

    const updateNestedValue = (event, id, row) => {

        if (row !== undefined) {
            const fied = data.section.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        row: item.row.map((item) => {
                            if (item.id === row) {
                                return {
                                    ...item,
                                    value: event.target.value
                                }
                            }
                            return item
                        })
                    }
                }
                return item
            })
            setData({ field: "section", value: fied })
        } else {
            const fied = data.section.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        value: event.target.value
                    }
                }
                return item
            })
            setData({ field: "section", value: fied })
        }
    }
    // addImage to the section
    const addImage = (event, id) => {
        const field = data.section.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    value: {
                        name: event.target.files[0].name,
                        url: URL.createObjectURL(event.target.files[0])
                    }
                }
            }
            return item
        })
        setData({ field: "section", value: field })
    }

    // type
    console.log(type)
    return (
        <>
            <EditPageHeader
                title={type === "about" ? "Add About Page" : "Text & Image"}
                handelAddIcon={addNewSection}
                handelRemoveIcon={removeNewSection}
                hideIcon={type === "about" ? true : false}
            >
                <InputContainer>
                    {
                        type === "about" && (
                            <>
                                <Box>
                                    <Dropdown
                                        // placeholder="Select Business"
                                        isOpen={isOpen2}
                                        toggel={toggle2}
                                        close={close2}
                                        options={dData}
                                        type="addDataform"
                                        value={data.category?.name}
                                        updateValue={(value) => setData({ field: "category", value: value })}
                                    />
                                    <Input
                                        inputype="text"
                                        type="addDataform"
                                        placeholder="Section Name"
                                        value={data.category?.name || " Select Category"}
                                        readOnly={true}
                                    />
                                </Box>
                                <Box>
                                    <Dropdown
                                        placeholder="Select Page"
                                        isOpen={isOpen3}
                                        toggel={toggle3}
                                        close={close3}
                                        options={dData}
                                        type="addDataform"
                                        value={data.category?.name}
                                        updateValue={(value) => setData({ field: "category", value: value })}
                                    />
                                    <Input
                                        inputype="text"
                                        type="addDataform"
                                        placeholder="Section Name"
                                        value={data.category?.name || " Select Category"}
                                        readOnly={true}
                                    />
                                </Box>

                                <Box full marginTop='2rem'>
                                    <HeaderTitleIcons
                                        title="Text & Image"
                                        handelAddIcon={addNewSection}
                                        handelRemoveIcon={removeNewSection}
                                    />
                                </Box>
                            </>
                        )
                    }
                    {
                        data.section.map((item, index) => {
                            if (item.text === "text" && item.row) {
                                return (
                                    <Box key={index}>
                                        {item.row.map((ite, index) => (
                                            <>
                                                <Input
                                                    key={index}
                                                    inputype="text"
                                                    type="addDataform"
                                                    placeholder={ite.placeholder}
                                                    value={ite.value}
                                                    onChange={(event) => updateNestedValue(event, item.id, ite.id)}
                                                />
                                            </>
                                        )
                                        )}
                                    </Box>
                                )
                            } else if (item.text === "area") {
                                return (
                                    <Box full key={index}>
                                        <Input.TextArea
                                            type="text"
                                            styleType="addDataArea"
                                            placeholder="Enter Your Text Here"
                                            value={item.value}
                                            onChange={(event) => updateNestedValue(event, item.id)}
                                        />
                                    </Box>
                                )
                            } else if (item.text === "image") {
                                return (
                                    <FileInput key={index}>

                                        <label
                                            htmlFor="file"
                                        >
                                            {item.value?.name ? item.value?.name : "Drop Image"}
                                        </label>
                                        <input
                                            accept="image/*"
                                            type="file"
                                            id="file"
                                            name="file"
                                            onInput={(event) => addImage(event, item.id)}
                                            onClick={(e) => e.target.value = null}
                                        />
                                    </FileInput>
                                )
                            }
                        }
                        )
                    }

                    <Box>
                        <Dropdown
                            options={dData}
                            placeholder="Select Variation"
                            type="addDataform"
                            isOpen={isOpen}
                            toggel={toggle}
                            close={close}
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

                    <ReferWrapper>
                        {
                            data.refence.length > 0 && data.refence.map((item, index) => (
                                <div key={index}>
                                    <input
                                        type="text"
                                        placeholder={item.placeholder}
                                        id={item.id}
                                        value={item.value}
                                        onChange={(e) => handelNestedInput(e, item.id)}
                                    />
                                </div>
                            ))
                        }
                    </ReferWrapper>
                    <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        <AddIcon onClick={addNewField} />
                        <RemoveIcon onClick={removeNewField} />
                    </div>

                    <ListItem />
                </InputContainer>
                <Button
                    type='showicon'
                >Show Media Icons</Button>
            </EditPageHeader>
        </>
    )
}

const TextPreviewSection = ({ data , type }) => {

    const nextPage = useCallback(() => {
        if (type === "about") {
            window.location.href = "/auth/add-about-list";
        } else {
            window.location.href = "/auth/overlap-text-business";
        }
    } , [type])

    const requiredData = useMemo(() => {
        let arr = [];
        let subArr = [];
        let row = [];

        for (let i = 0; i < data.section.length; i++) {
            const item = data.section[i];
            if (item.text === "text") {
                // add value of text in row
                row = item.row.map((item) => {
                    return {
                        ...item,
                        value: item.value,
                    };
                });
                subArr.push({
                    type: "text",
                    row: row
                });
            } else if (item.text === "area") {
                // add value of area in row 
                row.push({
                    type: "area",
                    value: item.value,
                });
            } else if (item.text === "image") {
                subArr.push({
                    type: "image",
                    url: item.value.url,
                    name: item.value.name,
                });
            }

            if (subArr.length === 2) {
                arr.push(subArr);
                subArr = [];
            }
        }

        if (subArr.length > 0) {
            arr.push(subArr);
        }

        return arr;
    }, [data]);

    return (
        <>
            <PreviewSectionHeader>
                <PreviewImage>
                    <div id='grid'>
                        {
                            requiredData.map((item, index) => (
                                <div className="item" key={index}>
                                    {item.map((ite, index) => (
                                        <div id="txt" key={index}>
                                            {ite.type === "text" ? (
                                                <>
                                                    {ite.row.map((ite, index) => (
                                                        index === 0 ?
                                                            <h1 key={index}>{ite.value}</h1> :
                                                            <p key={index} id={ite.type ? ite.type : null}>{ite.value}</p>
                                                    ))}
                                                </>
                                            )
                                                : ite.type === "image" ? (
                                                    <>
                                                        <img
                                                            src={ite.url}
                                                            alt={ite.name}
                                                        />
                                                    </>
                                                ) : null}
                                        </div>
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                </PreviewImage>

                <PreviewBtnGroup
                    showEditorBtn
                    nextPage={nextPage}
                />
            </PreviewSectionHeader>
        </>
    )
}

const TextImage = ({ type }) => {

    // reducer function
    const reducer = (state, { field, value }) => {
        return {
            ...state,
            [field]: value,
        };
    };

    const [data, setData] = useReducer(reducer, initalState);

    return (
        <>
            <EditPageLayout>
                <TextInputSection
                    data={data}
                    setData={setData}
                    type={type.type}
                />
                <TextPreviewSection
                    data={data}
                    type={type.type}
                />
            </EditPageLayout>

        </>
    )
}

export default memo(TextImage)