import { WrapperMenu } from "./styled";
import Input from "components/input";
import { useReducer } from "react";
import { AddIcon, RemoveIcon } from "page-componet/iconbutton";
import useDropDown from "components/dropdown/useDropdown";
import Dropdown from "components/dropdown";

import "../../../../components/input/style.module.css";
import { Box, BoxTwo } from "page-componet/layout/style";

const EditMenu = () => {
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
// const [data, dispatch] = useReducer((state, action) => {
//     return { ...state, [action.type]: action.value }
// }, initialState)
  return (
    <>
      <p className="menu-edit">Menu Edit</p>
      
      <BoxTwo full>
      <Dropdown
        placeholder="Select Category"
        isOpen={isOpen}
        toggel={toggle}
        close={close}
        value={data.dropdown.category}
        updateValue={(value) => handelDropdown(value.name, "category")}
      />
      </BoxTwo>
      <WrapperMenu>
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Full Name"
          value={data.fullName}
          id="fullName"
          onChange={handelChange}
        />
        <div className="btngrp">
          <AddIcon />
          <RemoveIcon />
        </div>
      </WrapperMenu>

      <WrapperMenu>
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Contact"
          value={data.contact}
          id="contact"
          onChange={handelChange}
        />
        <div className="btngrp">
          <AddIcon />
          <RemoveIcon />
        </div>
      </WrapperMenu>

      <WrapperMenu>
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Email"
          value={data.email}
          id="email"
          onChange={handelChange}
        />
        <div className="btngrp">
          <AddIcon />
          <RemoveIcon />
        </div>
      </WrapperMenu>

      <WrapperMenu>
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Password"
          value={data.password}
          id="password"
          onChange={handelChange}
        />
        <div className="btngrp">
          <AddIcon />
          <RemoveIcon />
        </div>
      </WrapperMenu>

      <WrapperMenu>
        <Input
          inputype="text"
          type="addDataMenu"
          placeholder="Enter Your Password Again"
          value={data.setPass}
          id="setPass"
          onChange={handelChange}
        />
        <div className="btngrp">
          <AddIcon />
          <RemoveIcon />
        </div>
      </WrapperMenu>

     
    </>
  );
};

export default EditMenu;
