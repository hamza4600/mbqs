import { Suspense, memo, useReducer, useState } from 'react';
import PageSpinner from 'components/pageSpinner';
import Input from 'components/input';
import { Grid, Wrapper } from './styled';
import Dropdown from 'components/dropdown';
import Button from 'components/button';
import useDropDown from 'components/dropdown/useDropdown';
import { H1 } from 'components/a';
import { AddIcon, RemoveIcon } from 'page-componet/iconbutton';
import { FileInput } from 'page-componet/layout/style';

const Left = ({ title, data, dispatch, handelDropdown }) => {

    const { isOpen, toggle, close } = useDropDown();
    const { isOpen: isOpen2, toggle: toggle2, close: close2 } = useDropDown();
    const { isOpen: isOpen3, toggle: toggle3, close: close3 } = useDropDown();
    const { isOpen: isOpen4, toggle: toggle4, close: close4 } = useDropDown();
    const { isOpen: isOpen5, toggle: toggle5, close: close5 } = useDropDown();


    const handelChange = (e) => {
        dispatch({ field: e.target.id, value: e.target.value })
    }

    return (
        <>
            <div id='sub'>
                <H1>
                    {`${title ? title : 'Register New Business '}  Profile Page`}
                </H1>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter your business name"
                        value={data.businessName}
                        id="businessName"
                        onChange={handelChange}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Business Id"
                        value={data.businessId}
                        id="businessId"
                        onChange={handelChange}
                    />
                </Wrapper>
                <Wrapper>
                    <Dropdown
                        placeholder="Select Category"
                        isOpen={isOpen}
                        toggel={toggle}
                        close={close}
                        value={data.dropdown.category?.name}
                        updateValue={(value) => handelDropdown(value, 'category')}
                    />
                    <Dropdown
                        placeholder="Select Sub Category"
                        isOpen={isOpen2}
                        toggel={toggle2}
                        close={close2}
                        value={data.dropdown.subCategory?.name}
                        updateValue={(value) => handelDropdown(value, 'subCategory')}
                    />
                </Wrapper>

                <Wrapper>
                    <Input
                        inputype="number"
                        type="addData"
                        placeholder="TAX Number"
                        value={data.taxNum}
                        id="taxNum"
                        onChange={handelChange}
                    />
                    <Input
                        inputype="number"
                        type="addData"
                        placeholder="VAT Number"
                        value={data.vatNum}
                        id="vatNum"
                        onChange={handelChange}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Email"
                        value={data.email}
                        id="email"
                        onChange={handelChange}
                    />
                    <Input
                        inputype="number"
                        type="addData"
                        placeholder="Contact Number"
                        value={data.contactNum}
                        id="contactNum"
                        onChange={handelChange}
                    />
                </Wrapper>
                <Wrapper full>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter Address"
                        value={data.address}
                        id="address"
                        onChange={handelChange}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="number"
                        type="addData"
                        placeholder="Enter Postal Code"
                        value={data.postalCode}
                        id="postalCode"
                        onChange={handelChange}
                    />
                    <Dropdown
                        placeholder="Select City"
                        isOpen={isOpen3}
                        toggel={toggle3}
                        close={close3}
                        value={data.dropdown.city?.name}
                        updateValue={(value) => handelDropdown(value, 'city')}
                    />
                </Wrapper>
                <Wrapper>
                    <Dropdown
                        placeholder="Select State"
                        isOpen={isOpen4}
                        toggel={toggle4}
                        close={close4}
                        value={data.dropdown.state?.name}
                        updateValue={(value) => handelDropdown(value, 'state')}
                    />
                    <Dropdown
                        placeholder="Select Country"
                        isOpen={isOpen5}
                        toggel={toggle5}
                        close={close5}
                        value={data.dropdown.country?.name}
                        updateValue={(value) => handelDropdown(value, 'country')}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Registration Date"
                        value={data.regesterDate}
                        id="regesterDate"
                        onChange={handelChange}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Business License ID"
                        value={data.bussLiceseId}
                        id="bussLiceseId"
                        onChange={handelChange}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Company Budget amount"
                        value={data.compBudget}
                        id="compBudget"
                        onChange={handelChange}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Opertaion Capital amount"
                        value={data.opertionBudget}
                        id="opertionBudget"
                        onChange={handelChange}
                    />
                </Wrapper>
                <Wrapper full>
                    <Input.TextArea
                        styleType="addData"
                        type="text"
                        placeholder="Write description about your business"
                        value={data.compDetails}
                        id="compDetails"
                        onChange={handelChange}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Reference Link Name"
                        value={data.referenceName}
                        id="referenceName"
                        onChange={handelChange}
                    />
                    <Input
                        inputype="url"
                        type="addData"
                        placeholder="Insert Reference URL"
                        value={data.referencelink}
                        id="referencelink"
                        onChange={handelChange}
                    />
                </Wrapper>
                <Wrapper>
                    <div className='btngrp'>
                        <AddIcon />
                        <RemoveIcon />
                    </div>
                </Wrapper>
            </div>
        </>
    )
}

