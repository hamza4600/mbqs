import Input from "components/input";
import { useState } from "react";
import { DotShuttler, Head, LoginModelWrapper } from "./structure";
import Button from "components/button";
import { runValidation } from "functions/validate";
import axios from "axios";
import { LoginApi } from "api";

const OTP = (props) => {
    const [value, setValues] = useState({
        otp: "",
        pass: "",
        newPass: "",
        error: {
            otp: "",
            pass: "",
            newPass: "",
        },
    });

    const [loading, setLoading] = useState(false);
    const [responce, setResponce] = useState({});

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

    const handelClick = async () => {
        // validate the data and post to spi and succees then move to auth pages

        console.log(value);
        const otp = runValidation(value.otp, ["required", "number"]);
        const pass = runValidation(value.pass, ["required", "password"]);
        const newPass = runValidation(
            [value.newPass, value.pass],
            ["required", "passwordMatch"]
        );

        if (!otp.isValid || !pass.isValid || !newPass.isValid) {
            setValues({
                ...value,
                error: {
                    otp: !otp.isValid ? otp.error : "",
                    pass: !pass.isValid ? pass.error : "",
                    newPass: !newPass.isValid ? newPass.error : "",
                },
            });
            return;
        } else {
            setValues({
                ...value,
                error: {
                    otp: false,
                    pass: false,
                    newPass: false,
                },
            });
            // login api
            try {
                setLoading(true);
                const res = await axios.post(LoginApi.verifyOtp, {
                    otp: value.otp,
                    password: value.pass,
                    new_password: value.newPass,
                });
                setResponce(res.data);
                setLoading(false);
                // next component
                setTimeout(() => {
                    if (res.data.code === 200) {
                        props.setActiveCompont(1);
                    }
                }, 2000);
            } catch (error) {
                setLoading(false);
                console.log(error);
                setResponce(error.response.data);
            }
        }
    };

    if (loading) {
        return (
            <>
                <LoginModelWrapper>
                    <Head
                        style={{
                            textAlign: "center",
                            padding: "2px 20px",
                        }}
                    >
                        Thank you for being patient with us, and we apologize
                        for the delay.
                    </Head>

                    <DotShuttler />
                </LoginModelWrapper>
            </>
        );
    }

    if (responce.code === 200) {
        return (
            <>
                <LoginModelWrapper>
                    <Head size="25px" capi>
                        Congratulations
                    </Head>
                    <Head>You've successfully change password </Head>
                </LoginModelWrapper>
            </>
        );
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
                    onChange={(e) => setValue(e, "otp")}
                    error={value.error.otp}
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
                    onKeyDown = {(e) => {
                        if(e.key === "Enter"){
                            handelClick()
                        }
                    }}
                />

                <Button type="login-model" onClick={handelClick}>
                    Save & Continue
                </Button>
            </LoginModelWrapper>
        </>
    );
};

export default OTP;
