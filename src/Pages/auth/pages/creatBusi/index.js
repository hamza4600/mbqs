import { Suspense, useState } from 'react';
import PageSpinner from 'components/pageSpinner';
import Input from 'components/input';
import { Grid, Wrapper } from './styled';
import Dropdown from 'components/dropdown';
import Button from 'components/button';
import useDropDown from 'components/dropdown/useDropdown';

const Left = () => {
    const [data, setData] = useState({
        name: '',
        text: '',
        password: '',
    });

    const handelChange = (e, name) => {
        setData({
            ...data,
            [name]: e.target.value
        })
    }

    const { isOpen, selectedItemIndex,  selectItem , selected} = useDropDown();
    console.log(isOpen, selected, selectedItemIndex);

    return (
        <>
            <div id='sub'>
                <h1>Add New Business</h1>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter your business name"
                        value={data.name}
                        onChange={(e) => handelChange(e, 'name')}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter your business name"
                        value={data.text}
                        onChange={(e) => handelChange(e, 'text')}
                    />
                </Wrapper>
                <Wrapper>
                    <Dropdown
                        placeholder="Select Category"
                        selectItem = {selectItem}
                        isOpen = {isOpen}
                        selected = {selected}
                        selectedItemIndex = {selectedItemIndex}
                    />
                    <Dropdown
                        placeholder="Select Sub Category"
                    />
                </Wrapper>

                <Wrapper>
                    <Input
                        inputype="number"
                        type="addData"
                        placeholder="TAX Number"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        inputype="number"
                        type="addData"
                        placeholder="VAT Number"
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
                        inputype="number"
                        type="addData"
                        placeholder="Contact Number"
                        value=""
                        onChange={() => { }}
                    />
                </Wrapper>
                <Wrapper full>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter Address"
                        value=""
                        onChange={() => { }}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="number"
                        type="addData"
                        placeholder="Enter Postal Code"
                        value=""
                        onChange={() => { }}
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
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Business License ID"
                        value=""
                        onChange={() => { }}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Company Budget amount"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Opertaion Capital amount"
                        value=""
                        onChange={() => { }}
                    />
                </Wrapper>
                <Wrapper full>
                    <Input.TextArea
                        styleType="addData"
                        type="text"
                        placeholder="Write description about your business"
                        value=""
                        onChange={() => { }}
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
                <h1>Enter the specifics of your position</h1>
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
                        placeholder="Enter your business name"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter your business name"
                        value=""
                        onChange={() => { }}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter your business name"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter your business name"
                        value=""
                        onChange={() => { }}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter your business name"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter your business name"
                        value=""
                        onChange={() => { }}
                    />
                </Wrapper>
                <Wrapper>
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter your business name"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        inputype="text"
                        type="addData"
                        placeholder="Enter your business name"
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
                        // chnage postion of image
                        files?.fileUrl && (
                            <img src={files?.file
                                && files?.fileUrl
                                // : "https://via.placeholder.com/150" // color placeholder
                                // https://via.placeholder.com/150/FF0000/FFFFFF/?text=Image+Size+150x150
                            } alt="img" />
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
                    onClick={() => { }}
                    id='save'
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