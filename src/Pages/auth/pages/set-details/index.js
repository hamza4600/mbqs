import { useReducer } from "react";

import Input from "components/input";
import Dropdown from "components/dropdown";
import {
    EditPageHeader,
    EditPageLayout,
    HeaderTitleIcons,
    PreviewSectionHeader,
} from "page-componet/layout/editPage";
import { Box, InputContainer } from "page-componet/layout/style";
import styled from "styled-components";

const initialState = {
    selectBusines: "",
    details: "",
    register: {
        name: "",
        contact: "",
        email: "",
        password: "",
        confirmPassword: "",
    },
    forgetPassword: {
        otpCode: "",
        nextPassword: "",
        newPassword: "",
    },
    loginDetails: {
        userName: "",
        password: "",
    },
    changePassword: {
        userName: "",
        userPassword: "",
    },
};

const PageWrapper = styled.div`
    #left {
        background-color: unset;
    }

    .margin {
        display: none;
    }

    #left > div {
       width: 85% !important;
    }

    @media screen and (max-width: 768px) {
        #left > div:nth-child(2) {
            margin-top: 0;
        }

        #left > div {
          width: 95% !important;
        }
    }
`;
const LeftSection = ({data , setData}) => {
    return (
        <>
            <PageWrapper id="wrapper">
                <PreviewSectionHeader>
                    <Box full marginTop="7.2rem">
                        <HeaderTitleIcons
                            title="Login Form Details"
                            hideIcon
                        />
                    </Box>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Full Name"
                            // value={data.companyName}
                            // onChange={(e) => handelChange(e, "companyName")}
                        />
                    </Box>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Contact"
                            // value={data.address}
                            // onChange={(e) => handelChange(e, "address")}
                        />
                    </Box>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="E-mail"
                            // value={data.companyName}
                            // onChange={(e) => handelChange(e, "companyName")}
                        />
                    </Box>
                    
                    <Box full marginTop="3rem">
                        <HeaderTitleIcons
                            title="Change Password"
                            hideIcon
                        />
                    </Box>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Full Name"
                            // value={data.companyName}
                            // onChange={(e) => handelChange(e, "companyName")}
                        />
                    </Box>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Contact"
                            // value={data.address}
                            // onChange={(e) => handelChange(e, "address")}
                        />
                    </Box>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="E-mail"
                            // value={data.companyName}
                            // onChange={(e) => handelChange(e, "companyName")}
                        />
                    </Box>
                </PreviewSectionHeader>
            </PageWrapper>
        </>
    );
};

const Index = () => {
    const [data, setData] = useReducer((state, action) => {
        return { ...state, [action.type]: action.value };
    }, initialState);

    console.log(data);
    return (
        <>
            <EditPageLayout>
                <EditPageHeader
                    EditPageHeader
                    hideIcon={true}
                    title="Login Setup"
                >
                    <InputContainer>
                        <Box>
                            <Dropdown
                                placeholder="Select Business"
                                // value={data.dropdown.business}
                                // updateValue={(value) =>
                                //     handelDropdown(value.name, "business")
                                // }
                            />
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Select Business "
                                // value={data.dropdown.business}
                            />
                        </Box>

                        <Box full marginTop="2rem">
                            <HeaderTitleIcons
                                title="Register Form Details"
                                hideIcon
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Full Name"
                                // value={data.companyName}
                                // onChange={(e) => handelChange(e, "companyName")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Contact"
                                // value={data.address}
                                // onChange={(e) => handelChange(e, "address")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="E-mail"
                                // value={data.companyName}
                                // onChange={(e) => handelChange(e, "companyName")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Password"
                                // value={data.address}
                                // onChange={(e) => handelChange(e, "address")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter your Password Again"
                                // value={data.address}
                                // onChange={(e) => handelChange(e, "address")}
                            />
                        </Box>

                        <Box full marginTop="2rem">
                            <HeaderTitleIcons
                                title="Forget Password Details"
                                hideIcon
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Full Name"
                                // value={data.companyName}
                                // onChange={(e) => handelChange(e, "companyName")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Contact"
                                // value={data.address}
                                // onChange={(e) => handelChange(e, "address")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="E-mail"
                                // value={data.companyName}
                                // onChange={(e) => handelChange(e, "companyName")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Password"
                                // value={data.address}
                                // onChange={(e) => handelChange(e, "address")}
                            />
                        </Box>

                        <Box full marginTop="2rem">
                            <HeaderTitleIcons
                                title="Change Email Address"
                                hideIcon
                            />
                        </Box>
                        <Box full>
                            <Input  
                                inputype="text"
                                type="addDataform"
                                placeholder="Full Name"
                                // value={data.companyName}
                                // onChange={(e) => handelChange(e, "companyName")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Contact"
                                // value={data.address}
                                // onChange={(e) => handelChange(e, "address")}
                            />
                        </Box>
                    </InputContainer>
                </EditPageHeader>

                {/* Left Section */}
                <LeftSection
                  data = {data}
                  setData = {setData}
                />
            </EditPageLayout>
        </>
    );
};

export default Index;
