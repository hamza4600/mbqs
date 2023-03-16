import { memo, useEffect, useReducer } from "react";
import Button from "components/button";
import Dropdown from "components/dropdown";
import useDropDown from "components/dropdown/useDropdown";
import Input from "components/input";
import { EditPageHeader, EditPageLayout, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage";
import { Box, FileInput, InputContainer } from "page-componet/layout/style";

const viedoType = [
    { id: 1, name: "drop viedo" }, // drop viedo
    { id: 2, name: "enter viedo url" }, // insert viedo url
]

const ViedoInput = ({ data, setData }) => {

    const { isOpen, toggle, close } = useDropDown()

    useEffect(() => {
        setData({ field: "selectViedoType", value: viedoType[0] })
    }, [])

    return (
        <>
            <EditPageHeader
                title="Videos List"
            >
                <InputContainer>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Insert list header"
                            value={data.textHeader}
                            onChange={event => setData({ field: "textHeader", value: event.target.value })}
                        />
                    </Box>
                    <Box full>
                        <Dropdown
                            options={viedoType}
                            placeholder="Select Viedo Type"
                            type="addDataform"
                            isOpen={isOpen}
                            toggel={toggle}
                            close={close}
                            value={data.selectViedoType?.name}
                            updateValue={(value) => setData({ field: "selectViedoType", value: value })}
                        />
                    </Box>

                    {
                        data.selectViedoType?.id === 1 ?
                            <>
                                <Box full>
                                    <Input
                                        inputype="text"
                                        type="addDataform"
                                        placeholder="Add Viedo Title"
                                        value={data.viedoTitle}
                                        onChange={event => setData({ field: "viedoTitle", value: event.target.value })}
                                    />
                                </Box>
                                <FileInput >
                                    <label
                                        htmlFor="file"
                                    >
                                        {data.viedo.name ? data.viedo.name : "Drop Viedo Here"}
                                    </label>
                                    <input
                                        accept="video/*"
                                        type="file"
                                        id="file"
                                        name="file"
                                        onInput={event => setData(
                                            {
                                                field: "viedo", value: {
                                                    name: event.target.files[0].name,
                                                    url: URL.createObjectURL(event.target.files[0])
                                                }
                                            })}
                                        onClick={(e) => e.target.value = null}
                                    />
                                </FileInput>
                            </>
                            :
                            <>
                                <Box>
                                    <Input
                                        inputype="url"
                                        type="addDataform"
                                        placeholder="Insert Viedo Url"
                                        value={data.viedoUrl}
                                        onChange={event => setData({ field: "viedoUrl", value: event.target.value })}
                                    />
                                    <Input
                                        inputype="text"
                                        type="addDataform"
                                        placeholder="Add Viedo Title"
                                        value={data.viedoTitle}
                                        onChange={event => setData({ field: "viedoTitle", value: event.target.value })}
                                    />
                                </Box>
                            </>
                    }
                    <ListItem />
                </InputContainer>
                <Button
                    type='showicon'
                >Show Media Icons</Button>
            </EditPageHeader>
        </>
    )
}

const ViedoPreview = ({ data }) => {

    const nextPage = () => window.location.href = "/auth/brand-slider";

    return (
        <>
            <PreviewSectionHeader>

                <div>
                    <h1>{data.textHeader}</h1>

                    <br />
                    <p>{data.textTitle}</p>
                    <br />

                    {
                        // data.selectViedoType?.id === 1 ?
                        data.viedo.url && (
                            <video
                                style={{
                                    maxWidth: "80%",
                                }}
                                src={data.viedo.url}
                                controls
                            />
                        )
                    }
                    {
                        data.viedoUrl && (
                            <div>
                                {/* https://www.youtube.com/embed/2g811Eo7K8U */}
                                <h1>{data.viedoTitle}</h1>
                            </div>
                        )
                    }

                </div>

                <PreviewBtnGroup
                    showEditorBtn={true}
                    nextPage={nextPage}
                />
            </PreviewSectionHeader>
        </>
    )
}

const initatState = {
    textHeader: "",
    selectViedoType: "",
    textTitle: "",
    viedo: {
        name: "",
        url: ""
    },
    //  two types of viedo 
    // 1. drop viedo
    // 2. insert viedo url
    viedoList: [],
    viedoUrl: "",
    viedoTitle: ""
}

const ViedoList = () => {

    const [data, setData] = useReducer((state, action) => {
        return {
            ...state,
            [action.field]: action.value
        }
    }, initatState);

    return (
        <>
            <EditPageLayout>
                <ViedoInput
                    data={data}
                    setData={setData}
                />
                <ViedoPreview
                    data={data}
                />
            </EditPageLayout>
        </>
    );
}
// need updated
export default memo(ViedoList);