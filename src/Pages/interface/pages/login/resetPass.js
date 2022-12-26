import Input from "components/input"
import { useState } from "react"
import { LoginModelWrapper } from "./structure"


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
            </LoginModelWrapper>
        </>
    )
}

export default ResetPass