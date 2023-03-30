import { useEffect, useState } from "react"

import Button from "components/button"
import { EditPageHeader, EditPageLayout, HeaderTitleIcons, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage"
import { Box, InputContainer } from "page-componet/layout/style"
import Dropdown from "components/dropdown"
import Input from "components/input"
import useDropDown from "components/dropdown/useDropdown"
import { ReferWrapper } from "../creatBusi/style"
import { AddIcon, RemoveIcon } from "page-componet/iconbutton"


const EditSection = ({ state, setState }) => {

    const { isOpen, toggle, close } = useDropDown()

    useEffect(() => {
        addNewField()
        addSection()
    }, [])

    const addNewField = () => {
        const { referenceArray } = state
        for (let i = 0; i < 2; i++) {
            referenceArray.push({
                id: Math.floor(Math.random() * 1000),
                value: "",
                placeholder: i === 0 ? "Reference Link Name" : "Insert Reference URL",
            })
        }
        setState({ ...state, referenceArray })
    }

    const removeNewField = () => {
        const { referenceArray } = state
        if (referenceArray.length > 2) {
            referenceArray.splice(-2, 2)
            setState({ ...state, referenceArray })
        }
    }

    const addSection = () => {
        const { sectionArray } = state
        const array = []
       
        for(let i = 0; i < 3; i++) {
            array.push({
                id: Math.floor(Math.random() * 1000),
                value: "",
                placeholder: i === 0 ? "Insert point 1 header" : `Insert ${i} point here`,
                type: i === 0 ? "text" : "area",
            })
        }
        sectionArray.push(array)
        setState({ ...state, sectionArray })
    }

    const removeSection = () => {
        const { sectionArray } = state
        if (sectionArray.length > 1) {
            sectionArray.splice(-1, 1)
            setState({ ...state, sectionArray })
        }
    }

    const handelNestedInput = (event, id) => {
        const fied = state.referenceArray.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    value: event.target.value
                }
            }
            return item
        })
     setState ({ ...state, referenceArray: fied })
    }
    
    const updateNestedValue = (event, id , subId ) => {
        const fied = state.sectionArray.map((item) => {
            if (item.id === id) {
                return item.map((ite) => {
                    if (ite.id === subId) {
                        return {
                            ...ite,
                            value: event.target.value
                        }
                    }
                    return ite
                })
            }
            return item
        })
        setState ({ ...state, sectionArray: fied })
    }
    
    return (
        <>
            <EditPageHeader
                title="Add Privacy Page"
                hideIcon={true}
            >
                <InputContainer>
                    <Box>
                        <Dropdown
                            placeholder={"Select Business"}
                            isOpen={isOpen}
                            toggel={toggle}
                            close={close}
                            type="addDataform"
                            value={state.selectCategory?.name}
                            updateValue={(value) => setState({ ...state, selectCategory: value })}
                        />
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Section Name"
                            value={state.selectCategory?.name || " Select Category"}
                            readOnly={true}
                        />
                    </Box>

                    <Box full marginTop='2rem'>
                        <HeaderTitleIcons
                            title="Privacy Policy"
                        handelAddIcon={addSection}
                        handelRemoveIcon={removeSection}
                        />
                    </Box>

                    {/* section Array */}
                    {
                        state.sectionArray.map((item, index) => (
                            <div key={index} id="flex">
                                { item.map((ite, index) => (
                                    <Box full key={item.id}>
                                        {ite.type === "text" ? (
                                            <Input
                                                key={ite.id}
                                                inputype="text"
                                                type="addDataform"
                                                placeholder={ite.placeholder}
                                            value={ite.value}
                                            onChange={(event) => updateNestedValue(event, item.id , ite.id)}
                                            />
                                        ) : (
                                            <Input.TextArea
                                                key={ite.id}    
                                                type="text"
                                                styleType="addDataArea"
                                                placeholder="Enter Your Text Here"
                                                value={item.value}
                                            onChange={(event) => updateNestedValue(event, item.id , ite.id)}
                                            />
                                        )}
                                    </Box>
                                ))}
                            </div>
                        ))
                    }


                    {/* reference Array */}
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
                <Button
                    type='showicon'
                >Show Media Icons</Button>
            </EditPageHeader>

        </>
    )
}
const PreviewSection = ({ state }) => {
    
    const nextpage = () => {
        window.location.href = '/auth/privacy-list'
    }

    return (
        <>
            <PreviewSectionHeader>

                <PreviewBtnGroup
                    nextPage = {nextpage}
                    showEditorBtn = {true}
                />
            </PreviewSectionHeader>
        </>
    )
}

const Index = () => {
    const [state, setState] = useState({
        selectBusiness: null,
        sectionArray: [],
        referenceArray: [],
    })

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
export default Index