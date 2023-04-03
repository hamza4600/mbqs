import { useReducer } from "react";

import { H1 } from "components/a";
import Input from "components/input";
import Dropdown from "components/dropdown";

import { WrapperHAF , GridHAF } from "./styled";

const initialState = {
  companyName: "",
  address: "",
  postalCode: "",
  cmpName: "",
  webUrl: "",
  contactNo: "",
  officeNo: "",
  headerMame: "",
  dropdown: {
    city: "",
    state: "",
    country: "",
    openingDays: "",
    closingDays: "",
    openingTime: "",
    closingTime: ""
  },
};

const SettingHeaderFooter = () => {

  const handelChange = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };
  const handelDropdown = (value, index) => {
    dispatch({ type: "dropdown", value: { name: index, value: value } });
  };
  // const [data, dispatch] = useReducer(reducer, initialState);
  const [data, dispatch] = useReducer((state, action) => {
    return { ...state, [action.type]: action.value }
  }, initialState)

  return (
    <>
      <GridHAF>
        <div className="rightSide">
          <H1>Footer</H1>
          <Input
            inputype="text"
            type="addDataMenu"
            placeholder="Enter the company Name"
            value={data.companyName}
            id="companyName"
            onChange={handelChange}
          />
          <Input
            inputype="text"
            type="addDataMenu"
            placeholder="Enter Address"
            value={data.address}
            id="address"
            onChange={handelChange}
          />
          <WrapperHAF>
            <Input
              inputype="text"
              type="addData"
              placeholder="Enter Postal code "
              value={data.postalCode}
              id="postalCode"
              onChange={handelChange}
            />

            <Dropdown
              placeholder="Select City"
              value={data.dropdown.city}
              updateValue={(value) => handelDropdown(value.name, "city")}
            />
          </WrapperHAF>
          <WrapperHAF>
            <Dropdown
              placeholder="Select State"
              value={data.dropdown.state}
              updateValue={(value) => handelDropdown(value.name, "state")}
            />
            <Dropdown
              placeholder="Select Country"
              value={data.dropdown.category}
              updateValue={(value) => handelDropdown(value.name, "category")}
            />
          </WrapperHAF>
          <Input
            inputype="Enter the Emails"
            type="addDataMenu"
            placeholder="Full Name"
            value={data.cmpName}
            id="cmpName"
            onChange={handelChange}
          />
          <Input
            inputype="text"
            type="addDataMenu"
            placeholder="Enter the website URL"
            value={data.webUrl}
            id="webUrl"
            onChange={handelChange}
          />
          <Input
            inputype="text"
            type="addDataMenu"
            placeholder="Enter the Mobile Contact Numbers"
            value={data.contactNo}
            id="contactNo"
            onChange={handelChange}
          />
          <Input
            inputype="text"
            type="addDataMenu"
            placeholder="Enter the Office Contact Numbers"
            value={data.officeNo}
            id="officeNo"
            onChange={handelChange}
          />
          <WrapperHAF>
            <Dropdown
              placeholder="Select Opening Days"
              value={data.dropdown.category}
              updateValue={(value) => handelDropdown(value.name, "category")}
            />
            <Dropdown
              placeholder="Select Closing Days"
              value={data.dropdown.category}
              updateValue={(value) => handelDropdown(value.name, "category")}
            />
          </WrapperHAF>
          <WrapperHAF>
            <Dropdown
              placeholder="Select Opening Time"
              value={data.dropdown.category}
              updateValue={(value) => handelDropdown(value.name, "category")}
            />
            <Dropdown
              placeholder="Select Closing Time"
              value={data.dropdown.category}
              updateValue={(value) => handelDropdown(value.name, "category")}
            />
          </WrapperHAF>
        </div>
        <div className="leftSide">
          <p>Header</p>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Enter the Company Name "
            value={data.headerMame}
            id="headerMame"
            onChange={handelChange}
          />

        </div>
      </GridHAF>
    </>
  );
};

export default SettingHeaderFooter;
