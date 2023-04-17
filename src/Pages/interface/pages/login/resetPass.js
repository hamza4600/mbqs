import Input from "components/input"
import { useState } from "react"
import { Head, LoginModelWrapper } from "./structure"
import Button from "components/button"

const ResetPass = () => {
// it will be dynamic have another modal in it also for otp
    const [pass, setPass] = useState({
        pass: '',
        cpass: ''
    });

    const setValue = (e, name) => {
        setPass({
            ...pass,
            [name]: e.target.value,
        })
    }

    return (
        <>
            <LoginModelWrapper>
                <Head
                size ='26px'
                style={{
                    paddingRight : '20px'
                }}
                >Forgot Password ?</Head>
                <Input
                    placeholder="Enter Your Email OR User Name "
                    type = "model"
                    inputype="text"
                    value={pass.pass}
                    onChange={(e) => setValue(e, 'pass')}
                    // error={error()}
                />

                <Button type="login-model" onClick={() => { }}>Continue</Button>

            </LoginModelWrapper>
        </>
    )
}

export default ResetPass