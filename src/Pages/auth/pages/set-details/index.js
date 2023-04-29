import { useReducer } from "react";
import styled from "styled-components";

import Input from "components/input";
import Dropdown from "components/dropdown";
import {
    EditPageHeader,
    EditPageLayout,
    HeaderTitleIcons,
    PreviewBtnGroup,
    PreviewSectionHeader,
} from "page-componet/layout/editPage";
import { Box, InputContainer } from "page-componet/layout/style";

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
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    },
    changeEmail: {
        newEmail : ""
    }
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

const business = [
    { id: 1, name: "Mian Builder" },
    { id: 2, name: "Cash Paring" },
    { id: 3, name: "MBIQS" },
    { id: 4, name: "Miner Man" },
    { id: 5, name: "Ev Fog" },
]

const LeftSection = ({data , setData}) => (
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
                            value= {"Select Details"}
                            id = "moz321"
                        />
                    </Box>                    
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Username"
                            value = {data.loginDetails.userName}
                            onChange={(e) => setData(e,  "loginDetails", "userName")}
                        />
                    </Box>

                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Contact"
                            value = {data.loginDetails.password}
                            onChange={(e) => setData(e,  "loginDetails", "password")}
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
                            value= {"Select Details"}
                            id = "moz321"
                        />
                    </Box>
                    <Box full>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter your old password"
                            value = {data.changePassword.oldPassword}
                            onChange={(e) => setData(e,  "changePassword", "oldPassword")}
                        />
                    </Box>
                    <Box>
                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Enter new password"
                            value = {data.changePassword.newPassword}
                            onChange={(e) => setData(e,  "changePassword", "newPassword")}
                        />

                        <Input
                            inputype="text"
                            type="addDataform"
                            placeholder="Re-Enter your new password"
                            value = {data.changePassword.confirmPassword}
                            onChange={(e) => setData(e,  "changePassword", "confirmPassword")}
                        />
                    </Box>
                </PreviewSectionHeader>
            </PageWrapper>
        </>
);

const Index = () => {
    const [data, setData] = useReducer((state, action) => {
        return { ...state, [action.type]: action.value };
    }, initialState);

    const handelDropdown = (value, name) => {
        setData({ type: name, value: value });
    };

    const handelChange = (e, node , subNode) => {
        if(subNode){
            setData({ type: node , value: {...data[node] , [subNode] : e.target.value } });
        }
    }

    const handalSubmit = () => {
        console.log(data);
    }

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
                                value={data.selectBusines}
                                type="addDataform"
                                updateValue={(value) =>
                                    handelDropdown(value.name, "selectBusines")
                                }
                                options= {business}

                            />
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Select Business "
                                value={data.selectBusines}
                                readOnly
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
                                value = {"Select Details"}
                                id = "moz321"
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Full Name"
                                value={data.register.name}
                                onChange={(e) => handelChange(e, "register" , "name")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Contact"
                                value={data.register.contact}
                                onChange={(e) => handelChange(e, "register" , "contact")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="E-mail"
                                value={data.register.email}
                                onChange={(e) => handelChange(e, "register" , "email")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Password"
                                value={data.register.password}
                                onChange={(e) => handelChange(e, "register" , "password")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter your Password Again"
                                value={data.register.confirmPassword}
                                onChange={(e) => handelChange(e, "register" , "confirmPassword")}
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
                                value = {"Select Details"}
                                type="addDataform"
                                id = "moz321"
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Full Name"
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter the OTP verification code"
                                value= {data.forgetPassword.otp}
                                onChange={(e) => handelChange(e, "forgetPassword" , "otp")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter new password"
                                value= {data.forgetPassword.nextPassword}
                                onChange={(e) => handelChange(e, "forgetPassword" , "nextPassword")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter your new password again"
                                value= {data.forgetPassword.newPassword}
                                onChange={(e) => handelChange(e, "forgetPassword" , "newPassword")}
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
                                value = {"Select Details"}
                                id = "moz321"
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter your new email address"
                                value= {data.changeEmail.newEmail}
                                onChange={(e) => handelChange(e, "changeEmail" , "newEmail")}
                            />
                        </Box>
                    </InputContainer>
                </EditPageHeader>

                <LeftSection
                  data = {data}
                  setData = {handelChange}
                />
                                
            </EditPageLayout>
            <PreviewBtnGroup
                relative = {true}
                frontView = {false}
                nextPage = {handalSubmit}
                nextBtnText="Save & Exit"
            />
        </>
    );
};

export default Index;
