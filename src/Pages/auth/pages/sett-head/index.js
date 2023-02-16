import { useReducer } from "react";

import { H1 } from "components/a";
import Input from "components/input";
import useDropDown from "components/dropdown/useDropdown";
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

  const { isOpen, toggle, close } = useDropDown();
  const { isOpen: isOpen2, toggle: toggle2, close: close2 } = useDropDown();
  const { isOpen: isOpen3, toggle: toggle3, close: close3 } = useDropDown();
  const { isOpen: isOpen4, toggle: toggle4, close: close4 } = useDropDown();
  const { isOpen: isOpen5, toggle: toggle5, close: close5 } = useDropDown();
  const { isOpen: isOpen6, toggle: toggle6, close: close6 } = useDropDown();
  const { isOpen: isOpen7, toggle: toggle7, close: close7 } = useDropDown();

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
              isOpen={isOpen}
              toggel={toggle}
              close={close}
              value={data.dropdown.city}
              updateValue={(value) => handelDropdown(value.name, "city")}
            />
          </WrapperHAF>
          <WrapperHAF>
            <Dropdown
              placeholder="Select State"
              isOpen={isOpen2}
              toggel={toggle2}
              close={close2}
              value={data.dropdown.state}
              updateValue={(value) => handelDropdown(value.name, "state")}
            />
            <Dropdown
              placeholder="Select Country"
              isOpen={isOpen3}
              toggel={toggle3}
              close={close3}
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
              isOpen={isOpen4}
              toggel={toggle4}
              close={close4}
              value={data.dropdown.category}
              updateValue={(value) => handelDropdown(value.name, "category")}
            />
            <Dropdown
              placeholder="Select Closing Days"
              isOpen={isOpen5}
              toggel={toggle5}
              close={close5}
              value={data.dropdown.category}
              updateValue={(value) => handelDropdown(value.name, "category")}
            />
          </WrapperHAF>
          <WrapperHAF>
            <Dropdown
              placeholder="Select Opening Time"
              isOpen={isOpen6}
              toggel={toggle6}
              close={close6}
              value={data.dropdown.category}
              updateValue={(value) => handelDropdown(value.name, "category")}
            />
            <Dropdown
              placeholder="Select Closing Time"
              isOpen={isOpen7}
              toggel={toggle7}
              close={close7}
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
