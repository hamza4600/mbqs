import Dropdown from "components/dropdown"
import useDropDown from "components/dropdown/useDropdown"
import Input from "components/input"
import { EditPageHeader, EditPageLayout, HeaderTitleIcons, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage"
import { Box, FileInput, InputContainer } from "page-componet/layout/style"
import { useReducer } from "react"

const dData = [
    { id: 1, name: "News Category 1" },
    { id: 2, name: "News Category 2" },
    { id: 3, name: "News Category 3" },
    { id: 4, name: "News Category 4" },
]

const EditSection = ({ state, setState }) => {

    const { isOpen, toggle, close } = useDropDown();
    const { isOpen: isOpen2, toggle: toggle2, close: close2 } = useDropDown();

    return (
        <>
            <EditPageHeader
                title="Add New Page"
                hideIcon={true}
            >
                <InputContainer>
                    <Box>
                        <Dropdown
                            placeholder="Select News Category"
                            isOpen={isOpen}
                            toggel={toggle}
                            close={close}
                            options={dData}
                            type="addDataform"
                            value={state.selectCategory?.name}
                            updateValue={(value) => setState({ field: "selectCategory", value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Section Name"
                            value={state.selectCategory?.name || " Select News Category"}
                            readOnly={true}
                        />
                    </Box>

                    <Box full marginTop="2rem" >
                        <HeaderTitleIcons
                            title="Header Image Slider"
                            iconText="All Images should be of same sizes "
                        />
                    </Box>

                    <Dropdown
                        placeholder="Select Motion"
                        isOpen={isOpen2}
                        options={dData}
                        toggel={toggle2}
                        close={close2}
                        value={state.selectMotion?.name}
                        updateValue={(value) => setState({ field: "selectMotion", value })}
                        type="addMotion"
                    />

                    <FileInput large>
                        <label
                            htmlFor="file"
                        >
                            {state.textImage.name ? state.textImage.name : "Drop Image Here"}
                        </label>
                        <input
                            accept="image/*"
                            type="file"
                            id="file"
                            name="file"
                            onChange={event => setState(
                                {
                                    field: "textImage", value: {
                                        name: event.target.files[0].name,
                                        url: URL.createObjectURL(event.target.files[0])
                                    }
                                })}
                        />
                    </FileInput>

                    <FileInput large >
                        <label
                            htmlFor="file"
                        >
                            {state.viedo.name ? state.viedo.name : "Drop Viedo Here"}
                        </label>
                        <input
                            accept="video/*"
                            type="file"
                            id="file"
                            name="file"
                            onChange={event => setState(
                                {
                                    field: "viedo", value: {
                                        name: event.target.files[0].name,
                                        url: URL.createObjectURL(event.target.files[0])
                                    }
                                })}
                        />
                    </FileInput>
                    <ListItem />
                </InputContainer>
            </EditPageHeader>
        </>
    )
}

const PreviewSection = ({ state }) => {
    console.log(state)
    return (
        <>
            <PreviewSectionHeader>
                <div>
                    <p>{state.selectCategory?.name}</p>
                    <br />
                    <p>{state.selectMotion?.name}</p>
                    <br />
                    <img src={state.textImage.url} alt={state.textImage.name} />
                    <br />
                    {
                        state.viedo.url && (
                            <>
                                <video
                                    src={state.viedo.url}
                                    controls
                                    width="100%"
                                    height="100%"
                                />
                            </>
                        )
                    }
                </div>


                <PreviewBtnGroup />
            </PreviewSectionHeader>
        </>
    )
}

const initaiValue = {
    selectCategory: "",
    selectMotion: "",
    textImage: { name: "", url: "" },
    viedo: { name: "", url: "" }

}

const CreatnewPage = () => {

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
                />
                <PreviewSection
                    state={state}
                />
            </EditPageLayout>
        </>
    )
}

export default CreatnewPage