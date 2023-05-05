import { H1 } from "components/a"
import { Container, TableHead } from "./style"
import { TableLeftSide, TableRightSide } from "../list-View"
import Dropdown from "components/dropdown"
import { useState } from "react"
import { scheduleBody, scheduleHead, scheduleList } from "./data"


const TableHeader = ({ headerList , type }) => {
    if (type === 'schedule') {
        return (
            <>
                <TableHead
                    type={type}
                >
                    <tr>
                        
                        {Array.isArray(headerList) && 
                        headerList.map((item, index) => (
                            <th key={index}>{item.name}</th>
                        ))}
    
                    </tr>
                </TableHead>
            </>
        )
    }
}
const TableBody = ({bodyData, type}) => {
    if (type === 'schedule') {
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
}

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
        
        console.log(state)
        // on update State it will change all the state of table header and body
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
            {/* // type of table header and body should be same  */}
            <table 
                aria-label="table"
                id="table"
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        borderSpacing: "0",
                        border: "1px solid #ddd",
                        marginTop: "20px",
                    }}
            >
                <TableHeader  headerList={scheduleHead} type={'schedule'} />
                <TableBody  bodyData={scheduleBody} type={'schedule'}/>
            </table>

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