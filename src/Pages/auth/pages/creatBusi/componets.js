import { AddIcon, RemoveIcon } from 'page-componet/iconbutton';
import { Box, FileInput } from 'page-componet/layout/style';
import useDropDown from 'components/dropdown/useDropdown';
import Input from 'components/input';
import Dropdown from 'components/dropdown';
import { useState } from 'react';
import { H1 } from 'components/a';


export const Left = ({ title, data, dispatch, handelDropdown }) => {

    const { isOpen, toggle, close } = useDropDown();
    const { isOpen: isOpen2, toggle: toggle2, close: close2 } = useDropDown();
    const { isOpen: isOpen3, toggle: toggle3, close: close3 } = useDropDown();
    const { isOpen: isOpen4, toggle: toggle4, close: close4 } = useDropDown();
    const { isOpen: isOpen5, toggle: toggle5, close: close5 } = useDropDown();

    const handelChange = (e) => {
        dispatch({ field: e.target.id, value: e.target.value })
    }

    const handelAddNewField = () => {
        let copy = [...data.addNewField];

        for (let i = 0; i < 2; i++) {
            copy.push({
                id: Math.floor(Math.random() * 1000),
                value: '',
            })
        }
        // update data.addNewField  
        dispatch({ field: 'addNewField', value: copy })
    }

    const handelRemoveField = () => {
        let copy = [...data.addNewField];
        copy.splice(-2, 2);
        dispatch({ field: 'addNewField', value: copy })
    }

    // update nested Input value
    const handelNestedInput = (e, id) => {

        const copy = data.addNewField.map((item) => {
            if (item.id === id) {
                return { ...item, value: e.target.value }
            }
            return item;
        })

        dispatch({
            field: 'addNewField',
            value: copy
        })
    }


    return (
        <>
            <div id='sub'>

                <Box>
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Enter your business name"
                        value={data.businessName}
                        id="businessName"
                        onChange={handelChange}
                    />
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Business Id"
                        value={data.businessId}
                        id="businessId"
                        onChange={handelChange}
                    />
                </Box>
                <Box>
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
                </Box>

                <Box>
                    <Input
                        inputype="number"
                        type="addDataform"
                        placeholder="TAX Number"
                        value={data.taxNum}
                        id="taxNum"
                        onChange={handelChange}
                    />  
                    <Input
                        inputype="number"
                        type="addDataform"
                        placeholder="VAT Number"
                        value={data.vatNum}
                        id="vatNum"
                        onChange={handelChange}
                    />
                </Box>
                <Box>
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Email"
                        value={data.email}
                        id="email"
                        onChange={handelChange}
                    />
                    <Input
                        inputype="number"
                        type="addDataform"
                        placeholder="Contact Number"
                        value={data.contactNum}
                        id="contactNum"
                        onChange={handelChange}
                    />
                </Box>
                <Box full>
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Enter Address"
                        value={data.address}
                        id="address"
                        onChange={handelChange}
                    />
                </Box>
                <Box>
                    <Input
                        inputype="number"
                        type="addDataform"
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
                </Box>
                <Box>
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
                </Box>
                <Box>
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Registration Date"
                        value={data.regesterDate}
                        id="regesterDate"
                        onChange={handelChange}
                    />
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Business License ID"
                        value={data.bussLiceseId}
                        id="bussLiceseId"
                        onChange={handelChange}
                    />
                </Box>
                <Box>
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Company Budget amount"
                        value={data.compBudget}
                        id="compBudget"
                        onChange={handelChange}
                    />
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Opertaion Capital amount"
                        value={data.opertionBudget}
                        id="opertionBudget"
                        onChange={handelChange}
                    />
                </Box>
                <Box full>
                    <Input.TextArea
                        styleType="addData"
                        type="text"
                        placeholder="Write description about your business"
                        value={data.compDetails}
                        id="compDetails"
                        onChange={handelChange}
                    />
                </Box>
                <Box>
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Reference Link Name"
                        value={data.referenceName}
                        id="referenceName"
                        onChange={handelChange}
                    />
                    <Input
                        inputype="url"
                        type="addDataform"
                        placeholder="Insert Reference URL"
                        value={data.referencelink}
                        id="referencelink"
                        onChange={handelChange}
                    />
                </Box>

                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <AddIcon
                        onClick={handelAddNewField}
                    />
                    <RemoveIcon
                        onClick={handelRemoveField}
                    />
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridGap: '0.5rem',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    {
                        data.addNewField.length > 0 &&
                        data.addNewField.map((item, index) => (
                            <div key={item.id} id='mxn'>
                                <Input
                                    inputype="text"
                                    type="addDataform"
                                    placeholder="Reference Link Name"
                                    value={item.name}
                                    onChange={(e) => handelNestedInput(e, item.id)}
                                    id={item.id}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


export const Right = ({ nextRoute, data, dispatch, handelDropdown }) => {
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


    return (
        <>
            <div id='sub'>
                <H1>Enter the specifics of your position</H1>
                <Box>
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
                </Box>
                <Box>
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="First Name"
                        value={data.firstName}
                        onChange={e => dispatch({ field: 'firstName', value: e.target.value })}
                    />
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Last Name"
                        value={data.lastName}
                        onChange={e => dispatch({ field: 'lastName', value: e.target.value })}
                    />
                </Box>
                <Box>
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Email"
                        value={data.emailLeft}
                        onChange={e => dispatch({ field: 'emailLeft', value: e.target.value })}
                    />
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="User Name"
                        value={data.userName}
                        onChange={(e) => dispatch({ field: 'userName', value: e.target.value })}
                    />
                </Box>
                <Box>
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Creat Password"
                        value={data.password}
                        onChange={(e) => dispatch({ field: 'password', value: e.target.value })}
                    />
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Re-enter Password"
                        value={data.rePassword}
                        onChange={(e) => dispatch({ field: 'rePassword', value: e.target.value })}
                    />
                </Box>
                <Box>
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Contact Person Name"
                        value={data.contactPerson}
                        onChange={(e) => dispatch({ field: 'contactPerson', value: e.target.value })}
                    />
                    <Input
                        inputype="text"
                        type="addDataform"
                        placeholder="Business Contact Number"
                        value={data.businessNumber}
                        onChange={(e) => dispatch({ field: 'businessNumber', value: e.target.value })}
                    />
                </Box>

                <Box>
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

                </Box>
                {/* new filed */}

                <Box>
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

                </Box>

            </div>
        </>
    )
}
