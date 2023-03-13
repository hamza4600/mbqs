import Dropdown from "components/dropdown"
import useDropDown from "components/dropdown/useDropdown"
import Input from "components/input"
import { EditPageHeader, EditPageLayout, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage"
import { Box, InputContainer } from "page-componet/layout/style"
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

const PreviewSection = ({ data , type }) => {

    // const nextPage = () => window.location.href = "/auth/viedo-list";
    const nextPage = () => {
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
    }

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