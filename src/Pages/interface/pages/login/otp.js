import Input from "components/input"
import { useState } from "react"
import { Head, LoginModelWrapper } from "./structure"
import Button from "components/button"

const OTP = () => {
    
    const [value, setValues] = useState({
        otp : "",
        pass : "",
        newPass : "",
        error : {
            otp : "",
            pass : "",
            newPass : ''
        }
    })

    const setValue = (e, name) => {
        // if error is true then set it to false
        if (value.error[name]) {
            setValues({
                ...value,
                [name]: e.target.value,
                error: {
                    ...value.error,
                    [name]: false,
                },
            });
            return; 
        }
        
        setValues({
            ...value,
            [name]: e.target.value,
        });

    };

    const handelClick =() => {
        // validate the data and post to spi and succees then move to auth pages
        console.log(value)
    }

    return (
        <>
            <LoginModelWrapper>
                <Head>Enter New Password</Head>
                <Input
                    placeholder="Enter OTP Verification Code"
                    type="model"
                    inputype="text"
                    value={value.otp}
                    onChange={(e) => setValue(e , 'otp')}
                    error = {value.error.otp}
                />
                  <Input
                    placeholder="Enter new password"
                    type="model-password"
                    inputype="password"
                    value={value.pass}
                    onChange={(e) => setValue(e, "pass")}
                    error={value.error.pass}
                />
                  <Input
                    placeholder="Enter your new password again"
                    type="model-password"
                    inputype="password"
                    value={value.newPass}
                    onChange={(e) => setValue(e, "newPass")}
                    error={value.error.newPass}
                />

                <Button type="login-model" onClick={handelClick}>Save & Continue</Button>
            </LoginModelWrapper>
        </>
    )
}

export default OTP