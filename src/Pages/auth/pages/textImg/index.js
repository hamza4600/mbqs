import Dropdown from "components/dropdown"
import Input from "components/input"
import { EditPageHeader, EditPageLayout, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage"
import { Box, FileInput, InputContainer } from "page-componet/layout/style"
import { AddIcon, RemoveIcon } from "page-componet/iconbutton"
import useDropDown from "components/dropdown/useDropdown"
import { memo, useReducer } from "react"

const initalState = {
    textHeader: "",
    textTitle: "",
    textDetails: "",
    textImage: { name: "", url: "" },
    variation: "",
    subVariation: "",
    refenceLink: "",
    refenceUrl: "",
};

// drop down menu
const dData = [
    { id: 1, name: "Variation 1" },
    { id: 2, name: "Variation 2" },
    { id: 3, name: "Variation 3" },
    { id: 4, name: "Variation 4" },
    { id: 5, name: "Variation 5" },
];


const TextInputSection = ({ data, setData }) => {

    const { isOpen, toggle, close } = useDropDown()

    return (
        <>
            <EditPageHeader
                title="Text & Image"
            >
                <InputContainer>

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
                            {data.textImage.name ? data.textImage.name : "Drop Image Here"}
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
                            placeholder="Select Motion"
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
                            value={data.subVariation}
                            onChange={event => setData({ field: "subVariation", value: event.target.value })}
                        />
                    </Box>

                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Reference Link Name"
                            value={data.refenceLink}
                            onChange={event => setData({ field: "refenceLink", value: event.target.value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Reference Link Url"
                            value={data.refenceUrl}
                            onChange={event => setData({ field: "refenceUrl", value: event.target.value })}
                        />
                    </Box>
                    <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        <AddIcon />
                        <RemoveIcon />
                    </div>

                    <ListItem />
                </InputContainer>
            </EditPageHeader>
        </>
    )
}

const TextPreviewSection = ({ data }) => {

    const nextPage = () => window.location.href = "/auth/overlap-text";
    return (
        <>
            <PreviewSectionHeader>

                <div>
                    <h1>{data.textHeader}</h1>
                    <h2>{data.textTitle}</h2>
                    <p>{data.textDetails}</p>

                    <picture>
                        <img
                            src={data.textImage.url}
                            alt={data.textImage.name}
                        />
                    </picture>
                </div>

                <p>
                    <span>{data.variation?.name}</span>
                    <span>{data.subVariation}</span>
                </p>
                <p>
                    <span>{data.refenceLink}</span>
                </p>
                <p>
                    <span>{data.refenceUrl}</span>
                </p>

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
        if (value === "" || value === undefined || value === " ") return state;
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