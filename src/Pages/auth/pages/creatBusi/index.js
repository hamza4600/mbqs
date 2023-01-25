import { Suspense, useReducer, useState } from 'react';
import PageSpinner from 'components/pageSpinner';
import Input from 'components/input';
import { Grid, Wrapper } from './styled';
import Dropdown from 'components/dropdown';
import Button from 'components/button';
import useDropDown from 'components/dropdown/useDropdown';
import { H1 } from 'components/a';
import { AddIcon, RemoveIcon } from 'page-componet/iconbutton';


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
    // can we pass other state
    dropdown: {
        category: '',
        subCategory: '',
    }
}

const reducer = (state, action) => {

    if (!action.value) return state;
    if (action.value === 'undefined') return state;

    switch (action.type) {
        case 'businessName':
            return { ...state, businessName: action.value };
        case 'businessId':
            return { ...state, businessId: action.value };
        case 'taxNum':
            return { ...state, taxNum: action.value };
        case 'vatNum':
            return { ...state, vatNum: action.value };
        case 'email':
            return { ...state, email: action.value };
        case 'contactNum':
            return { ...state, contactNum: action.value };
        case 'address':
            return { ...state, address: action.value };
        case 'postalCode':
            return { ...state, postalCode: action.value };
        case 'regesterDate':
            return { ...state, regesterDate: action.value };
        case 'bussLiceseId':
            return { ...state, bussLiceseId: action.value };
        case 'compBudget':
            return { ...state, compBudget: action.value };
        case 'opertionBudget':
            return { ...state, opertionBudget: action.value };
        case 'compDetails':
            return { ...state, compDetails: action.value };
        case 'referenceName':
            return { ...state, referenceName: action.value };
        case 'referencelink':
            return { ...state, referencelink: action.value };
        case 'dropdown':
            // is an object
            return { ...state, dropdown: { ...state.dropdown, [action.value.name]: action.value.value } };
        default:
            return state;
    }
}

const Left = ({ title }) => {

    const { isOpen, toggle, close } = useDropDown();
    const { isOpen: isOpen2, toggle: toggle2, close: close2 } = useDropDown();

    const [data, dispatch] = useReducer(reducer, initialState);

    const handelChange = (e) => {
        dispatch({ type: e.target.id, value: e.target.value })
    }

    const handelDropdown = (value, index) => {
        dispatch({ type: 'dropdown', value: { name: index, value: value } })
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
                        value={data.dropdown.category}
                        updateValue={(value) => handelDropdown(value.name, 'category')}
                    />
                    <Dropdown
                        placeholder="Select Sub Category"
                        isOpen={isOpen2}
                        toggel={toggle2}
                        close={close2}
                        value={data.dropdown.subCategory}
                        updateValue={(value) => handelDropdown(value.name, 'subCategory')}
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
                    />
                </Wrapper>
                <Wrapper>
                    <Dropdown
                        placeholder="Select State"
                    />
                    <Dropdown
                        placeholder="Select Country"
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

const Right = () => {
    // files state
    const [files, setFiles] = useState({
        file: null,
        fileUrl: null,
    });

    // handle file change
    const handleFileChange = (e) => {
        setFiles({
            file: e.target.files[0],
            fileUrl: URL.createObjectURL(e.target.files[0])
        });
    }


    const nextPage = () => {
        window.location.href = '/auth/business-profile'
    }

    return (
        <>
            <div id='sub'>
                <H1>Enter the specifics of your position</H1>
                <Wrapper>
                    <Dropdown
                        placeholder="Select Role"
                    />
                    <Dropdown
                        placeholder="Select Sub Category"
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="First Name"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Last Name"
                        value=""
                        onChange={() => { }}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Email"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="User Name"
                        value=""
                        onChange={() => { }}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Creat Password"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Re-enter Password"
                        value=""
                        onChange={() => { }}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Contact Person Name"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Business Contact Number"
                        value=""
                        onChange={() => { }}
                    />
                </Wrapper>

                <Wrapper>
                    <Input
                        inputype="file"
                        type="addDataFile"
                        placeholder="Drop your Profile Image"
                        label={files?.file?.name || "Drop your Profile Image"}
                        accept="image/*"
                        // value={files?.fileUrl} // to be post to server value 
                        onChange={handleFileChange}
                    />
                    {
                        files?.fileUrl && (
                            <div id="show-img">
                                <img src={files?.file
                                    && files?.fileUrl
                                    // https://via.placeholder.com/150/FF0000/FFFFFF/?text=Image+Size+150x150
                                } alt="img" />
                            </div>
                        )

                    }
                    <Input
                        inputype="file"
                        type="addDataFile"
                        placeholder="Drop PDF documents"
                        label="Drop PDF documents"
                        accept="application/pdf"
                        value=""
                        onChange={() => { }}
                    />
                </Wrapper>
                {/* new filed */}

                <Wrapper>
                    <Input
                        inputype="file"
                        type="addDataFile"
                        placeholder="Drop Business Images "
                        label="Drop Business Images "
                        accept="image/*"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        inputype="file"
                        type="addDataFile"
                        placeholder="Drop Business Videos"
                        label="Drop Business Videos"
                        accept="application/pdf"
                        value=""
                        onChange={() => { }}
                    />
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

const CreatBusiness = ({ title }) => {
    return (
        <>
            <Suspense fallback={<PageSpinner />}>
                <Grid>
                    <Left title={title} />
                    <Right />
                </Grid>
            </Suspense>
        </>
    )
}

export default CreatBusiness;