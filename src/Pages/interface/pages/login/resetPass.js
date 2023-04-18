import Input from "components/input"
import { useState } from "react"
import { Head, LoginModelWrapper } from "./structure"
import Button from "components/button"
import { runValidation } from "functions/validate"

const ResetPass = (props) => {
// it will be dynamic have another modal in it also for otp
    const [pass, setPass] = useState({
        email: '',
        error: ''
    });

    const setValue = (e, name) => {
        setPass({
            ...pass,
            [name]: e.target.value,
        })
    }

    const handelClick = () => {
        const email = runValidation(pass.email , ["required", "email"]);
        if(!email.isValid) {
            setPass({
                email : email.isValid ? pass.email : "" ,
                error : true
            })
        } else {
            setPass({
                ...pass,
                error : false
            })
            // next Modal and api call post data to it 
            props.setActiveCompont(3);
        }
    }

    console.log(pass)
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
                    value={pass.email}
                    onChange={(e) => setValue(e, 'email')}
                    error = {pass.error}
                />

                <Button type="login-model" onClick={handelClick}>Continue</Button>

            </LoginModelWrapper>
        </>
    )
}

export default ResetPass