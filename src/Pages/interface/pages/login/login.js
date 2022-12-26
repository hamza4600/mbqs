import Input from "components/input"
import { useState } from "react"
import { LoginModelWrapper } from "./structure"

// part of LoginModel

const LoginModelPart = (props) => {
    
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

    const forget = () => {
        props.setActiveCompont(3)
    }
    const signup = () => {
        props.setActiveCompont(5)
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
                    <p
                        onClick={forget}
                    >Forgot Password</p>
                    <p
                        onClick={signup}
                    >Sign Up</p>
                </div>

            </LoginModelWrapper>
        </>
    )
}

export default LoginModelPart