// used for  main Page Types
// Only data will chnage for this page  
import { useMemo, useState } from "react";

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


import { ListBody } from "./sub";
import { ListBod, exportList, share, sortBy } from "./variable";
import { H1 } from "components/a";


const LeftSide = (props) => {

    const { query, onChange } = props;

    // for filetr
    const { isOpen: isFone, toggle: Ftoggle, close: fclose } = useDropDown();
    // for calender
    const { isOpen: isCone, toggle: Ctoggle, close: cclose } = useDropDown();
    // for share
    const { isOpen: isSone, toggle: Stoggle, close: sclose } = useDropDown();


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
                <Dropdown
                    placeholder="Filter By"
                    isOpen={isFone}
                    toggel={Ftoggle}
                    close={fclose}
                    icon={<BiFilterAlt size={20} color={isFone && "#00BFFF"} />}
                    options={sortBy}
                    type='form'
                />
                < Dropdown
                    placeholder="Filter Calender"
                    isOpen={isCone}
                    toggel={Ctoggle}
                    close={cclose}
                    icon={<SlCalender size={20} color={isCone && "#00BFFF"} />}
                    options={sortBy}
                    type='form'
                />

                <Dropdown
                    placeholder="Share"
                    isOpen={isSone}
                    toggel={Stoggle}
                    close={sclose}
                    icon={<BsShareFill size={18} color={isSone && "#00BFFF"} />}
                    options={share}
                    type='form'
                    id='share'
                />

            </Left>
        </>
    )
}

const RightSide = () => {

    const { isOpen, toggle, close } = useDropDown();

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
                    placeholder="Export"
                    isOpen={isOpen}
                    toggel={toggle}
                    close={close}
                    icon={<BsChevronDown size={18} color={isOpen && "#00BFFF"} />}
                    options={exportList}
                    type='form'
                />

                <i>
                    <MdCloseFullscreen
                        size={20}
                        onClick={fullScreen}
                    />
                </i>
            </Right>
        </>
    )
}


const ListViewPage = (props) => {
    const { type } = props;
    console.log(type)

    const addbusiness = () => window.location.href = `/auth/creat-business`

    const [query, setQuery] = useState('')

    const search = (e) => {
        setQuery(e.target.value.replace(/\s/g, '').toLocaleLowerCase())
    }

    const filetrArray = useMemo(() => {
        return ListBod.filter((item) => {
            if (query === "" || query === " ") { return item }
            else if (
                item.businessCat.toLocaleLowerCase().includes(query) ||
                item.businessName.toLocaleLowerCase().includes(query) ||
                item.email.toLocaleLowerCase().includes(query) ||
                item.businessID.trim().toLocaleLowerCase().includes(query) ||
                item.regesterDate.includes(query) ||
                item.contact.includes(query) ||
                item.compantStatus.toLocaleLowerCase().includes(query)
            ) {
                return item
            }
        })
    }, [query])

    return (
        <>
            <Container>
                <div id="inline">
                    <H1>{type.type} List View</H1>
                    <Button
                        text="Add"
                        type='addData'
                        id = 'addData'
                        leftIcon={<MdOutlineAdd size={20} />}
                        onClick={addbusiness}
                    >
                        Register New {type.type}
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
                    array={filetrArray}
                />
            </Container>
        </>
    )
}

export default ListViewPage;