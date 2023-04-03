import { useState } from "react";

import Button from "components/button";
import Dropdown from "components/dropdown";
import Input from "components/input";
import { EditPageHeader, EditPageLayout, HeaderTitleIcons, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage";
import { Box, InputContainer } from "page-componet/layout/style";

const EditSection = ({ state, setState }) => {
  return (
    <>
        <EditPageHeader
            title="Header Image Slider"
            hideIcon = {true}
        >
            <InputContainer>
                <Box>
                    <Dropdown
                        placeholder="Select News Category"
                        type="addDataform"
                        // value={data.category?.name}
                        // updateValue={(value) => setData({ field: "category", value: value })}
                    />
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Section Name"
                        readOnly={true}
                    />
                </Box>
                <Box full marginTop="2rem">
                    <HeaderTitleIcons 
                        title="Add Text"
                    />

                </Box>

                {
                    Array.isArray(state.textAray) &&
                        state.textAray.map((item, index) => (
                            item.field === "input" ? (
                                <Box full key={item.id}>
                                    <Input
                                        inputype="text"
                                        type="addDataform"
                                        placeholder={item.placeholder}
                                        // value={item.value}
                                        // onChange={(event) => updateNestedValue(event, item.id, "value")}
                                    />
                                </Box>
                            ) : (
                                <Box full key={item.id}>
                                    <Input.TextArea
                                        type="text"
                                        styleType="addDataArea"
                                        placeholder={item.placeholder}
                                        // value={item.value}
                                        // onChange={(event) => updateNestedValue(event, item.id, "value")}
                                    />
                                </Box>
                            )
                        ))
                    }
                <ListItem />
            </InputContainer>
            <Button
                    type='showicon'
                >Show Media Icons</Button>
        </EditPageHeader>
    </>
  );
};

const PreviewSection = ({ state }) => {
  return (
       <>
            <PreviewSectionHeader>
                <PreviewBtnGroup
                    showEditorBtn={true}
                    // nextPage={nextPage}
                />
            </PreviewSectionHeader>
       </>
  ) ;
};

const Index = () => {

    const [state, setState] = useState({
        selectedfield : "",
        textAray: arr
    });

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
    }
];
