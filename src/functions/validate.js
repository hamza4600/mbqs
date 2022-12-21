// check validation of the input

export const isRequired = (value) => ({
    isValid: value !== "" && value !== null && value !== undefined && value !== 0,
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
        isNumber(value).isValid && value.length === 2 && value > 0 && value < 13,
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
    // const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // at least 8 characters, 1 uppercase, 1 lowercase, 1 number
    return {
        isValid: regex.test(value) && value.length > 7 && value.length < 40,
        label: "Require at least 8 characters, 1 uppercase, 1 lowercase, 1 number",
    };
};

export const isPasswordMatch = (value, value2) => ({
    isValid: value === value2,
    label: "passwords didn,t match",
});
export const validation = {
    isRequired,
    isEmail,
    isAlpha,
    isNumber,
    isAlphaNumeric,
    isCurrency,
    isYear,
    isMonth,
    isPhoneNumber,
    isZipCode,
    isDomain,
    isValidName,
    isPassword,
    isPasswordMatch,
};


// run the validation function
export const runValidation = (value, validations) => {
    let isValid = true;
    let label = "";
    for (let i = 0; i < validations.length; i++) {
        const validation = validations[i];
        const result = validation(value);
        if (!result.isValid) {
            isValid = false;
            label = result.label;
            break;
        }
    }
    return { isValid, label };
};