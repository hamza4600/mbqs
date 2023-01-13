// used for  main Page Types
// Only data will chnage for this page  
import { useState } from "react";

import { Container, Left, Right } from "./styled";
import Button from "components/button";
import Dropdown from "components/dropdown";
import useDropDown from "components/dropdown/useDropdown";
// Icons
import { MdOutlineAdd } from "react-icons/md";
import { MdCloseFullscreen } from "react-icons/md";
import { BiFilterAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { BsShareFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

import { H1 } from "../creatBusi/styled";
import { ListBody } from "./sub";
import { ListBod, exportList, share, sortBy } from "./variable";


const LeftSide = (props) => {

    const { query, onChange } = props;

    const { isOpen, toggle, close, value, updateValue } = useDropDown();

    return (
        <>
            <Left id="left">
                <input
                    type="addData"
                    inputype='text'
                    placeholder="Search By Keyword"
                    id="search"
                    value={query}
                    onChange={onChange}
                />
                < Dropdown
                    placeholder="Filter By"
                    isOpen={isOpen}
                    toggel={toggle}
                    close={close}
                    // onChange={() => handeldropdown(value, 'category')}
                    value={value}
                    updateValue={updateValue}
                    icon={<BiFilterAlt size={22} />}
                    options={sortBy}
                    type='form'
                />
                < Dropdown
                    placeholder="Filter Calender"
                    isOpen={isOpen}
                    toggel={toggle}
                    close={close}
                    // onChange={() => handeldropdown(value, 'category')}
                    value={value}
                    updateValue={updateValue}
                    icon={<SlCalender size={22} />}
                    options={sortBy}
                    type='form'
                />

                < Dropdown
                    placeholder="Share"
                    isOpen={isOpen}
                    toggel={toggle}
                    close={close}
                    // onChange={() => handeldropdown(value, 'category')}
                    value={value}
                    updateValue={updateValue}
                    icon={<BsShareFill size={20} />}
                    options={share}
                    type='form'
                />

            </Left>
        </>
    )
}

const RightSide = () => {

    const { isOpen, toggle, close, value, updateValue } = useDropDown();

    const fullScreen = () => {
        const element = document.getElementById("main_page");
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    return (
        <>
            <Right>
                < Dropdown
                    placeholder="Share"
                    isOpen={isOpen}
                    toggel={toggle}
                    close={close}
                    // onChange={() => handeldropdown(value, 'category')}
                    value={value}
                    updateValue={updateValue}
                    icon={<BsChevronDown size={20} />}
                    options={exportList}
                    type='form'
                />
                <i
                    onClick={fullScreen}
                >
                    <MdCloseFullscreen size={20} />

                </i>
            </Right>
        </>
    )
}


const ListViewPage = (props) => {
    const { type } = props;

    const addbusiness = () => window.location.href = `/auth/creat-business`

    const [query, setQuery] = useState('')
    const [array, setArray] = useState(ListBod);

    const search = (e) => {
        setQuery(e.target.value)
        // console.log(query, "array");
        if (e?.target?.value === '') {
            setArray(ListBod);
            return;
        }
        if (e?.target?.value === ' ') return;

        // search by all fields
        const newArray = array.filter((item) => {
            return Object.keys(item).some((key) => {
                return item[key].toString().toLowerCase().includes(e?.target?.value.toLowerCase());
            })
        })

        setArray(newArray);
        console.log(newArray, "newArray");
    }

    return (
        <>
            <Container>
                <div id="inline">
                    <H1>{type} List View</H1>
                    <Button
                        text="Add"
                        type='addData'
                        leftIcon={<MdOutlineAdd size={22} />}
                        onClick={addbusiness}
                    >
                        Creat New {type}
                    </Button>
                </div>

                <div id="inline-head">

                    <LeftSide
                        query={query}
                        onChange={search}
                    />
                    <RightSide />

                </div>

                <ListBody
                    query={query}
                    array={array}
                    setArray={setArray}
                />
            </Container>
        </>
    )
}

export default ListViewPage;