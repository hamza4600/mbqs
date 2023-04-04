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
import { Box, FileInput, InputContainer } from "page-componet/layout/style";
import { ReferWrapper } from "../creatBusi/style";
import { AddIcon, RemoveIcon } from "page-componet/iconbutton";

const EditSection = ({ state, setState }) => {
    
    const handelNestedInput = (e, index) => {
        const newData = state.referenceArray.map((item , i) => (
            item.id === index ? {...item, value: e.target.value} : item
        ))
        setState({...state, referenceArray: newData})
    }

    const addNewField = () => {
        const { referenceArray } = state;
        for (let i = 0; i < 2; i++) {
            referenceArray.push({
                id: Math.floor(Math.random() * 1000),
                value: "",
                placeholder:
                    i === 0 ? "Reference Link Name" : "Insert Reference URL",
            });
        }
        setState({ ...state, referenceArray });
    };

    const removeNewField = () => {
        const { referenceArray } = state;
        if (referenceArray.length > 2) {
            referenceArray.splice(-2, 2);
            setState({ ...state, referenceArray });
        }
    };

    console.log(state);
    return (
        <>
            <EditPageHeader title="Add Contact Page" hideIcon={true}>
                <InputContainer>
                    <Box>
                        <Dropdown
                            placeholder="Select Business"
                            type="addDataform"
                            value={state.selectedfield?.name}
                            updateValue={(value) =>
                                setState({ ...state, selectedfield: value })
                            }
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
                        <HeaderTitleIcons title="Contact Details" hideIcon />
                    </Box>
                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter the Emails"
                            value={state.email}
                            onChange={(e) =>
                                setState({ ...state, email: e.target.value })
                            }
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter the Contact Numbers"
                            value={state.business}
                            onChange={(e) =>
                                setState({ ...state, business: e.target.value })
                            }
                        />
                    </Box>
                    <Box full>
                        <FileInput>
                            <label htmlFor="file">
                                {state.img.name
                                    ? state.img.name
                                    : "Drop Business Logo"}
                            </label>
                            <input
                                accept="image/*"
                                type="file"
                                id="file"
                                name="file"
                                onInput={(event) =>
                                    setState({
                                        ...state,
                                        img: {
                                            name: event.target.files[0].name,
                                            url: URL.createObjectURL(
                                                event.target.files[0]
                                            ),
                                        },
                                    })
                                }
                                onClick={(e) => (e.target.value = null)}
                            />
                        </FileInput>
                    </Box>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter the Websites URL"
                            value={state.webUrl}
                            onChange={(e) =>
                                setState({ ...state, webUrl: e.target.value })
                            }
                        />
                    </Box>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter Address"
                            value={state.address}
                            onChange={(e) =>
                                setState({ ...state, address: e.target.value })
                            }
                        />
                    </Box>
                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter Postal Code"
                            value={state.postCode}
                            onChange={(e) =>
                                setState({ ...state, postCode: e.target.value })
                            }
                        />
                       <Dropdown
                            placeholder="Select City"
                            type="addDataform"
                            value={state.city?.name}
                            updateValue={(value) => setState({ ...state, city: value })}
                        />
                    </Box>
                    <Box>
                        <Dropdown
                            placeholder="Select State"
                            type="addDataform"
                            value={state.state?.name}
                            updateValue={(value) => setState({ ...state, state: value })}
                        />
                        <Dropdown
                            placeholder="Select Country"
                            type="addDataform"
                            value={state.country?.name}
                            updateValue={(value) => setState({ ...state, country: value })}
                        />
                    </Box>
                    <Box>
                        <Dropdown
                            placeholder="Select Opening Time"
                            type="addDataform"
                            value={state.openingTime?.name}
                            updateValue={(value) => setState({ ...state, openingTime: value })}
                        />
                        <Dropdown
                            placeholder="Select Closing Days"
                            type="addDataform"
                            value={state.closingTime?.name}
                            updateValue={(value) => setState({ ...state, closingTime: value })}
                        />
                    </Box>
                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter Your Twitter URL"
                            value={state.socialMedia.twitter}
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    socialMedia: {
                                        ...state.socialMedia,
                                        twitter: e.target.value,
                                    },
                                })
                            }
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter Your Facebook URL"
                            value={state.socialMedia.facebook}
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    socialMedia: {
                                        ...state.socialMedia,
                                        facebook: e.target.value,
                                    },
                                })
                            }
                        />
                    </Box>
                    
                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter your YouTube URL"
                            value={state.socialMedia.youtube}
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    socialMedia: {
                                        ...state.socialMedia,
                                        youtube: e.target.value,
                                    },
                                })
                            }
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter Your Instagram URL  "
                            value={state.socialMedia.instagram}
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    socialMedia: {
                                        ...state.socialMedia,
                                        instagram: e.target.value,
                                    },
                                })
                            }
                        />
                    </Box>
                        {/* reference Links */}
                    
                        <ReferWrapper>
                        {
                            state.referenceArray.map((item, index) => (
                                <>
                                    <input
                                        key={item.id}
                                        type="text"
                                        placeholder={item.placeholder}
                                        id={item.id}
                                        value={item.value}
                                        onChange={(e) => handelNestedInput(e, item.id)}
                                    />
                                </>
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
                <Button type="showicon">Show Media Icons</Button>
            </EditPageHeader>
        </>
    );
};

const PreviewSection = ({ state }) => {
    const nextPage = () => {window.location.href = "/auth/map"};
    return (
        <>
            <PreviewSectionHeader>

                <PreviewBtnGroup nextPage={nextPage} />
            </PreviewSectionHeader>
        </>
    );
};

const Index = () => {
    const [state, setState] = useState({
        business: "",
        email: "",
        contact: "",
        img: {},
        webUrl: "",
        address: "",
        postCode: "",
        city: "",
        state: "",
        country: "",
        openingDay: "",
        closingDay: "",
        openingTime: "",
        closingTime: "",
        socialMedia: {
            facebook: "",
            twitter: "",
            instagram: "",
            youtube: "",
        },
        referenceArray: [
            {
                id: 1,
                placeholder: "Reference Link Name",
                value: "",
            },
            {
                id: 2,
                placeholder: "Insert Reference URL",
                value: "",
            }
        ],
    });
    return (
        <>
            <EditPageLayout>
                <EditSection state={state} setState={setState} />
                <PreviewSection state={state} />
            </EditPageLayout>
        </>
    );
};

export default Index;
