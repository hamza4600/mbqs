import { Suspense, useEffect, useState } from 'react';
import PageSpinner from 'components/pageSpinner';
import Input from 'components/input';
import { Grid,  Wrapper } from './styled';
import Dropdown from 'components/dropdown';
import Button from 'components/button';
import useDropDown from 'components/dropdown/useDropdown';
import { H1 } from 'components/a';


const Left = () => {

    const { isOpen,  toggle, close, value, updateValue } = useDropDown();

    const [data, setData] = useState({
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
        // can we pass other state to a state like this
        dropdown: {
            category: '',
            subCategory: '',
        }
    });

    const handelChange = (e, name) => {
        setData({
            ...data,
            [name]: e?.target?.value
        })
    }

    const handeldropdown = (e, name) => {
        console.log(e, name, data);
        setData({
            ...data,
            dropdown: {
                ...data.dropdown,
                [name]: e
            }
        })
    }

    useEffect(() => {
        console.log(data);
    }, [data])


    return (
        <>
            <div id='sub'>
                <H1>Add New Business</H1>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter your business name"
                        value={data.businessName}
                        onChange={(e) => handelChange(e, 'businessName')}

                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Business Id"
                        value={data.businessId}
                        onChange={(e) => handelChange(e, 'businessId')}
                    />
                </Wrapper>
                <Wrapper>
                    <Dropdown
                        placeholder="Select Category"
                        isOpen={isOpen}
                        toggel={toggle}
                        close={close}
                        onChange={() => handeldropdown(value, 'category')}
                        value={value}
                        updateValue={updateValue}
                    />
                    <Dropdown
                        placeholder="Select Sub Category"
                        isOpen={isOpen}
                        value={value}
                        toggel={toggle}
                        close={close}
                    />
                </Wrapper>

                <Wrapper>
                    <Input
                        inputype="number"
                        type="addData"
                        placeholder="TAX Number"
                        value={data.taxNum}
                        onChange={(e) => handelChange(e, 'taxNum')}
                    />
                    <Input
                        inputype="number"
                        type="addData"
                        placeholder="VAT Number"
                        value={data.vatNum}
                        onChange={(e) => handelChange(e, 'vatNum')}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => handelChange(e, 'email')}
                    />
                    <Input
                        inputype="number"
                        type="addData"
                        placeholder="Contact Number"
                        value={data.contactNum}
                        onChange={(e) => handelChange(e, 'contactNum')}
                    />
                </Wrapper>
                <Wrapper full>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter Address"
                        value={data.address}
                        onChange={(e) => handelChange(e, 'address')}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="number"
                        type="addData"
                        placeholder="Enter Postal Code"
                        value={data.postalCode}
                        onChange={(e) => handelChange(e, 'postalCode')}
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
                        onChange={(e) => handelChange(e, 'regesterDate')}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Business License ID"
                        value={data.bussLiceseId}
                        onChange={(e) => handelChange(e, 'bussLiceseId')}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Company Budget amount"
                        value={data.compBudget}
                        onChange={(e) => handelChange(e, 'compBudget')}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Opertaion Capital amount"
                        value={data.opertionBudget}
                        onChange={(e) => handelChange(e, 'opertionBudget')}
                    />
                </Wrapper>
                <Wrapper full>
                    <Input.TextArea
                        styleType="addData"
                        type="text"
                        placeholder="Write description about your business"
                        value={data.compDetails}
                        onChange={(e) => handelChange(e, 'compDetails')}
                    />
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
                        placeholder="Choose Image File"
                        label={files?.file?.name || "Choose Image File"}
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
                        placeholder="Choose PDF File"
                        label="Choose PDF File"
                        accept="application/pdf"
                        value=""
                        onChange={() => { }}
                    />

                </Wrapper>

                <Button
                    type='addData'
                    id='save'
                // onClick={() => { }}
                >
                    Save and Continue
                </Button>
            </div>
        </>
    )
}

const CreatBusiness = () => {
    return (
        <>
            <Suspense fallback={<PageSpinner />}>
                <Grid>
                    <Left />
                    <Right />
                </Grid>
            </Suspense>
        </>
    )
}

export default CreatBusiness