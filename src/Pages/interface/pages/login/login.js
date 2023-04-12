import Input from "components/input";
import { useState } from "react";
import { Head, LoginModelWrapper } from "./structure";
import Button from "components/button";
import { useDispatch } from "react-redux";
import { setModelData } from "store/loginModel";

// part of LoginModel

const LoginModelPart = (props) => {
    const [values, setValues] = useState({
        username: "",
        password: "",
        remember: false,
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
        window.location.href = "/auth/panel";
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
                    // error={error()}
                    errorMessage="Enter Your User Name"
                />
                <Input
                    placeholder="Password"
                    type="model-password"
                    inputype="password"
                    value={values.password}
                    onChange={(e) => setValue(e, "password")}
                    // error={error()}
                    errorMessage="Enter Your Password"
                />

                <div id="row">
                    <Input.Radio
                        type="model"
                        name="remember"
                        value="remember"
                        checked={values.remember}
                        onChange={(e) =>
                            setValues({
                                ...values,
                                remember: e.target.checked,
                            })
                        }
                        label="Remember Me"
                    />
                    <p onClick={forget}>Forgot Password</p>
                    <p onClick={signup}>Sign Up</p>
                </div>

                <Button type="login-model" onClick={handelLogin}>
                    Login
                </Button>
            </LoginModelWrapper>
        </>
    );
};

export default LoginModelPart;

// HOC that all logi for Passwerd in pinput 

// function withPassword(WrappedComponent) {
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 password: "",
//                 showPassword: false,
//             };
//         }

//         togglePassword = () => {
//             this.setState({
//                 showPassword: !this.state.showPassword,
//             });
//         };

//         render() {
//             return (
//                 <WrappedComponent
//                     {...this.props}
//                     showPassword={this.state.showPassword}
//                     togglePassword={this.togglePassword}
//                 />
//             );
//         }
//     };
// }
