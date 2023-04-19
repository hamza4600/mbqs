import { useCallback, useEffect, useState } from "react"

import InterfaceLayout from "page-componet/layout"
import Model from "components/model"
import { Grid, Lwrap, Rwrap } from "./structure"

import LoginModelPart from "./login"
import RegesterModel from "./regester"
import OTP from "./otp"
import ResetPass from "./resetPass"

import logo from "../../../../assits/modal.svg"
import { useSelector } from "react-redux"

const Left = () => (
    <>
        <Lwrap>
            <img src={logo} alt="model for login" />
        </Lwrap>
    </>
)

// pass all values to redux In seprate file Models  
const Right = (props) => {

    // const url = new URL(window.location.href);
    // const role = url.searchParams.get("role");
    // console.log(role)
    // url be like this http://localhost:3000/?role=Admin/?model=4 can  model in use for login model
    const [activeCompont, setActiveCompont] = useState(1);
    const active = useSelector(state => state.loginModel);

    useEffect(() => {
        if (active.isValid && active.session.id !== "" && active.session.token !== "" ) {
            window.location.href = "auth/panel"
        }
    },[active.isValid, active.session.id, active.session.token]) 

    const ActiveCompt = useCallback(() => {
        switch (activeCompont) {
            case 1:
                return <LoginModelPart setActiveCompont={setActiveCompont} />
            case 2:
                return <RegesterModel setActiveCompont={setActiveCompont} />
            case 3:
                return <OTP setActiveCompont={setActiveCompont}/>
            case 4:
                return <ResetPass setActiveCompont={setActiveCompont} />
            default:
                return <p>Error : No Match</p>
        }
    }, [activeCompont])

    return (
        <>
            <Rwrap id="margin">
                <ActiveCompt />
            </Rwrap>
        </>
    )
}

const LoginModel = () => (
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

const MainLoginPage = () => (
    <>
        <InterfaceLayout blurnav={true} sidebar={false}>
            <LoginModel />
        </InterfaceLayout>
    </>
)

export default MainLoginPage