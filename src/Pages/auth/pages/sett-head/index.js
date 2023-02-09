import Input from "components/input";
import useDropDown from "components/dropdown/useDropdown";
import Dropdown from "components/dropdown";
import { WrapperHAF } from "./styled";
import { GridHAF } from "./styled";
import { useReducer } from "react";
import { Wrapper } from "components/sidebar/structure";
const SettingHeaderFooter = () => {

    const initialState = {
        fullName: "",
        contact: "",
        email: "",
        password: "",
        setPass: "",
        dropdown: {
          category: "",
        },
      };

      const { isOpen, toggle, close } = useDropDown();
      const { isOpen: isOpen2, toggle: toggle2, close: close2 } = useDropDown();
      const reducer = (state, action) => {
        if (!action.value) return state;
        if (action.value === "undefined") return state;
        switch (action.type) {
          case "fullName":
            return { ...state, fullName: action.value };
          case "contact":
            return { ...state, contact: action.value };
            case "email":
            return { ...state, email: action.value };
            case "password":
            return { ...state, password: action.value };
            case "setPass":
            return { ...state, setPass: action.value };
          case "dropdown":
            // is an object
            return {
              ...state,
              dropdown: {
                ...state.dropdown,
                [action.value.name]: action.value.value,
              },
            };
          default:
            return state;
        }
      };


      const handelChange = (e) => {
        dispatch({ type: e.target.id, value: e.target.value });
      };
      const handelDropdown = (value, index) => {
        dispatch({ type: "dropdown", value: { name: index, value: value } });
      };
      const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <GridHAF>
        <div className="rightSide">
          <p>Footer</p>
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Enter the company Name"
          value={data.fullName}
          id="fullName"
          onChange={handelChange}
        />
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Enter Address"
          value={data.fullName}
          id="fullName"
          onChange={handelChange}
        />
        <WrapperHAF>
        <Input
          inputype="text"
          type="addData"
          placeholder="Enter Postal code "
          value={data.fullName}
          id="fullName"
          onChange={handelChange}
        />

        <Dropdown
        placeholder="Select City"
        isOpen={isOpen}
        toggel={toggle}
        close={close}
        value={data.dropdown.category}
        updateValue={(value) => handelDropdown(value.name, "category")}
      />
        </WrapperHAF>
        <WrapperHAF>
        <Dropdown
        placeholder="Select State"
        isOpen={isOpen}
        toggel={toggle}
        close={close}
        value={data.dropdown.category}
        updateValue={(value) => handelDropdown(value.name, "category")}
      />
       <Dropdown
        placeholder="Select Country"
        isOpen={isOpen}
        toggel={toggle}
        close={close}
        value={data.dropdown.category}
        updateValue={(value) => handelDropdown(value.name, "category")}
      />
        </WrapperHAF>
        <Input
          inputype="Enter the Emails"
          type="addDataMenu"
          placeholder="Full Name"
          value={data.fullName}
          id="fullName"
          onChange={handelChange}
        />
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Enter the website URL"
          value={data.fullName}
          id="fullName"
          onChange={handelChange}
        />
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Enter the Mobile Contact Numbers"
          value={data.fullName}
          id="fullName"
          onChange={handelChange}
        />
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Enter the Office Contact Numbers"
          value={data.fullName}
          id="fullName"
          onChange={handelChange}
        />
      <WrapperHAF>
        <Dropdown
        placeholder="Select Opening Days"
        isOpen={isOpen}
        toggel={toggle}
        close={close}
        value={data.dropdown.category}
        updateValue={(value) => handelDropdown(value.name, "category")}
      />
       <Dropdown
        placeholder="Select Closing Days"
        isOpen={isOpen}
        toggel={toggle}
        close={close}
        value={data.dropdown.category}
        updateValue={(value) => handelDropdown(value.name, "category")}
      />
        </WrapperHAF>
        <WrapperHAF>
        <Dropdown
        placeholder="Select Opening Time"
        isOpen={isOpen}
        toggel={toggle}
        close={close}
        value={data.dropdown.category}
        updateValue={(value) => handelDropdown(value.name, "category")}
      />
       <Dropdown
        placeholder="Select Closing Time"
        isOpen={isOpen}
        toggel={toggle}
        close={close}
        value={data.dropdown.category}
        updateValue={(value) => handelDropdown(value.name, "category")}
      />
        </WrapperHAF>
        </div>
        <div className="leftSide">
          <p>Header</p>
          <Input
          inputype="text"
          type="addData"
          placeholder="Enter the Company Name "
          value={data.fullName}
          id="fullName"
          onChange={handelChange}
        />
       
        </div>
      </GridHAF>
    </>
  );
};

export default SettingHeaderFooter;
