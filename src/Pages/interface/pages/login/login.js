import Input from "components/input";
import { useState } from "react";
import { Head, LoginModelWrapper } from "./structure";
import Button from "components/button";
import { useDispatch } from "react-redux";
import { setModelData } from "store/loginModel";
import { BsSquare, BsCheck2Square } from "react-icons/bs";
import { runValidation } from "functions/validate";

// part of LoginModel

const LoginModelPart = (props) => {
    const [values, setValues] = useState({
        username: "",
        password: "",
        remember: false,
        error : {
            username : false,
            password : false,
        }
    });

    const setValue = (e, name) => {
        setValues({
            ...values,
            [name]: e.target.value,
        });
    };

    console.log(values);

    const dispatch = useDispatch();

    const forget = () => {
        props.setActiveCompont(4);
        // dispach to redux
        dispatch(
            setModelData({
                valid: false,
                session: "",
                typeModel: "forget",
                number: 4,
            })
        );
    };
    const signup = () => {
        props.setActiveCompont(2);
        // dispach to redux
        dispatch(
            setModelData({
                valid: false,
                session: "",
                typeModel: "signup",
                number: 2,
            })
        );
    };

    const handelLogin = () => {
        //  all logic for login
            const name = runValidation(values.username, ["required" , "email"]);
            const password = runValidation(values.password, ["required" , "password"]);
            if (!name.isValid || !password.isValid) {
                setValues({
                    // empty field 
                    username : name.isValid ? values.username : "",
                    password : password.isValid ? values.password : "",
                    error : {
                        username : !name.isValid,
                        password : !password.isValid,
                    }
                })
            } else {
                // return console.log("Valid Data");
                setValues({
                    ...values,
                    error : {
                        username : false,
                        password : false,
                    }
                })

                // login logic api request
                window.location.href = "/auth/panel";
            }

        // window.location.href = "/auth/panel";
    };

    return (
        <>
            <LoginModelWrapper>
                <Head>Welcome</Head>
                <Input
                    placeholder="User Name"
                    type="model"
                    inputype="text"
                    value={values.username}
                    onChange={(e) => setValue(e, "username")}
                    error={values.error.username}
                />
                <Input
                    placeholder="Password"
                    type="model-password"
                    inputype="password"
                    value={values.password}
                    onChange={(e) => setValue(e, "password")}
                    error={ values.error.password }
                />

                <div id="row">
                    <button style={{ display : "inline-flex" , cursor : "pointer"}}>
                        <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            checked={values.remember}
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    remember: e.target.checked,
                                })
                            }
                            style={{
                                opacity: 0,
                                position: "absolute",
                            }}
                        />

                        {values.remember ? (
                            <BsCheck2Square size={15} />
                        ) : (
                            <BsSquare size={15} />
                        )}
                        <label style={{marginLeft : "5px"}} htmlFor="remember">Save Credentials</label>
                    </button>
                    <button onClick={forget}>Forgot Password</button>
                    <button onClick={signup}>Sign Up</button>
                </div>

                <Button type="login-model" onClick={handelLogin}>
                    Login
                </Button>
            </LoginModelWrapper>
        </>
    );
};

export default LoginModelPart;