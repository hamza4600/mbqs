import InterfaceLayout from "page-componet/layout"
import Model from "components/model"
import { Grid, Lwrap, Rwrap } from "./structure"
import logo from "../../../../assits/model.svg"
import Input from "components/input"
import Button from "components/button"
import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setModelData } from "store/loginModel"
import LoginModelPart from "./login"
import RegesterModel from "./regester"
import Outside from "./drop"
import OTP from "./otp"
import ResetPass from "./resetPass"


const Left = () => {
    return (
        <>
            <Lwrap>
                <img src={logo} alt="model for login" />
            </Lwrap>
        </>
    )
}

const roles = ['admin', 'user', 'guest', 'super admin']

const RoleModel = (props) => {

    const [drop, setDrop] = useState(false);
    const [role, setRole] = useState("" || props.role)
    //  set valeu to redux 
    const dispatch = useDispatch();

    const handelFocus = () => {
        setDrop(true)
    }

    // console.log(role)
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

// pass all values to redux 
const Right = (props) => {

    const user = useSelector(state => state.loginModel)
    const dispatch = useDispatch();

    const url = new URL(window.location.href);
    const role = url.searchParams.get("role");

    const [activeCompont, setActiveCompont] = useState(1)
    const [text, setText] = useState("Next");

    const handelClick = () => {

        if (user.isValid) {
            setText("Login")
            setActiveCompont(activeCompont + 1)
            dispatch(setModelData({
                number: 2
            }))
        }
        if (activeCompont === 3) {
            setText("Regester")
        }
        if (activeCompont === 2 && text === "Login") {
            // setText("OTP")
            // setActiveCompont(activeCompont + 1)
            window.location.href = "/auth/panel"
        }

    };


    useEffect(() => {
        if (activeCompont === 3) {
            setText("Regester")
        }
        if (activeCompont === 4) {
            setText("OTP")
        }
    }, [activeCompont])

    // console.log(role)
    // url be like this http://localhost:3000/?role=Admin/?model=4 can  model in use for login model
    return (
        <>
            <Rwrap>

                {
                    activeCompont === 1 && <RoleModel role={role} />
                }
                {
                    activeCompont === 2 && <LoginModelPart setActiveCompont={setActiveCompont} />
                }
                {
                    activeCompont === 3 && <RegesterModel />
                }
                {
                    activeCompont === 4 && <OTP />
                }
                {
                    activeCompont === 5 && <ResetPass />
                }
                <Button
                    type="login-model"
                    onClick={handelClick}
                >
                    {text}
                </Button>
            </Rwrap>
        </>
    )
}

const LoginModel = () => {
    return (
        <>
            <Model.Outer>
                <Model.Inner>
                    <Grid>
                        <Left />
                        <Right />
                    </Grid>
                </Model.Inner>
            </Model.Outer>
        </>
    )
}

const MainLoginPage = () => {
    return (
        <>
            <InterfaceLayout blurnav>
                <LoginModel />
            </InterfaceLayout>
        </>
    )
}

export default MainLoginPage