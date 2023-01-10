// used for  main Page Types
// Only data will chnage for this page  

import DropDownData from "components/dropdown";
import { Container } from "./styled";
import Button from "components/button";
// Icons
import { MdOutlineAdd } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdCloseFullscreen } from "react-icons/md";
import { BiFilterAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { BsShareFill } from "react-icons/bs";

const LeftSide = () => {
    return (
        <>
            <div id="left">
                <h1>Search</h1>
                <h1>Filter by</h1>
                <h1>Filter by</h1>
                <h1>Filter by</h1>

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
    const { type } = props
    const options = ['One', 'two', 'three']
    return (
        <>
            <Container>
                <div id="inline">
                    <h1>List of {type}</h1>
                    <Button
                        text="Add"
                        type='addData'
                        leftIcon={<MdOutlineAdd size={22} />}
                    >
                        Creat New {type}
                    </Button>
                </div>

                <div id="inline">
                    <LeftSide />
                    <RightSide />
                </div>

                <DropDownData
                    options={options}
                    value={'select an option'}
                />

                {/* /Table View Container arry pass Show add data  */}


            </Container>
        </>
    )
}

export default ListViewPage;