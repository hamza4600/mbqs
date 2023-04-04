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

const EditSection = ({ state, setState }) => {
    const addNewSection = () => {
        let { textAray } = state;
        for (let i = 0; i < 2; i++) {
            textAray.push({
                id: Math.floor(Math.random() * 1000),
                field: i === 0 ? "input" : "textarea",
                placeholder: i === 0 ? "Insert text header" : "Enter Your Text Here",
                value: "",
            });
        }
        setState({ ...state, textAray: textAray });
    };

    const removeNewSection = () => {
        let { textAray } = state;
        if (textAray.length > 2) {
            textAray.splice(textAray.length - 2, 2);
            setState({ ...state, textAray: textAray });
        }
    };

    const updateNestedValue = (event, id) => {
        let { textAray } = state;
        let index = textAray.findIndex((item) => item.id === id);
        textAray[index].value = event.target.value;
        setState({ ...state, textAray: textAray });
    };
    
    console.log(state);
    return (
        <>
            <EditPageHeader title="Header Image Slider" hideIcon={true}>
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
                            title="FAQ"
                            handelAddIcon={addNewSection}
                            handelRemoveIcon={removeNewSection}
                        />
                    </Box>

                    {Array.isArray(state.textAray) &&
                        state.textAray.map((item, index) =>
                            item.field === "input" ? (
                                <Box full key={item.id}>
                                    <Input
                                        inputype="text"
                                        type="addDataform"
                                        placeholder={item.placeholder}
                                        value={item.value}
                                        onChange={(event) => updateNestedValue(event, item.id)}
                                    />
                                </Box>
                            ) : (
                                <Box full key={item.id}>
                                    <Input.TextArea
                                        type="text"
                                        styleType="addDataArea"
                                        placeholder={item.placeholder}
                                        value={item.value}
                                        onChange={(event) => updateNestedValue(event, item.id)}
                                    />
                                </Box>
                            )
                        )
                    }
                    <ListItem />
                </InputContainer>
                <Button type="showicon">Show Media Icons</Button>
            </EditPageHeader>
        </>
    );
};

const PreviewSection = ({ state }) => {

    const nextPage = () => { window.location.href = "/auth/contact-details"};

    return (
        <>
            <PreviewSectionHeader>
                {
                    Array.isArray(state.textAray) &&
                        state.textAray.map((item, index) =>
                            item.field === "input" ? (
                                <h1 key={item.id}>{item.value}</h1>
                            ) : (
                                <p key={item.id}>{item.value}</p>
                            )
                        )
                }
                <PreviewBtnGroup
                    nextPage={nextPage}
                />
            </PreviewSectionHeader>
        </>
    );
};

const Index = () => {
    const [state, setState] = useState({
        selectedfield: "",
        textAray: arr,
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

const arr = [
    {
        id: 1,
        field: "input",
        value: "",
        placeholder: "Insert text header",
    },
    {
        id: 2,
        field: "textarea",
        value: "",
        placeholder: "Enter Your Text Here",
    },
];
