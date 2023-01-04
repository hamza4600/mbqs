import Input from "components/input"
import { useState } from "react"
import { Head, LoginModelWrapper } from "./structure"
import Button from "components/button"

const OTP = () => {
    const [otp, setOtp] = useState("")
    return (
        <>
            <LoginModelWrapper>
                <Head>OTP Verification</Head>
                <Input
                    placeholder="Enter OTP Verification Code"
                    type="model"
                    inputype="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    // error={error()}
                    errorMessage="Enter Your OTP"
                />

                <Button type="login-model" onClick={() => { }}>Verify</Button>
            </LoginModelWrapper>
        </>
    )
}

export default OTP