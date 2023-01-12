// used for  main Page Types
// Only data will chnage for this page  

// import DropDownData from "components/dropdown";
import { Container } from "./styled";
import Button from "components/button";
// Icons
import { MdOutlineAdd } from "react-icons/md";
// import { MdAdd } from "react-icons/md";
// import { MdCloseFullscreen } from "react-icons/md";
// import { BiFilterAlt } from "react-icons/bi";
// import { BsChevronDown } from "react-icons/bs";
// import { BsShareFill } from "react-icons/bs";
import { H1 } from "../creatBusi/styled";
import { ListBody } from "./sub";
import {  useState } from "react";
import { ListBod } from "./variable";

const LeftSide = () => {
    return (
        <>
            <div id="left">
                <p>Search</p>
                <p>Filter by</p>
                <p>Filter by</p>
                <p>Filter by</p>

            </div>
        </>
    )
}

const RightSide = () => {
    return (
        <>

            <p>Export by</p>
        </>
    )
}


const ListViewPage = (props) => {
    const { type } = props;

    const addbusiness = () => window.location.href = `/auth/creat-business`

    const [query, setQuery] = useState('')
    const [array, setArray] = useState(ListBod);


    // serach query
    const search = (e) => {
        setQuery(e?.target?.value);
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
                    <LeftSide />
                    <RightSide />
                </div>

                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={search}
                />

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