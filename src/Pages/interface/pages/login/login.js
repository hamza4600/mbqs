import Input from "components/input"
import { useState } from "react"
import { Head, LoginModelWrapper } from "./structure"
import Button from "components/button"

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
        props.setActiveCompont(4)
    }
    const signup = () => {
        props.setActiveCompont(2)
    }

    const handelLogin = () => {
        window.location.href = "/auth/panel"
    }

    return (
        <>
            <LoginModelWrapper>
                <Head>Welcome</Head>
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

                <Button
                    type="login-model"
                    onClick={handelLogin}
                >
                    Login
                </Button>
            </LoginModelWrapper>
        </>
    )
}

export default LoginModelPart