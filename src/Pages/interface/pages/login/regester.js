import Input from "components/input";
import { useEffect, useState } from "react";
import { Head, RegesterWrapper } from "./structure";
import Button from "components/button";
import { runValidation } from "functions/validate";
import { LoginApi } from "api";
import PageSpinner from "components/pageSpinner";

const RegesterModel = () => {
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

    const setValue = (e, name) => {
        setValues({
            ...values,
            [name]: e.target.value,
        });
    };

    useEffect(() => {
        const modal = document.getElementById("small-modal");
        modal.style.maxHeight = "425px";
        // on mobile 768px
        if (window.innerWidth < 768) {
            modal.style.maxHeight = "100%";
        }
    }, []);

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
            console.log("login" , employname , contactNumber , email , password);
            try {
                setLoading(true);
                const responce = await fetch(LoginApi.register, {
                    method: "POST",
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        name: employname,
                        contact: contactNumber,
                        company_name : "MBIQS",
                    }),
                });
                const data = await responce.json();
                console.log(data);
                setLoading(false);
                setResponce(data);
            } catch (error) {
                console.error("Error occurred while logging in: ", error);
            }
        }
    };

    if (loading) {
        return (
            <>
                <PageSpinner />
            </>
        )
    }

    // if (responce.status === 200) {
    //     return (
    //         <>
    //             <RegesterWrapper>
    //                 <Head>Employees sign up with MBIQS</Head>
    //                 <h1>Registration Successful</h1>
    //             </RegesterWrapper>
    //         </>
    //     )
    // }

    return (
        <>
            <RegesterWrapper>
                <Head>Employees sign up with MBIQS</Head>
                <Input
                    placeholder="Employee Name"
                    type="model"
                    inputype="text"
                    value={values.employname}
                    onChange={(e) => setValue(e, "employname")}
                    error={values.error.employname}
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
                    placeholder="email"
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
                />

                <Button type="login-model" onClick={handelLogin}>
                    Save & Continue
                </Button>
            </RegesterWrapper>
        </>
    );
};

export default RegesterModel;
