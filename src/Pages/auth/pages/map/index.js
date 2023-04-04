import { useState } from "react";

import Button from "components/button";
import Dropdown from "components/dropdown";
import Input from "components/input";
import {
    EditPageHeader,
    EditPageLayout,
    HeaderTitleIcons,
    ListItem,
    PreviewBtnGroup,
    PreviewSectionHeader,
} from "page-componet/layout/editPage";
import { Box, InputContainer } from "page-componet/layout/style";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import small from "./small.png"
import medium from "./large.png"

const EditSection = ({ state, setState }) => {
    
    console.log(state)

    return (
        <>
            <EditPageHeader title="Add Contact Page" hideIcon={true}>
                <InputContainer>
                    <Box>
                        <Dropdown
                            placeholder="Select News Category"
                            type="addDataform"
                            value={state.selectedfield?.name}
                            updateValue={(value) => setState({ ...state, selectedfield: value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Section Name"
                            readOnly={true}
                            value={state.selectedfield?.name}
                        />
                    </Box>
                    <Box full marginTop="2rem">
                        <HeaderTitleIcons
                            title="MAP"
                            hideIcon={true}
                        />
                    </Box>
                    <Box full marginTop="2rem">
                        <img src={small} alt="map" />
                    </Box>
                    
                    <ListItem/>
                </InputContainer>
                <Button type="showicon">Show Media Icons</Button>
            </EditPageHeader>
        
        </>
    )
}

const PreviewSection = ({ state }) => {

    const nextPage = () => {
        window.location.href = "/auth/add-contact-list"
    }
    return (
        <>
            <PreviewSectionHeader>
                
                <img src={medium} alt="map" />
                <PreviewBtnGroup
                    nextPage={nextPage}
                />
            </PreviewSectionHeader>
        </>
    )
}


const Index = () => {
    
    const [state, setState] = useState({
        selectedfield: "",
        map : {
            lat: 0,
            lng: 0,
            zoom: 0,
        }
    })

    return (
        <>
            <EditPageLayout>
                <EditSection state={state} setState={setState} />
                <PreviewSection state={state} />
            </EditPageLayout>
        </>
    )
}

export default Index