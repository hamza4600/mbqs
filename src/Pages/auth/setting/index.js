import { Suspense, useReducer, useState } from "react";
import PageSpinner from "components/pageSpinner";
import Input from "components/input";
import {
  Grid,
  GridSettings,
  Wrapper,
} from "../../../Pages/auth/pages/creatBusi/styled";
import Dropdown from "components/dropdown";
import Button from "components/button";
import useDropDown from "components/dropdown/useDropdown";
import { H1 } from "components/a";
import { AddIcon, RemoveIcon } from "page-componet/iconbutton";

const initialState = {
  FullName: "",
  email: "",
  contactNumber: "",
  password: "",
  confirmPass: "",
  UserName: "",
  otpCode: "",
  otpNewPass: "",
  otpReEnterPass: "",
  swedish: "",
  english: "",
  spanish: "",
  emailOtpCode: "",
  referenceName: "",
  referencelink: "",
  // can we pass other state
  dropdown: {
    selectDetails: "",
  },
};

const reducer = (state, action) => {
  if (!action.value) return state;
  if (action.value === "undefined") return state;

  switch (action.type) {
    case "FullName":
      return { ...state, FullName: action.value };
    case "email":
      return { ...state, email: action.value };
    case "contactNumber":
      return { ...state, contactNumber: action.value };
    case "password":
      return { ...state, password: action.value };
    case "confirmPass":
      return { ...state, confirmPass: action.value };
    case "UserName":
      return { ...state, UserName: action.value };
    case "otpCode":
      return { ...state, otpCode: action.value };
    case "otpNewPass":
      return { ...state, otpNewPass: action.value };
    case "otpReEnterPass":
      return { ...state, otpReEnterPass: action.value };
    case "swedish":
      return { ...state, swedish: action.value };
    case "english":
      return { ...state, english: action.value };
    case "spanish":
      return { ...state, spanish: action.value };
    case "emailOtpCode":
      return { ...state, emailOtpCode: action.value };
    case "referenceName":
      return { ...state, referenceName: action.value };
    case "referencelink":
      return { ...state, referencelink: action.value };
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

const Left = ({ title }) => {
    const { isOpen, toggle, close } = useDropDown();
    const { isOpen: isOpen2, toggle: toggle2, close: close2 } = useDropDown();
    
    const [data, dispatch] = useReducer(reducer, initialState);
    
    const handelChange = (e) => {
        dispatch({ type: e.target.id, value: e.target.value });
    };

  const handelDropdown = (value, index) => {
    dispatch({ type: "dropdown", value: { name: index, value: value } });
  };
  const addIcon = () => {
    console.log("working");
  };

  return (
    <>
      <p>Details</p>
      <div id="subTwo">
        <p className="text-start">Register Form Details</p>
        <GridSettings>
          <div className="dropDownSettings">
            <Dropdown
              placeholder="Select Details"
              isOpen={isOpen}
              toggel={toggle}
              close={close}
              value={data.dropdown.selectDetails}
              updateValue={(value) =>
                handelDropdown(value.name, "selectDetails")
              }
            />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="text"
            type="addData"
            placeholder="Full Name"
            value={data.FullName}
            id="FullName"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon onClick={addIcon} />
            <RemoveIcon />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="text"
            type="addData"
            placeholder="Email"
            value={data.email}
            id="email"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="number"
            type="addData"
            placeholder="Contact Number"
            value={data.contactNumber}
            id="contactNumber"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>

        <GridSettings>
          <Input
            inputype="password"
            type="addData"
            placeholder="password"
            value={data.password}
            id="password"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="confirmPass"
            type="addData"
            placeholder="Enter Your Password again"
            value={data.confirmPass}
            id="confirmPass"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>

        <p>Login Form Details</p>
        <GridSettings>
          <div className="dropDownSettings">
            <Dropdown
              placeholder="Select Details"
              isOpen={isOpen}
              toggel={toggle}
              close={close}
              value={data.dropdown.selectDetails}
              updateValue={(value) =>
                handelDropdown(value.name, "selectDetails")
              }
            />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="text"
            type="addData"
            placeholder="User Name"
            value={data.UserName}
            id="UserName"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon onClick={addIcon} />
            <RemoveIcon />
          </div>
        </GridSettings>

        <GridSettings>
          <Input
            inputype="password"
            type="addData"
            placeholder="password"
            value={data.password}
            id="password"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>

        <p>Forgot Password Details</p>
        <GridSettings>
          <div className="dropDownSettings">
            <Dropdown
              placeholder="Select Details"
              isOpen={isOpen}
              toggel={toggle}
              close={close}
              value={data.dropdown.selectDetails}
              updateValue={(value) =>
                handelDropdown(value.name, "selectDetails")
              }
            />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="number"
            type="addData"
            placeholder="Enter Otp Verifification code"
            value={data.otpCode}
            id="otpCode"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>

        <GridSettings>
          <Input
            inputype="password"
            type="addData"
            placeholder="Enter new password"
            value={data.otpNewPass}
            id="otpNewPass"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>

        <GridSettings>
          <Input
            inputype="password"
            type="addData"
            placeholder="Enter Your new Password again"
            value={data.otpReEnterPass}
            id="otpReEnterPass"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>

        <p>Languages</p>
        <GridSettings>
          <div className="dropDownSettings">
            <Dropdown
              placeholder="Select Details"
              isOpen={isOpen}
              toggel={toggle}
              close={close}
              value={data.dropdown.selectDetails}
              updateValue={(value) =>
                handelDropdown(value.name, "selectDetails")
              }
            />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="text"
            type="addData"
            placeholder="Swedish"
            value={data.swedish}
            id="swedish"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>

        <GridSettings>
          <Input
            inputype="text"
            type="addData"
            placeholder="English"
            value={data.english}
            id="english"
            onChange={() => {}}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>

        <GridSettings>
          <Input
            inputype="text"
            type="addData"
            placeholder="Swedish"
            value=""
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="text"
            type="addData"
            placeholder="Spanish"
            value={data.spanish}
            id="spanish"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="text"
            type="addData"
            placeholder="English"
            value=""
            onChange={() => {}}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="text"
            type="addData"
            placeholder="Swedish"
            value=""
            onChange={() => {}}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>

        <p>Change Password</p>

        <GridSettings>
          <div className="dropDownSettings">
            <Dropdown
              placeholder="Select Details"
              isOpen={isOpen}
              toggel={toggle}
              close={close}
              value={data.dropdown.selectDetails}
              updateValue={(value) =>
                handelDropdown(value.name, "selectDetails")
              }
            />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="password"
            type="addData"
            placeholder="Enter your old Password"
            value=""
            onChange={() => {}}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="password"
            type="addData"
            placeholder="Enter your new Password"
            value=""
            onChange={() => {}}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>
        <GridSettings>
          <Input
            inputype="password"
            type="addData"
            placeholder="Re-enter your new Password"
            value=""
            onChange={() => {}}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>

        <p>Change Email Address</p>
        <GridSettings>
          <div className="dropDownSettings">
            <Dropdown
              placeholder="Select Details"
              isOpen={isOpen}
              toggel={toggle}
              close={close}
              value={data.dropdown.selectDetails}
              updateValue={(value) =>
                handelDropdown(value.name, "selectDetails")
              }
            />
          </div>
        </GridSettings>
        <GridSettings full>
          <Input
            inputype="email"
            type="addData"
            placeholder="Enter your email otpCode"
            value={data.emailOtpCode}
            id="emailOtpCode"
            onChange={handelChange}
          />
          <div className="IconCon">
            <AddIcon />
            <RemoveIcon />
          </div>
        </GridSettings>
      </div>
    </>
  );
};

const Right = ({ nextRoute }) => {
  // files state
  const [files, setFiles] = useState({
    file: null,
    fileUrl: null,
  });
};

const CreatBusiness = ({ title, nextRoute }) => {
  return (
    <>
      <Suspense fallback={<PageSpinner />}>
        <Grid>
          <Left title={title} />
          <Right nextRoute={nextRoute} />
        </Grid>
      </Suspense>
    </>
  );
};

export default CreatBusiness;
