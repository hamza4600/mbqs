import Input from "components/input"
import { useState } from "react"
import { LoginModelWrapper } from "./structure"

const OTP = () => {
    const [otp, setOtp] = useState("")
    return (
        <>
            <LoginModelWrapper>
                <Input
                    placeholder="Enter OTP Verification Code"
                    type="model"
                    inputype="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    // error={error()}
                    errorMessage="Enter Your OTP"
                />
            </LoginModelWrapper>
        </>
    )
}

export default OTP