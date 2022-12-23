import Input from "components/input"
import { useState } from "react"
import { LoginModelWrapper } from "./structure"

// part of LoginModel

const LoginModelPart = () => {

    const [values, setValues] = useState({
        username: '',
        password: '',
        remember: false
    })

    const setValue = (e, name) => {
        setValues({
            ...values,
            [name]: e.target.value,
        })
    }


    return (
        <>
            <LoginModelWrapper>
                <Input
                    placeholder="User Name"
                    type="model"
                    inputype="text"
                    value={values.username}
                    onChange={(e) => setValue(e, 'username')}
                    // error={error()}
                    errorMessage="Enter Your User Name"
                />
                <Input
                    placeholder="Password"
                    type="model-password"
                    inputype="password"
                    value={values.password}
                    onChange={(e) => setValue(e, 'password')}
                    // error={error()}
                    errorMessage="Enter Your Password"
                />

                <div id="row">
                    <Input.Radio
                        type="model"
                        name="remember"
                        value="remember"
                        checked={values.remember}
                        onChange={(e) => setValue(e, 'remember')}
                        label="Remember Me"
                    />
                    <a href="/">Forgot Password</a>
                    <a href="/">Sign Up</a>
                </div>

            </LoginModelWrapper>
        </>
    )
}

export default LoginModelPart