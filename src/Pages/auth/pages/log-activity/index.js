import { H1 } from "components/a"
import { Container } from "./style"
import { TableLeftSide, TableRightSide } from "../list-View"
import Dropdown from "components/dropdown"
import { useState } from "react"
import { ListBody } from "../list-View/sub"
import { ListBod } from "../list-View/variable"

const TableHeader = ({ headerList }) => {
    return (
        <>
            <thead>
                <tr>
                    
                    {Array.isArray(headerList) && headerList.map((item, index) => (
                        <th key={index}>{item}</th>
                    ))}

                </tr>
            </thead>
        </>
    )
}
const TableBody = (bodyData) => {
    return (
        <>
            <tbody>
                {Array.isArray(bodyData) && bodyData.length === 0 &&
                    <tr>
                        <td colSpan={7} style={{ textAlign: "center", fontSize: "20px" }}>No Data Found</td>
                    </tr>
                }

                {Array.isArray(bodyData) && bodyData.map((item, v) => (
                    <tr key={v}>
                        {Object.keys(item).map((key, index) => (
                            <td key={index}>{item[key]}</td>
                        ))}
                    </tr>
                ))}

            </tbody>
        </>
    )
}

const scheduleList = [
    {id : 1, name : 'Login Schedule'},
    {id : 2, name : 'Working Schedule'},
    {id : 3, name : 'Vacation Leave Schedule'},
    {id : 4, name : 'Salary Schedule'},
    {id : 5, name : 'Report Schedule'},
    {id : 6, name : 'Employee Schedule Profile Setup'},
    {id : 7, name : 'Meeting Schedule'},
]

const ScheduleList = ({options , value, onUpdate }) => {
    return (
        <>
            <Dropdown
                placeholder="Schedule List"
                options={options}
                type='formtable'
                value={value}
                updateValue={onUpdate}
                // updateValue={(value) => setState({ ...state, selectCategory: value })}
            />
        </>
    )
}

const TableList = () => {
    // main state of tabale that will be used in all table
    // each option have its own table head and Body
        const [state, setState] = useState({
            selectedSchedule : null,
        })
        
    return (
        <>
            <div id="head">
                <TableLeftSide 
                    id="lef12" 
                    scheduleList= {
                        <ScheduleList 
                            options={scheduleList} 
                            value={state.selectedSchedule?.name}
                            onUpdate={(value) => setState({ ...state, selectedSchedule: value })}
                        />
                    }
                />
                <TableRightSide id="rgt12" />
            </div>
{/* 
            <table 
                aria-label="table"
                id="table"
            >
                <TableHeader />
                <TableBody />
            </table> */}
            <ListBody array={ListBod}/>

        </>
    )
}



const Index = () => {
    return (
        <>
            <Container>
                <H1>Log Activity Page</H1>
                <TableList />
            </Container>
        </>
    )
}

export default Index