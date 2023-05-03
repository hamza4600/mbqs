import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Input from "components/input";
import { DotShuttler, Head, RegesterWrapper } from "./structure";
import Button from "components/button";
import { runValidation } from "functions/validate";
import { LoginApi } from "api";
import axios from "axios";
import ServerError from "components/serverError";
import { setModelData } from "store/loginModel";
import { registerUser } from "store/session";

const RegesterModel = (props) => {
    const [values, setValues] = useState({
        employname: "",
        contactNumber: "",
        email: "",
        password: "",
        rePassword: "",
        error: {
            employname: false,
            contactNumber: false,
            email: false,
            password: false,
            rePassword: false,
        },
    });

    const [responce, setResponce] = useState({});
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();


    function generateRandomIPv4() {
        let octets = [];
        for (let i = 0; i < 4; i++) {
          octets.push(Math.floor(Math.random() * 256));
        }
        return octets.join(".");
    }

    const setValue = (e, name) => {
        // if error is true then set it to false
        if (values.error[name]) {
            setValues({
                ...values,
                [name]: e.target.value,
                error: {
                    ...values.error,
                    [name]: false,
                },
            });
            return;
        }

        setValues({
            ...values,
            [name]: e.target.value,
        });
    };

    useEffect(() => {
        const modal = document.getElementById("small-modal");

        if (
            values.error.employname ||
            values.error.contactNumber ||
            values.error.email ||
            values.error.password
        ) {
            modal.style.maxHeight = "425px";
        }
        // on mobile 768px
        if (window.innerWidth < 768) {
            modal.style.maxHeight = "100%";
        }
    }, [
        values.error.contactNumber,
        values.error.email,
        values.error.employname,
        values.error.password,
    ]);
    console.log(LoginApi.register)
    const handelLogin = async () => {
        //  all logic for login
        const { employname, contactNumber, email, password, rePassword } =
            values;
        const name = runValidation(employname, ["required"]);
        const number = runValidation(contactNumber, ["required", "number"]);
        const reemail = runValidation(email, ["required", "email"]);
        const apassword = runValidation(password, ["required", "password"]);
        const arePassword = runValidation(
            [rePassword, password],
            ["required", "passwordMatch"]
        );

        if (
            !name.isValid ||
            !number.isValid ||
            !reemail.isValid ||
            !apassword.isValid ||
            !arePassword.isValid
        ) {
            setValues({
                ...values,
                error: {
                    ...values.error,
                    employname: !name.isValid,
                    contactNumber: !number.isValid,
                    email: !reemail.isValid,
                    password: !apassword.isValid,
                    rePassword: !arePassword.isValid,
                },
            });
        } else {
            setValues({
                ...values,
                error: {
                    ...values.error,
                    employname: false,
                    contactNumber: false,
                    email: false,
                    password: false,
                    rePassword: false,
                },
            });
            // login Logi
            try {
                setLoading(true);
                const responce = await axios.post(LoginApi.register, {
                    email: email,
                    password: password,
                    name: employname,
                    contact: contactNumber,
                    company_name: "MBIQS",
                });
                setLoading(false);
                setResponce(responce.data);

                setTimeout(() => {
                    if (responce.data.code === 200) {
                        // set model data
                        dispatch(
                            setModelData({
                                valid: false,
                                session: "",
                                usertype: "",
                                number: 1,
                                typeModel: "signup",
                            })
                        );
                        // set session
                        dispatch(
                            registerUser({
                                verified: true,
                                userAgent : navigator.userAgent,
                                ip : generateRandomIPv4(),
                            })
                        )
                        props.setActiveCompont(1);
                    }
                }, 2000);
            } catch (error) {
                setLoading(false);
                console.error("Error occurred while logging in: ", error);
                setResponce(error.response.data);
            }
        }
    };

    if (loading) {
        return (
            <>
                <RegesterWrapper>
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
                </RegesterWrapper>
            </>
        );
    }

    if (responce.code === 200) {
        return (
            <>
                <RegesterWrapper>
                    <Head size="25px" capi>
                        Congratulations
                    </Head>
                    <Head>You've successfully registered</Head>
                </RegesterWrapper>
            </>
        );
    }

    if (responce.code === 500) {
        return (
            <>
                <ServerError />
            </>
        );
    }

    if (responce.code === 400) {
        return (
            <>
                <RegesterWrapper>
                    <Head size="25px">Congratulations</Head>
                    <Head>your Email is registered</Head>
                </RegesterWrapper>
            </>
        );
    }

    return (
        <>
            <RegesterWrapper cpait>
                <Head justify="start">Employees sign up with MBIQS</Head>
                <Input
                    placeholder="Employee Name"
                    type="model"
                    inputype="text"
                    value={values.employname}
                    onChange={(e) => setValue(e, "employname")}
                    error={values.error.employname}
                    id="employname"
                />
                <Input
                    placeholder="Contact Number"
                    type="model"
                    inputype="text"
                    value={values.contactNumber}
                    onChange={(e) => setValue(e, "contactNumber")}
                    error={values.error.contactNumber}
                />
                <Input
                    placeholder="Email"
                    type="model"
                    inputype="text"
                    value={values.email}
                    onChange={(e) => setValue(e, "email")}
                    error={values.error.email}
                />
                <Input
                    placeholder="Enter Your password"
                    type="model-password"
                    inputype="password"
                    value={values.password}
                    onChange={(e) => setValue(e, "password")}
                    error={values.error.password}
                />
                <Input
                    placeholder="Enter your password again"
                    type="model-password"
                    inputype="password"
                    value={values.rePassword}
                    onChange={(e) => setValue(e, "rePassword")}
                    error={values.error.rePassword}
                    onKeyDown = {(e) => {
                        if(e.key === "Enter"){
                            handelLogin()
                        }
                    }}
                />

                <Button type="login-model" onClick={handelLogin}>
                    Save & Continue
                </Button>
            </RegesterWrapper>
        </>
    );
};

export default RegesterModel;
