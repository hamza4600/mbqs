import Dropdown from "components/dropdown"
import Input from "components/input"
import { EditPageHeader, EditPageLayout, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage"
import { Box, FileInput, InputContainer } from "page-componet/layout/style"
import { AddIcon, RemoveIcon } from "page-componet/iconbutton"
import useDropDown from "components/dropdown/useDropdown"
import { memo, useReducer } from "react"
import Button from "components/button"
import { ReferWrapper } from "../creatBusi/style"

const initalState = {
    textHeader: "",
    textTitle: "",
    textDetails: "",
    textImage: { name: "", url: "" },
    variation: "",
    refence: []
};

// drop down menu
const dData = [
    { id: 1, name: "Variation 1" },
    { id: 2, name: "Variation 2" },
    { id: 3, name: "Variation 3" },
];


const TextInputSection = ({ data, setData }) => {

    const { isOpen, toggle, close } = useDropDown()

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
        console.log("add new section")
    }

    const removeNewSection = () => {
        console.log("remove new section")
    }


    return (
        <>
            <EditPageHeader
                title="Text & Image"
                handelAddIcon = {addNewSection}
                handelRemoveIcon = {removeNewSection}
            >
                <InputContainer>
                
                    {/* new section  */}
                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Insert text header"
                            value={data.textHeader}
                            onChange={event => setData({ field: "textHeader", value: event.target.value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Insert text title"
                            value={data.textTitle}
                            onChange={event => setData({ field: "textTitle", value: event.target.value })}
                        />
                    </Box>

                    <Box full>
                        <Input.TextArea
                            type="text"
                            styleType="addDataArea"
                            placeholder="Enter Your Text Here"
                            value={data.textDetails}
                            onChange={event => setData({ field: "textDetails", value: event.target.value })}
                        />
                    </Box>

                    <FileInput >
                        <label
                            htmlFor="file"
                        >
                            {data.textImage.name ? data.textImage.name : "Drop Image"}
                        </label>
                        <input
                            accept="image/*"
                            type="file"
                            id="file"
                            name="file"
                            onInput={event => setData(
                                {
                                    field: "textImage", value: {
                                        name: event.target.files[0].name,
                                        url: URL.createObjectURL(event.target.files[0])
                                    }
                                })}
                            onClick={(e) => e.target.value = null}
                        />
                    </FileInput>

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

const TextPreviewSection = ({ data }) => {

    const nextPage = () => window.location.href = "/auth/overlap-text-business";
    return (
        <>
            <PreviewSectionHeader>

                <div>
                    <h1>{data.textHeader}</h1>
                    <h2>{data.textTitle}</h2>
                    <p>{data.textDetails}</p>

                    <picture>
                        <img
                            style={{
                                maxWidth: "350px",
                                maxHeight: "350px",
                                objectFit: "cover",
                            }}
                            src={data.textImage.url}
                            alt={data.textImage.name}
                        />
                    </picture>
                </div>

                <PreviewBtnGroup
                    showEditorBtn
                    nextPage={nextPage}
                />
            </PreviewSectionHeader>

        </>
    )
}

const TextImage = () => {

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
                />
                <TextPreviewSection
                    data={data}
                />
            </EditPageLayout>

        </>
    )
}

export default memo(TextImage)