import { createSlice } from "@reduxjs/toolkit";

export const loginModel = createSlice({
    name: "loginModel",
    initialState: {
        userTypes: '',
        session: '',
        isValid: false,
        num: 1,
        modeType: '',
    },
    reducers: {
        setModelData: (state, action) => {
            const { valid, session, usertype, number, typeModel } = action.payload;
            return {
                ...state,
                userTypes: usertype,
                session: session,
                isValid: valid,
                num: number,
                modeType: typeModel,
            }
        },
        resertModel: (state, action) => {
            return {
                ...state,
                userTypes: '',
                session: '',
                isValid: false,
                num: 1,
                modeType: '',
            }
        }
    }
});

export const { setModelData, resertModel } = loginModel.actions;

export default loginModel.reducer;
