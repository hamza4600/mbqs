import Dropdown from "components/dropdown"
import Input from "components/input"
import { EditPageHeader, ListItem, PreviewBtnGroup, PreviewSectionHeader } from "page-componet/layout/editPage"
import { Container, InputContainer } from "page-componet/layout/style"
import { FileInput } from "../bgImag/styled"
import { Box, TextWrapper } from "./style"


const TextInputSection = () => {
    return (
        <>
            <EditPageHeader
                title="Text & Image"
            >
                <InputContainer>

                    <Box>
                        <Input
                            inputype="text"
                            type="addData"
                            placeholder="Email"
                            id="email"
                        />
                        <Input
                            inputype="text"
                            type="addData"
                            placeholder="Email"
                            id="email"
                        />
                    </Box>

                    <TextWrapper>
                        <Input.TextArea
                            type="text"
                            placeholder="Enter Your Text Here"
                            // value={data.compDetails}
                            id="details"
                        // onChange={handelChange}
                        />
                    </TextWrapper>

                    <FileInput >
                        <label
                        // htmlFor={inputField.id}
                        >
                            {/* {inputField.name} */}
                            Drop Image Here
                        </label>
                        <input
                            // id={index + 1}
                            // onChange={event => handleInputChange(inputField.id, event)}
                            accept="image/*"
                            type="file"
                        />
                    </FileInput>


                    <Box>
                        <Dropdown
                            placeholder="Select Motion"
                            // isOpen={isOpen}
                            // options={motions}
                            // toggel={toggle}
                            // close={close}
                            // value={data.name}
                            // updateValue={(value) => setData(value)}
                            type="addData"
                        />
                        <Input
                            inputype="text"
                            type="addData"
                            placeholder="Email"
                            id="email"
                        />
                    </Box>

                    <Box>
                        <Input
                            inputype="text"
                            type="addData"
                            placeholder="Email"
                            id="email"
                        />
                        <Input
                            inputype="text"
                            type="addData"
                            placeholder="Email"
                            id="email"
                        />
                    </Box>

                    <ListItem />
                </InputContainer>
            </EditPageHeader>
        </>
    )
}

const TextPreviewSection = () => {
    return (
        <>
            <PreviewSectionHeader>
                <PreviewBtnGroup />
            </PreviewSectionHeader>

        </>
    )
}

const TextImage = () => {
    return (
        <>
            <Container>
                <TextInputSection />
                <TextPreviewSection />
            </Container>

        </>
    )
}

export default TextImage