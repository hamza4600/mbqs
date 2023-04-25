import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import Input from "components/input";
import { DotShuttler, Head, LoginModelWrapper } from "./structure";
import Button from "components/button";
import { useDispatch, useSelector } from "react-redux";
import { setModelData } from "store/loginModel";
import { BsSquare, BsCheck2Square } from "react-icons/bs";
import { runValidation } from "functions/validate";

import { LoginApi } from "api";
import axios from "axios";
import ServerError from "components/serverError";
import { addUid, loginSuccess } from "store/session";
import uUId from "Hooks/uuId";
// part of LoginModel

const LoginModelPart = (props) => {
    const [values, setValues] = useState({
        username: "",
        password: "",
        remember: false,
        error: {
            username: false,
            password: false,
        },
    });

    const [responce, setResponce] = useState({});
    const [loading, setLoading] = useState(false);

    const state = useSelector((state) => state.session);

    const { uuId } = state;

    useEffect(() => {
       
        // if id is null empty then set it to random id
        if (!uuId || uuId === null) {
            dispatch(
                addUid({
                    uuId : uUId(),
                })
            );
        }
    },[])

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

    const dispatch = useDispatch();
    
    function getCurrentDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return now.toLocaleDateString('en-US', options);
    }

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

    const handelLogin = async () => {
        //  all logic for login
        const name = runValidation(values.username, ["required", "email"]);
        const password = runValidation(values.password, [
            "required",
            "password",
        ]);
        if (!name.isValid || !password.isValid) {
            setValues({
                // empty field
                username: name.isValid ? values.username : "",
                password: password.isValid ? values.password : "",
                error: {
                    username: !name.isValid,
                    password: !password.isValid,
                },
            });
        } else {
            setValues({
                ...values,
                error: {
                    username: false,
                    password: false,
                },
            });
            // login logic api request
            try {
                setLoading(true);
                // only wait for 2 sec for animation
                const res = await axios.post(LoginApi.login, {
                    email: values.username,
                    password: values.password,
                });
                // if axiox error 
                setLoading(false);
                setResponce(res.data);

                if (res.data.code === 200 && res.data.message) {
                    // set session
                    setTimeout(() => {
                        // set redux use session of auth 
                        dispatch(
                            setModelData({
                                valid: true,
                                session: true,
                                typeModel: "login",
                                number: 1,
                            })
                        );
                        // set session 
                        dispatch(
                            loginSuccess({
                                isLoginIn : true,
                                isAuthenticated : true,
                                error : false,
                                time : getCurrentDateTime(),
                                token : res.data.message.token,
                                user : {
                                    id : res.data.message.id,
                                    email : res.data.message.email,
                                }
                            })
                        );
                         // redirect to dashboard
                         console.log("redirect to dashboard");
                        <Navigate to="/auth/panel" />;
                    }, 1500);
                   
                } else {
                    // error
                    console.log(res.data, "error=====");
                }
            } catch (error) {
                setLoading(false);
                console.log(error, "=======");
                setResponce(error.response.data); 
            }
        }
    };

    useEffect(() => {
                     
        if (responce.code === 401) {
            setValues({
                username: "",
                password: "",
                error: {
                    username: true,
                    password: true,
                },
            })
        }
    },[responce])

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
                    <Head>You've successfully Login</Head>
                </LoginModelWrapper>
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

    return (
        <>
            <LoginModelWrapper>
                <Head
                    size="26px"
                    style={{
                        paddingRight: "20px",
                    }}
                >
                    Welcome
                </Head>
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
                    error={values.error.password}
                    // onKeyDown = {(e) => {
                    //     if(e.key === "Enter"){
                    //         handelLogin()
                    //     }
                    // }}
                />

                <div id="row">
                    <button
                        style={{ display: "inline-flex", cursor: "pointer" }}
                    >
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
                        <label style={{ marginLeft: "5px" }} htmlFor="remember">
                            Save Credentials
                        </label>
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