const Right = ({ nextRoute, data, dispatch, handelDropdown }) => {
    // files state
    const [files, setFiles] = useState({
        file: null,
        fileUrl: null,
    });

    const { isOpen, close, toggle } = useDropDown();
    const { isOpen: isOpen2, close: close2, toggle: toggle2 } = useDropDown();

    // handle file change
    const handleFileChange = (e) => {
        setFiles({
            file: e.target.files[0],
            fileUrl: URL.createObjectURL(e.target.files[0])
        });
    }

    const nextPage = () => {
        if (nextRoute !== null) {
            window.location.href = '/auth/background-img'
        }
    }

    return (
        <>
            <div id='sub'>
                <H1>Enter the specifics of your position</H1>
                <Wrapper>
                    <Dropdown
                        placeholder="Select Role"
                        isOpen={isOpen}
                        toggel={toggle}
                        close={close}
                        value={data.dropdown.role?.name}
                        updateValue={(value) => handelDropdown(value, 'role')}

                    />
                    <Dropdown
                        placeholder="Select Sub Category"
                        isOpen={isOpen2}
                        toggel={toggle2}
                        close={close2}
                        value={data.dropdown.subCategory?.name}
                        updateValue={(value) => handelDropdown(value, 'subCategory')}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="First Name"
                        value={data.firstName}
                        onChange={e => dispatch({ field: 'firstName', value: e.target.value })}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Last Name"
                        value={data.lastName}
                        onChange={e => dispatch({ field: 'lastName', value: e.target.value })}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Email"
                        value={data.emailLeft}
                        onChange={e => dispatch({ field: 'emailLeft', value: e.target.value })}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="User Name"
                        value={data.userName}
                        onChange={(e) => dispatch({ field: 'userName', value: e.target.value })}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Creat Password"
                        value={data.password}
                        onChange={(e) => dispatch({ field: 'password', value: e.target.value })}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Re-enter Password"
                        value={data.rePassword}
                        onChange={(e) => dispatch({ field: 'rePassword', value: e.target.value })}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Contact Person Name"
                        value={data.contactPerson}
                        onChange={(e) => dispatch({ field: 'contactPerson', value: e.target.value })}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Business Contact Number"
                        value={data.businessNumber}
                        onChange={(e) => dispatch({ field: 'businessNumber', value: e.target.value })}
                    />
                </Wrapper>

                <Wrapper>
                <FileInput box>
                        <label
                            htmlFor="file"
                        >
                            {data.textImage?.name || "Drop Image Here"}
                        </label>
                        <input
                            accept="image/*"
                            type="file"
                            id="file"
                            name="file"
                            // onInput={event => setData(
                            //     {
                            //         field: "textImage", value: {
                            //             name: event.target.files[0].name,
                            //             url: URL.createObjectURL(event.target.files[0])
                            //         }
                            //     })}
                            onClick={(e) => e.target.value = null}
                        />
                    </FileInput>

                    <FileInput box>
                        <label
                            htmlFor="file"
                        >
                            {data.textImage?.name || "Drop PDF Here"}
                        </label>
                        <input
                            accept="pdf/*"
                            type="file"
                            id="file"
                            name="file"
                            // onInput={event => setData(
                            //     {
                            //         field: "textImage", value: {
                            //             name: event.target.files[0].name,
                            //             url: URL.createObjectURL(event.target.files[0])
                            //         }
                            //     })}
                            onClick={(e) => e.target.value = null}
                        />
                    </FileInput>

                </Wrapper>
                {/* new filed */}

                <Wrapper>
                    <FileInput box>
                        <label
                            htmlFor="file"
                        >
                            {data.textImage?.name || "Drop Business Image"}
                        </label>
                        <input
                            accept="image/*"
                            type="file"
                            id="file"
                            name="file"
                            // onInput={event => setData(
                            //     {
                            //         field: "textImage", value: {
                            //             name: event.target.files[0].name,
                            //             url: URL.createObjectURL(event.target.files[0])
                            //         }
                            //     })}
                            onClick={(e) => e.target.value = null}
                        />
                    </FileInput>
                    <FileInput box>
                        <label
                            htmlFor="file"
                        >
                            {data.textImage?.name || "Drop Image Here"}
                        </label>
                        <input
                            accept="image/*"
                            type="file"
                            id="file"
                            name="file"
                            // onInput={event => setData(
                            //     {
                            //         field: "textImage", value: {
                            //             name: event.target.files[0].name,
                            //             url: URL.createObjectURL(event.target.files[0])
                            //         }
                            //     })}
                            onClick={(e) => e.target.value = null}
                        />
                    </FileInput>

                </Wrapper>

                <Button
                    type='addData'
                    id='save'
                    onClick={nextPage}
                >
                    Next
                </Button>
            </div>
        </>
    )
}

// initial Value
const initialState = {
    businessName: '',
    businessId: '',
    taxNum: '',
    vatNum: '',
    email: '',
    contactNum: '',
    address: '',
    postalCode: '',
    regesterDate: '',
    bussLiceseId: '',
    compBudget: '',
    opertionBudget: '',
    compDetails: '',
    referenceName: '',
    referencelink: '',
    // new state
    firstName: '',
    lastName: '',
    emailLeft: '',
    userName: '',
    password: '',
    rePassword: '',
    contactNumber: '',
    businessNumber: '',

    dropdown: {
        category: '',
        subCategory: '',
        city: '',
        state: '',
        country: '',
        // new state
        role: '',
    },
    // files state
    image: [],
    pdf: [],
    businessImage: [],
    businessVideo: [],
};


const CreatBusiness = ({ title, nextRoute }) => {

    const reducer = (state, { field, value }) => {
        return {
            ...state,
            [field]: value
        }
    }

    const [data, dispatch] = useReducer(reducer, initialState);

    const handelDropdown = (value, index) => {
        dispatch({
            field: 'dropdown', value: {
                ...data.dropdown,
                [index]: value
            }
        })
    }

    return (
        <>
            <Suspense fallback={<PageSpinner />}>
                <Grid>
                    <Left
                        title={title}
                        data={data}
                        dispatch={dispatch}
                        handelDropdown={handelDropdown}
                    />
                    <Right
                        nextRoute={nextRoute}
                        data={data}
                        dispatch={dispatch}
                        handelDropdown={handelDropdown}
                    />
                </Grid>
            </Suspense>
        </>
    )
}

export default memo(CreatBusiness);

