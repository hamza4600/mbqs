// check validation of the input

export const isRequired = (value) => ({
    isValid:
        value !== "" && value !== null && value !== undefined && value !== 0,
    label: "This field is required",
});

export const isEmail = (value) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return {
        isValid: regex.test(value),
        label: "Invalid email address",
    };
};

export const isAlpha = (value) => {
    const regex = /^[a-zA-Z]+$/;
    return {
        isValid: regex.test(value),
        label: "valid",
    };
};

export const isNumber = (value) => {
    const regex = /^[0-9]+$/;
    return {
        isValid: regex.test(value),
        label: "Invalid number",
    };
};

export const isAlphaNumeric = (value) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return {
        isValid: regex.test(value),
        label: "valid input",
    };
};

export const isCurrency = (value) => {
    const regex = /^\d+(?:\.\d{0,2})$/;
    return {
        isValid: regex.test(value),
        label: "valued currency",
    };
};

export const isYear = (value) => ({
    isValid: isNumber(value).isValid && value.length === 4,
    label: "Valid year",
});

export const isMonth = (value) => ({
    isValid:
        isNumber(value).isValid &&
        value.length === 2 &&
        value > 0 &&
        value < 13,
    label: "Valid month",
});

export const isPhoneNumber = (value) => {
    const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return {
        isValid: regex.test(value),
        label: "valid phone number",
    };
};

export const isZipCode = (value) => {
    const regex = /^\d{{5}$|^\d{{5}}-\d{{4}$|(^\d{6}$)/;
    return {
        isValid: regex.test(value),
        label: "valid zip code",
    };
};

export const isDomain = (value) => {
    if (!value) return { isValid: false, label: "valid domain" };
    const regex =
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return {
        isValid: regex.test(value),
        label: "valid domain",
    };
};

export const isValidName = (value) => {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return {
        isValid: regex.test(value) && value.length > 2 && value.length < 40,
        label: "valid name",
    };
};

export const isPassword = (value) => {
    // const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // at least 8 characters, 1 uppercase, 1 lowercase, 1 number
    // only check for length of 8 characters
    // const regex = /(?=.*\w{8,}).*/;
    // check lenght of 8 any characters but not space
    // const regex = /^(?=.*\w{8,}).*/;
    return {
        // isValid: regex.test(value) && value.length > 7 && value.length < 40,
        isValid : value.length > 7 && value.length < 40,
        // label: "Require at least 8 characters, 1 uppercase, 1 lowercase, 1 number",
        label: "Require at least 8 characters",
    };
};

export const isPasswordMatch = (value) => {
    const [value1, value2] = value;
    // console.log(value1, value2, "value");
    const isValid = value1 === value2;
    return {
        isValid: isValid,
        label: isValid ? "valid" : "passwords didn,t match",
    }
};

// check length of the input
export const isLength = (value, length = 3) => ({
    isValid: value.length === length,
    label: `Must be ${length} characters`,
});

const map = {
    required: isRequired,
    email: isEmail,
    alpha: isAlpha,
    number: isNumber,
    alphaNumeric: isAlphaNumeric,
    currency: isCurrency,
    year: isYear,
    month: isMonth,
    phoneNumber: isPhoneNumber,
    zipCode: isZipCode,
    domain: isDomain,
    validName: isValidName,
    password: isPassword,
    passwordMatch: isPasswordMatch,
    length: isLength,
};

// run the validation function
export const runValidation = (value, validations) => {
    let isValid = true;
    let label = "valid";
    // check if the value is valid against all the validations
    if (validations.length === 0) return { isValid, label };

    if (Array.isArray(validations)) {
        for (let i = 0; i < validations.length; i++) {
            const validation = validations[i];
            if (typeof validation === "string") {
                // check if the validation function is found in the map
                const result = map[validation];
                // if not found in the show console error
                if (!result) {
                    console.error(
                        `Validation function ${validation} not found in the map`
                    );
                    return null; 
                } else {
                    // if found in the map then run the validation function
                    const result = map[validation](value);

                    // for password 
                    // if rematch password should pass two values
                    if (validation === "passwordMatch") {
                        const result = isPasswordMatch(value);
                        isValid = result.isValid;
                        label = result.label;                        
                    }


                    if (!result.isValid) {
                        isValid = false;
                        label = result.label;
                        break;
                    }
                }
            }
        }
        return { isValid, label };
    }
};
