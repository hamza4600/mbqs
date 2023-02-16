import Input from "components/input";
import useDropDown from "components/dropdown/useDropdown";
import { BoxDetails, DetailsWrapper, GridDetails } from "./styled";
import "../../../../components/input/style.module.css";
import { useReducer } from "react";
import { AddIcon, RemoveIcon } from "page-componet/iconbutton";
import Dropdown from "components/dropdown";

const Index = () => {
  const initialState = {
    fullName: "",
    contact: "",
    email: "",
    pass: "",
    reEnterPass: "",
    otpCode: "",
    newPass: "",
    reEnterNewPass: "",
    newEmail: "",
    userName: "",
    password: "",
    swedish: "",
    english: "",
    spanish: "",
    oldPass: "",
    newPassword: "",
    reEnternewPass: "",
    dropdown: {
      city: "",
      state: "",
      country: "",
      openingDays: "",
      closingDays: "",
      openingTime: "",
      closingTime: "",
    },
  };

  const { isOpen, toggle, close } = useDropDown();

  const handelChange = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };
  const handelDropdown = (value, index) => {
    dispatch({ type: "dropdown", value: { name: index, value: value } });
  };
  // const [data, dispatch] = useReducer(reducer, initialState);
  const [data, dispatch] = useReducer((state, action) => {
    return { ...state, [action.type]: action.value };
  }, initialState);
  return (
    <GridDetails>
      <div className="right-side">
        <h3>Details</h3>
        <p>Register Form Details</p>
        <BoxDetails full>
          <Dropdown
            placeholder="Select Category"
            isOpen={isOpen}
            toggel={toggle}
            close={close}
            value={data.dropdown.category}
            updateValue={(value) => handelDropdown(value.name, "category")}
          />
        </BoxDetails>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Full Name"
            value={data.fullName}
            id="fullName"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Contact"
            value={data.contact}
            id="contact"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Email"
            value={data.email}
            id="email"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Password"
            value={data.pass}
            id="pass"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Enter Password Again"
            value={data.reEnterPass}
            id="reEnterPass"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <p className="top">Forgot Password Details</p>
        <BoxDetails full>
          <Dropdown
            placeholder="Select Category"
            isOpen={isOpen}
            toggel={toggle}
            close={close}
            value={data.dropdown.category}
            updateValue={(value) => handelDropdown(value.name, "category")}
          />
        </BoxDetails>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Enter The Otp Verification Code"
            value={data.otpCode}
            id="otpCode"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Enter New Password"
            value={data.newPass}
            id="newPass"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Enter Your new Password again"
            value={data.reEnterNewPass}
            id="reEnterNewPass"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <p className="top">Change Email Address</p>
        <BoxDetails full>
          <Dropdown
            placeholder="Select Category"
            isOpen={isOpen}
            toggel={toggle}
            close={close}
            value={data.dropdown.category}
            updateValue={(value) => handelDropdown(value.name, "category")}
          />
        </BoxDetails>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Enter Your new Email Address"
            value={data.newEmail}
            id="newEmail"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
      </div>
      <div className="left-sideBar">
        <p className="top">Login Form Details</p>
        <BoxDetails full>
          <Dropdown
            placeholder="Select Category"
            isOpen={isOpen}
            toggel={toggle}
            close={close}
            value={data.dropdown.category}
            updateValue={(value) => handelDropdown(value.name, "category")}
          />
        </BoxDetails>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="User Name"
            value={data.userName}
            id="userName"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Password"
            value={data.password}
            id="password"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <p className="top">Languages</p>
        <BoxDetails full>
          <Dropdown
            placeholder="Select Category"
            isOpen={isOpen}
            toggel={toggle}
            close={close}
            value={data.dropdown.category}
            updateValue={(value) => handelDropdown(value.name, "category")}
          />
        </BoxDetails>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Swedish"
            value={data.swedish}
            id="swedish"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="English"
            value={data.english}
            id="english"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Spanish"
            value={data.spanish}
            id="spanish"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Swedish"
            value={data.swedish}
            id="swedish"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="English"
            value={data.english}
            id="english"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <DetailsWrapper>
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="spanish"
            value={data.spanish}
            id="spanish"
            onChange={handelChange}
          />
          <div className="btngrp">
            <AddIcon />
            <RemoveIcon />
          </div>
        </DetailsWrapper>
        <p className="top">Change Password</p>
        <BoxDetails full>
          <Dropdown
            placeholder="Select Category"
            isOpen={isOpen}
            toggel={toggle}
            close={close}
            value={data.dropdown.category}
            updateValue={(value) => handelDropdown(value.name, "category")}
          />
        </BoxDetails>
          <div className="extraClass">
          <Input
            inputype="text"
            type="addDataDetails"
            placeholder="Enter Your Old Password"
            value={data.oldPass}
            id="oldPass"
            onChange={handelChange}
          />
          </div>
        <DetailsWrapper>
          <div className="both">
            <Input
              inputype="text"
              type="addDataSmall"
              placeholder="Enter New Password"
              value={data.newPassword}
              id="newPassword"
              onChange={handelChange}
            />
            <Input
              inputype="text"
              type="addDataSmall"
              placeholder="Re-Enter Your New Password"
              value={data.reEnternewPass}
              id="reEnternewPass"
              onChange={handelChange}
            />
          </div>
        </DetailsWrapper>
      </div>
    </GridDetails>
  );
};

export default Index;
