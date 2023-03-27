import { memo, useReducer } from "react"
import { H1 } from "components/a"
import Dropdown from "components/dropdown"
import useDropDown from "components/dropdown/useDropdown"
import Input from "components/input"
import { EditPageHeader, EditPageLayout, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage"
import { FileInput } from "page-componet/layout/style"
import { Box, InputContainer } from "page-componet/layout/style"
import map from "./map.png"
import Button from "components/button"
import { ReferWrapper } from "../creatBusi/style"
import { AddIcon, RemoveIcon } from "page-componet/iconbutton"

const dData = [
    { id: 1, name: "News Category 1" },
    { id: 2, name: "News Category 2" },
    { id: 3, name: "News Category 3" },
    { id: 4, name: "News Category 4" },
];

const EditDetailSection = ({ state, setState }) => {

    const { isOpen, toggle, close } = useDropDown();
    const { isOpen: isOpen2, toggle: toggle2, close: close2 } = useDropDown();
    const { isOpen: isOpen3, toggle: toggle3, close: close3 } = useDropDown();

    const handelAddNewField = () => {
        let copy = [...state.refarance]
        for (let i = 0; i < 2; i++) {
            copy.push({
                id: Math.floor(Math.random() * 1000),
                value: "",
                placeholder: i === 0 ? "Reference Link Name" : "Insert Reference URL"
            })
        }
        setState({
            field: 'refarance',
            value: copy
        })
    }

    const handelRemoveField = () => {
        let copy = [...state.refarance];
        if (copy.length > 2) {
            copy.splice(-2, 2);
            setState({
                field: 'refarance',
                value: copy
            })
        }
    }

    return (
        <>
            <EditPageHeader
                title="Event Details"
                hideIcon={true}
            >
                <InputContainer>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Insert text header"
                            value={state.header}
                            onChange={(e) => setState({ field: "header", value: e.target.value })}
                        />
                    </Box>
                    <Box full>
                        <Input.TextArea
                            type="text"
                            styleType="addData"
                            placeholder="Enter Your Text Here"
                            value={state.descritpion}
                            onChange={(e) => setState({ field: "descritpion", value: e.target.value })}
                        />
                    </Box>
                    <FileInput>
                        <label
                            htmlFor="photo"
                        >
                            {state.image.name || "Drop Image Here"}
                        </label>
                        <input
                            accept="image/*"
                            type="file"
                            id="photo"
                            name="file"
                            onInput={event => setState(
                                {
                                    field: "image",
                                    value: {
                                        name: event.target.files[0].name,
                                        url: URL.createObjectURL(event.target.files[0])
                                    }
                                })}
                            onClick={(e) => e.target.value = null}
                        />
                    </FileInput>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter Address"
                            value={state.address}
                            onChange={(e) => setState({ field: "address", value: e.target.value })}
                        />
                    </Box>
                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter Postal Code"
                            value={state.postalCode}
                            onChange={(e) => setState({ field: "postalCode", value: e.target.value })}
                        />
                        <Dropdown
                            placeholder="Select City"
                            options={dData}
                            type="addDataform"
                            isOpen={isOpen}
                            toggel={toggle}
                            close={close}
                            value={state.city?.name}
                            updateValue={(value) => setState({ field: "city", value: value })}
                        />

                    </Box>
                    <Box>
                        <Dropdown
                            placeholder="Select State"
                            options={dData}
                            type="addDataform"
                            isOpen={isOpen2}
                            toggel={toggle2}
                            close={close2}
                            value={state.state?.name}
                            updateValue={(value) => setState({ field: "state", value: value })}
                        />
                        <Dropdown
                            placeholder="Select Country"
                            options={dData}
                            type="addDataform"
                            isOpen={isOpen3}
                            toggel={toggle3}
                            close={close3}
                            value={state.country?.name}
                            updateValue={(value) => setState({ field: "country", value: value })}
                        />
                    </Box>
                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Hall ID"
                            value={state.hallId}
                            onChange={(e) => setState({ field: "hallId", value: e.target.value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Exibation ID"
                            value={state.exibationId}
                            onChange={(e) => setState({ field: "exibationId", value: e.target.value })}
                        />
                    </Box>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Event Date"
                            value={state.eventDate}
                            onChange={(e) => setState({ field: "eventDate", value: e.target.value })}
                        />
                    </Box>
                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Opening Hours"
                            value={state.openingHours}
                            onChange={(e) => setState({ field: "openingHours", value: e.target.value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Closing Hours"
                            value={state.closingHours}
                            onChange={(e) => setState({ field: "closingHours", value: e.target.value })}
                        />
                    </Box>
                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="No of Vistor"
                            value={state.noOfVistor}
                            onChange={(e) => setState({ field: "noOfVistor", value: e.target.value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Ticket Price"
                            value={state.ticketPrice}
                            onChange={(e) => setState({ field: "ticketPrice", value: e.target.value })}
                        />
                    </Box>

                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Sponser"
                            value={state.sponser}
                            onChange={(e) => setState({ field: "sponser", value: e.target.value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Partners"
                            value={state.partners}
                            onChange={(e) => setState({ field: "partners", value: e.target.value })}
                        />
                    </Box>
                    <FileInput>
                        <label
                            htmlFor="photo"
                        >
                            {state.sliderfile.name || "Drop File Here"}
                        </label>
                        <input
                            accept="image/*"
                            type="file"
                            id="photo"
                            name="file"
                            onInput={event => setState(
                                {
                                    field: "sliderfile",
                                    value: {
                                        name: event.target.files[0].name,
                                        url: URL.createObjectURL(event.target.files[0])
                                    }
                                })}
                            onClick={(e) => e.target.value = null}
                        />
                    </FileInput>
                    <Box full><H1>Select Location on Map</H1></Box>
                    <Box full>
                        <img
                            style={
                                {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }
                            }
                            src={map} alt="map" />
                    </Box>

                    {/* Map APi Call */}

                    <ReferWrapper>
                        {
                            state.refarance.map((item, index) => (
                                <div key={item.id} id="mxn">
                                    <input
                                        type="text"
                                        placeholder={item.placeholder}
                                        id={item.id}
                                    // value={item.value}
                                    // onChange={(e) => handelNestedInput(e, item.id)}
                                    />
                                </div>
                            ))
                        }
                    </ReferWrapper>
                    <div
                        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
                    >
                        <AddIcon
                            onClick={handelAddNewField}
                        />
                        <RemoveIcon
                            onClick={handelRemoveField}
                        />
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

const PreviewDetailSection = ({ state }) => (
    <>
        <PreviewSectionHeader>

            <pre>{JSON.stringify(state, null, 4)}</pre>

            <PreviewBtnGroup
                nextPage={() => window.location.href = "/auth/add-event-list"}
                showEditorBtn
                nextBtnText={'Save & Exit to list'}
            />
        </PreviewSectionHeader>
    </>
)

const initaiValue = {
    header: "",
    descritpion: "",
    image: { name: "", url: "" },
    address: "",
    postCode: "",
    city: "",
    state: "",
    country: "",
    hallId: "",
    exibationId: "",
    eventDate: "",
    openeingHours: "",
    closingHours: "",
    noOfVistor: "",
    tickPrice: "",
    sponser: "",
    partner: "",
    sliderfile: { name: "", url: "" },
    map: "",
    refarance: [
        {
            id: 1,
            name: "",
            placeholder: "Reference Link Name",
            value: "",
        },
        {
            id: 2,
            name: "",
            placeholder: "Insert Reference URL",
            value: "",
        }
    ]
};

const Index = () => {

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
                <EditDetailSection
                    state={state}
                    setState={setState}
                />
                <PreviewDetailSection
                    state={state}
                />
            </EditPageLayout>
        </>
    )
}

export default memo(Index)