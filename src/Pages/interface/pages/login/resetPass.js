import Input from "components/input";
import { useState } from "react";
import { DotShuttler, Head, LoginModelWrapper } from "./structure";
import Button from "components/button";
import { runValidation } from "functions/validate";
import axios from "axios";
import { LoginApi } from "api";

const ResetPass = (props) => {
    // it will be dynamic have another modal in it also for otp
    const [pass, setPass] = useState({
        email: "",
        error: "",
    });

    const [loading, setLoading] = useState(false);
    const [responce, setResponce] = useState({});

    const setValue = (e, name) => {
        setPass({
            ...pass,
            [name]: e.target.value,
        });
    };

    const handelClick = async () => {
        const email = runValidation(pass.email, ["required", "email"]);
        if (!email.isValid) {
            setPass({
                email: email.isValid ? pass.email : "",
                error: true,
            });
        } else {
            setPass({
                ...pass,
                error: false,
            });

            try {
                setLoading(true);
                const res = await axios.post(LoginApi.sendOtp, {
                    email: pass.email,
                });
                setResponce(res.data);
                setLoading(false);
                // next component
                setTimeout(() => {
                    if (res?.data?.code === 200) {
                        props.setActiveCompont(3);
                    }
                }, 2000);
            } catch (error) {
                setLoading(false);
                console.log(error);
                setResponce(error);
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
                    {/* animation */}
                    <DotShuttler />
                </LoginModelWrapper>
            </>
        );
    }

    if (responce?.code === 200) {
        return (
            <>
                <LoginModelWrapper>
                    <Head
                        style={{
                            textAlign: "center",
                            padding: "2px 20px",
                        }}
                    >
                        OTP is send to your email.
                    </Head>
                </LoginModelWrapper>
            </>
        );
    }

    return (
        <>
            <LoginModelWrapper>
                <Head
                    size="26px"
                    style={{
                        paddingRight: "20px",
                    }}
                >
                    Forgot Password ?
                </Head>
                <Input
                    placeholder="Enter Your Email OR User Name "
                    type="model"
                    inputype="text"
                    value={pass.email}
                    onChange={(e) => setValue(e, "email")}
                    error={pass.error}
                    onKeyDown = {(e) => {
                        if(e.key === "Enter"){
                            handelClick()
                        }
                    }}
                />

                <Button type="login-model" onClick={handelClick}>
                    Continue
                </Button>
            </LoginModelWrapper>
        </>
    );
};

export default ResetPass;
