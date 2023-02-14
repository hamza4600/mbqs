import Dropdown from "components/dropdown";
import useDropDown from "components/dropdown/useDropdown";
import Input from "components/input";
import { AddIcon, RemoveIcon } from "page-componet/iconbutton";
import { EditPageHeader, EditPageLayout, HeaderTitleIcons, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage";
import { Box, FileInput, InputContainer } from "page-componet/layout/style";
import { memo, useReducer } from "react";

const dData = [
    { id: 1, name: "Variation 1" },
    { id: 2, name: "Variation 2" },
    { id: 3, name: "Variation 3" },
    { id: 4, name: "Variation 4" },
]
const NewEditSection = ({ data, setData }) => {
    const { isOpen, toggle, close } = useDropDown();

    return (
        <>
            <EditPageHeader
                title="Add News Page"
                hideIcon={true}
            >
                <InputContainer>
                    <Box>
                        <Dropdown
                            placeholder="Select Category"
                            options={dData}
                            type="addDataform"
                            isOpen={isOpen}
                            toggel={toggle}
                            close={close}
                            value={data.selectCategory?.name}
                            updateValue={(value) => setData({ field: "selectCategory", value: value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Insert text header"
                            value={data.selectCategory?.name || "Select Category"}
                        />
                    </Box>

                    <Box full marginTop="2rem">
                        <HeaderTitleIcons
                            title="News Details"
                        // handelAddIcon={}
                        // handelRemoveIcon={}
                        />
                    </Box>

                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Insert text header"
                            value={data.newHeader}
                            onChange={(e) => setData({ field: "newHeader", value: e.target.value })}
                        />
                    </Box>

                    <Box full>
                        <Input.TextArea
                            type="text"
                            styleType="addDataArea"
                            placeholder="Enter Your Text Here"
                            value={data.newDetail}
                            onChange={(e) => setData({ field: "newDetail", value: e.target.value })}
                        />
                    </Box>

                    <FileInput>
                        <label htmlFor="photo">
                            {data.image.name || "Drop Slider Files"}
                        </label>
                        <input
                            accept="image/*"
                            type="file"
                            id="photo"
                            name="file"
                            onInput={(e) => setData({
                                field: "image",
                                value: {
                                    name: e.target.files[0].name,
                                    url: URL.createObjectURL(e.target.files[0])
                                }
                            })}
                            onClick={(e) => e.target.value = null}
                        />
                    </FileInput>

                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Insert text header"
                            value={data.refName}
                            onChange={(e) => setData({ field: "refName", value: e.target.value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Insert text header"
                            value={data.refLink}
                            onChange={(e) => setData({ field: "refLink", value: e.target.value })}
                        />
                    </Box>
                    <div
                        style={{ display: "flex", justifyContent: "end" }}
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

const NewsPreviewSection = ({ data }) => {
    return (
        <>
            <PreviewSectionHeader>
 
                <h2 >{data.selectCategory?.name}</h2>
                <h1 >{data.newHeader}</h1>
                <p >{data.newDetail}</p>

                {
                    data.image.url && <img src={data.image.url} alt="" />
                }

                <h2 >{data.refName}</h2>
                <h2 >{data.refLink}</h2>

                <PreviewBtnGroup
                    showEditorBtn={true}
                />
            </PreviewSectionHeader>
        </>
    )
}

const initialValue = {
    selectCategory: "",
    newHeader: "",
    newDetail: "",
    image: { name: "", url: "" },
    refName: "",
    refLink: "",
}

const Index = () => {

    const reducer = (state, { field, value }) => {
        return {
            ...state,
            [field]: value
        }
    }

    const [data, setData] = useReducer(reducer, initialValue)

    return (
        <>
            <EditPageLayout>
                <NewEditSection
                    data={data}
                    setData={setData}
                />
                <NewsPreviewSection
                    data={data}
                />
            </EditPageLayout>
        </>
    )
}

export default memo(Index)