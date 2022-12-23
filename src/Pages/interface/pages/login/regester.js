import Input from "components/input"
import { useState } from "react"
import { RegesterWrapper } from "./structure"

const RegesterModel = () => {
    const [values, setValues] = useState({
        username: '',
        compName: '',
        password: '',
        remember: false,
        number: '',
        email: ''
    })

    const setValue = (e, name) => {
        setValues({
            ...values,
            [name]: e.target.value,
        })
    }
    console.log(values)
    return (
        <>
            <RegesterWrapper>

                <Input
                    placeholder="Company Name"
                    type="model"
                    inputype="text"
                    value={values.compName}
                    onChange={(e) => setValue(e, 'compName')}
                    // error={error()}
                    errorMessage="Enter Your User Name"
                />
                <Input
                    placeholder="Full Name"
                    type="model"
                    inputype="text"
                    value={values.username}
                    onChange={(e) => setValue(e, 'username')}
                    // error={error()}
                    errorMessage="Enter Your User Name"
                />
                <Input
                    placeholder="Contact Number"
                    type="model"
                    inputype="text"
                    value={values.number}
                    onChange={(e) => setValue(e, 'number')}
                    // error={error()}
                    errorMessage="Enter Your User Name"
                />
                <Input
                    placeholder="E-mail"
                    type="model"
                    inputype="email"
                    value={values.email}
                    onChange={(e) => setValue(e, 'email')}
                    // error={error()}
                    errorMessage="Enter Your User Name"
                />
                <Input
                    placeholder="Password"
                    type="model-password"
                    inputype="password"
                    value={values.password}
                    onChange={(e) => setValue(e, 'password')}
                    // error={error()}
                    errorMessage="Enter Your User Name"
                />

            </RegesterWrapper>

        </>
    )
}

export default RegesterModel