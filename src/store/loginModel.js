import { createSlice } from "@reduxjs/toolkit";

export const loginModel = createSlice({
    name: "loginModel",
    initialState: {
        userTypes: '',
        session: '',
        isValid: false,
        num: 1,
    },
    reducers: {
        setModelData: (state, action) => {
            const { valid, session, type , number } = action.payload;
                console.log( number)
            return {
                ...state,
                // ...action.payload,
                userTypes: type,
                session: session,
                isValid: valid,
                num: number,
            }
        },
    }
});

export const { setModelData } = loginModel.actions;

export default loginModel.reducer;
