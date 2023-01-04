// Role Model  Not in use
import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Input from "components/input"
import { setModelData } from "store/loginModel"
import Outside from "./drop"


const roles = ['admin', 'user', 'guest', 'super admin']

const RoleModel = (props) => {

    const [drop, setDrop] = useState(false);
    const [role, setRole] = useState("" || props.role)
    //  set valeu to redux 
    const dispatch = useDispatch();

    const handelFocus = () => {
        setDrop(true)
    }
 
    const close = () => {
        setDrop(false)
    }
    const dropClick = (e) => {
        setRole(e.target.innerText)
        setDrop(false)
        dispatch(setModelData({
            type: e.target.innerText,
            valid: true,
        }))
    }

    const error = useCallback(() => {
        if (role?.length > 0) {
            let ol = String(role).toLowerCase()
            if (!roles.includes(ol)) {
                return true
            }
        }
        return false
    }, [role])


    const setValue = (e) => {
        setRole(e.target.value)

        dispatch(setModelData({
            type: role,
            valid: error() ? false : true,
        }))
    }

    useEffect(() => {
        dispatch(setModelData({
            type: role,
            valid: error() ? false : true,
        }))

    }, [dispatch, error, role])

    return (
        <>
            <Input
                placeholder="Enter Your Role"
                type="model"
                inputype="text"
                onFocus={handelFocus}
                value={role}
                onChange={(e) => setValue(e)}
                error={error()}
                errorMessage="Role is not in application"
            />

            {
                drop ? <div
                    style={{ position: "absolute", top: "44%", left: 0, width: "100%", background: "rgb(23 86 130)", zIndex: 1 }}
                >
                    <Outside
                        outSide={close}
                        onClick={dropClick}
                        array={
                            role?.length > 0 ? roles.filter(item => item.includes(role)) : roles
                        }
                    />
                </div> : null
            }
        </>
    )
}

export default RoleModel