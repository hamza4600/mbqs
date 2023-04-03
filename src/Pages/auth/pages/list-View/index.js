// used for  main Page Types
// Only data will chnage for this page  
import { useMemo, useState } from "react";

import { Container, Left, Right } from "./styled";
import Button from "components/button";
import Dropdown from "components/dropdown";
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
                    icon={<BiFilterAlt size={20} />}
                    options={sortBy}
                    type='form'
                />
                < Dropdown
                    placeholder="Filter Calender"
                    icon={<SlCalender size={20} /> }
                    options={sortBy}
                    type='form'
                />

                <Dropdown
                    placeholder="Share"
                    icon={<BsShareFill size={18} />}
                    options={share}
                    type='form'
                    id='share'
                />

            </Left>
        </>
    )
}

const RightSide = () => {

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
                    icon={<BsChevronDown size={18} />}
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