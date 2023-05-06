import { useReducer } from "react";

import Input from "components/input";
import Dropdown from "components/dropdown";
import {
    EditPageHeader,
    EditPageLayout,
    HeaderTitleIcons,
} from "page-componet/layout/editPage";
import { Box, FileInput, InputContainer } from "page-componet/layout/style";

const initialState = {
    companyName: "",
    address: "",
    postalCode: "",
    email: "",
    webUrl: "",
    mobileNo: "",
    officeNo: "",
    logo: {},
    viedo: {},
    img: {},
    name2: "",
    logo2: {},
    dropdown: {
        business: "",
        city: "",
        state: "",
        country: "",
        openingDays: "",
        closingDays: "",
        openingTime: "",
        closingTime: "",
    },
};

const SettingHeaderFooter = () => {

    const [data, dispatch] = useReducer((state, action) => {
        return { ...state, [action.type]: action.value };
    }, initialState);

    const handelChange = (e , index) => {
        dispatch({
            type: index,
            value: e.target.value,
         })
    };

    const handelDropdown = (value, index) => {
        dispatch({
            type: "dropdown",
            value: {
                ...data.dropdown,
                [index]: value,
            },
        });
    };

    console.log(data);
    return (
        <>
            <EditPageLayout>
                <EditPageHeader hideIcon={true} title="Header & Footer">
                    <InputContainer>
                        <Box>
                            <Dropdown
                                placeholder="Select City"
                                value={data.dropdown.business}
                                updateValue={(value) =>
                                    handelDropdown(value.name, "business")
                                }
                            />
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Select Business "
                                value={data.dropdown.business}
                            />
                        </Box>

                        <Box full marginTop="2rem">
                            <HeaderTitleIcons title="Footer" hideIcon />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter the Company Name"
                                value={data.companyName}
                                onChange={(e) =>handelChange(e , "companyName")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter Address"
                                value={data.address}
                                onChange={(e) =>handelChange(e , "address")}
                            />
                        </Box>
                        <Box>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter Postal code "
                                value={data.postalCode}
                                onChange={(e) =>handelChange(e , "postalCode")}
                            />
                            <Dropdown
                                placeholder="Select City"
                                value={data.dropdown.city}
                                updateValue={(value) =>
                                    handelDropdown(value.name, "city")
                                }
                            />
                        </Box>

                        <Box>
                            <Dropdown
                                placeholder="Select State"
                                value={data.dropdown.state}
                                updateValue={(value) =>
                                    handelDropdown(value.name, "state")
                                }
                            />
                            <Dropdown
                                placeholder="Select Country"
                                value={data.dropdown.country}
                                updateValue={(value) =>
                                    handelDropdown(value.name, "country")
                                }
                            />
                        </Box>

                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter the Email"
                                value={data.email}
                                onChange={(e) =>handelChange(e , "email")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter the Websites URL"
                                value={data.webUrl}
                                onChange={(e) =>handelChange(e , "webUrl")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter the Mobile Contact Numbers"
                                value={data.mobileNo}
                                onChange={(e) =>handelChange(e , "mobileNo")}
                            />
                        </Box>
                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter the Office Contact Numbers"
                                value={data.officeNo}
                                onChange={(e) =>handelChange(e , "officeNo")}
                            />
                        </Box>

                        <Box>
                            <Dropdown
                                placeholder="Select Opening Days "
                                value={data.dropdown.openingDays}
                                updateValue={(value) =>
                                    handelDropdown(value.name, "openingDays")
                                }
                            />
                            <Dropdown
                                placeholder="Select Closing Days "
                                value={data.dropdown.closingDays}
                                updateValue={(value) =>
                                    handelDropdown(value.name, "closingDays")
                                }
                            />
                        </Box>

                        <Box>
                            <Dropdown
                                placeholder="Select Opening Time "
                                value={data.dropdown.openingTime}
                                updateValue={(value) =>
                                    handelDropdown(value.name, "openingTime")
                                }
                            />
                            <Dropdown
                                placeholder="Select Closing Time "
                                value={data.dropdown.closingTime}
                                updateValue={(value) =>
                                    handelDropdown(value.name, "closingTime")
                                }
                            />
                        </Box>

                        <FileInput>
                            <label htmlFor={`file-`}>Drop Logo</label>
                            <input
                                accept="image/*"
                                type="file"
                                id={`file-`}
                                onClick={(e) => (e.target.value = null)}
                            />
                        </FileInput>
                        <Box>
                            <FileInput>
                                <label htmlFor={`file-`}>Drop Video</label>
                                <input
                                    accept="image/*"
                                    type="file"
                                    id={`file-`}
                                    onClick={(e) => (e.target.value = null)}
                                />
                            </FileInput>{" "}
                            <FileInput>
                                <label htmlFor={`file-`}>Drop Image</label>
                                <input
                                    accept="image/*"
                                    type="file"
                                    id={`file-`}
                                    onClick={(e) => (e.target.value = null)}
                                />
                            </FileInput>
                        </Box>

                        <Box full marginTop="2rem">
                            <HeaderTitleIcons title="Header" hideIcon />
                        </Box>

                        <Box full>
                            <Input
                                inputype="text"
                                type="addDataform"
                                placeholder="Enter the Company Name"
                                value={data.name2}
                                onChange={(e) =>handelChange(e , "name2")}
                            />
                        </Box>
                        <FileInput>
                            <label htmlFor={`file-`}>Drop Logo</label>
                            <input
                                accept="image/*"
                                type="file"
                                id={`file-`}
                                onClick={(e) => (e.target.value = null)}
                            />
                        </FileInput>
                    </InputContainer>
                </EditPageHeader>
            </EditPageLayout>
        </>
    );
};

export default SettingHeaderFooter;
