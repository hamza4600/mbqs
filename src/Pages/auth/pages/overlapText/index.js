import Dropdown from "components/dropdown"
import useDropDown from "components/dropdown/useDropdown"
import Input from "components/input"
import { EditPageHeader, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage"
import { Box, Container, InputContainer } from "page-componet/layout/style"
import { memo, useReducer } from "react"

const dData = [
    { id: 1, name: "Variation 1" },
    { id: 2, name: "Variation 2" },
    { id: 3, name: "Variation 3" },
    { id: 4, name: "Variation 4" },
    { id: 5, name: "Variation 5" },
];

const InputSection = ({ data, setData }) => {

    const { isOpen, toggle, close } = useDropDown()
    const { isOpen: isOpen2, toggle: toggle2, close: close2 } = useDropDown()

    // can addd more input field

    return (
        <>
            <EditPageHeader
                title="Over Lapping Text"
                // handelAddIcon={handleAddFields}
                // handelRemoveIcon={handleRemoveFields}
            >
                <InputContainer>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Insert text header"
                            value={data.textHeader}
                            onChange={event => setData({ field: "textHeader", value: event.target.value })}
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

                    <Box>
                        <Dropdown
                            placeholder="Select Variation"
                            options={dData}
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
                        <Dropdown
                            placeholder="Select Position"
                            options={dData}
                            type="addDataform"
                            isOpen={isOpen2}
                            toggel={toggle2}
                            close={close2}
                            value={data.position?.name}
                            updateValue={(value) => setData({ field: "position", value: value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Select Position"
                            value={data.positionValue}
                            onChange={event => setData({ field: "positionValue", value: event.target.value })}
                        />
                    </Box>

                    <ListItem />
                </InputContainer>

            </EditPageHeader>
        </>
    )
}

const PreviewSection = ({ data }) => {
    
    const nextPage = () => window.location.href = "/auth/viedo-list";

    return (
        <>
            <PreviewSectionHeader>

                <div>
                    <h1>
                        {data.textHeader}
                    </h1>
                    <p>
                        {data.textDetails}
                    </p>
                    <br />
                    <p>
                        {data.variation?.name}
                    </p>
                    <br />
                    <p>
                        {data.subVariation}
                    </p>
                    <br />
                    <p>
                        {data.position?.name}
                    </p>
                    <br />
                    <p>
                        {data.positionValue}
                    </p>

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
    textHeader: "",
    textDetail: "",
    variation: "",
    subVariation: "",
    position: "",
    positionValue: "",
}

const OverLapppinText = () => {

    const reducer = (state, { field, value }) => {
        return {
            ...state,
            [field]: value
        }
    }

    const [data, setData] = useReducer(reducer, initaValue)

    return (
        <>
            <Container>
                <InputSection
                    data={data}
                    setData={setData}
                />
                <PreviewSection
                    data={data}
                />
            </Container>
        </>
    )
}

export default memo(OverLapppinText)