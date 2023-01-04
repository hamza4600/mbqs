import Input from "components/input"
import { useState } from "react"
import { Head, LoginModelWrapper } from "./structure"
import Button from "components/button"

const ResetPass = () => {

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
                <Head>Reset Password</Head>
                <Input
                    placeholder="Enter New Password"
                    type="model-password"
                    inputype="password"
                    value={pass.pass}
                    onChange={(e) => setValue(e, 'pass')}
                    // error={error()}
                    errorMessage="Enter Your Password"
                />
                <Input
                    placeholder="Renter New Password"
                    type="model-password"
                    inputype="password"
                    value={pass.cpass}
                    onChange={(e) => setValue(e, 'cpass')}
                    // error={error()}
                    errorMessage="Enter Your Password"
                />

                <Button type="login-model" onClick={() => { }}>Re-set Password</Button>

            </LoginModelWrapper>
        </>
    )
}

export default ResetPass